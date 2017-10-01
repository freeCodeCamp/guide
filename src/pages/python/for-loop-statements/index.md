---
title: For Loop Statements
---
## For Loop Statements

For loops iterate over a collection based data structures like lists, tuples, and dictionaries.

Some ways in which For loops are used: 

* Iterate over the range() function
```python
for i in range(10):
    print(i)
```
Output:
```
>
0
1
2
3
4
5
6
7
8
9
>
```

* Iterate over values in a list or tuple
```python
A = ["hello", 1, 65, "thank you", [2, 3]]
for value in A:
    print(value)
```
Output:
```
>
hello
1
65
thank you
[2, 3]
>
```

* Iterate over keys in a dictionary (aka hashmap)
```python
fruits_to_colors = {"apple": "#ff0000",
                    "lemon": "#ffff00",
                    "orange": "#ffa500"}

for key in fruits_to_colors:
    print(key, fruits_to_colors[key])
```
Output:
```
>
apple #ff0000
lemon #ffff00
orange #ffa500
>
```

* Iterate over a list and get the corresponding index with the enumerate() function
```python
A = ["this", "is", "something", "fun"]

for index,word in enumerate(A):
    print(index, word)
```
Output:
```
>
0 this
1 is
2 something
3 fun
>
```

#### More Information:
There are many other ways and scenarios in which For loops are used. These may be to iterate over a JSON object returned from an API call or to nest multiple For loops when dealing with a 2-D matrix data structure.

More information on For loops can be [found here](https://docs.python.org/3/reference/compound_stmts.html#for):


