const fse = require('fs-extra');
const Rx = require('rx');

const { Observable } = Rx;
const isAFileRegEx = /(\.md|\.jsx?|\.html?)$/;
const shouldBeIgnoredRegEx = /^(\_|\.)/;
const topLevel = 'src/pages/articles';
const navData = {};

const { titleify } = require('./utils');

function readDir(dir) {
  return fse.readdirSync(`${process.cwd()}/${dir}/`)
  .filter(item => !isAFileRegEx.test(item))
  .filter(file => !shouldBeIgnoredRegEx.test(file));
}

function listAllDirs(level, prevPages = []) {
  let accuPages = [ ...prevPages ];
  return Observable.from(readDir(level))
    .flatMap(parentDir => {
      const thisDir = `${level}/${parentDir}`;
      const subDirs = readDir(thisDir);
      const parent = level.split('/')[ level.split('/').length - 1 ];

      navData[parentDir] = {
        children: subDirs.map(title => title.toLowerCase()),
        dashedName: parentDir.toLowerCase(),
        hasChildren: !!subDirs.length,
        // remove 'src/pages' from the path
        path: thisDir.slice(9),
        parent,
        parentPath: level.slice(9).replace(new RegExp(parent + '/'), ''),
        title: titleify(parentDir)
      };
      if (!subDirs.length) {
        // no child directories
        return Observable.of(null);
      }
      return listAllDirs(thisDir, accuPages);
    });
}
module.exports = function createNavData() {
  listAllDirs(topLevel, [])
    .toArray()
    .subscribe(
      () => {},
      err => {
        throw new Error(err);
      },
      () => {
        fse.writeFile(
          `${process.cwd()}/src/navData.json`,
          JSON.stringify(navData, null, 2)
          )
          .then(() => {
            console.log('\nnavData.json created\n');
          })
          .catch(err => {
            console.error(err);
            throw new Error(err);
          });
      }
    );
};
