---
title: "How to clone and setup the Free Code Camp website on a Windows pc"
parent: "how-to"
---

This list works with the freeCodeCamp site and has been tested on this [Angular tutorial](https://docs.angularjs.org/tutorial) as well. Setting up the development environment on a Windows PC is easy, although it will likely give a lot of errors first in the process. The important part is to correct these errors.

## Prerequisites

1.  [Git bash](https://msysgit.github.io/)
2.  [Node.js](https://nodejs.org/)
3.  [MongoDB](https://www.mongodb.org/downloads)
4.  [Python 2.7.10](https://www.python.org/downloads/release/python-2710/)

Download and install the 4 prerequisites. When installing Python and Node it is important to check the option add to the path variable. The Node installer does that by default. It is optional to add Mongo to the path. Python should be installed in a subfolder in %programfiles%

1.  Open a command prompt with administrator rights.
2.  Verify that Node is in the path by running `node -v`
3.  Verify that npm is in the path by running `npm -v`
4.  Run the following commands:  

        npm install gulp -g
        npm install node-gyp -g

5.  If you want to spare the time in explorer finding Mongo when it has to be started create a `.cmd` file on your desktop and write the path to Mongo. Probably `%programfiles%\MongoDB\Server\3.0\bin\mongod.exe`.

6.  Create the default folder for Mongo to store databases: `C:\data\db`

**The following commands all _have_ to be executed in Git Bash**

1.  Follow the instructions here [**freeCodeCamp on Github**](https://github.com/FreeCodeCamp/freecodecamp) and clone the project.
2.  Make sure you're in the directory you cloned with GitHub (by default, this is freecodecamp).
3.  Run `cp sample.env .env`
4.  Run `npm install`
5.  Start Mongo from the desktop shortcut and run `npm run only-once`. You should now see a lot of activity in the window where you started Mongo.
6.  Run `gulp`. After a little while, your local version of freeCodeCamp should be running. You can visit it in your browser at `http://localhost:3000`

Congrats, you're done! If you run into any issues while setting up your local version of freeCodeCamp, feel free to reach out to [our Contributors chatroom](https://gitter.im/FreeCodeCamp/Contributors).
