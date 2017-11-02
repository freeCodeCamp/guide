---
title: List Sort Method
---
## List Sort Method

The `sort()` method, as the name describes, arranges the items in the list in sorted order.

#### Syntax

list.sort(key=…,  reverse=[True/False])

#### Parameters

There are two optional parameters to this method
<br><br>
<i>key</i> - The input value for the key parameter should be a function that takes a single argument 	and returns a value used for comparisons to sort the items in the list
<br><br>
<i>reverse=[value]</i>
<br>
<i>value=True</i> : Sorts the items in the list in descending order
<br>
<i>value=False</i> : Sorts the items in the list in ascending order. This is considered the default value.
<br><br>
Please note that the `sort()` method does not return any value. It modifies the original list.

#### Example Usage

```py
a = [4, 2, 5, 3, 1]
a.sort()
print a # prints [1, 2, 3, 4, 5]

b = ['free', 'code', 'camp']
b.sort()
print b # prints ['camp', 'code', 'free']
```

Consider an example with the <b>reverse</b> parameter

```py
a = [4, 2, 5, 3, 1]

#Sorts the list in descending order
a.sort(reverse=True)

print a # prints [5, 4, 3, 2, 1]
```

If you want to sort the list based on your own function, then use the <b>key</b> parameter. 
<br>Here is an example to sort the strings in the list by length, in ascending order

#### Example Usage

```py
a = ["hello", "hi", "hey"]

#The built-in len() function is given as an input to key parameter to sort the strings by length
a.sort(key = len) 

print a # prints ['hi', 'hey', 'hello']
```

Here is another example, where the list contains tuples(name, age). <br>The usage below shows how to sort the list by age, in ascending order.

```py
#Consider the second element in the tuple for sorting
>>> def compareByAge(element):
...     return element[1]

b = [('Adam', 20), ('Rahman', 30), ('Rahul', 25)]

#Sort the list by age
b.sort(key = compareByAge)

#Output
print b # prints [('Adam', 20), ('Rahul', 25), ('Rahman', 30)]
```

#### More Information:

Python also has a built-in function `sorted()` that builds a new sorted list from an iterable. While `sort()` modifies the original list, `sorted()` returns an iterable list, leaving the original input unmodified.

#### Example Usage

```py
a = [4, 2, 5, 3, 1]
print sorted(a) # prints [1, 2, 3, 4, 5]
```

More information about sort() and sorted() can be found <a href='https://docs.python.org/3.6/tutorial/datastructures.html' target='_blank' rel='nofollow'>here</a>
