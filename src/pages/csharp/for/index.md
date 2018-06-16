---
title: For Loop
---

# For Loop

The `for` loop executes a block of code until a specified condition is false. Although a `for` loop looks like a <a href='https://guide.freecodecamp.org/csharp/while-loop' target='_blank' rel='nofollow'>`while` loop</a>, developers should use them __properly__. Use `while` loops when the number of iterations are varied, otherwise use `for` loops. A common use of `for` loops are array iterations.

## Example
```
int[] array = { 1, 2, 3, 4, 5 };
for (int i = 0; i < array.Length; i++)
{
	Console.WriteLine("Item on index {0} is {1}", i, array[i]);
}
```

## Output:
```
> Item on index 0 is 1
> Item on index 1 is 2
> Item on index 2 is 3
> Item on index 3 is 4
> Item on index 4 is 5
```
