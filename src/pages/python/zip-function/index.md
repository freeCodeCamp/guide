---
title: Python Zip Function
---
`zip()` is a built-in function in Python that returns a list of tuples. The nth tuple will have the nth element from each of the iterable arguments. If the arguments in the sequence are of unequal lengths, it will return a list truncated to the length of the shortest iterable.

## Argument

Any number of iterables separated by comma.

## Return Value

A list of tuple of nth element from all sequences

## Code Sample

    nums = [1,2,3,4]
    print(*nums) # prints 1 2 3 4
    numsAndNames = zip([1,2,3],['one','two','three'])
    print(*numsAndNames) # prints (1,'one') (2,'two') (3,'three')

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/@StuffsExplained/pythonZipFunction' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3.3/library/functions.html#zip' target='_blank' rel='nofollow'>Official Docs - Python 3</a>

<a href='https://docs.python.org/2/library/functions.html#zip' target='_blank' rel='nofollow'>Official Docs - Python 2.7</a>
