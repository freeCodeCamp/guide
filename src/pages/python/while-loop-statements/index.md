---
title: While Loop Statements
---
## While Loop Statements

<!-- Please add any articles you think might be helpful to read before writing the article -->

Python utilizes the `while` loop similarly to other popular languages.  The `while` loop evaluates a condition then executes a block of code if the condition is true. The block of code executes repeatedly until the condition becomes false.

The basic syntax is:

```python
counter = 0
while counter < 10:
   # Execute the block of code here as
   # long as counter is less than 10
```

An example is shown below:
```python
days = 0
week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
while days < 7:
   print("Today is " + week[days])
   days += 1
```

Output:

```
Today is Monday
Today is Tuesday
Today is Wednesday
Today is Thursday
Today is Friday
Today is Saturday
Today is Sunday
```

#### More Information:

- <a href='https://docs.python.org/3/reference/compound_stmts.html#the-while-statement' target='_blank' rel='nofollow'>Python `while` statement documentation</a>
