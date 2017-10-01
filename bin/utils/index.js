const titleify = require('./titleify');
const commonREs = require('./regEx');
const info = require('./infoLog');

const excludedDirs = [
  'search'
];

module.exports = {
  commonREs,
  titleify,
  info,
  excludedDirs
};
