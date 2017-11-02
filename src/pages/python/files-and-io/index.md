---
title: Files and IO
---
## Files and IO

### Output to Screen
Python provides the simplest way to produce output to the screen. 
```python
print "Python is a powerful language.","It is easy to learn."
```
Output: 
```
Python is a powerful language.It is easy to learn.
```

### Input from User
There are two ways to take input from a user.
<dl>
  <dt> raw_input([prompt]) </dt>
  <dd>Used to read one line from standard input and returns it as a string</dd>
</dl>

```python
str = raw_input("Enter your name: ")
print "Welcome ", str
```
Output: 
```
Enter your name: John Doe
Welcome John Doe
```
<dl>
  <dt>input(prompt)</dt>
  <dd>Similar functionality to raw_input(), but assumes the input is a valid Python expression</dd>
</dl>

```python
str = input("Enter input: ")
print "Input: ", str
```
Output: 
```
Enter input: [x*5 for x in range(2,10,2)]
Input: [10,20,30,40]
```
### Interacting with Files in Python
Using Python, files can be easily opened, read, written and closed. With the available functions :
  1. <code>open()</code>
  2. <code>read()</code>
  3. <code>write()</code>
  4. <code>close()</code>

Example:
```python
file1 = open("foo.txt", "r+")     # Opens the file with read permission.  
file1.write("Python is a powerful language.It is easy to learn.")     # Writes data into the file.
data = file1.read(15)     # Reads first 15 characters in the file.
print "First 15 characters are:\n", data     # Prints output
file1.close()     # Closes the opened file.
```
Output:
```
First 15 characters are:
Python is a pow
```
