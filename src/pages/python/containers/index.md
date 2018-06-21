---
title: Python Containers
---
Some objects contain references to other objects; these are called containers. Examples of containers are tuples, lists and dictionaries. The references are part of a container's value. In most cases, when we talk about the value of a container, we imply the values, not the identities of the contained objects; however, when we talk about the mutability of a container, only the identities of the immediately contained objects are implied. So, if an immutable container (like a tuple) contains a reference to a mutable object, its value changes if that mutable object is changed.

<a href='https://docs.python.org/3/reference/datamodel.html#objects-values-and-types' target='_blank' rel='nofollow'>Python Docs - Object Values & Types</a>

Containers are any object that holds an arbitrary number of other objects. Generally, containers provide a way to access the contained objects and to iterate over them.

Examples of containers include tuple, list, set, dict; these are the built-in containers. More container types are available in the collections module.

Strictly speaking, the collections.abc.Container abstract base class (collections.Container in Python2) holds for any type that supports the in operator via the __contains__ magic method; so if you can write x in y then y is usually a container, but not always: an important point of difference between containers and general iterables is that when iterated over, containers will return existing objects that they hold a reference to, while generators and e.g. file objects will create a new object each time. This has implications for garbage collection and deep object traversal (e.g. deepcopy and serialisation).

As an example, iter(lambda: random.choice(range(6)), 0) supports the in operator, but it is certainly not a container!

The intent of the Collections.abc.Container abstract base class in only considering the __contains__ magic method and not other ways of supporting the in operator is that a true container should be able to test for containment in a single operation and without observably changing internal state. Since Collections.abc.Container defines __contains__ as an abstract method, you are guaranteed that if isinstance(x, collections.abc.Container) then x supports the in operator.

In practice, then, all containers will have the __contains__ magic method. However, when testing whether an object is a container you should use isinstance(x, collections.abc.Container) for clarity and for forward compatibility should the Container subclass check ever be changed.
