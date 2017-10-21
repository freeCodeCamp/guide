---
title: Yarn
---
## Yarn

Yarn is a dependency manager used to distribute and install JavaScript packages.
It is an alternative to npm and it was created from Facebook in order to overcome some performance issues.
Comparing it to npm it is faster, since it caches every package downloaded, so you don't need to download it every time, but only the first one.
A lot of libraries available on npm are also available through yarn.

### npm Usage

As npm, yarn is commonly used from the command line.

### Installation

You can install yarn with brew (on mac)
```
brew install yarn
```
or even with npm
```
npm install -g yarn
```

### Usage

##### Initialize a new project
```
yarn init
```
##### Add a dependency
```
yarn add [package]@[version]
```

##### Upgrade a dependency
```
yarn upgrade [package]@[version]
```

##### Remove a dependency
```
yarn remove [package]
```

##### Install dependencies of a project
```
yarn
```

#### More Information:
* Official website: <a href='https://yarnpkg.com' target='_blank' rel='nofollow'>yarn</a>
* Introductory post by Facebook: <a href='https://code.facebook.com/posts/1840075619545360' target='_blank' rel='nofollow'>Yarn: A new package manager for JavaScript</a>
* Giuthub repository <a href='https://github.com/yarnpkg' target='_blank' rel='nofollow'>https://github.com/yarnpkg</a>
