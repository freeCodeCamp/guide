---
title: File Handling
---
## File Handling

<!--This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/agile/acceptance-testing/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<!--<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

A file represents a sequence of bytes on the disk where a group of related data is stored. File is created for permanent storage of data. It is a ready made structure.

In C language, we use a structure pointer of file type to declare a file.

> FILE *fp;

C provides a number of functions that helps to perform basic file operations.

| Function     | Descreption                                |
| -------------|-------------------------------------------:|
| fopen()      |  create a new file or open a existing file | 
| fclose()     | 	closes a file                             | 
| getc()       | 	reads a character from a file             | 
| putc()       |  write a character to a file               | 
| fscanf()     | 	reads a set of data from a file           | 
| fprintf()    | 	  writes a set of data to a file          | 
| getw()       |   reads a integer from a file              |
| putw()       | 	     writes a integer to a file           | 
| fseek()      | 	   set the position to desire point       | 
|  ftell()     | 	   gives current position in the file     | 
|    rewind()  | 	  set the position to the begining point  | 


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


