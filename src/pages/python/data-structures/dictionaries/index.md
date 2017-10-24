---
title: The Python Dict
---
**TODO: `dict` basic info**

A dictionary's keys are almost arbitrary values. Values that are not hashable, that is, values containing lists, dictionaries or other mutable types (that are compared by value rather than by object identity) may not be used as keys. Numeric types used for keys obey the normal rules for numeric comparison: if two numbers compare equal (such as `1` and `1.0`) then they can be used interchangeably to index the same dictionary entry. (Note however, that since computers store floating-point numbers as approximations it is usually unwise to use them as dictionary keys.)

The special thing about Dict's are the way they implemented. Hash table like structure makes it easy to checks for existence. That means we can determine if a specific key is present in the dictionary without needing to examine every element. The Python interpreter can just go to the location key and check if the key is there.

**TODO: See if anything from <a href='https://docs.python.org/3/tutorial/datastructures.html#dictionaries' target='_blank' rel='nofollow'>Python Docs - Dictionaries</a> should be added**
