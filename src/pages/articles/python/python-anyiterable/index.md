---
title: Python Anyiterable
---
`any()` is a built-in function in Python 3, to check if any of the items of an [_iterable_](https://docs.python.org/3/glossary.html#term-iterable) is `True`. It takes one argument, `iterable`.

## Argument

### iterable

The `iterable` argument is the collection whose entries are to be checked. It can typically be a `list`, `str`, `dict`, `tuple` etc., even a `file object`.

## Return Value

The return value would be a boolean. If and only if **all** entries of iterable are `False`, or the `iterable` is empty; it returns `False`. This function essentially performs a Boolean `OR` operation over all elements.

If even one of them is `True`, it would return `True`.

The `any()` operation is equivalent to (internally, may not be implemented exactly like this)

    def any(iterable):
        for element in iterable:
            if element:
                return True
        return False

## Code Sample

    print(any([])) #=> False
    print(any({})) #=> False
    print(any([6, 7])) #=> True
    print(any([6, 7, None])) #=> True
    print(any([0, 6, 7])) #=> True
    print(any([9, 8, [1, 2]])) #=> True

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CL9c/0)

[Official Docs](https://docs.python.org/3/library/functions.html#any)