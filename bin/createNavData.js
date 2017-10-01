const Rx = require('rx');
const fse = require('fs-extra');

const { commonREs, readDir, pagesDir: topLevel } = require('../utils');

const {
  isAStubRE,
  metaRE
} = commonREs;

const { Observable } = Rx;

const navData = {};

function getPageTitle(content) {
  // meta = '---\ntitle: Frontmatter Title\n---'
  const meta = content.match(metaRE)[0];
  return meta.split('\n')[1].replace('title: ', '');
}

function listAllDirs(level, prevPages = []) {
  let accuPages = [...prevPages];
  return Observable.from(readDir(level)).flatMap(parentDir => {
    const dirPath = `${level}/${parentDir}`;
    const content = fse.readFileSync(`${dirPath}/index.md`, 'utf8');
    const subDirs = readDir(dirPath);
    const parent = level.split('/')[level.split('/').length - 1];
    const title = getPageTitle(content);
    const isStubbed = isAStubRE.test(content);
    // remove 'src/pages' from the path
    const articlePath = dirPath.slice(9);

    navData[articlePath] = {
      children: subDirs.map(title => title.toLowerCase()),
      dashedName: parentDir.toLowerCase(),
      hasChildren: !!subDirs.length,
      isStubbed,
      path: articlePath,
      parent,
      parentPath: level.slice(9).replace(new RegExp(parent + '/'), ''),
      title
    };
    if (!subDirs.length) {
      // no child directories
      return Observable.of(null);
    }
    return listAllDirs(dirPath, accuPages);
  });
}

function createNavData() {
  const startTime = Date.now();
  listAllDirs(topLevel, [])
    .toArray()
    .subscribe(
      () => {},
      err => {
        throw new Error(err);
      },
      () => {
        fse
          .writeFile(
            `${process.cwd()}/src/navData.json`,
            JSON.stringify(navData, null, 2)
          )
          .then(() => {
            const endTime = Date.now();
            const pages = Object.keys(navData).length;
            console.log(`
navData created

It took ${endTime - startTime}ms to create the nav data for ${pages} pages
`);
          })
          .catch(err => {
            console.error(err);
            throw new Error(err);
          });
      }
    );
}

createNavData();
