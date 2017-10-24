---
title: Lambda Expressions
---
## Lambda Expressions

The lambda operator or lambda function is a way to create small anonymous functions, i.e. functions without a name. These functions are throw-away functions, i.e. they are just needed where they have been created. Lambda functions are mainly used in combination with the functions filter() and map().

The general syntax of a lambda function is quite simple:
lambda argument_list: expression 
The argument list consists of a comma separated list of arguments and the expression is an arithmetic expression using these arguments. You can assign the function to a variable to give it a name. 
The following example of a lambda function returns the sum of its two arguments:

```
>>> f = lambda x, y: x + y
>>> f(1,1)
2
```

### The Map Function

The advantage of the lambda operator can be seen when it is used in combination with the map() function. 
map() is a function with two arguments:

```
r = map(func, seq)
```

The first argument func is the name of a function and the second a sequence (e.g. a list) seq. map() applies the function func to all the elements of the sequence seq. It returns a new list with the elements changed by func

 By using lambda, we wouldn't have had to define and name the functions.
 
 ```
>>> Celsius = [39.2, 36.5, 37.3, 37.8]
>>> Fahrenheit = map(lambda x: (float(9)/5)*x + 32, Celsius)
>>> print Fahrenheit
[102.56, 97.700000000000003, 99.140000000000001, 100.03999999999999]
```

### The Filter Function

The function filter(function, list) offers an elegant way to filter out all the elements of a list, for which the function function returns True. The function filter(f,l) needs a function f as its first argument. f returns a Boolean value, i.e. either True or False. This function will be applied to every element of the list l. Only if f returns True will the element of the list be included in the result list.

```
>>> fib = [0,1,1,2,3,5,8,13,21,34,55]
>>> result = filter(lambda x: x % 2 == 0, fib)
>>> print result
[0, 2, 8, 34]
```

#### Sources
https://www.python-course.eu/lambda.php
https://docs.python.org/3/reference/expressions.html#lambda

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
