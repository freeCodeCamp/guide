---
title: Python Filter Function
---
`filter()` is a built-in function in Python 3 and python 2, that constructs an iterator from the elements of iterable for which the function returns true. It takes two arguments - the function to apply and the iterable on which you wish to apply the function.

## Argument

It takes two arguments - `filter(function,iterable)`

## Return Value

Returns an iterator which contains the elements of the iterable(second argument) for which the function returns true

### Equivalent

When the function is not None - it is equivalent to the generator expression `(item for item in iterable if function(item))` 
When the function is None - it is equivalent to the generator expression `(item for item in iterable if item)`

### Opposite

`itertools.filterfalse()` returns the elements of the iterable for which the function returns false


## Code Sample

    def even(n):
        if n%2==0:
            return True
        else:
            return False
    nums = [1,2,3,4,5]
    print(*nums) # * operator unpack the iterable
    onlyEvens = filter(even,nums) 
    print(*onlyEvens) # filters out the elements of nums using the even function 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/@StuffsExplained/pythonFilterFunction' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#filter' target='_blank' rel='nofollow'>Official Docs</a>

