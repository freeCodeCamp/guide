---
title: Converting Integer to String in Python
---
## Converting Integer to String in Python

Unlike many other languages out there, Python does not implicitly typecast integers (or floats) to strings when concatenating with strings. Fortunately, Python has a handy built-in function `str()` which will convert the argument passed in to a string format.

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

<!-- This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/articles/python/converting-integer-to-string-in-python/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>. -->

<!-- <a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>. -->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<a href='https://docs.python.org/2/library/functions.html#str' target='_blank' rel='nofollow'>Official Python documentation for `str()`</a>
<!-- Please add any articles you think might be helpful to read before writing the article -->


