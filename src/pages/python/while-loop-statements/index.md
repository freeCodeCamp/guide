---
title: While Loop Statements
---
## While Loop Statements

`while` loops are similar to `for` loops in sense that they are used to run a section of code repeatedly. However, they difer from the `for` loop in terminating condition. Unlike `for` loops which are set to run for <i>n</i> number of times, `while` loops run till a <i>condition</i> is satisfied.

In python, while implement a while loop using :

```python
while condition:
    do something
```
For example:

```python
count = 5
while count>0 :
    print count
    count -= 1
```

gives

```python
5
4
3
2
1
```
Another example:

```python
inp = raw_input("Type good")
while inp != 'good':
    inp = raw_input("Type good")
```
This `while` executes untill we type in `good` on the standard input.

`while` loops are used most frequently for executing a section of code, like receive an input and invoke a funcion, in infinite loops till an exception occurs or a break within `while` is executed. Handling those exceptions within `while` is another story:).
<br>For example:

```python
while True:
    inp = raw_input("Type good")
    if inp == 'good':
        break
```
If the `while` loop contains only a single statment, it can be written on the same line.
```python
while True: print "Hello World!"  #print 'hello world! in an infinite loop
```
We can also combine `else` statment with `while`loop:
```python
c = 5
while c>0:
    print str(c)+" is greater than 0"
    c -= 1
else:
    print str(c)+" is not greater than 0"
```
gives
```python
5 is greater than 0
4 is greater than 0
3 is greater than 0
2 is greater than 0
1 is greater than 0
0 is not greater than 0
```
