---
title: Python Defining Functions
---
[Python Docs](https://docs.python.org/3/tutorial/controlflow.html#defining-functions)

We can create a function that writes the Fibonacci series to an arbitrary boundary:

    >>> def fib(n):    # write Fibonacci series up to n
    ...     """Print a Fibonacci series up to n."""
    ...     a, b = 0, 1
    ...     while a < n:
    ...         print(a, end=' ')
    ...         a, b = b, a+b
    ...     print()
    ...
    >>> # Now call the function we just defined:
    ... fib(2000)
    0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987 1597

The keyword [def](https://docs.python.org/3/reference/compound_stmts.html#def) introduces a function definition. It must be followed by the function name and the parenthesized list of formal parameters. The statements that form the body of the function start at the next line, and must be indented.

The first statement of the function body can optionally be a string literal; this string literal is the function's documentation string, or docstring. (More about docstrings can be found in the section Documentation Strings.) There are tools which use docstrings to automatically produce online or printed documentation, or to let the user interactively browse through code; it's good practice to include docstrings in code that you write, so make a habit of it.