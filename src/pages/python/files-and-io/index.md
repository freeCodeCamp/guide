---
title: Files and IO
---
## Files and IO
open() returns a file object, and is most commonly used with two arguments: open(filename, mode).

```
>>> f = open('workfile', 'w')
```

The first argument is a string containing the filename. The second argument is another string containing a few characters describing the way in which the file will be used. mode can be 'r' when the file will only be read, 'w' for only writing (an existing file with the same name will be erased), and 'a' opens the file for appending; any data written to the file is automatically added to the end. 'r+' opens the file for both reading and writing. The mode argument is optional; 'r' will be assumed if it’s omitted.

It is good practice to use the with keyword when dealing with file objects. The advantage is that the file is properly closed after its suite finishes, even if an exception is raised at some point. Using with is also much shorter than writing equivalent try-finally blocks:

```
>>> with open('workfile') as f:
...     read_data = f.read()
>>> f.closed
True
```

 Methods of File Objects:
 f.read(size) reads some quantity of data and returns it as a string (in text mode) or bytes object (in binary mode).
 
 ```
 >>> f.read()
'This is the entire file.\n'
>>> f.read()
''
 ```
 
 f.readline() reads a single line from the file; a newline character (\n) is left at the end of the string, and is only omitted on the last line of the file if the file doesn’t end in a newline.
 
 ```
 >>> f.readline()
'This is the first line of the file.\n'
>>> f.readline()
'Second line of the file\n'
>>> f.readline()
''
 ```
 
 For reading lines from a file, you can loop over the file object. This is memory efficient, fast, and leads to simple code:
 
 ```
 >>> for line in f:
...     print(line, end='')
...
This is the first line of the file.
Second line of the file
 ```
 
 f.write(string) writes the contents of string to the file, returning the number of characters written.

```
>>> f.write('This is a test\n')
15
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


