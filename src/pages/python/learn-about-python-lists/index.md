---
title: Learn About Python Lists
---
**TODO: `list` basic info**

[Python Docs - Lists](https://docs.python.org/3/library/stdtypes.html#lists)

**Creation:**

An empty `list` is created using a pair of square brackets:

    >>> empty_list = []
    >>> type(empty_list)
    <class 'list'>
    >>> len(empty_list)
    0

A `list` can be created with elements by enclosing a comma separated list of elements with square brackets. Lists allow for the elements to be of different types (heterogeneous) but are most commonly of a single type (homogeneous):

    >>> homogeneous_list = [1, 1, 2, 3, 5, 8]
    >>> type(homogeneous_list)
    <class 'list'>
    >>> print(homogeneous_list)
    [1, 1, 2, 3, 5, 8]
    >>> len(homogeneous_list)
    6
    >>> heterogeneous_list = [1, "Hello Campers!"]
    >>> print(heterogeneous_list)
    [1, "Hello Campers!"]
    >>> len(heterogeneous_list)
    2

The `list` constructor can also be used to create a `list`:

    >>> empty_list = list()                            # Creates an empty list
    >>> print(empty_list)
    []
    >>> list_from_iterable = list("Hello campers!")    # Creates a list from an
    iterable.
    >>> print(list_from_iterable)
    ['H', 'e', 'l', 'l', 'o', ' ', 'c', 'a', 'm', 'p', 'e', 'r', 's', '!']

**Accessing elements of a `list`:**

    >>> my_list = [1, 2, 9, 16, 25]
    >>> print(my_list)
    [1, 2, 9, 16, 25]

_Zero indexed_

    >>> my_list[0]
    1
    >>> my_list[1]
    2
    >>> my_list[2]
    9

_Wrap around indexing_

    >>> my_list[-1]
    25
    >>> my_list[-2]
    16

**Mutable:**

`lists` are mutable containers. Mutable containers are containers that allow changes to which objects are contained by the container. **TODO: ADD MORE?**

_Re-arranging elements in a list_

Elements from a `list` may be extracted and re-arranged using another `list` as index. 
    
    >>> my_list = [1, 2, 9, 16, 25, 34, 53, 21]
    >>> my_index = [5, 2, 0]
    >>> my_new_list = [my_list[i] for i in my_index]
    >>> print(my_new_list)
    [34, 9, 1]
    

**TODO: Which of these should be discussed here:**

[Python Docs - More on Lists](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)

*   `list.append(x)` Add an item to the end of the list. Equivalent to a[len(a):] = [x].

*   `list.extend(L)` Extend the list by appending all the items in the given list. Equivalent to a[len(a):] = L.

*   `list.insert(i, x)` Insert an item at a given position. The first argument is the index of the element before which to insert, so a.insert(0, x) inserts at the front of the list, and a.insert(len(a), x) is equivalent to a.append(x).

*   `list.remove(x)` Remove the first item from the list whose value is x. It is an error if there is no such item.

*   `list.pop([i])` Remove the item at the given position in the list, and return it. If no index is specified, a.pop() removes and returns the last item in the list. (The square brackets around the i in the method signature denote that the parameter is optional, not that you should type square brackets at that position. You will see this notation frequently in the Python Library Reference.)

*   `list.clear()` Remove all items from the list. Equivalent to del a[:].

*   `list.index(x)` Return the index in the list of the first item whose value is x. It is an error if there is no such item.

*   `list.count(x)` Return the number of times x appears in the list.

*   `list.sort(key=None, reverse=False)` Sort the items of the list in place (the arguments can be used for sort customization, see sorted() for their explanation).

*   `list.reverse()` Reverse the elements of the list in place.

*   `list.copy()` Return a shallow copy of the list. Equivalent to a[:].
