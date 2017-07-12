---
title: Python Nested Functions
---
>>> def outside_fn():
    ...     def inside_fn():
    ...         print('inside')
    ...     print('outside')
    ...     inside_fn()
    ...
    >>> outside_fn()
    outside
    inside
    >>> inside_fn()
    Traceback (most recent call last):
      File "<stdin>", line 1, in <module>
    NameError: name 'inside_fn' is not defined