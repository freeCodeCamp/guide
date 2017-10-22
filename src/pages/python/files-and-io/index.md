---
title: Files and IO
---
## Files and IO

Python can be used to import data, to open and read files, and also to output data.


Import Data
You can use the open() method to open a file: open(filename, mode). 
It takes two arguments, filename and mode. 
The first argument is a string containing the filename.
Use the second argument, a string, that describes which mode to use the file. 
This can be:
•	'r' - read-only, use this to read existing files
•	'w' - write-only, and allows you to write a new file(this will overwrite any existing file of the same name),
•	'a' - used for appending data to the end of the file,
•	'r++' - used for both reading and writing,
•	'b' - used to open the file in binary mode


The second argument (mode) is optional and will be 'r' by default if omitted.


For example, if you want to write a file called 'workfile':
'''python
f = open('workfile', 'w')
'''


To close a file, use the close() method.
Using this is important as it frees up system resources.


For defined file objects, use the read() method to read a file.
The readline() method will read a single line of a file object.


Output Data
Python can also be used to output date. It has several ways of doing this.


Use the write() method to write data to a file by giving the method a string as an argument.


Python also has a json module that allows use of the JSON format.
This has the methods dumps(), dump() and load() which can be used to serialize and deserialize data.






#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

For more information go to: <a href=https://docs.python.org/3.6/tutorial/inputoutput.html target="_blank">
