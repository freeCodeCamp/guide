---
title: Lambda Expressions
---
## Lambda Expressions

Lambda expressions are used to create anonymous or unbound functions.
Semantically, they are just syntactic sugar for a normal function definition
<sup>[1](https://docs.python.org/3/tutorial/controlflow.html#lambda-forms)</sup>.

```python
def double(x):
    """Doubles the value passed in"""
    return 2 * x

lambda_double = lambda x: 2 * x
```

In the above example, both `double` and `lambda_double` do the exact same thing
and can be used in the same way.

```python
>>> double(2)
4
>>> lambda_double(2)
4
```

Syntactically, lambda functions are restricted to a single expression and hence
do not contain a `return` statement. They also do not need to be assigned to a
variable, but can be used anywhere a function object is expected.

Lambda expressions are ideal for simple functions that are used only once, for
example in `filter()`, `map()`, and `reduce()`.

```python
>>> print(list(map(lambda x: x**2, [1, 2, 3])))
[1, 4, 9]
```
Lambda functions can reference variables from the containing scope;

```python
>>> def make_subtractor(n):
...     """Return callable which subtracts `n` from the passed in value"""
...     return lambda x: x - n

>>> sub = make_subtractor(5)
>>> f(23)
17
>>> f(9)
4
```
Unlike regular functions, lambda functions cannot contain statements or annotations.

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
