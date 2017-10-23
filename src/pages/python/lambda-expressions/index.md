---
title: Lambda Expressions
---
## Lambda Expressions

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/python/lambda-expressions/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->


Lambda functions in Python are a short way to define functions that transform an input to an output. They are sometimes also called anonymous functions, as it is not necessary to provide a name for lambda functions. This makes a nice and concise way to perform simple operations.

Use cases are often places where you want to perform a function, but you don't see the need to define this function for the rest of the program to interpret it. Then, lambda functions can come in handy. Refer also to the examples below. 

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda

## Examples:

### Beginner:
 >>> lambda_func = lambda x: x**2     # Function that takes an integer and returns its square
 >>> lambda_func(3)
    9

### Intermediate:
>>> lambda_func = lambda x: True if x**2 >= 10 else False
>>> lambda_func(3)
  False
>>> lambda_func(4)
  True
  
### Complex:
>>> my_dict = {"A": 1, "B": 2, "C": 3}
>>> sorted(my_dict, key=lambda x: my_dict[x]%3)
  ['C', 'A', 'B']
