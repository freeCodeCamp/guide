---
title: Getting Started with Back End Projects
---
The curriculum lead-up to the first Back End Project is not very comprehensive. Here are a number of common resources which other campers have found helpful.

*   <a>Introduction to Yeoman</a> - Lots of helpful tips and tricks for the Yeoman Angular Fullstack setup
*   [Angular Generator](https://github.com/DaftMonk/generator-angular-fullstack#generators) - Generator used by Yeoman, you can find syntax and what files it creates

## APIs

*   API for Charting the stock market: [https://www.quandl.com/help/api](https://www.quandl.com/help/api)

## MEAN Stack Tutorials & Videos

*   5 Part Series on setting up a MEAN stack  
    [https://www.youtube.com/watch?v=kHV7gOHvNdk](https://www.youtube.com/watch?v=kHV7gOHvNdk)
*   A MEAN tutorial that creates a simple Twitter clone  
    [https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start](https://channel9.msdn.com/Series/MEAN-Stack-Jump-Start)
*   Clementine is a stripped down MEAN stack, great for learning the fundamentals.  
    [https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html](https://johnstonbl01.github.io/clementinejs/tutorials/tutorial-beginner.html)
*   Authentication with Passport for the MEAN stack:  
    [https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs](https://vickev.com/#!/article/authentication-in-single-page-applications-node-js-passportjs-angularjs)
*   An amazing list of resources for learning the MEAN stack:  
    [https://github.com/ericdouglas/MEAN-Learning](https://github.com/ericdouglas/MEAN-Learning)

## Scotch IO Tutorials

*   [https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application](https://scotch.io/tutorials/setting-up-a-mean-stack-single-page-application)
*   [https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure](https://scotch.io/tutorials/node-and-angular-to-do-app-application-organization-and-structure)

## Node/Express

*   [Online Debugging for Node.js/Express](http://stackoverflow.com/a/16512303/1420506)

## Cloud 9 Tricks

### Speed up browser reloads

1.  Open gruntfile.js and edit both instances of `livereload: true` to `livereload: false`.
2.  Open server/config/express.js and comment out the line `app.use(require('connect-livereload')());`