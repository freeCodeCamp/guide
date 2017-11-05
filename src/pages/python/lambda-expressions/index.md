---
title: Lambda Expressions
---
## Lambda Expressions

Lambda expression is a breakdown of a function.

Lambda Expressions are ideally used when we have something simple to be done an we are more interested in quickly getting the job done rather than formally naming the function.

### Regular Function
```python
def square(num):
    result = num**2
    return result
print(square(2))
```
### Lambda Expression
```python
square = lambda num: num**2
print(square(2))
```
