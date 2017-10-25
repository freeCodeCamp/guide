---
title: Lambda Expressions
---
## Lambda Expressions

As in other languages, Python supports lambda expressions (also known as anonymous), which are characterized by returning an anonymous function when it is assigned to a variable. Lambda expressions can not contain loops and can not use the return keyword to return a value. The syntax for creating a lambda expression is as follows:

```
# lambda parameter: expression

# i.e.
lambda x: x * 2
```

In practice, the utility of lambda functions is that it allows us to define a function directly in the code that will make use of it. That is, it allows us to define inline functions.

This is useful, for example, to define a list with different actions that will be executed on demand. Suppose we want to execute two different functions by passing the same parameter, both functions being defined in a certain list. Instead of defining three distinct functions using def, let's use lambda functions:

```
my_list = [lambda x: x * 2, lambda x: x * 3]
my_param = 3

for expression in my_list:
    print(expression(my_param))
    
# Result:
6
9
```


For more information [Lambda documentation](https://docs.python.org/3/reference/expressions.html#lambda)
