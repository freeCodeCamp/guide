---
title: npm
---
## npm

npm is the Node.js Package Manager and is used to install and manage dependencies.
npm is central to the vibrant Node.js and JavaScript community, by making module and code reusability across projects very simple.
Currently npm has upwards of 500,000 available packages.
npm is useful not only for server side projects. Most popular front-end libraries like Bootstrap and Font Awesome are available too.

### npm Usage

npm is commonly used from the command line. Those few commands are arguably the most important ones to get you started:
```
npm init
```
Running this commnad in your project's root directory initializes it for use with npm by creating a package.json file. You will be prompted for the project's name, description, author's name and more. This information is then used to populate the package.json file, which will also hold the information about the project's dependencies and requirements. You can alter that information manually later.
```
npm install [name-of-package]
```
This installs a package and all its dependencies automatically, and saves it in the package.json file. If you are installing a development dependency you may want to use the --save-dev or -D switch. npm will then save the package as a development dependency.
Packages are installed locally in the 'node-modules' directory in your project's directory. Sometimes you may want to have a package available across different projects. This is done with the --global or -g switch. This is often useful for development tools and command line utilities.
```
npm install
```
Running npm install in a project's root directory without a specific package name, installs all the dependencies required for that project. Those are calculated according to the project's package.json file. This demonstrates the power of npm, where a single command can fetch tens or hundreds of dependencies automatically for you, and is useful when you git clone a repository, for example.

#### More Information:
* [npmjs](https://www.npmjs.com) The central website of Npm, you can read about Npm as well as search for the different availavble packages
* [Wikipedia](https://en.wikipedia.org/wiki/Npm_(software)) Read more about Npm
