---
title: Files and IO
---
## Files and IO
Python has many ways of input and output operations. Some of the output operations can be printing a text, console logs and even output a text or spreadsheet file. 

#### Files
The python method open() can be used to return a file object. It is most commonly used with two arguments which are the file name and the mode of access. The mode of access is used to describe the way the file is accessed or used. 

The most commonly used modes are 'w' which is for writing into the file and 'r' which is used for reading the file while 'r+' is used to read and write the file. 'a' is the mode that is used for appending text into the file. The mode argument is also optional and will be assumed to be 'r' if it is ommitted.

A file has to be closed after the input and output operation has been completed to free up any resources. 

Sample code to open a text file with the name
```
file = open('hello_world.txt','w')
file.write('Hello World!')
file.close()
```
#### More Information:
https://docs.python.org/2/tutorial/inputoutput.html
