---
title: React App Dependencies Installation 
---
## Pre-requisites 
We need the right combinations of `Babel` ,` Webpack` and `NPM `dependencies to get started with a basic React Application.  `create-react-app` a command line tool is provided by React developers to abstract all the complexities involved in setting up a react project.
What goes under the hood when we use this command is what we will be explaining here.

```C
1.	Create an empty directory and change the directory .
2.	Run `npm init` command that will ask  a bunch of questions, and then write a package.json for us.
3.	Now run the npm command to install `react` and `react-dom` which will be stored in `node_modules` folder.
      
```
Here are the terminal commmands:-

1. mkdir react_app
2. ls
3. npm init
4. npm install --save react  react-dom

#### Webpack and Bable Installation Command
Run the following commands in linux terminal. Also view the changes in the package.json file.

```shell
$ npm install --save-dev babel-core
$ npm install --save-dev babel-loader 
$ npm install --save-dev babel-preset-env
$ npm install --save-dev babel-preset-react 
$ npm install --save-dev css-loader 
$ npm install --save-dev style-loader 
$ npm install --save-dev html-webpack-plugin 
$ npm install --save-dev webpack 
$ npm install --save-dev webpack-dev-server

```
