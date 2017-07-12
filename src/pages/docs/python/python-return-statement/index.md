---
title: "Python return Statement"
parent: "python"
---

[Python Docs](https://docs.python.org/3/reference/simple_stmts.html#the-return-statement)

All functions return a value when called.

If a return statement is followed by an expression list, that expression list is evaluated and the value is returned:

    >>> def greater_than_1(n):
    ...     return n > 1
    ...
    >>> print(greater_than_1(1))
    False
    >>> print(greater_than_1(2))
    True

If no expression list is specified, `None` is returned:

    >>> def no_expression_list():
    ...     return    # No return expression list.
    ...
    >>> print(no_expression_list())
    None

If a return statement is reached during the execution of a function, the current function call is left at that point:

    >>> def return_middle():
    ...     a = 1
    ...     return a
    ...     a = 2     # This assignment is never reached.
    ...
    >>> print(return_middle())
    1

If there is no return statement the function returns None when it reaches the end:

    >>> def no_return():
    ...     pass     # No return statement.
    ...
    >>> print(no_return())
    None
