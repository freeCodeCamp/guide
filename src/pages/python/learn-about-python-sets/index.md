---
title: Learn About Python Sets
---
A set is an unordered collection of items. Every element is unique (no duplicates) and must be immutable (which cannot be changed).
However, the set itself is mutable. We can add or remove items from it.

Being an unordered collection, sets do not record element position or order of insertion. Accordingly, sets do not support indexing, slicing, or other sequence-like behavior.

## Example

Using curly bracket:
```python
>>> a_set = {1, 2, 3, 4}
>>> type(a_set)
<class 'set'>
```

Using `set` constructor
```python
>>> a_set = set([1, 2, 3, 4])
>>> type(a_set)
<class 'set'>
```

Empty curly braces `{}` will make an empty dictionary in Python. To make a set without any elements we use the `set()` function without any argument.
```python
>>> not_set = {}     # set constructor must be used to make empty sets.
>>> type(not_set)    # Empty curly brackets create empty dictionaries.
<class 'dict'>
>>> a_set = set()
>>> type(a_set)
<class 'set'>
```

### More Information 
https://docs.python.org/3/tutorial/datastructures.html#sets
