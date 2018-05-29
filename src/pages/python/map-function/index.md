---
title: Map function
---
### Map

Map is used to apply a function on all the elements of an iterable. It returns an iterable that is of the same size as the one passed to the function. The function can be explicitly defined, but more commonly nameless functions, i.e. lambda expressions are used. Map function is commonly used in functional programming.

```python
l = [1, 2, 3, 4]
# Multiply every element of l by 2
l_new = map(lambda x: x * 2, l)
print l_new # [2, 4, 6, 8]
```

Note that map acts on all the elements of the iterable and returns an iterable of the same sie as the one that was passed to it.

#### More information
- https://docs.python.org/2/library/functions.html#map
