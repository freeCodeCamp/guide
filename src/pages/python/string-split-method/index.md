---
title: String Split Method
---
## String Split Method

The method `split()` returns a list of all the words in the string, using `str` as the separator (splits on all whitespace if left unspecified), optionally limiting the number of splits to num.

###Syntax
Following is the syntax for `split()` method
```python
str.split(str="", num=string.count(str))
```
###Parameter
* `str` - This is any delimeter, by default it is space.
* `num` - This is number of lines minus one
###Return Value
This method returns a list of lines.
###Example
```python
str = "This is an apple"
print str.split( )
print str.split(' ', 1 )
```
Output:
```python
['This', 'is', 'an', 'apple']
['This', 'is an apple']
```
