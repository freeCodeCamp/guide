const path = require('path');
const readdirp = require('readdirp-walk');

const pagesRootAllowedFileNames = ['404.jsx', 'LICENSE.md', 'index.jsx'];

function checkDirName(dirName, fullPath) {
  if (dirName.replace(/(\s|\_)/, '') !== dirName) {
    throw new Error(
      `Invalid character found in a folder named '${
        dirName
      }', please use '-' for spaces

      ${fullPath}
      `
    );
  }
  if (dirName.toLowerCase() !== dirName) {
    throw new Error(
      `Upper case characters found in a folder named '${
        dirName
      }', please use only lower case

      ${fullPath}
      `
    );
  }
}

function checkFileName(fileName, fullPath) {
  if (fileName !== 'index.md') {
    throw new Error(
      `${fileName} is not a valid file name, please use 'index.md'

      ${fullPath}
      `
    );
  }
}

function checkData(data) {
  const { stat, depth, name, fullPath } = data;
  if (stat.isDirectory()) {
    return checkDirName(name, fullPath);
  }
  if (depth === 1) {
    if (stat.isFile() && !pagesRootAllowedFileNames.includes(name)) {
      throw new Error(
        `${name} is not a valid file name for the 'pages' directory`
      );
    }
    return null;
  }
  return checkFileName(name, fullPath);
}

readdirp({ root: path.resolve(__dirname, '../src/pages') })
  .on('data', checkData)
  .on('end', () => {
    /* eslint-disable no-process-exit */
    process.exit(0);
  });
