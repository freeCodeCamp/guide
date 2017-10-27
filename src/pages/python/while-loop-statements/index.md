---
title: While Loop Statements
---
## While Loop Statements

<!-- Please add any articles you think might be helpful to read before writing the article -->
While loops are loops that will run as long as its condition is true. Once the condition becomes false, the while loop will exit.  

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

You can enter any condition that is boolean in nature:
```python
stop = 3
x = 0
while True:
   if ( x == stop ):
      break
   else:
      x = x + 1
      print(x)
```

Output:

```
1
2
3
```
