---
title: List Sort Method
---
## List Sort Method

Python lists have a built-in ```sort()``` method that modifies the list in-place and a ```sorted()``` built-in function that builds a new sorted list from an iterable.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### Sorting Basics
<!-- Please add any articles you think might be helpful to read before writing the article -->
A simple ascending sort is very easy -- just call the sorted() function. It returns a new sorted list:

```python
>>> sorted([5, 2, 3, 1, 4])
[1, 2, 3, 4, 5]
```
You can also use the list.sort() method of a list. It modifies the list in-place (and returns None to avoid confusion). Usually it's less convenient than sorted() - but if you don't need the original list, it's slightly more efficient.

```python
>>> a = [5, 2, 3, 1, 4]
>>> a.sort()
>>> a
[1, 2, 3, 4, 5]
```
Another difference is that the list.sort() method is only defined for lists. In contrast, the sorted() function accepts any iterable.

```python
sorted({1: 'D', 2: 'B', 3: 'B', 4: 'E', 5: 'A'})
[1, 2, 3, 4, 5]
```
#### sort() Parameters
By default, sort() doesn't require any extra parameters. However, it has two optional parameters:
⋅⋅*reverse - If true, the sorted list is reversed (or sorted in Descending order)
⋅⋅*key - function that serves as a key for the sort comparison

#### More Information:
More information about ```sort()``` can be found [here](https://docs.python.org/3/library/functions.html#sorted)

