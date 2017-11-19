---
title: Learn About Python Sets
---
**TODO: `set` basic info**

A set is an unordered collection of elements without duplicate entries. 
When printed, iterated or converted into a sequence, its elements will appear in an arbitrary order.

**Mutable**

**Creation:**

`set` literal:

Curly brackets, `{}`, can't be used to create an empty set:

    >>> not_set = {}     # set constructor must be used to make empty sets.
    >>> type(not_set)    # Empty curly brackets create empty dictionaries.
    <class 'dict'>

`set` constructor

_Example:_

    >>> print set()
    set([])
    
    >>> print set('FreeCodeCamp')
    set(['a', 'C', 'e', 'd', 'F', 'm', 'o', 'p', 'r'])
    
    >>> print set([1,2,1,2,3,4,5,6,0,9,12,22,3])
    set([0, 1, 2, 3, 4, 5, 6, 9, 12, 22])
