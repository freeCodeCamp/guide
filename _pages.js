const fse = require('fs-extra');
const Rx = require('rx');

const { Observable } = Rx;

const isAFileRegEx = /(\.md|\.jsx?)$/;
const shouldBeIgnoredRegEx = /^\_/;

function readDir(dir) {
  return fse.readdirSync(`${process.cwd()}/${dir}/`)
  .filter(item => !isAFileRegEx.test(item))
  .filter(file => !shouldBeIgnoredRegEx.test(file))
  .map(folder => `${dir}/${folder}`);
}

let superBlocks = readDir('pages/docs');

Observable.from(superBlocks)
  .flatMap(dir => {
    const subDirs = readDir(dir);
    const allDirs = [ dir, ...subDirs ]
      .map(dir => `${dir.replace(/^pages/, '')}/`);

    return Observable.from(allDirs);
  })
  .toArray()
  .reduce((acc, current) => [ ...acc, ...current ], [])
  .subscribe(allPages => {
    const newConfig = fse.readFileSync(
      `${process.cwd()}/_template.config`,
      'utf8'
      )
      .replace(/{{}}/, JSON.stringify(allPages.sort(), null, 2));
    fse.writeFile(`${process.cwd()}/config.toml`, newConfig)
      .then(() => {
        console.log(
        `config.toml written, it has ${allPages.length} entries for docPages\n`
          );
      })
      .catch(err => {
        console.error(err);
      });

  });

