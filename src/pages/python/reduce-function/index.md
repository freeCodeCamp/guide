---
title: Reduce function
---
### Reduce

Reduce is used to apply a function on two elements of an iterable at a time, until the iterable is reduced to a single value. It returns a single value, which is of the same type as the elements of the iterable. The function can be explicitly defined, but more commonly nameless functions, i.e. lambda expressions are used. The function should have two arguments, which take the values of two adjacent elements of the iterable at a time.Reduce function is commonly used in functional programming.

```python
l = [1, 2, 3, 4]
# Add all elements of l
l_new = reduce(lambda x, y: x + y, l)
print l_new # 10
```

Note that reduce always returns a single value, whose type is the same as that of the elements of the iterable

#### More information
- https://docs.python.org/2/library/functions.html#reduce
