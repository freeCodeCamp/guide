---
title: Converting Integer to String in Python
---
## Converting Integer to String in Python

Unlike many other languages out there, Python does not implicitly typecast integers (or floats) to strings when concatenating with strings. Fortunately, Python has a handy built-in function `str()` which will convert the argument passed in to a string format.

#### The Wrong Way

Programmers coming from other languages may attempt to do the following string concatenation which produces an error:

```py
age = 18

string = "I am " + age + " years old"
```
The error that shows up is
```
Traceback (most recent call last):
  File "python", line 3, in <module>
TypeError: must be str, not int
```

`TypeError: must be str, not int` indicates that the integer must first be converted to a string to be concatenated.

#### The Correct Way

Simple concatenation example:

```py
name = "Alice"
age = 18
print("Hello, my name is " + name + " and I am " + str(age) + " years old") # Hello, my name is Alice and I am 18 years old
```
Print `1 2 3 4 5 6 7 8 9 10` using a single string
```py
result = ""

for i in range(1, 11):
    result += str(i) + " "

print(result) # 1 2 3 4 5 6 7 8 9 10
```


#### More Information:
<a href='https://docs.python.org/2/library/functions.html#str' target='_blank' rel='nofollow'>Official Python documentation for `str()`</a>



