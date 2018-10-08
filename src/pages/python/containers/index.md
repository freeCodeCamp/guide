---
title: Python Containers
---
Some objects contain references to other objects; these are called containers. Examples of containers are tuples, lists and dictionaries. The references are part of a container's value. In most cases, when we talk about the value of a container, we imply the values, not the identities of the contained objects; however, when we talk about the mutability of a container, only the identities of the immediately contained objects are implied. So, if an immutable container (like a tuple) contains a reference to a mutable object, its value changes if that mutable object is changed.

The Python builtin container types are tuple, list, dict, set, frozenset and str and unicode (or bytes and str in Python 3), as well as a couple other constructs that are technically types but are not commonly used outside of specific contexts (e.g., buffer objects and xrange objects). Additional container types are provided in the collections module.

Every container object implements the `__contains__` method which will let you use the `in` operator as `x in y` where y is a container. To check if an object is a container, you can use `isinstance(x, collections.abc.Container)`


<a href='https://docs.python.org/3/reference/datamodel.html#objects-values-and-types' target='_blank' rel='nofollow'>Python Docs - Object Values & Types</a>

<a href='https://docs.python.org/2/library/collections.html' target='_blank' rel='nofollow'>Python Docs - Collections</a>
