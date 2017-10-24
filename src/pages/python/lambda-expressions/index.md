---
title: Lambda Expressions
---
## Lambda Expressions

Developers use ```lambda``` expression to create anonymous function. Technically, ```lambda``` expression could be used in places where ```function``` objects are expected.

### Define a function in normal way

```python
def modulo_three(x):
    return x % 3 == 0
 
bool_y = modulo_three(9)  # bool_y is True
```

### Using lambda expression
```python
bool_y = (lambda x : x % 3 == 0)(9)  # same result as above
```

### But why use lambda over function?
```lambda``` provides a way to write clean code in a situation which meets the following requirement:
* you need a fairly simple function
* the function is going to be used only once

#### More Information:
[Python 3 Docs: Lambda](https://docs.python.org/3/reference/expressions.html#lambda)
