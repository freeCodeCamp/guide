---
title: For Loop
---

# For Loop

The for loop executes a block of code until a specified condition is false.

### Syntax
```
for (variable initialization; condition; steps)
{
    // block of code
}
```

The for loop contains three parts:
1. initialization - variable declaration or initialization which will be executed in the beginning of the loop.
2. condition - boolean expression which will return either true or false and is executed at start of every loop cycle.
3. steps - code executed at the end of every loop cycle - usually incremental of the initialized variable.

### Example
```csharp
for (int i = 0; i < 5; i++)
{
    Console.WriteLine("Number " + i);
}
```

### Output:
```
> Number 0
> Number 1
> Number 2
> Number 3
> Number 4
```
