---
title: Lambda Expressions
---
## Lambda Expressions

Lambda Expressions in Python provides us a way for declaring mini anonymous functions. Lambda functions behave just like regular functions declared with the `def` keyword. 
Lambda Expressions are ideally used when we have something simple to be done an we are more interested in quickly getting the job done rather than formally naming the function.

#### Syntax of Lambda Function
`lambda arguments: expression`

Lambda functions can have any number of arguments but only one expression

#### Example code
```py
# Lambda function to calculate square of a number
square = lambda x: x ** 2
print(square(3)) # Output: 9

# Traditional function to calculate square of a number
def square1(num):
  return num ** 2
print(square(5)) # Output: 25

```
In the above lambda example `lambda x: x ** 2` yields an anonymous function object which can be associated with any name.
So, we associated the function object with `square` and hence from now on we can call the `square` object like any traditional function. e.g. `square(10)`


#### More Information:

- [Official Doc](https://docs.python.org/3/reference/expressions.html#lambda)
- [Further Read](https://dbader.org/blog/python-lambda-functions)
