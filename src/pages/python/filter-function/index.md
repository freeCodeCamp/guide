---
title: Python Filter Function
---
`filter()` is a built-in python function `filter(function, sequence)`, it offers a convenient way to filter out all the elements of an iterable for which the function returns True. The `function` argument needs to return a boolean value(True or False), this function will be applied to each items in the sequence, only if the function returns True for the given element will the element be returned as a result.

## Note
In Python 3+ `filter()` function returns an iterable filter object instead of a list.

## Arguments
`filter(function, sequence)`
This function takes in two arguments a function and a sequence.


## Code Sample

Let's create a simple program that will filter out or remove any element that is not divisible by 5.

    ```
    >>> my_list = [5,23,49,25,50,11,65]
    >>> filter(lambda x: True if x%5 == 0 else False, my_list)
    <filter object at 0x7f60683a0630> # Filter object is returned for python 3+
    >>> list(filter(lambda x: True if x%5 == 0 else False, my_list))
    [5, 25, 50, 65]
    ```
In the above example the lambda expression gets applied to each element in the `my_list` list and the output returns only those numbers that are divisible by 5.


<a href='https://docs.python.org/3/library/functions.html#filter' target='_blank' rel='nofollow'>Python Doc - Filter</a>
