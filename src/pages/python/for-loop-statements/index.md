---
title: For Loop Statements
---
## For Loop Statements

Python utilizes a for loop to iterate over a list of elements. Unlike C or Java, which use the for loop to change a value in steps and access e.g. an array using that value.

For loops iterate over a collection based data structures like lists, tuples, and dictionaries.

The basic syntax is:

```python
for value in list_of_values:
  # use value inside this block
```

In general, you can use anything as the iterator value, where entries of the iterable can be assigned to. E.g. you can unpack tuples from a list of tuples:

```python
list_of_tuples = [(1,2), (3,4)]

for a, b in list_of_tuples:
  print("a:", a, "b:", b)
```
On the other hand, you can loop over anything that is iterable. You can call a function or use a list literal.

```python
for person in load_persons():
  print("The name is:", person.name)
```

```python
for character in ["P", "y", "t", "h", "o", "n"]:
  print("Give me a '{}'!".format(character))
```

Some ways in which For loops are used: 

**Iterate over the range() function**

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

**Iterate over values in a list or tuple**

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

**Iterate over keys in a dictionary (aka hashmap)**

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

**Iterate over a list and get the corresponding index with the enumerate() function**

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

A common use case is iterating over a dictionary:

```python
for name, phonenumber in contacts.items():
  print(name, "is reachable under", phonenumber)
```

If you absolutely need to access the current index of your iteration, do **NOT** use `range(len(iterable))`! This is an extremely bad practice and will get you plenty of chuckles from senior Python developers. Use the built in function `enumerate()` instead:

```python
for index, item in enumerate(shopping_basket):
  print("Item", index, "is a", item)
```

#### More Information:

- <a href='https://docs.python.org/3/tutorial/controlflow.html#for-statements' target='_blank' rel='nofollow'>Python for loop documentation</a>