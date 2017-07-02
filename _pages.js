const fse = require('fs-extra');
const Rx = require('rx');

const { Observable } = Rx;
const isAFileRegEx = /(\.md|\.jsx?|.html?)$/;
const shouldBeIgnoredRegEx = /^(\_|\.)/;

let bigArrayOfPages = [
  `/${fse.readdirSync(`${process.cwd()}/pages`)
  .filter((item) => !isAFileRegEx.test(item))[0]}/`
  ];
const topLevel = 'pages/docs';

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
      if (!subDirs.length) {
        // no child directories
        const finalLevelArray = [ ...accuPages, thisDir ];
        accuPages = [];
        return Observable.from(
          finalLevelArray
            .filter((item, i) => finalLevelArray.indexOf(item) === i )
          );
      }
      accuPages = accuPages.indexOf(thisDir) !== -1 ?
        accuPages :
        [ ...accuPages, thisDir ];
      return listAllDirs(thisDir, accuPages);
    });
}

listAllDirs(topLevel, [])
  .toArray()
  .subscribe(
    pages => {
      const uniquePages = pages
        .filter((p, i) => pages.indexOf(p) === i)
        .map(page => page.replace(/^pages/i, '') + '/');
      bigArrayOfPages = [ ...bigArrayOfPages, ...uniquePages ];
    },
    err => {
      throw new Error(err);
    },
    () => {
      const dynamicContent = JSON.stringify(bigArrayOfPages.sort(), null, 2);
      const newConfig = fse.readFileSync(
        `${process.cwd()}/_template.config`,
        'utf8'
        )
        .replace(/{{}}/, dynamicContent);
      fse.writeFile(`${process.cwd()}/config.toml`, newConfig)
        .then(() => {
          console.log(
`config.toml written
it has ${bigArrayOfPages.length} entries for docPages\n`
            );
        })
        .catch(err => {
          console.error(err);
          throw new Error(err);
        });
    }
  );
