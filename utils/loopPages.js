const { Observable } = require('rx');

const readDir = require('./readDir');

// dir is the root pages directory
// handler is a callback that receives
// the full path to the page parent dir
// and the name of the current dir
module.exports = function loopPages(handler, dir = 'src/pages') {
  return Observable.from(readDir(dir)).flatMap(articleParentDir => {
    const path = `${dir}/${articleParentDir}`;
    handler(path, articleParentDir);

    if (readDir(path)) {
      return loopPages(handler, path);
    }

    return Observable.of(null);
  });
};
