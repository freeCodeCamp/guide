---
title: For Loop Statements
---
## For Loop Statements

### Background

Computer programmers use for loops to repeat a block of code a specific number of times. In Python, for loops iterate over a sequence in the order that the sequence is in. 

### Examples

The most common way to use a for loop is to use the Python `range()` function which generates a list of numbers. It's then possible to iterate over this list of numbers repeating the code **x** times.

```python
>>> for i in range(5):
...     print ("Hello, this is the " + str(i) + " iteration")
...
Hello, this is the 0 iteration
Hello, this is the 1 iteration
Hello, this is the 2 iteration
Hello, this is the 3 iteration
Hello, this is the 4 iteration
```

Notice how the range function generated a list which began at 0 and ended at 4. 

For loops can also be used by iterating over an list of elements and using the elements in the code block. 

```python
>>> values = [1, 5, 15, 2]
>>> counter = 0
>>> # Sum the numbers in the list
>>> for i in values:
...     counter = counter + i
>>> counter
23
```

For loops can be exited early by using the `break` keyword. Depending on the logic of the program, this might be used if a certain condition is met.

```python
>>> names = ["Bob", "Anna", "Rob", "Stacy"]
>>> # Break out of loop is Rob is in the list
>>> for i in range(len(names)):
...     if names[i] == "Rob":
...         break
...     print(name)
...
Bob
Anna
```

In the above example, the range function is used to generate a list whose length is the size of the list, **names**. It is then possible to use the variable **i** to access the values in the list. 

### Other Resources

For loops can be used to iterate over objects other than lists. Check out the [documentation]("https://wiki.python.org/moin/ForLoop") on for loops to learn more. 


