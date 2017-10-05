const { Observable } = require('rx');

const readDir = require('./readDir');

module.exports = function loopPages(handler, dir = 'src/pages') {
  return Observable.from(readDir(dir))
    .flatMap(articleParentDir => {
      const path = `${dir}/${articleParentDir}`;
      handler(path, articleParentDir);

      if (readDir(path)) {
        return loopPages(handler, path);
      }

      return Observable.of(null);
  });
};
