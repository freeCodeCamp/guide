---
title: Files and IO
---
## Files and IO

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Creating a file object

`open(filename, mode)` returns a file object. 

    f = open('test.txt', 'r')

Mode |Explanation 
-----|------------
*r* | read only
*w* | write only
*r+* | read and write
*a* | append (written data will be added to the end )

### File object methods
    
    f.read()      # Reads the entire file
    f.read(bytes) # Reads the specified number of bytes
    f.readline()  # Reads the next line
    f.write('A string to write') 

You can use `tell()` to get the file object's current position in the file. The position is measured in bytes from the beginning of the file.

You can use `seek(offset, from)` to manipulate the file object's position. The *from* argument can be 0 (beginning of file), 1 (current position) or 2 (end of file). The new position is calculated by adding the *offset* to the reference point specified by the *from* argument.

    f.close() # Close the file

A better way to deal with file objects is to use a `with` statement:

    with open('test.txt', 'r') as f:
        content = f.read()
        
This way you ensure that the file is properly closed even if an esception occurs within the code block. 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Input and Output — Python 2.7.14 documentation](https://docs.python.org/2/tutorial/inputoutput.html)

[Input and Output — Python 3.6.3 documentation](https://docs.python.org/3/tutorial/inputoutput.html)
