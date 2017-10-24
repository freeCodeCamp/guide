---
title: Files and IO
---
## Files and IO

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/python/files-and-io/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

My Changes  --------------------

A file object allows us to use, access and manipulate all the user accessible files. One can read and write any such files.
When a file operation fails for an I/O-related reason, the exception IOError is raised. This includes situations where the operation is not defined for some reason, like seek() on a tty device or writing a file opened for reading.
Files have the following methods:

open(): Opens a file in given access mode.
 open(file_address, access_mode) 
Examples of accessing a file: A file can be opened with a built-in function called open(). This function takes in the file’s address and the access_mode and returns a file object.
There are different types of access_modes:

r: Opens a file for reading only
r+: Opens a file for both reading and writing
w: Opens a file for writing only
w+: Open a file for writing and reading.
a: Opens a file for appending
a+: Opens a file for both appending and reading
When you add 'b' to the access modes you can read the file in binary format rather than the default text format. It is used when the file to be accessed is not in text.

read([size]): It reads the entire file and returns it contents in the form of a string. Reads at most size bytes from the file (less if the read hits EOF before obtaining size bytes). If the size argument is negative or omitted, read all data until EOF is reached.
# Reading a file
f = open(__file__, 'r')
 
#read()
text = f.read(10)
 
print(text)
f.close()

readline([size]): It reads the first line of the file i.e till a newline character or an EOF in case of a file having a single line and returns a string. If the size argument is present and non-negative, it is a maximum byte count (including the trailing newline) and an incomplete line may be returned. An empty string is returned only when EOF is encountered immediately.
# Reading a line in a file
f = open(__file__, 'r')
 
#readline()
text = f.readline(20)
print(text)
f.close()

readlines([sizehint]): It reads the entire file line by line and updates each line to a list which is returned.Read until EOF using readline() and return a list containing the lines thus read. If the optional sizehint argument is present, instead of reading up to EOF, whole lines totalling approximately sizehint bytes (possibly after rounding up to an internal buffer size) are read.
# Reading a file
f = open(__file__, 'r')
 
#readline()
text = f.readlines(25)
print(text)
f.close()

write(string): It writes the contents of string to the file. It has no return value. Due to buffering, the string may not actually show up in the file until the flush() or close() method is called.
# Writing a file
f = open(__file__, 'w')
line = 'Welcome Geeks\n'
 
#write()
f.write(line)
f.close()

writelines(sequence): It is a sequence of strings to the file usually a list of strings or any other iterable data type. It has no return value.
# Writing a file
f = open(__file__, 'a+')
lines = f.readlines()
 
#writelines()
f.writelines(lines)
f.close()

tell(): It returns an integer that tells us the file object’s position from the beginning of the file in the form of bytes
# Telling the file object position
f = open(__file__, 'r')
lines = f.read(10)
 
#tell()
print(f.tell())
f.close()

seek(offset, from_where): It is used to change the file object’s position. Offset indicates the number of bytes to be moved. from_where indicates from where the bytes are to be moved.
# Setting the file object position
f = open(__file__, 'r')
lines = f.read(10)
print(lines)
 
#seek()
print(f.seek(2,2))
lines = f.read(10)
print(lines)
f.close()

My changes end -----------------------


