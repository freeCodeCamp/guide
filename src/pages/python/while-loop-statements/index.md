---
title: While Loop Statements
---
## While Loop Statements

<!-- Please add any articles you think might be helpful to read before writing the article -->
Python utilizes different the while loop similar to other popular languages.  The while loop continuously iterates through a block of code as long as the condition is true.  Once condition is proven to be false then it breaks out of the block of code.  

The basic syntax is:

```python
counter = 0
while (counter < 10):
   # Execute the block of code here as
   # long as counter is less than 10
```

An example is shown below:
```python
days = 0
week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
while (days < 7):
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

