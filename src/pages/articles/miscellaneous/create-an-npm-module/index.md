---
title: Create An Npm Module
---
An NPM module is a set of Javascript functionality bundled into a distributable package. [NPM](http://www.npmjs.com) maintains the registry of all available packages, and is also the tool used to install packages from its registry.

The beauty of NPM is that you can assemble packages other people have created to create something new, and someone later on could use the package you create. If you have some code that you want to share with the world, publishing a module to NPM is easy.

## Step 1: Create your script

I created this simple utility as `index.js`:

    var time = new Date().toTimeString();
    console.log(time);

## Step 2: Create package information

The next step is to create the information to publish with your package, stored in `package.json`. NPM provides a wizard to make creating this file easy.

Simply run `npm init` and answer the questions.

Your `package.json` should look something like this:

    {
      "name": "whattimeisit",
      "version": "1.0.0",
      "description": "accurate time retrieval",
      "main": "index.js",
      "author": "HoursAndMinutes",
      "license": "ISC"
    }

Don't forget to include the GitHub repository link if the code is on GitHub!

## Step 3: Create a user account on NPM

In order to publish a package to NPM, you need to have an account registered. To do that, run `npm adduser`. You can verify the account currently in use with `npm config ls`.

## Step 4: Publish to NPM

Before you publish your package to NPM, check if the directory contains any files you do not want made public (e.g. passwords, private keys etc). You can add these to a file named `.npmignore` to exclude them from package publishing. NPM will also honor `.gitignore` if you have that.

Once you have finalized your package contents, run `npm publish`. You can confirm the details of your package at [https://npmjs.com/package/yourpackagename](https://npmjs.com/package/yourpackagename).