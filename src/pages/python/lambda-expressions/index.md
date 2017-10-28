---
title: Lambda Expressions
---

## Lambda Expressions

Lambda expressions are used to create anonymous functions. Once created, a lambda function can be passed into other functions as an anonymous argument, or be assigned a name like a regular function. Lambda functions cannot contain statements, and their return values are always evaluated from an expression.

The syntax form for a lambda expression is:

```python
lambda parameter_list : expression
```

where ```lambda``` is the keyword, ```parameter_list``` is the same as when defining a normal function, and ```expression``` is used to evaluate the returning value.


### Examples and Usage

Lambda expressions are just shortcuts, or "syntactic to regular functions. There is nothing that only they can accomplish. In the end, their goal is to simplify certain tasks and make code more clean and understandable.


#### Cubing a Number

The following is a valid lambda expression for cubing a number:

```Python
lambda x : x ** 3
```

However, even though it is valid, it just floats there and doesn't do anything. Remember they are anonymous.

Let's give it a name, just like with any variable:

```Python
cuber = lambda x : x ** 3
```

Congrats! Now your lambda expression has a name! With this reference, we can now call it like any other function. For example, ```cuber(6)``` will return ```216```. Note that all of this is one simple line without using ```def```, ```return```, or parentheses. 


#### Passing to a Function

An *anonymous* lambda expression wouldn't be very useful if we always have to give it a name when we define it. Instead of giving it a name directly, we can pass a lambda expression as a parameter to another function.

Consider the following function:

```Python
#calculates the average slope between two points on an equation
def average(equation, x1, x2):
  return (equation(x1) - equation(x2)) / (x1 - x2)
```

The function takes another function as a parameter as well as two X values, and computes the average slope. It would behave differently according to the equation it receives. Since an equation is just one expression, it's a perfect chance to use lambda expressions. Instead of writing:

```Python
def f(x):
  return x ** 2 + 5 * x + 7
  
average(f, 0, 4)
```

We could write like this:

```Python
average(lambda x : x ** 2 + 5 * x + 7, 0, 4)
```

Lambda expressions can be passed like this anytime a function parameter is needed. 

#### Using the ```map()```, ```filter()```, and ```reduce()``` Functions

Python already has three very useful built-in functions where lambda expressions can be used: ```map()```, ```filter()```, and ```reduce()```.

```map(function, a_list)``` can be used when we want to apply a function to every item in a list. For example, 

```Python
list(map(lambda x: x * 3, [1, 3, 5, "a", [2]]))
``` 

gives ```[3, 9, 15, 'aaa', [2, 2, 2]]```


```filter(test, a_list)``` creates a list of elements for which a function returns true. Example:

```Python
list(filter(lambda x: x % 3 == 0, [1, 3, 5, 7, 9]))
``` 

would give ```[3, 9]```

Finally, ```reduce(function, a_list)``` from the ```functools``` module, applies a rolling computation to sequential pairs of values in a list. For example, to compute the product of numbers in a list, we can write:

```Python
from functools import reduce
product = reduce((lambda x, y: x * y), [1, 2, 3, 4])
```

Which, in this case, would give us 24

### Sources & More Information:

[Official Python 3 Documentation on Lambda Expressions](https://docs.python.org/3/reference/expressions.html#lambda)

[Map, Filter, and Reduce](http://book.pythontips.com/en/latest/map_filter.html)
