---
title: Filter function
---
### Filter

Filter is used to filter the elements of an iterable according to a function passed to it. It returns an iterable that is of the same type as the one passed to it. The function can be explicitly defined, but more commonly nameless functions, i.e. lambda expressions are used. Filter function is commonly used in functional programming.

```python
l = [1, 2, 3, 4]
# Get all elements less than 3
l_new = map(lambda x: x < 3, l)
print l_new # [1, 2]
```

In the above example the element under consideration is included in the new array if and only if the function or lambda expression returns true for the element.

#### More information
- https://docs.python.org/2/library/functions.html#filter
