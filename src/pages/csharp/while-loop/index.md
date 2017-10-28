---
title: While Loop
---

# While Loop

The while loop executes a block of code until a specified condition is false.

## Example
```
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

# Tip

while(1) specifies a condition that will always be true, and hence runs an infinite loop. 
We can exit such a loop with a break statement inside.

## Example
```
int x = 0
while (1)
{
    x++;
    Console.WriteLine("Number " + i);
    if (x == 2)
        break;         
}
```
## Output:
```
> Number 1
> Number 2

```

