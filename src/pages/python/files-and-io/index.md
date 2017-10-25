---
title: Files and IO
---
## Files and IO  

### IO

IO an essential part of python.  
It consists of two parts:  
I stands for input, where as O stands for output.

#### Input:  
Simply put it's the possibility for the Dev/User to add relevant informations to the script during runtime.  
And it is really simple.
  
##### Python3
```python
input = input("Insert text here: ")
```
  
##### Python2
```python
input = raw_input("Insert text here: ")
```
  
Yes that's it.  
The input is passed to the script as a string which allows you to do a lot of things.  
If you want to obtain a number, you'll need to typecast.  
Let me elaborate:
  
```python
input = float(input("Enter number here: ")) # tries to convert the string into a floating point number
input = int(input("Enter number here: ")) # tries to convert the string into an integer
```

If the input is not appropriate, python will greet you with a nice error:  
```
>>> input = int(input("Enter number here: "))
Enter number here: rgeg
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: 'rgeg'
```
  
#### Output:  
  
 That "thing", that will let you know what happens during runtime.  
 Or how you messed up. 
 ![](https://i.ytimg.com/vi/GD6qtc2_AQA/maxresdefault.jpg)
 So let's get into it:  
 
##### Python3  
```python
print(x)
```

##### Python2  
```python
print x
# and
print(x)
```

In python2 print can be used as a statement or a function, where as in python3 it is a function.  
Pythons print also accepts multiple parameters.  

```python
print("Print", "this", "text")
```
```
-> Print this text
```

Python will automagically cast most things into a string.  
Also using multiple parameters, you are not forced to use string concatenation for more detailed Output.  

```
>>> input = int(input("Enter number here: "))
Enter number here: 23
>>> print(input)
23
>>> print("Input:" + input)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: must be str, not int
>>> print("Input:" + str(input))
Input:23
>>> print("Input:", input)
Input: 23
```
  
### Files

Most files are handled pretty easyly in python.  
Using open() allows reading and writing to a file by providing a file descriptor.  
There are multiple ways (called modes) to handle a file:
* "r" - opens a file and allows to read from it
* "w" - opens a file (and creates it if it's not on the drive) and allows to write to it
* "a" - opens a file and appends content to it
* "t" - opens a file in text mode (default)
* "b" - opens a file in binary mode
* "rb" - read in binary mode
* "wb" - write in binary mode

```
fd = open(filename, mode)
```

#### Writing to a File  

Using the write function, you can simply add content to the file of your desire.  

```python
fd = open("file.txt", "w")
fd.write("sometext.exe")
fd.close()
```
```
file.txt reads
sometext.exe
```

Also "with" allows you to open, manipulate and close files in a breeze:
```
with open("file.txt", "w") as fd:
  fd.write("notexthere")
```
#### Reading from a File  

```python
fd = open("file.txt", "r")
print(fd.read())
fd.close()
```
This prints the content of the entire file.  
If you just want to print a specific amount of characters use, enter the amount of characters as a paremeter:  
```python
fd = open("file.txt", "r")
print(fd.read(5))
fd.close()
```
You can also skip to a desired position using seek():
```python
fd = open("file.txt", "r")
fd.seek(5)
print(fd.read(5))
fd.close()
```
This would output character 6 to 11.  
Iterating over a file allows to read line by line. 
```python
fd = open("file.txt", "r")
for line in fd:
  print(line)
fd.close()
```

As above mentioned "with" will make things a lot easier:
```python
with open("file.txt", "r") as fd:
  for line in fd:
    print(line)
```

Note:  
As of writing this python does not naturally support more complicated file types like excel or csv files.  
But there are a lot of modules available in pip to solve this.

#### More Information:  

[Python Docs for Built-in Functions](https://docs.python.org/3/library/functions.html)  
[Python Docs for Input and Output](https://docs.python.org/3/tutorial/inputoutput.html)

