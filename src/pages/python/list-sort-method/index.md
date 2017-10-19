---
title: List Sort Method
---
## List Sort Method
Python lists have a built-in list.sort() method that modifies the list in-place. There is also a sorted() built-in function that builds a new sorted list from an iterable.

Example:
```python
 l = [8,9,6,5,4,7,2,1]
 print(l.sort())
 print(sorted(l))
```
Output:
```python
[1,2,4,5,6,7,8,9]
[1,2,4,5,6,7,8,9]
```

### You can use list.sort() method and sorted() function with different data types.

#### Sorting a string.
```python
print(sorted("This is a test".split(), key=str.lower))
```

Output:
```python
['a', 'is', 'test', 'This']
```

#### Sorting a list of tuples
```python
student_tuples = [('john', 'A', 15),('jane', 'B', 12),('dave', 'B', 10)]
print(sorted(student_tuples, key=lambda student: student[2])) #sort by age
```
Output:
```python
[('dave', 'B', 10), ('jane', 'B', 12), ('john', 'A', 15)]
```
### Sorting in Reverse order
Both list.sort() and sorted() accept a reverse parameter with a boolean value. This is used to flag descending sorts.
Example:
```python
l = [3,6,9,5,2,4]
print(sorted(l,reverse=True))
```
Output:
```python
[9, 6, 5, 4, 3, 2]
```

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/python/list-sort-method/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

You can get more information and code examples on this link
<a href='https://docs.python.org/3/howto/sorting.html' target='_blank' rel='nofollow'>For more info</a>.
