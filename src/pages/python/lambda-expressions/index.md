---
title: Lambda Expressions
---
## Lambda Expressions

The lambda operator or lambda function is a way to create small anonymous functions, i.e. functions without a name. These functions are throw-away functions, i.e. they are just needed where they have been created. Lambda functions are mainly used in combination with the functions filter(), map() and reduce().

```
>>> f = lambda x, y : x + y
>>> f(1,1)
2
```
The advantage of the lambda operator can be seen when it is used in combination with the map() function. 

```
>>> Celsius = [39.2, 36.5, 37.3, 37.8]
>>> Fahrenheit = map(lambda x: (float(9)/5)*x + 32, Celsius)
>>> print Fahrenheit
[102.56, 97.700000000000003, 99.140000000000001, 100.03999999999999]
>>> C = map(lambda x: (float(5)/9)*(x-32), Fahrenheit)
>>> print C
[39.200000000000003, 36.5, 37.300000000000004, 37.799999999999997]
>>> 
```

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
