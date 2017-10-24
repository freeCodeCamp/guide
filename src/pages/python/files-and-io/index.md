---
title: Files and IO
---
## Files and IO

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/python/files-and-io/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Opening and Closing Files

Until now, you have been reading and writing to the standard input and output. Now, we will see how to use actual data files.Python provides basic functions and methods necessary to manipulate files by default. You can do most of the file manipulation using a file object.
Python's open() BIF lives to interact with files. When combined with a for statement,reading files is straightforward.

Syntax

file object = open(file_name, [access_mode] , [buffering])

Here are parameter details −
1st parameter: file_name − The file_name argument is a string value that contains the name of the file that you want to access.

2nd parameter: access_mode − The access_mode determines the mode in which the file has to be opened, i.e., read, write, append, etc. A complete list of possible values is given below in the table. This is optional parameter and the default file access mode is read (r).

3rd parameter: buffering − If the buffering value is set to 0, no buffering takes place. If the buffering value is 1, line buffering is performed while accessing a file. If you specify the buffering value as an integer greater than 1, then buffering action is performed with the indicated buffer size. If negative, the buffer size is the system default(default behavior).
    


When you use the open() BIF to access your data in a file,an iterator is created to feed the lines of data from your file to your code one line at a time. 
For example : The standard open-process-close code in python:

  the_file = open('file_name.txt')
  #Do something with the data
  #in "the_file"
  the_file.close()

