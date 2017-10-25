---
title: Lambda Expressions
---
You can use lambda expressions to define simple functions without using the normal function syntax. 

> Note: You can usually use list comprehensions to achieve the same result.

> Fun fact: Guido Van Rossum dislikes lambda functions and prefers list comprehensions.*

## Lambda Expressions

### Definition

Lambda expressions (a.k.a. lambda forms) create *anonymous functions* - Python creates a function object but it doesn't have a callable name (unless you assign it one).

The lambda expression format is:
```Python
lambda argument_list: expression
```

That expression is interpreted as: 
```Python
def <lambda>(argument_list):
  return expression
```

### Use

Programmers save time and reduce code complexity by using lambda expresesions in place of traditional functions. Here's an example:

Traditional function:
```Python
def f(x):
  return x 1
>>> f(10)
11
```
But if you use a lambda expression, you need only one line for the same effect. 
```Python
>>> f = lambda x: x + 1
>>> f(10)
    11
```

Among other things, you can use lambda expressions to do the following:
* Multiple assignment:
```Python
>>> f = lambda x,y: x + y
>>> f(5,2)
    7
```

* Conditional statements (no need to use return statements):
```Python
>>> f = lambda x,y: x if x >= y and x < 2 else "sorry"
>>> f(5,5)
'sorry'
>>> f(1,0)
1
```

As you can see, lambda expressions are great for quick functions as they are less verbose than traditional function definitions.

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda

