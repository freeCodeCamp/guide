---
title: Lambda Expressions
---

Python supports the creation of anonymous functions called lambda expressions.
In short lambda is a python function without a name.

## Syntax

`lambda var_1,var_2,...,var_n: return expression(var_1,var_2,...,var_n)`

## Arguments

It takes any number of arguments.

## Return Value

An expression consisting of given arguments is evaluated and returned. 

## Code Sample
    >>> def f (x): return x*x
    ... 
    >>> print f(10)
    100
    >>> 
    >>> g = lambda x,y: x*y
    >>> 
    >>> print g(10,10)
    100
In above example, f is a function where as `lambda x,y: x*y` is a lambda expression which is assigned to g.

    >>> num=range(2,10)
    >>> print filter(lambda x:x%2==0,num)
    [2, 4, 6, 8]
    >>> print map(lambda x:x*3+10,num)
    [16, 19, 22, 25, 28, 31, 34, 37]
In the above examples the lambda expression is used instead of a function.

<a href='https://docs.python.org/3/reference/expressions.html#lambda' target='_blank' rel='nofollow'>Official Docs</a>

