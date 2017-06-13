---
title: "The Python Dict"
parent: "python"
---

**TODO: `dict` basic info**

A dictionary's keys are almost arbitrary values. Values that are not hashable, that is, values containing lists, dictionaries or other mutable types (that are compared by value rather than by object identity) may not be used as keys. Numeric types used for keys obey the normal rules for numeric comparison: if two numbers compare equal (such as `1` and `1.0`) then they can be used interchangeably to index the same dictionary entry. (Note however, that since computers store floating-point numbers as approximations it is usually unwise to use them as dictionary keys.)

**TODO: See if anything from [Python Docs - Dictionaries](https://docs.python.org/3/tutorial/datastructures.html#dictionaries) should be added**
