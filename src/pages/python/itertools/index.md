---
title: Itertools
---

Itertools is a python module of functions that return generators, objects that only function when iterated over. 
Some examples of itertool functions include but not limited to: chain(), imap(), product(), and compress().


### chain()

The chain() function takes several iterators as arguments and returns a single iterator that produces the contents of all of them as though they came from one sequence

```py
import itertools
list(itertools.chain([1, 2], [3, 4]))

# Output
# [1, 2, 3, 4]
```

### islice()

The islice() function returns an iterator which returns selected items from the input iterator, by index. It takes the same arguments as the slice operator for lists: start, stop, and step. Start and stop are optional

```py
import itertools
list(itertools.islice(count(), 5))

# Output
# [0,1, 2, 3, 4]
```

### izip()

izip() returns an iterator that combines the elements of several iterators into tuples. It works like the built-in function zip(), except that it returns an iterator instead of a list.

```py
import itertools
list(izip([1, 2, 3], ['a', 'b', 'c']))

# Output
# [(1, 'a'),(2, 'b'),(3, 'c')]
```

