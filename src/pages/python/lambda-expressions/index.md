---
title: Lambda Expressions
---
## Lambda Expressions

One of Python's most useful tools is the lambda expression. lambda expression allows us to create "anonymous" functions, this basically means we can create a function without having to properly define a function using `def`.

lambda's body is a single expression, not a block of statements.

## When do we use lambda?
We should use `lambda` for coding simple functions and use `def` to create a function for larger more complex tasks.

## Example:
Let's create a normal function and then convert it to use lambda.

```
# A function to get cube of a number
def cube(num):
    return num ** 3
>>> cube(3)
27
>>> type(cube)
<class 'function'>
```
Now let's try to build the same `cube` function using lambda
```
lambda_cube = lambda x: x**3
>>> lambda_cube(3)
27
type(lambda_cube)
<class 'function'>
```

Let's see another example:

```
def even_check(num):
    return num % 2 == 0
>>> even_check(23)
False
>>> even_check(24)
True
```
Now let's turn this function into a lambda expression

```
lambda_even_check = lambda num: num % 2 == 0
>>> lambda_even_check(23)
False
>>> lambda_even_check(24)
True
```
A lambda expression to add three numbers:
```
adds_three_nums = lambda x,y,z: x+y+z
>>> adds_three_nums(23,49,72)
144
```
#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
