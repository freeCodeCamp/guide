const fse = require('fs-extra');

const {
  isAFileRE,
  shouldBeIgnoredRE
} = require('./regEx.js');

const excludedDirs = [
  'search'
];

module.exports = function readDir(dir) {
  return fse
    .readdirSync(dir)
    .filter(item => !isAFileRE.test(item))
    .filter(dir => !excludedDirs.includes(dir))
    .filter(file => !shouldBeIgnoredRE.test(file));
};
