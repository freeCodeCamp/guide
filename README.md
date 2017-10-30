![freeCodeCamp Guide](https://s3.amazonaws.com/freecodecamp/wide-social-banner.png)

# freeCodeCamp Guide

[![Build Status](https://img.shields.io/travis/freeCodeCamp/guides/master.svg?style=flat-square)](https://travis-ci.org/freeCodeCamp/guides) [![license](https://img.shields.io/github/license/freeCodeCamp/guides.svg?style=flat-square)](https://opensource.org/licenses/BSD-3-Clause)  [![Gitter](https://img.shields.io/gitter/room/freeCodeCamp/freeCodeCamp.svg?style=flat-square)](https://gitter.im/freeCodeCamp/freeCodeCamp) [![Known Vulnerabilities](https://snyk.io/test/github/freeCodeCamp/guides/badge.svg?style=flat-square)](https://snyk.io/test/github/freeCodeCamp/guides)

[![GitHub Issues](https://img.shields.io/github/issues/freeCodeCamp/guides.svg?style=flat-square)](https://github.com/freeCodeCamp/guides/issues) [![GitHub Pull Requests](https://img.shields.io/github/issues-pr/freeCodeCamp/guides.svg?style=flat-square)](https://github.com/freeCodeCamp/guides/pulls) [![Pull Requests Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![first-timers-only Friendly](https://img.shields.io/badge/first--timers--only-friendly-blue.svg?style=flat-square)](http://www.firsttimersonly.com/)

[![Throughput Graph](https://graphs.waffle.io/freeCodeCamp/guides/throughput.svg)](https://waffle.io/freeCodeCamp/guides/metrics)

The freeCodeCamp community is building a massive, searchable **"Guide"**.

This reference tool will eventually include thousands of articles that cover all areas of development, design, and data science - all written to be easily understood by people new to coding.

This repo is where we plan and maintain these Guide articles, which we then host on our community's wiki-like Guide website at [`guide.freecodecamp.org`](https://guide.freecodecamp.org).

## What are Guide articles?

Guide articles can be an explanation of a syntax, design pattern, what aria labels are for, or something like what the numbers mean in the top right-hand corner of your screen when at [freecodecamp.org](https://freecodecamp.org).

You can find an [example article about HTML Elements here](./src/pages/html/elements/index.md).

## Installation

If you want to run a version of the guides repository locally, follow these steps:

### Fork this repository.

### Run the following commands.

```bash
# make sure to have yarn installed
npm install -g yarn

# clone down repo
git clone https://github.com/YOUR-GITHUB-USERNAME/guides.git

# navigate to root folder
cd guides

# install dependencies
yarn install

# run locally
yarn run dev
```

In this project we are using [`yarn`](https://yarnpkg.com) because [Netlify](https://www.netlify.com/) builds our site with `yarn`.

## What can I write an article about?

We welcome your help writing these articles. You don't have to be an expert in a topic to write about it - this entire Guide is open source, so even if you make a mistake, another contributor will eventually correct it.

To help, find a `stub article` on our [Guide website](https://guide.freecodecamp.org/), write the article, then open a pull request (PR) to replace the stub with your article.

If you can't find a stub about the topic you'd like to write about, you can open a PR that creates the stub and includes your draft article. Feel free to ask us questions if you're not sure where to put a new article in the directory structure.

Before you begin writing, make sure to read the [article style guide](#article-style-guide) below.

## Contributing

1. 🍴 [Fork this repo](https://github.com/freeCodeCamp/guides#fork-destination-box)
2. 👀️ Follow the contributing guidelines outlined in [CONTRIBUTING.md](.github/CONTRIBUTING.md).
3. 🔧 Make some awesome changes!
4. 👉 [Make a pull request](https://github.com/freeCodeCamp/guides/compare)
5. 🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/freeCodeCamp/guides/issues) - any little bit of help counts! 😊

## License

Copyright (c) 2017 freeCodeCamp.

The content of this repository is bound by the following licenses:

- The software is licensed under the [BSD-3-Clause](./LICENSE.md).
- The reference content in `./src/pages` and subdirectories is licensed under the [CC-BY-SA-4.0](./LICENSE-freeCodeCamp-Guide-Articles.md).