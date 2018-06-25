## File System

The Node.js file system module allow you to work with the file system on your computer.

What is a file system module ?

Node.js has a set of built-in modules which you can use without any further installation. Similarly **file system module** contains a set of functions which are required to perform different operations on files such as read and write operation.

In order to to include a module, use the ```require()``` function with the name of the module.

```javascript
var fs = require('fs');
```

Common use for the File System module:

* Read files
* Create files
* Update files
* Delete files
* Rename files

The ```fs.readFile()``` method is used to read files on your computer. It takes three argument - filename, encoding and a call back function.

Node.js code to read file from your computer and return the content to the console.

```javascript
var fs = require('fs');
fs.readFile('input.txt', 'utf-8', function(err, data){
  if(err){
  console.log(err);
  }
  else{
  console.log("Asynchronous data is " + data.toString());
  }
});
```

The ```fs.writeFile()``` method takes three arguments - filename, content and a call back function.

Node.js code to write content into file. 

```javascript
var fs = require('fs');
fs.writeFile('output.txt', "New content added", function(err, data){
	if(err){
		console.log(err);
	}
	else{
		console.log("The file is saved");
	}
});
```

## Resources

* [Node.js API](https://nodejs.org/api/fs.html#fs_file_system)
* [W3 Schools](https://www.w3schools.com/nodejs/nodejs_filesystem.asp)
 
