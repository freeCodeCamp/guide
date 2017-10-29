const titleify = require('./titleify');
const commonREs = require('./regEx');
const info = require('./infoLog');
const readDir = require('./readDir');

const pagesDir = 'src/pages';

module.exports = {
  commonREs,
  titleify,
  info,
  readDir,
  pagesDir
};
