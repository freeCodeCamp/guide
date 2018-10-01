---
title: Functions
---
## Functions

Functions in Python are created using the `def` keyword, followed by a function name and function parameters inside parentheses.

The `return` keyword is used by the function to return a value, if you don't want to return any value, the default value `None` will returned. 

The function name is used to call the function, passing the needed parameters inside parentheses.

```Python
#this is a basic sum function
def sum(a, b):
  return a + b

result = sum(1, 2)
#result = 3
```

You can define default values for the parameters, that whay you can supress that parameter.

```Python
def sum(a, b=3):
  return a + b

result = sum(1)
#result = 4
```

You can pass the parameters in the order you whant, using the name of the parameter.

```Python
result = sum(b=2, a=2)
#result = 4
```

Functions are also Objects, that way you can assign then to another variable, and use that variable like a function.

```Python
s = sum
result = s(1, 2)
#result = 3
```
#### More Information:
<a href='https://docs.python.org/3/tutorial/controlflow.html#defining-functions' target='_blank' rel='nofollow'>Python 3 Docs: Defining Functions</a>

