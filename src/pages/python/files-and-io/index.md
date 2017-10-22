---
title: Files and IO
---
## Files and IO

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Python can be used to import date, to open and read files, and also to output data.

The open() method is used to open a file: open(filename, mode). It takes two arguments, filename and mode. 
The first argument is a string containing the filename.
The second argument is a string that describes the mode in which the file will be used. 
This can be:
'r' which is read-only, and can be used to read existing files
'w' which is write-only, and allows you to write a new file(this will overwrite any existing file of the same name),
'a' which is used for appending data to the end of the file,
'r++' which is used for both reading and writing,
'b' which is used to open the file in binary mode

The second argument (mode) is optional and will be 'r' by default if omitted.

For example, if you want to write a file called 'workfile':
'''python
f = open('workfile', 'w')
'''

The close() method should be used when a file is finished with.

For defined file objects, the read() method can be used.
The readline() method will read a single line of a file object.


Python can also be used to output date. It has several ways of doing this.
The print statement (print()) can be used.

For example, if you want to output 'Hello, world', you could do this.
'''python
x = 'Hello, world.'
print (x)
'''
'Hello, world.'

The write() method can be used to write data to a file.

Python also has a json module that allows use of the JSON format.
This has the methods dumps(), dump() and load() which can be used to serilaize and deserialize data.



#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
For more information go to: https://docs.python.org/3.6/tutorial/inputoutput.html

