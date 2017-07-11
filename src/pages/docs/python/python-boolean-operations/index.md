---
title: "Python Boolean Operations"
parent: "python"
---

[`and`](https://docs.python.org/3/reference/expressions.html#and), [`or`](https://docs.python.org/3/reference/expressions.html#or), [`not`](https://docs.python.org/3/reference/expressions.html#not)

[Python Docs - Boolean Operations](https://docs.python.org/3/library/stdtypes.html#boolean-operations-and-or-not)

These are the Boolean operations, ordered by ascending priority:

Operation | Result | Notes  
--------- | ------------------------------------ | -----  
x or y | if x is false, then y, else x | (1)  
x and y | if x is false, then x, else y | (2)  
not x | if x is false, then True, else False | (3)

**Notes:**

1.  This is a short-circuit operator, so it only evaluates the second argument if the first one is False.
2.  This is a short-circuit operator, so it only evaluates the second argument if the first one is True.
3.  not has a lower priority than non-Boolean operators, so not a == b is interpreted as not (a == b), and a == not b is a syntax error.

## Examples:

### `not`:

    >>> not True
    False
    >>> not False
    True

### `and`:

    >>> True and False    # Short-circuited at first argument.
    False
    >>> False and True    # Second argument is evaluated.
    False
    >>> True and True     # Second argument is evaluated.
    True

### `or`:

    >>> True or False    # Short-circuited at first argument.
    True
    >>> False or True    # Second argument is evaluated.
    True
    >>> False or False   # Second argument is evaluated.
    False
