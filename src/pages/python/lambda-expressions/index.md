---
title: Lambda Expressions
---
## Lambda Expressions

Lambda exmpressions are small anonymous functions created with the ```lambda``` keyword. You can use lambda functions wherever functions objects are required.

### Syntax
The syntax for lambda expressions is:
```python
lambda parameters: expression
```
1. The ```lambda``` keyword indicates de start of the lambda expression definition
2. The ```parameters``` that will be used in the lambda expression
3. The ```expression``` to be evaluated and returned

You can put any number of parameters but only one expression in lambda expressions.

### Example
You can declare a variable add_numbers usinga a lambda expression:
```python
add_numbers = lambda a, b: a + b
```
If you try it in the Python shell you get:
```shel
>>> add_numbers = lambda a, b: a + b

>>> add_numbers
... <function __main__.<lambda>>

>>> add_numbers(1, 2)
... 3
```

This function returns the sum of its two arguments.

### When you use lambda expressions?
Usualy you use lambda expressions when you need that function for a shor period of time and you really don't care about naming it. Generally you use these expressions as arguments for higher order functions (functions that take another functions as arguments), for example [map()](https://docs.python.org/3/library/functions.html#map), [filter()](https://docs.python.org/3/library/functions.html#filter) and [reduce()](https://docs.python.org/3/library/functools.html#functools.reduce).

#### Example with filter() function
The ```filter()``` function in Python takes in a function and a [iterable](https://docs.python.org/3/glossary.html#term-iterable) as arguments.

``` shell
>>> my_list = [1, 5, 4, 6, 8, 11, 3, 12]

>>> new_list = list(filter(lambda x: (x%2 == 0) , my_list))

>>> new_list
... [4, 6, 8, 12]
```
The function is called for each item in ```my_list```  and returns a ```new_list``` with items for wich the lambda expression evaluated to ```True```

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda

https://www.programiz.com/python-programming/anonymous-function
