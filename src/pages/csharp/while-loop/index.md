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

## Other Uses

The while loops is often used for infinite iterrations, only to be ended when a variable which is not set in initial condition of the loop.


```
int i = 0;
while (true)
{
    if(i<50){
        Console.WriteLine("Number " + i);
        i++;
    }
    else{
        Console.WriteLine("End of loop");
        break;
    }
}
```

## Differences with for loop

If one would compare for and while loop biggest difference would be uses of each loop. 
While is used for when a developer is not sure of an exact number of iterations of the loop, and for is used when it's clear how many times to iterate through code.
