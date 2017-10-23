---
title: Files and IO
---
## Files and IO

File handling in Python 3 is easy. You do not have to install/import any modules, it is in the core library.

```python
file_handle = open('my_file.txt', 'r')
```

```python
file_handle = open('my_file.txt')
```

The code snippets above open the file called `my_file.txt` in reading mode. As you can see, the mandatory parameter is the file's name, the mode is optional. If you do not provide a mode, Python assumes reading mode. Read more about file opening modes in the section [File Modes](#file-modes).

If you open files, make sure you **close the handles**. If your code opens files and doesn't close them, you rill run out of memory sooner or later (especially, if you work with large files). To close a file handle call the `close` method on it:

```python
file_handle = open('my_file.txt')
file_handle.closed() # returns False
file_handle.close()
file_handle.closed() # returns True
```

If a file handle is closed, you cannot read from or write to it anymore:

```python
file_handle.close()
file_handle.read()
```

The code above causes the following error:

```
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: I/O operation on closed file
```

### A more convenient way of file handling

Remembering to close files is not easy, especially if you do a lot with the handles in your code. That's why you should always open your files using the `with` block:

```python
with open('my_file.txt') as file_handle:
    # read and manipulate file content
file_handle.closed() # returns True
```

The `with` block ensures that the file handle is closed when you exit the block and the memory allocated by the handle is set free.

Because of this convenience, you should use the `with` block for your file operations.

### Reading files

If you open files, you want to do something with them too. This section gives an introduction how you can read from and write to files.

To read the contents of a file, you can use the `read` method:

```
with open('my_file.txt', 'r') as file_handle:
      file_content = file_handle.read()
```

This reads the whole content of the file into the `file_content` variable.

Sometimes you want to read files line-by-line, and do something with the lines instead of the whole content:

```python
with open('my_file.txt', 'r') as file_handle:
    lines = file_handle.readlines()
    # or
    for line in file_handle:
        # do something with each line
```

### Writing to files

Writing to files is as easy as reading from them:

```python
with open('my_file.txt', 'w') as file_handle:
    file_handle.write('some text')
    file_handle.write('some other text')
```

If you execute the code above and look at the contents, you will see the following:

```
some textsome other text
```

This means, you have to take care of delimiting the input you write to your files. If you want to write the text from above to a new line each, you can rewrite the code like this:

```python
with open('my_file.txt', 'w') as file_handle:
    file_handle.write('some text\n')
    file_handle.write('some other text\n')
```

### File Modes

In the example above you can see, we have to provide a *mode* if we do not plan to open the file in reading mode.

Python knows the following modes:

| Mode  | Description  |
|---|---|
| `r`  | Opens the file for *reading* only. You cannot write to the file but you can read the contents.  |
| `r+`  | Opens the file for *reading **and** writing*. You can read the contents of the file and you can write to it too.  |
| `w` | Opens the file for *writing*. This option **erases all the previous content** of the file if it exists.  |
| `a`  | Opens the file for *appending* at the end. If the file exists, the contents won't be overwritten and you can add new content at the end of the file.  |

Even though it is not required, you should add the `'r'` flag to your file handles when you are opening them for reading. This makes your code more readable and consistent.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
<a href='https://docs.python.org/3/tutorial/inputoutput.html' target='_blank' rel='nofollow'>Python 3 documentation: Input and Output</a>


