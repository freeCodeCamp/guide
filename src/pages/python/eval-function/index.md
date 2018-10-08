---
title: Python Eval Function
---
The `eval()` expression is a very powerful built-in function of Python. It helps in evaluating a mathematical expression. The expression can be a Python statement, or a code object.
The arguments are a string and an optional globals and locals. If provided, globals must be a dictionary. If provided, locals can be any mapping object.

## Argument

It typically takes one argument `x` - a string.

## Return Value

The return value would be the result of the evaluated mathematical expression.

## Code Sample

    print(eval("9 + 5")) # prints 14
    x = 2
    print(eval("x + 3")) # prints 5 as x variable will be replaced by its value 2 

![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/@StuffsExplained/pythonEvalFunction' target='_blank' rel='nofollow'>Run Code</a>

<a href='https://docs.python.org/3/library/functions.html#eval' target='_blank' rel='nofollow'>Official Docs - Python 3</a>

<a href='https://docs.python.org/2/library/functions.html#eval' target='_blank' rel='nofollow'>Official Docs - Python 2.7</a>

