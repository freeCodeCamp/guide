---
title: Lambda Expressions
---
## Lambda Expressions

The lambda keyword in Python provides a shortcut for declaring small anonymous functions. Lambda functions behave just like regular functions declared with the def keyword. They can be used whenever function objects are required.

For example, this is how you’d define a simple lambda function carrying out an addition:

>>> add = lambda x, y: x + y
>>> add(5, 3)
8

You could declare the same add function with the def keyword:

>>> def add(x, y):
...     return x + y
>>> add(5, 3)
8

Now you might be wondering: Why the big fuss about lambdas? If they’re just a slightly more terse version of declaring functions with def, what’s the big deal?

Take a look at the following example and keep the words function expression in your head while you do that:

>>> (lambda x, y: x + y)(5, 3)
8

Okay, what happened here? I just used lambda to define an “add” function inline and then immediately called it with the arguments 5 and 3.

Conceptually the lambda expression lambda x, y: x + y is the same as declaring a function with def, just written inline. The difference is I didn’t bind it to a name like add before I used it. I simply stated the expression I wanted to compute and then immediately evaluated it by calling it like a regular function.

Before you move on, you might want to play with the previous code example a little to really let the meaning of it sink in. I still remember this took me a while to wrap my head around. So don’t worry about spending a few minutes in an interpreter session.

There’s another syntactic difference between lambdas and regular function definitions: Lambda functions are restricted to a single expression. This means a lambda function can’t use statements or annotations—not even a return statement.

How do you return values from lambdas then? Executing a lambda function evaluates its expression and then automatically returns its result. So there’s always an implicit return statement. That’s why some people refer to lambdas as single expression functions.

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
