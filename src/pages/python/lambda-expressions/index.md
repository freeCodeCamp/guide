---
title: Lambda Expressions
---
## Lambda Expressions

Lambda Expressions in Python are a short way to declare small and anonymous functions (it is not necessary to provide a name for lambda functions). Lambda functions behave just like regular functions declared with the `def` keyword. They come in handy when you want to define a small function in a concise way.

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

## Examples

### Beginner
```py
lambda_func = lambda x: x**2 # Function that takes an integer and returns its square
lambda_func(3) # Returns 9
```

### Intermediate
```py
lambda_func = lambda x: True if x**2 >= 10 else False
lambda_func(3) # Returns False
lambda_func(4) # Returns True
```

### Complex
```py
my_dict = {"A": 1, "B": 2, "C": 3}
sorted(my_dict, key=lambda x: my_dict[x]%3) # Returns ['C', 'A', 'B']
```

#### More Information:
- [Official Doc](https://docs.python.org/3/reference/expressions.html#lambda)
- [Further Read](https://dbader.org/blog/python-lambda-functions)
