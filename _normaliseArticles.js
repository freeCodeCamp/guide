const Rx = require('rx');
const fse = require('fs-extra');
const chalk = require('chalk');

const { titleify } = require('./seed/utils');

const { Observable } = Rx;

function info(str, colour = 'red') {
  console.log(chalk[colour](str));
}

const metaRE = /---[\W\w]*?---\n*?/;
const isAFileRE = /(\.md|\.jsx?|\.html?)$/;
const shouldBeIgnoredRE = /^(\_|\.)/;
const isAStubRE = /This\sis\sa\sstub.+?Help\sour\scommunity\sexpand\sit/;
const markdownLinkRE = /\!?\[.*?\]\(.+?\)/g;
const httpsRE = /https?\:\/\//;

const articlesDir = `${process.cwd()}/src/pages/articles`;

function readDir(dir) {
  return fse.readdirSync(dir)
  .filter(item => !isAFileRE.test(item))
  .filter(file => !shouldBeIgnoredRE.test(file));
}

function appendStub(title, path) {
  const pathArr = path.split('/');
  const filePath = pathArr
    .slice(pathArr.indexOf('articles') + 1)
    .join('/')
    .toLowerCase();
/* eslint-disable max-len */
  return `
## ${title}

This is a stub. [Help our community expand it](https://github.com/freecodecamp/guides/tree/master/src/pages/articles/${filePath}/index.md).

[This quick style guide will help ensure your pull request gets accepted](https://github.com/freecodecamp/guides/blob/master/README.md).

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


`;
}
/* eslint-enable max-len */

function normaliseLinks(content) {
  let anchored = content.slice(0);
  const links = content.match(markdownLinkRE);

  if (links) {
  links
    .filter(x => !x.startsWith('!'))
    .filter(x => x.match(httpsRE))
    .map(str => {
      // raw will look like [ '[guides website', 'http://guide.netlify.com)' ]
      const raw = str.slice(0).split('](');
      const formatted = [ raw[0].replace('[', ''), raw[1].replace(')', '') ];
      const [ childText, url ] = formatted;
      const anchor = (
        `<a href='${url}' target='_blank' rel='nofollow'>${childText}</a>`
      );
      anchored = anchored.replace(str, anchor);
    });
  }

  return anchored;
}

function normaliseMeta(dirLevel) {
  const filePath = `${dirLevel}/index.md`;
  fse.open(filePath, 'r', (err) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error(
          'index.md does not exist in %s',
          filePath.replace(/index\.md$/, '')
          );
        return fse.ensureFile(filePath)
          .then(() => {
            console.log('%s created', filePath);
            return normaliseMeta(dirLevel);
          })
          .catch(err => {
            console.error(err);
          });
      }
      throw err;
    }
    fse.readFile(filePath, 'utf-8')
      .then(content => {
        const title = dirLevel
          .split('/')
          .slice(-1)
          .join('');
        const pageTitle = titleify(title);
        const newMeta = (
`---
title: ${pageTitle}
---`);
        let normalised = content
          .replace(metaRE, '');
        if (
          normalised.length < 30 ||
          isAStubRE.test(content)
        ) {
          normalised = appendStub(pageTitle, dirLevel);
        }
        const finalNormalised = normaliseLinks(normalised);

        fse.writeFile(filePath, newMeta.concat(finalNormalised));
      })
      .catch(err => {
        console.error('something went wrong', err);
      });
    return null;
  });
}

function applyNormaliser(dirLevel) {
  return Observable.from(readDir(dirLevel))
    .flatMap(dir => {
      const dirPath = `${dirLevel}/${dir}`;
      const subDirs = readDir(dirPath);
      if (!subDirs) {
        normaliseMeta(dirPath);
        return Observable.of(null);
      }
      normaliseMeta(dirPath);
      return applyNormaliser(dirPath);
    });
}

applyNormaliser(articlesDir)
  .subscribe((dir)=> {
    if (dir) {
      applyNormaliser(dir);
    }
  },
  err => {
      throw err;
    },
    () => {
      normaliseMeta(articlesDir);
      info('\n\nNormalisation Completed\n\n', 'greenBright');
      info('Please check for uncommited changes before pushing\n', 'yellow');
    });
