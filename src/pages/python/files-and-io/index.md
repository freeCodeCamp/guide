---
title: Files and IO
---
## Files and IO

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
There are different ways to provide an input to a Python program and to present the output to a user. The two most popular ways are: an input through the console (usually keyboard for input and screen for output) and through a file.

When a program completes its execution, all the variables and their associated values are cleared from the memory. Files provide a way to store the information on disk which can be used even after the program has terminated.

Python provides easy-to-use functions to enable programmers to read and write data from files.

## Reading and Writing Files
The open() method returns a file object which can be used to read input from an external file. It takes in two arguments, a string specifying the name of the file and the mode which describes the how file is to be used.
 
```python
f = open('input.txt', 'r')
```

The above code segment assumes that there a file exists in the current directory with the name 'input.txt'. The Python interpreter raises a FileNotFoundError if no such file exists. The second argument 'r' implies that file will only be read.

The mode 'w' is used for writing to files. In this mode, an already existing file is erased and overwritten or a new file is created if it already doesn't exist. The 'a' mode is used to 'append' i.e., new data would be written only at the end of the file. The 'r+' mode can be used for both reading and writing. The mode argument is optional and 'r' is the default value if it is not specified by the programmer.

Usually, files are opened in text mode which means that string are read and written to the file. When 'b' is appended to the mode, the file is opened in _binary_ mode which would allow data to be written in the form of byte objects. This mode is used for all files that do not contain text.

It is a good practice to use the __with__ keyword when working with files.

```python
with open('input.txt', 'r') as f:
    read_data = f.read()
```

The close() method is used to close the opened files, but it is not required while using the __with__ keyword.

## Methods of File Objects
+ f.read(size): Reads some of the file's contents (depending upon size) and returns a string (in text mode) and bytes object (in binary mode). If size is not specified, the entire contents of the file are read and returned.
+ f.readline(): Reads and returns a single line from the file.
+ f.readlines(): Returns an iterator which can be used to read the file contents line by line.
+ f.write(string): Writes contents of string to the file and returns the number of characters written.
+ f.tell(): Returns an integer which represents the file object's current position in the file represented as number of bytes from the beginning of the file.

Below is simple example to read and write a text file. You can download a simple text from [here](https://ideone.com/plain/fWRAs7).
```python
# Files IO example.

# Read data from an input file and write to an output file in reverse order.

data = []       # List to lines from the file.

# Open txt file in read mode.
with open('input.txt', 'r') as f:
    # Read file contents line by line.
    for line in f.readlines():
        data.append(line)

# Open a new file in write mode.
with open('output.txt', 'w') as f:
    # Write to file in reverse order.
    for line in reversed(data):
        f.write(line)
```

There are other many other python modules which can be used to work with different types of files such as [json](https://docs.python.org/3/library/json.html), [csv](https://docs.python.org/3/library/csv.html) and even [PDF](https://pythonhosted.org/PyPDF2/). 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
+ [Input and Output in Python](https://docs.python.org/3/tutorial/inputoutput.html)
+ [Python Files I/O - Tutorialspoint](https://www.tutorialspoint.com/python/python_files_io.htm)

