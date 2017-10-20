---
title: While Loop Statements
---

## While Loop Statements

A while loop statement in Python programming language repeatedly executes a target statement as long as a given condition is true.

The basic syntax is:

```python

while condition:
  statement(s)
[else:statement(s)]

```
In the above syntax, statement(s) may be a single statement or a block of statements. 
The condition can be any expression and the loop iterates as long as the condition is true.
When the condition becomes false, program control passes to the line immediately following the loop, which could be an `else` statement part of the while loop or just any line of code that occurs afterwards.

Also, it is **interesting** to note that the `else` clause will only be executed when your while condition becomes `false`. If you `break` out of the loop, or if an **exception** is raised, it won't be executed.

Example code:

```python

a = 5
while a > 0:
    print('In while because a=', a)
    a -= 1
else:
    # condition is false now, handle and go on with the rest of the program
    print('In else because a=', a)
    
```

Output:

```

Python 3.6.1 (default, Dec 2015, 13:05:11)
[GCC 4.8.2] on linux
   
In while because a= 5
In while because a= 4
In while because a= 3
In while because a= 2
In while because a= 1
In else because a= 0

```
  

#### More Information:

<a href='https://docs.python.org/3/reference/compound_stmts.html#while' target='_blank' rel='nofollow'>Python While loop documentation</a>


