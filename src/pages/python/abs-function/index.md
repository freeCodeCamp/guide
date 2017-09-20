---
title: Python Abs Function
---
`abs()` is a built-in function in Python 3, to compute the absolute value of any number. It takes one argument `x`. The argument can even be a <a href='https://docs.python.org/3.0/library/cmath.html' target='_blank' rel='nofollow'>complex number</a>, and in that case its <a href='http://www.mathcentre.ac.uk/resources/sigma%20complex%20number%20leaflets/sigma-complex9-2009-1.pdf' target='_blank' rel='nofollow'>modulus</a> is returned.

## Argument

It takes one argument `x` - an integer, or decimal, or a complex number.

## Return Value

The return value would be a positive number. Even if complex number is passed, it would return its magnitude, computed as per complex number algebra.

## Code Sample

    print(abs(3.4)) # prints 3.4
    print(abs(-6)) # prints 6
    print(abs(3 + 4j)) # prints 5, because |3 + 4j| = 5

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CL8k/0' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#abs' target='_blank' rel='nofollow'>Official Docs</a>