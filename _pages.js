/*
*  Runnging this script will build a file (pagesArray.txt)
*  which contains an array that should be copy/pasted into 
*  config.toml, assigned to docPages
*/

const fse = require('fs-extra');

const nonPageRegEx = /(index.md|\_template.jsx)/;

let pages = fse.readdirSync(`${process.cwd()}/pages/docs/`)
  .filter(page => !nonPageRegEx.test(page))
  .map(page => `/docs/${page}/`);

fse.writeFile(`${process.cwd()}/pagesArray.txt`, JSON.stringify(pages, null, 2))
  .then(() => {
    console.log(`Pages array wirtten, it has ${pages.length} entries`);
  })
  .catch(err => {
    console.error(err);
  });
