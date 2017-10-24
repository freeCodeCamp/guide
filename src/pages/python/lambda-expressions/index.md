---
title: Lambda Expressions
---
## Lambda Expressions

Lambda expressions are a quick and handy way to create simple, one-lined functions on-the-go.

For example, the following user-defined function:

    def my_func():
        print(1 + 2)
        
Can be simplified into the lambda function below:

    my_func = lambda: print(1 + 2)
    
## Incorporating parameters

Lambda expressions also support parameter input, similar to how a conventionally-defined function would.

Let's use a simple addition function as an example:

    def add_two(a, b):
        return a + b

Within a lambda function, the value at the end of the method call would automatically get returned. Therefore, the function above's lambda equivalent would look like this:

    add_two = lambda a, b: a + b
    
    >>> add_two(10, 11)
    21


#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
