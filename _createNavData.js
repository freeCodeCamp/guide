const fse = require('fs-extra');
const Rx = require('rx');

const { Observable } = Rx;
const isAFileRegEx = /(\.md|\.jsx?|\.html?)$/;
const shouldBeIgnoredRegEx = /^(\_|\.)/;
const topLevel = 'src/pages/docs';
const navData = {};
const preFormatted = {
  css: 'CSS',
  css3: 'CSS3',
  html: 'HTML',
  html5: 'HTML5',
  javascript: 'javaScript'
};
const stopWords = [
  'and',
  'for',
  'of',
  'the',
  'up',
  'with'
];

function titleify(str) {
  return str
    .toLowerCase()
    .split('-')
    .map(word => {
      if (!word) {
        return '';
      }
      if (stopWords.indexOf(word) !== -1) {
        return word;
      }
      return preFormatted[word] ?
        preFormatted[word] :
        word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}

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

      navData[parentDir] = {
        // remove 'src/pages' from the path
        hasChildren: !!subDirs.length,
        path: thisDir.slice(9),
        parent: level.split('/')[ level.split('/').length - 1 ],
        title: titleify(parentDir)
      };
      if (!subDirs.length) {
        // no child directories
        return Observable.of(null);
      }
      return listAllDirs(thisDir, accuPages);
    });
}

listAllDirs(topLevel, [])
  .toArray()
  .subscribe(
    () => {},
    err => {
      throw new Error(err);
    },
    () => {
      fse.writeFile(`${process.cwd()}/src/navData.json`, JSON.stringify(navData, null, 2))
        .then(() => {
          console.log('\nnavData.json created\n');
        })
        .catch(err => {
          console.error(err);
          throw new Error(err);
        });
    }
  );
