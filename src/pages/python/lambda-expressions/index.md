---
title: Lambda Expressions
---
## Lambda Expressions

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Lambda expressions are anonymous functions created at runtime. They are commonly used in conjunction with other Python functional components like filter(), map() and reduce(). 
Example
```python 
lambda x: x**2
```
This function computes the square of any number. This could for example be used inside a map() which is used to apply a function to each element of an iterator as shown below:
```python
numbers = list(range(10))
print(numbers)
# [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
square_numbers = list(map(lambda x: x**2, numbers))
print(square_numbers)
# [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
```
[Try the code snippet](https://repl.it/NCdh/0)

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
