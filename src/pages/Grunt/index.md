Title | 
------------ |
Grunt |
<img align="right" width="200" height="200" src="https://camo.githubusercontent.com/39242419c60a53e1f3cecdeecb2460acce47366f/687474703a2f2f6772756e746a732e636f6d2f696d672f6772756e742d6c6f676f2d6e6f2d776f72646d61726b2e737667">  

# Grunt - The Javascript Task Runner   


Grunt is a the ` javascript Task Runner ` a Task Runner is what in one word: automation.
The less work you have to do when performing repetitive tasks like  *minification* ,  *compilation* ,  *unit testing* , *linting* , *etc* the easier your job becomes.  
  
    
    
After you've configured it through a `Gruntfile`, a task runner can do most of that mundane work for you and your 
team with basically zero effort.  
  
    
The Grunt ecosystem is huge and it's growing every day. With literally hundreds of plugins 
to choose from, you can use Grunt to automate just about anything with a minimum of effort. If someone hasn't already built 
what you need, authoring and publishing your own Grunt plugin to npm is a breeze.  

## Table of contents
* [Getting started](#Getting-started)
* [Installation](#Installation)
* [Preparing a new grunt project](#Preparing-a-new-grunt-project)
* [Projects and tasks configuration](#Projects-and-tasks-configuration)
* [Grunt plugins](#Grunt-plugins)
<a name="Getting-started"></a>
## Getting Started
Grunt and Grunt plugins are installed and managed via [npm](https://www.npmjs.org/), the [Node.js](https://nodejs.org/) package manager. Grunt 0.4.x requires stable
Node.js versions `>= 0.8.0.` Odd version numbers of Node.js are considered unstable development versions.

Before setting up Grunt ensure that your npm is up-to-date by running npm update -g npm (this might 
require sudo on certain systems).

If you already have installed Grunt and are now searching for some quick reference, please checkout our Gruntfile 
example and how to configure a task.
<a name="Installation"></a>
## Installation
#### Installing the CLI


In order to get started, you'll want to install Grunt's command line interface (CLI) globally. You may need to use sudo  
(for OSX, *nix, BSD etc) or run your command shell as Administrator (for Windows) to do this.  

`npm install -g grunt-cli`  

This will put the grunt command in your system path, allowing it to be run from any directory.  

Note that installing grunt-cli does not install the Grunt task runner! The job of the Grunt CLI is simple: run the version 
of Grunt which has been installed next to a Gruntfile. This allows multiple versions of Grunt to be installed on the same 
machine simultaneously.
[know more](https://gruntjs.com/getting-started#installing-the-cli)
<a name="Preparing-a-new-grunt-project"></a>
## Preparing a new Grunt project
A typical setup will involve adding two files to your project: package.json and the Gruntfile.  

`package.json`: This file is used by npm to store metadata for projects published as npm modules. You will list grunt and 
the Grunt plugins your project needs as devDependencies in this file.  
  
There are a few ways to create a package.json file for your project:  

* Most grunt-init templates will automatically create a project-specific package.json file.  
* The npm init command will create a basic package.json file.  
`Example` :
```javascript
{
  "name": "my-project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "~0.4.5",
    "grunt-contrib-jshint": "~0.10.0",
    "grunt-contrib-nodeunit": "~0.4.1",
    "grunt-contrib-uglify": "~0.5.0"
  }
}
```



`Gruntfile`: This file is named Gruntfile.js or Gruntfile.coffee and is used to configure or define tasks and load Grunt 
plugins. When this documentation mentions a Gruntfile it is talking about a file, which is either a Gruntfile.js or 
a Gruntfile.coffee.  
`Example` : 
```javascript
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
```  
Note: the `grunt --help` command will list all available tasks.  
<a name="Projects-and-tasks-configuration"></a>
## Project and task configuration  
#### project configuration
* [grunt.initconfig](https://gruntjs.com/grunt#grunt.initconfig)  
#### Loading Grunt plugins and tasks  
  
  `// Load the plugin that provides the "uglify" task`  
`grunt.loadNpmTasks('grunt-contrib-uglify');`  

Note: the `grunt --help` command will list all available tasks.
<a name="Grunt-plugins"></a>
## Grunt plugins  

#### Installing Grunt and grunt plugins   
The easiest way to add Grunt and gruntplugins to an existing package.json is with the command npm install <module> 
--save-dev. Not only will this install <module> locally, but it will automatically be added to the devDependencies section,
using a tilde version range.  
For example, this will install the latest version of Grunt in your project folder, adding it to your devDependencies:  
`npm install grunt --save-dev`  
The same can be done for gruntplugins and other node modules. As seen in the following example installing the JSHint task module:  
`npm install grunt-contrib-jshint --save-dev`  
Checkout the current available gruntplugins to be installed and used on your project at the [plugins](https://gruntjs.com/plugins) page.  
# Help Resources
 Visit  for more <a href="https://gruntjs.com/getting-started">Grunt Documentation</a>




