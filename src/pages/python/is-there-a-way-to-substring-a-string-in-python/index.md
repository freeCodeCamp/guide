---
title: string-slicing
---

## Slicing Strings

Python offers many ways to substring a string. It is often called 'slicing'.

It follows this template:

```python
string[start: end: step]
```
Where,

`start`: The starting index of the substring. The character at this index is included in the substring. If _start_ is not included, it is assumed to equal to 0.

`end`: The terminating index of the substring. The character at this index is _NOT_ included in the substring. If _end_ is not included, or if the specified value exceeds the string length, it is assumed to be equal to the length of the string by default.

`step`: Every 'step' character after the current character to be included. The default value is 1. If the _step_ value is omitted, it is assumed to equal to 1.

#### Template

`string[start:end]`: Get all characters from index _start_ to _end-1_

`string[:end]`: Get all characters from the beginning of the string to _end-1_

`string[start:]`: Get all characters from index _start_ to the end of the string

`string[start:end:step]`: Get all characters from _start_ to _end-1_ discounting every _step_ character


#### Examples

* **Get the first 5 characters of a string**

```python
string = "freeCodeCamp"
print(string[0:5])    # prints freeC
```

Note: `print(string[:5])` returns the same result as `print(string[0:5])`

* **Get a substring of length 4 from the 3rd character of the string**

```python
string = "freeCodeCamp"
print(string[2:6])    # prints eeCo
```

Please note that the start or end index may be a negative number. A negative index means that you start counting from the end of the string instead of the beginning (i.e from the right to left). Index -1 represents the last character of the string, -2 represents the second to last character and so on...

* **Get the last character of the string**

```python
string = "freeCodeCamp"
print(string[-1])    # prints p
```

* **Get the last 5 characters of a string**

```python
string = "freeCodeCamp"
print(string[-5:])    # prints eCamp
```

* **Get a substring which contains all characters except the last 4 characters and the 1st character**

```python
string = "freeCodeCamp"
print(string[1:-4])    # prints reeCode
```

#### More examples
```py
str = “freeCodeCamp”

print str[-5:-2]    # prints ‘eCa’
print str[-1:-2]    # prints ‘’ (empty string)
```

* **Get every other character from a string**

```python
string = "freeCodeCamp"
print(string[::2])    # prints feCdCm
```

## Example

    a = [ 1, 2, 3, 4, 5, 6, 7, 8]
    print(a[:5])    # prints [1, 2, 3, 4, 5]
    print(a[2:])    # prints [3, 4, 5, 6, 7, 8]
    print(a[2:5])    # prints [3, 4, 5]
    print(a[2:7:2])    # prints [3, 5, 7]

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CT5h' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#slice' target='_blank' rel='nofollow'>Official Documentation</a>
