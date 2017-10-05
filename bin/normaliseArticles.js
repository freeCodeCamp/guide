const fse = require('fs-extra');

const { commonREs, titleify, info, loopPages } = require('../utils');

const { isAStubRE, markdownLinkRE } = commonREs;

function appendStub(path) {
  const pathArr = path.split('/');
  const filePath = pathArr
    .slice(pathArr.indexOf('pages') + 1)
    .join('/')
    .toLowerCase();
    const title = path
      .split('/')
      .slice(-1)
      .join('');
    const pageTitle = titleify(title);
    const newMeta = (
`---
title: ${pageTitle}
---`);
/* eslint-disable max-len */
  return `${newMeta}
## ${pageTitle}

This is a stub. [Help our community expand it](https://github.com/freecodecamp/guides/tree/master/src/pages/${filePath}/index.md).

[This quick style guide will help ensure your pull request gets accepted](https://github.com/freecodecamp/guides/blob/master/README.md).

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


`;
}
/* eslint-enable max-len */

function normaliseLinks(content) {
  return content.replace(markdownLinkRE, (match, before, text, url) => {
    return markdownLinkRE.test(text) ? match : (
      `${before}<a href='${url}' target='_blank' rel='nofollow'>${text}</a>`
    );
  });
}

function normalise(dirLevel) {
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

            return normalise(dirLevel);
          })
          .catch(err => {
            console.error(err);
          });
      }
      throw err;
    }
    fse.readFile(filePath, 'utf-8')
      .then(content => {
        let normalised = content;
        if (
          normalised.length < 30 ||
          isAStubRE.test(content)
        ) {
          normalised = appendStub(dirLevel);
        }
        const finalNormalised = normaliseLinks(normalised);

        fse.writeFile(filePath, finalNormalised);
      })
      .catch(err => {
        console.error('something went wrong', err);
      });
    return null;
  });
}

loopPages(normalise)
  .subscribe(
    () => {},
    err => {
      throw err;
    },
    () => {
      info('\nNormalisation Completed', 'greenBright');
      info('Please check for uncommited changes before pushing\n', 'yellow');
    });
