const fse = require('fs-extra');
const { Observable } = require('rx');

const { commonREs, info, readDir, pagesDir } = require('../utils');

const { isAStubRE, metaTitleRE } = commonREs;

const navData = {};

function readIndex(path) {
  try {
    return fse.readFileSync(path, 'utf8');
  } catch (err) {
    throw `Could not read file at "${path}".`
    + ' Make sure there is a valid article at "index.md" in the directory.';
  }
}

function getPageTitle(content, path) {
  try {
    return content.match(metaTitleRE)[1].trim();
  } catch (err) {
    throw `Error reading the frontmatter from "${path}"`;
  }
}

function listAllDirs(level, prevPages = []) {
  let accuPages = [...prevPages];
  return Observable.from(readDir(level)).flatMap(parentDir => {
    const dirPath = `${level}/${parentDir}`;
    const filePath = `${dirPath}/index.md`;
    const content = readIndex(filePath);
    const subDirs = readDir(dirPath);
    const parent = level.split('/')[level.split('/').length - 1];
    const title = getPageTitle(content, filePath);
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
  info('Creating navData...', 'yellow');
  const startTime = Date.now();
  listAllDirs(pagesDir, [])
    .toArray()
    .subscribe(
      () => {},
      err => {
        throw err;
      },
      () => {
        fse
          .writeFile(
            `${process.cwd()}/src/navData.json`,
            JSON.stringify(navData, null, 2)
          )
          .then(() => {
            const msTaken = Date.now() - startTime;
            const pages = Object.keys(navData).length;
            info('navData created', 'greenBright');
            info(
              `It took ${msTaken}ms to create the navData for ${pages} pages`,
              'yellow'
            );
          })
          .catch(err => {
            throw err;
          });
      }
    );
}

createNavData();
