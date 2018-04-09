---
title: While Loop
---

# While Loop

The while loop executes a block of code until a specified condition is false. Because the test of the while expression takes place before each execution of the loop, a while loop executes zero or more times. This differs from the do loop, which executes one or more times because the test of the expression takes place after the execution of the loop.<sup>1</sup>

## Example
```csharp
int i = 0;
while (i < 5)
{
    Console.WriteLine("Number " + i);
    i++;
}
```

## Output:
```
> Number 0
> Number 1
> Number 2
> Number 3
> Number 4
```

### Sources
1 https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/while
