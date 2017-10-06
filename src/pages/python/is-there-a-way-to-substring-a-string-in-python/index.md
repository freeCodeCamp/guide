---
title: Is There a Way to Substring a String in Python
---
## Is There a Way to Substring a String in Python

**Slicing** is a python concept which can be used to substring a string. The syntax is quite simple
```python
str2 = str1[start:end]
```
here, **start** is *inclusice* and **end** is *exclusive*

## Example
Let us consider a string **The Pythonic Way**

```python
>>> str1[4:10]      #Slices string between index 4 and 9, since start is inclusive and end is exclusive
'Python'
>>>str1[12:15]      #Slices string between index 12 and 14
' Wa'
>>>str1[:10]        #Slices string between index 0 and 9
'The Python'
>>>str1[10:]        #Slices string between index 10 and the length of the string (here it is 16)
'ic Way'
```

### Note: Slicing a string does not change the original string
