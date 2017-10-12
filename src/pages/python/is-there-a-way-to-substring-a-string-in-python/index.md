---
title: Is There a Way to Substring a String in Python
---
## Is There a Way to Substring a String in Python

Yes, you can use the <b>slicing</b> technique to extract substrings of a string. 

#### Syntax
string[startIndex:endIndex]

Returns a new string that is a substring of the string. The substring begins at the specified <i>startIndex</i>  and extends to the character just before the specified <i>endIndex</i>.

#### Parameters
start - Starting index of the string (inclusive)
<br>end - Ending index of the string (exclusive)
<br>
<br>If the startIndex is not mentioned, it is considered as 0 by default. 
<br>If the endIndex value exceeds the string length, or if it is not specified, it considers the length of the string by default.

#### Example Usage
```py
str = “FreeCodeCamp” 

print str[4:8] # prints ‘Code’
print str[:8] # prints ‘FreeCode’
print str[4:] # prints ‘CodeCamp’
print str[:] # prints ‘FreeCodeCamp’
print str[:25] # prints ‘FreeCodeCamp’
print str[25:20] # prints ‘’ (empty string)
```
Please note that the start or end index may be a negative number. A negative index means that you start counting from the end of the string instead of the beginning (i.e from the right to left).

#### Example Usage
```py
str = “FreeCodeCamp”

print str[-1:] # prints ‘p’
print str[-5:-2] # prints ‘eCa’
print str[:-4] # prints ‘FreeCode’
print str[-1:-2] # prints ‘’ (empty string)
```

#### More Information:
More information about cutting and slicing strings can be found <a href='http://pythoncentral.io/cutting-and-slicing-strings-in-python/' target='_blank' rel='nofollow'>here</a>
