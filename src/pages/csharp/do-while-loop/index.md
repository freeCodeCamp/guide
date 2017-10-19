---
title: Do While Loop
---

# Do While Loop

A do while loop is similar to a while loop except it checks the looping condition at the end of the loop, rather than the beginning. This guarantees that the loop executes at least once.

## Example 1 
Performs the same as a while loop would
```
int i = 0;

do
  {
    Console.WriteLine("Number " + i);
    i++;
  }
while (i < 5);
```

## Output for Example 1:
```
> Number 0
> Number 1
> Number 2
> Number 3
> Number 4
```

## Example 2
Unlike the while loop, the below do while loop will execute once and terminate after the first execution of the loop
```
int i = 5;

do
  {
    Console.WriteLine("Number " + i);
    i++;
  }
while (i < 5);
```

## Output for Example 2:
```
> Number 5
```
