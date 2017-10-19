---
title: List Sort Method
---
## List Sort Method

Lists have a built-in `sort()` method.


```
>>> a = [3, 1, 2]
>>> a.sort()
>>> print(a)
[1, 2, 3]
```

By default `sort()` will sort ascending. `sort()` accepts a `reverse` parameter which you can use to determine the direction of the sort.

To sort descending just pass `reverse=True` to the `sort()` method:
```
>>> a = [3, 1, 2]
>>> a.sort(reverse=True)
>>> print(a)
[3, 2, 1]
```

The `sort()` method returns `None` and modifies the list in place.

The other option for sorting lists or other iterables is the built-it `sorted()` function. The `sorted()` function returns a new sorted list from an iterable.


```
>>> a = [3, 1, 2]
>>> b = sorted(a)
>>> print(a)
[3, 1, 2]
>>> print(b)
[1, 2, 3]
```

By default, `sorted()` will sort ascending. `sorted()` also accepts a `reverse` parameter to control the direction of the sort.

This works the same way as the list `sort()` method.

```
>>> a = [3, 1, 2]
>>> b = sorted(a, reverse=True)
>>> print(a)
[3, 1, 2]
>>> print(b)
[3, 2, 1]
```

The `sorted()` function tends to be more convenient - but if you don't need the original list, the list `sort()` method is slightly more efficient.

Another difference is that the list `sort()` method can only be called on lists. The `sorted()` function can be called on any iterable. (such as a `list`, `str`, or `tuple`)

Both the `sort()` method and the `sorted()` function take a `key` parameter which accepts a function to be called on each element in the list before the sort. This can be used to determine what you want to sort on or if you want to change the data in any way for the sort.

Strings are compared case-sensitively.
```
>>> print(sorted('The dog jumped over the Moon'.split()))
['Moon', 'The', 'dog', 'jumped', 'over', 'the']
```

But if you want case-insensitive string comparison then you can use the `key` parameter.
```
>>> print(sorted('The dog jumped over the Moon'.split(), key=str.lower))
['dog', 'jumped', 'Moon', 'over', 'The', 'the']
```

Here is an example of sorting by a specific field using the `key` parameter:
```
>>> students = [
      ['chad', 20],
      ['fred', 23],
      ['dave', 22],
    ]
>>> print(sorted(students, key=lambda student: student[1]))  # sorted by age
[['chad', 20], ['dave', 22], ['fred', 23]]
```

You have now learned the basics of sorting! Go forth and sort away.
