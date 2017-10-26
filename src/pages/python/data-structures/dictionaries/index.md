---
title: The Python Dict
---
**TODO: `dict` basic info**

A dictionary's keys are almost arbitrary values. Values that are not hashable, that is, values containing lists, dictionaries or other mutable types (that are compared by value rather than by object identity) may not be used as keys. Numeric types used for keys obey the normal rules for numeric comparison: if two numbers compare equal (such as `1` and `1.0`) then they can be used interchangeably to index the same dictionary entry. (Note however, that since computers store floating-point numbers as approximations it is usually unwise to use them as dictionary keys.)

**TODO: See if anything from <a href='https://docs.python.org/3/tutorial/datastructures.html#dictionaries' target='_blank' rel='nofollow'>Python Docs - Dictionaries</a> should be added**

Dictionary's are unordered set of key:value pairs, with the basic requiremenet that keys have to unique and unmmutable objects.The dict() constructor builds a dictionary, one can enter key:value pairs directly.
*dict([(a:apple),(b:ball),(c:cat)])*
Inorder to iterate the dictionary, use the items() method.
*for k,v in dict.items()*

Python also has a in-built method name *__enumerate(item)__*, where item is either an iterator or a sequence.It returns an iterator tuple with index of count(starting from zero by default).
