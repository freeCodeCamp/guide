---
title: The Python Dict
---
**TODO: `dict` basic info**

A dictionary's keys are almost arbitrary values. Values that are not hashable, that is, values containing lists, dictionaries or other mutable types (that are compared by value rather than by object identity) may not be used as keys. Numeric types used for keys obey the normal rules for numeric comparison: if two numbers compare equal (such as `1` and `1.0`) then they can be used interchangeably to index the same dictionary entry. (Note however, that since computers store floating-point numbers as approximations it is usually unwise to use them as dictionary keys.)

Python dictionaries are implemented using the set data structure. The set data structure is famous for operations such as union, intersection, set difference, symmetric difference, but they are also great for the operations in and not in. This can be very useful when you need to traverse two sets and see if a key is contained in the other set.

**TODO: See if anything from <a href='https://docs.python.org/3/tutorial/datastructures.html#dictionaries' target='_blank' rel='nofollow'>Python Docs - Dictionaries</a> should be added**
