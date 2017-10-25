---
title: Files and IO
---
## Files and IO
A file in Python can be opened by using the `open()` function, which takes 2 arguments, the name of the file to operate on and the mode in which the file is to be opened. The return type is a file object. The modes can be

- `'r'`: read a file
- `'w'`: write to a file
- `'a'`: append to a file
- `'r+'`: read and write to a file

The default mode is `'r'`. The filename can be a literal string but it is better practice to use the `os` module to give the path to the file

```python
fhand = open('example.txt')
```

After opening the file in read mode, the file can be read using the `read()` method, which is a method applied to the file object. The `read()` function returns the contents of the file in a string

```python
fhand = open('example.txt')
print fhand.read() # prints contents of the file
```

A common way of reading a file is to iterate over the lines of the file by using a `for` loop

```python
fhand = open('example.txt')
for line in fhand:
    print line # prints a line for each iteration
```

This approach is preferred to the former as the size of the file can easily get large.

A file can be written to using the `write()` method. It takes as an argument, the string to write to the file.

```python
fhand = open('example.txt')
fhand.write('Hello, World!)
```

After all operations are done on the file, close it by using the `close()` method

```python
fhand.close()
```


#### More Information:
- https://docs.python.org/2/tutorial/inputoutput.html#reading-and-writing-files


