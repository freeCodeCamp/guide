---
title: Lambda Expressions
---
## Lambda Expressions

Lambda Expressions in Python are created using the `lambda` keyword, followed by comma separated parameters and a single expression after a `:` .

```Python
lambda x: x**2 # lambda syntax

pow = lambda x, y: x**y # pow function using lambda
pow(2, 2) # returns 4
```

You can use it with some of python's built-in functions, like `filter` and `map` or with your own functions.

```Python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

even_numbers = filter(lambda x: x%2 == 0, numbers)
# even_numbers = [2, 4, 6, 8]

square_numbers = map(lambda x: x**2, numbers)
# square_numbers = [1, 4, 9, 16, 25, 36, 49, 64, 81]

def my_function(lbd):
  return lbd(10) # Passing 10 to the lambda function

my_function(lambda n: "You gave me a " + str(n))
# 'You gave me a 10'
```
#### More Information:
[Python Documentation: Lambda's](https://docs.python.org/3/tutorial/controlflow.html#lambda-expressions)

[Python Documentation: Filter Function](https://docs.python.org/3/library/functions.html#filter)

[Python Documentation: Map Function](https://docs.python.org/3/library/functions.html#map)

[FreeCodeCamp: Python Functions](https://guide.freecodecamp.org/python/functions)
