---
title: Switch Case
---

# Switch Case

The switch statement is like a set of `if statements`.
It's a list of possibilities, with an action for each possibility, and an optional default action, in case nothing else evaluates to true.
We exit from the switch by `break`.

## Example
```
int number = 1;

switch(number)
{
    // Here the switch check if a case, match the number variable
    case 0:
        Console.WriteLine("The number is zero!");
        break;
    case 1:
        // Here I match the condition
        Console.WriteLine("The number is one!");
        break;
    default:
        Console.WriteLine("I don't know this number!");
        break;
}
```

## Output:
```
> The number is one!
```

## Example in if statements
The previous switch case example, in `if statements` corresponds to:
```
int number = 1;

if(number == 0)
{
    Console.WriteLine("The number is zero!");
}
else if(number == 1)
{
    Console.WriteLine("The number is one!");
}
else
{
    Console.WriteLine("I don't know this number!");    
}

```

## Output:
```
> The number is one!
```
