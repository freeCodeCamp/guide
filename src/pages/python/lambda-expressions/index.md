---
title: Lambda Expressions
---
## Lambda Expressions

Lambda expressions (sometimes called lambda forms) are used to create anonymous functions. The expression ```lambda arguments: expression``` yields a function object. The unnamed object behaves like a function object defined with:

```
def <lambda>(arguments):
    return expression
```

### Examples

Defining the anonymous function 
```
double = lambda x: x * 2
```
It's the same as the function object
```
def double(x):
  return x * 2
```
Calling the function
```
print(double(10))
```
Output
```
10
```

### More information:
https://docs.python.org/3/reference/expressions.html#lambda
