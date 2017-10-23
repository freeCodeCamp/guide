---
title: Lambda Expressions
---
## Lambda Expressions
<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Lambda expressions create what are called anonymous functions, or functions that are not necessarily bound to a name. Lambda expressions are best understood when looking at examples. The following is the difference between a normal Python function definition and a lambda function definition:

```python
>>> def f (x): return x**2
>>>
>>> print f(8)
64
>>> 
>>> g = lambda x: x**2
>>> 
>>> print g(8)
64

```
The two functions do exactly the same thing, but the lambda definition does not contain a ```return``` statement. This is because lambda expressions are required to always contain an expression that is returned. 

The main use of lambda expressions are when you want to use a function instantly then forget about it, such as in the following cases:

```python
>>> foo = [2, 18, 9, 22, 17, 24, 8, 12, 27]
>>> 
>>> print filter(lambda x: x % 3 == 0, foo)
[18, 9, 24, 12, 27]
>>> 
>>> print map(lambda x: x * 2 + 10, foo)
[14, 46, 28, 54, 44, 58, 26, 34, 64]
>>> 
>>> print reduce(lambda x, y: x + y, foo)
139
```

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
http://www.secnetix.de/olli/Python/lambda_functions.hawk
