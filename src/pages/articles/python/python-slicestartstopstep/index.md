---
title: Python Slicestartstopstep
---
`slice(start:stop[:step])` is an object usually containing a portion of a sequence. A slice is created using the subscript notation, [] with colons between numbers when several are given, such as in variable_name[1:3:5].

## Arguments

This function can be used to slice tuples, arrays and lists.

The value of the `start` parameter (or None if not provided)

The value of the `stop` parameter (or last index of sequence)

The value of the `step` parameter (or None if not provided). It cannot be 0.

All three must be of integer type.

## Return

If only `stop` is provided, it generates portion of sequence from index `0` till `stop`.

If only `start` is provided, it generates portion of sequence after index `start` till last element.

If both `start` and `stop` are provided, it generates portion of sequence after index `start` till `stop`.

If all three `start`, `stop` and `step` are provided, it generates portion of sequence after index `start` till `stop` with increment of index `step`.

## Example

    a = [ 1, 2, 3, 4, 5, 6, 7, 8]
    print(a[:5])    # prints [1, 2, 3, 4, 5]
    print(a[2:])    # prints [3, 4, 5, 6, 7, 8]
    print(a[2:5])    # prints [3, 4, 5]
    print(a[2:7:2])    # prints [3, 5, 7]

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") [Run Code](https://repl.it/CT5h)

[Official Documentation](https://docs.python.org/3/library/functions.html#slice)