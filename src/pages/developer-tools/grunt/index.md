---
title: Grunt
---
## Grunt

`Grunt` is a JavaScript Task Runner you can use to automate repetitive tasks.

### Why Use Grunt?

There are many repetitive tasks in web development. For example: compiling, minifying, and copying files. Doing these tasks manually takes a lot of effort and time.

You will make your job easier with Grunt. You only need to configure the tasks through a [Gruntfile](https://gruntjs.com/sample-gruntfile).

### Getting Started

1. Install [npm](https://www.npmjs.org/).
2. Install Grunt's command line interface (CLI) globally with `npm install -g grunt-cli`.
3. List Grunt and the Grunt plugins as devDependencies in a `package.json` file.
4. Install Grunt and the Grunt plugins with `npm i`.
5. Configure tasks in a `Gruntfile.js` file.
6. Run Grunt with `grunt`.

### Example

Below is an example of a `package.json` and `Gruntfile.js` to do the following tasks:

1. Minify HTML files.
2. Add vendor prefixes and minify CSS file.
3. Concatenate and minify JavaScript files.
4. Minify images.

#### package.json

```json
{
  "name": "project-name",
  "version": "0.1.0",
  "devDependencies": {
    "grunt": "latest",
    "grunt-contrib-htmlmin": "latest",
    "grunt-postcss": "latest",
    "autoprefixer": "latest",
    "cssnano": "latest",
    "grunt-contrib-uglify": "latest",
    "grunt-contrib-imagemin": "latest",
  }
}
```

#### Gruntfile.js

```javascript
module.exports = function(grunt) {

  grunt.initConfig({
    htmlmin: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      html: {
        files: [{
          expand: true,
          cwd: "src/",
          src: "**/*.html",
          dest: "dest/"
        }]
      }
    },

    postcss: {
      options: {
        processors: [
          require("autoprefixer")(),
          require("cssnano")()
        ]
      },
      css: {
        src: "dest/css/*.css"
      }
    },

     uglify: {
      js: {
        files: {
          "dest/js/main.js": "src/js/*.js"
        }
      },
    },

    imagemin: {
      img: {
        options: {
          optimizationLevel: 5,
          quality: 75
        },
        files: [{
          expand: true,
          cwd: "src/img/",
          src: "**",
          dest: "dest/img/"
        }]
      }
    },
  });

  grunt.loadNpmTasks("grunt-contrib-htmlmin");
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-imagemin");

  grunt.registerTask("default", ["htmlmin", "postcss", "uglify, imagemin"]);
};
```
#### Permission on Unix systems

Most of the time you should be fine using Grunt in Windows, but if you are a Linux or MacOS user, things can get a bit tricky.
You need to give Grunt the **appropiate  permissions** in order for you to successfully execute the grunt-tasks. You can achieve this
by using:

```
sudo chown username:groupname projectRootDirectory
sudo chmod 77
```

`chown` in this case will make you the owner of the directory and `chmod` will grant you the following permissions: `--rwxrwx---` (read, write and execute permissions for the owner and group). You can look up the permissions with:

```
ls -l
```

After you have done that, you can enjoy using Grunt without having any permission problems on Unix systems.


#### More Information:

Grunt documentation: [Getting Started](https://gruntjs.com/getting-started)
