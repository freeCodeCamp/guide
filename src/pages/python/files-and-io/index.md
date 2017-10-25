---
title: Files and IO
---
# Files and IO

Python comes with baked in file handling capabilities, albeit with some limitations.

# The open() function

The `open()` function returns a file object, and is most commonly used with two arguments: `open(file, mode)`.

`file` is a path-like object giving the pathname (absolute or relative to the current working directory) of the file to be opened or an integer file descriptor of the file to be wrapped. (If a file descriptor is given, it is closed when the returned I/O object is closed, unless closefd is set to False.)

`mode `is an optional string that specifies the mode in which the file is opened. It defaults to 'r' which means open for reading in text mode. Other common values are 'w' for writing (truncating the file if it already exists), 'x' for exclusive creation and 'a' for appending (which on some Unix systems, means that all writes append to the end of the file regardless of the current seek position). In text mode, if encoding is not specified the encoding used is platform dependent: `locale.getpreferredencoding(False)` is called to get the current locale encoding. (For reading and writing raw bytes use binary mode and leave encoding unspecified.) The available modes are:

| Character | Meaning |
| --------- | -------------------------------------------------------------------- |
|'r'|	open for reading (default)|
|'w'|	open for writing, truncating the file first|
|'x'|	open for exclusive creation, failing if the file already exists|
|'a'|	open for writing, appending to the end of the file if it exists|
|'b'|	binary mode|
|'t'|	text mode (default)|
|'+'| open a disk file for updating (reading and writing)|
|'U'|	universal newlines mode (deprecated)|

The default mode is 'r' (a synonym of 'rt').
For binary read-write access, the mode 'w+b' opens and truncates the file to 0 bytes, 'r+b' opens the file without truncation.

# Binary vs Text I/O

When creating a file object Python distinguishes between binary and text I/O.

Files opened in binary mode (including 'b' in the mode argument) return their contents as bytes objects without any decoding.
In text mode (the default, or when 't' is included in the mode argument), the contents of the file are returned as a str, the bytes having been first decoded using a platform-dependent encoding or using the specified encoding if given.

# File Objects
An object exposing a file-oriented API (with methods such as `read()` or `write()`) to an underlying resource. Depending on the way it was created, a file object can mediate access to a real on-disk file or to another type of storage or communication device (for example standard input/output, in-memory buffers, sockets, pipes, etc..). File objects are also called file-like objects or streams.

While the `open()` function only has two modes, there are actually three categories of file objects: raw binary files, buffered binary files and text files. Their interfaces are defined in the io module. The canonical way to create a file object is by using the open() function.

## Basic File Object functions
### read()
To read a file’s contents, call `file_object.read(size)`, which reads some quantity of data and returns it as a string (in text mode) or bytes object (in binary mode). `size` is an optional numeric argument. When `size` is omitted or negative, the entire contents of the file will be read and returned.

If you want to read all the lines of a file in a list you can also use `list(file_object)` or `file_object.readlines()`.

### readline()
`readline()` reads a single line from the file; a newline character (\n) is left at the end of the string, and is only omitted on the last line of the file if the file doesn’t end in a newline. This makes the return value unambiguous; if `file_object.readline()` returns an empty string, the end of the file has been reached, while a blank line is represented by '\n', a string containing only a single newline.

### write()
write(string) or write(bytes_object) writes the contents of the variable passed in to the file, returning the number of characters, or bytes written. Objects of other types need to be converted – either to a string (in text mode) or a bytes object (in binary mode).

# Example Usage
## Example file contents
```
hello world
this is a test
```
## Reading
### read() function
#### Using open / close
```python
file_object = open('/path/to/file')
read_data = file_object.read()
file_object.close()
```
#### Using a with statement
```python
with open('/path/to/file') as file_object:
  read_data = file_object.read()
  print read_data
```
#### Output
```python
hello world
this is a test
```

### readline() function
#### Using open / close
```python
file_object = open('/path/to/file')
read_data = file_object.readline()
file_object.close()
```
#### Using a with statement
```python
with open('/path/to/file') as file_object:
  read_data = file_object.readline()
  print read_data
```
#### Output
```python
hello world
```

## Writing
```python
file_object = open('/path/to/file', 'a')
read_data = file_object.write('This is a test\n')
file_object.close()
```
#### Updated file contents
```
hello world
this is a testThis is a test

```
