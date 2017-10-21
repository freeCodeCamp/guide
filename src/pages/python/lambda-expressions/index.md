---		
title: Lambda Expressions		
---

## Lambda Expressions
Anonymous function is a function that is defined without a name. Python supports the declaration of anonymous function by using `lambda` keyword, instead of `def` as in normal functions.

### Examples
Here is a lambda function that returns the sum of its two arguments.
``` python
add = lambda x, y: x + y 
add(1,2) # returns 3
```

In the above program, `lambda x, y: x + y` is the lambda function. `x` and `y` are the function arguments, and `x + y` is the expression that gets evaluated by the lambda function. The lambda expression is then stored in `add` variable, which can be called like normal function.

This is the normal function counterpart.
```python
def add(x, y)
    return x + y
add(1,2) # returns 3
```

### When to Use Lambda Expression
Lambda is usually used as an argument to a higher-order function (a function that takes in other functions as arguments).

This is an example use of lambda in `filter()` function that filter out odd numbers from a list.
```python
alist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filter(lambda x: x % 2 == 0, alist) # returns [2, 4, 6, 8, 10]
```

The syntax is more concise and cleaner than this.
```python
def even(x)
    return x % 2 == 0
    
alist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
filter(even, alist) # returns [2, 4, 6, 8, 10]
```


#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
