const fse = require('fs-extra');

const { commonREs, info, readDir, loopPages } = require('../utils');

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

function addPage(dirPath, name) {
  const filePath = `${dirPath}/index.md`;
  const content = readIndex(filePath);
  const subDirs = readDir(dirPath);
  const title = getPageTitle(content, filePath);
  const isStubbed = isAStubRE.test(content);
  const parent = dirPath.split('/')[dirPath.split('/').length - 2];
  // remove 'src/pages' from the path
  const articlePath = dirPath.slice(9);

  navData[articlePath] = {
    children: subDirs.map(title => title.toLowerCase()),
    dashedName: name.toLowerCase(),
    hasChildren: !!subDirs.length,
    isStubbed,
    path: articlePath,
    parent,
    parentPath: articlePath.replace(new RegExp(parent + '/'), ''),
    title
  };
}


info('Creating navData...', 'yellow');
const startTime = Date.now();

loopPages(addPage)
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
