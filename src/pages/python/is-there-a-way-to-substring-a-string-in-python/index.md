---
title: Is There a Way to Substring a String in Python
---
## Is There a Way to Substring a String in Python

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/python/is-there-a-way-to-substring-a-string-in-python/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->


## Is There a Way to Substring a String in Python

----------------------------------------------------
In python this is known as **slicing.**

Similarly to arrays, one can slice strings using the **[** square bracket **]** notation.

```
x[start:end] # items start through to end-1
x[start:]    # items start through the rest of the array (including the last element)
x[:end]      # items from the beginning through to end-1
x[:]         # a copy of the whole array
```
there is also a third **step** value which can be used with the above

```
   x[start:end:step] # start through to and not past end, by step
```


### Let's define the terms

**start:** The beginning index of the slice, it will include this element and defaults as 0. if it's negative, it will start n items from the end

**stop:** the ending index of the slice, it will not include this element and defaults to the length of the string.

**step:** the amount by which the index increases, defaults to 1. If it's negative, your slicing in reverse

#### Examples to make it much clearer
h | e | l | | l | o | _ | w | o | r | l | d
0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

```python
   x = "Hello_World" 
   
   print(x[3:7])      # lo_w
   print(x[4:])       # o_world
   print(x[:4])       # hell
   print(x[:])        # hello_world
   print(x[::2])      # hlowrd
   print(x[::-1])     # dlrow_olleh
```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


