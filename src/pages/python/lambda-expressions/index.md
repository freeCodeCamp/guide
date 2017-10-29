---
title: Lambda Expressions
---
## Lambda Expressions

Lambda expressions or Lambda functions are used to create throw-away functions which are to be used where they are created without giving them a name. Hence, they are also known as anonymous functions i.e. functions without a name.

### Syntax
```python
lambda argument_list: expression
```
argument_list is a list of comma-separated arguments, and expression is any operation on those arguments.

### Example
The following example calculates the square of a number.
```python
>>> square = lambda x: x * x
>>> square(5)
25
>>> square(-2)
4
```
In the above example, the statement
```python
square = lambda x: x * x
```
is equivalent to
```python
def square(x):
    return x * x
```

### Where is it used?
Lambda expressions are commonly used with python built-in functions like [map()](https://docs.python.org/3/library/functions.html#map), [reduce()](https://docs.python.org/2/library/functions.html#reduce), [filter()](https://docs.python.org/2/library/functions.html#filter).

### Usage with map()
Quick way to double all the items in a list.
```python
>>> num_list = [1, 2, 3, 4, 5, 6]
>>> map(lambda x: x * 2, num_list)
[2, 4, 6, 8, 10, 12]
```

NOTE: In python 3, "reduce" has been moved to [functools.reduce()](https://docs.python.org/3/library/functools.html#functools.reduce)

#### More Information:
* Python2: https://docs.python.org/2/tutorial/controlflow.html#lambda-expressions 
* Python3: https://docs.python.org/3/reference/expressions.html#lambda
