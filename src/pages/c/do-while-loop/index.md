---
title: Do while loop
---

# Do while Loop

The `do while` loop executes a block of code once and until a condition is false. They are a particular case of `while` loops: they execute a block of code one time and then until the condition is false. A common use of `do while` loops are input checks.

## Example
```
#include <stdio.h>
int main()
{
    double number, sum = 0;

    // Loop body is executed at least once
    do {
        printf("Enter a number: ");
        scanf("%lf", &number);
        sum += number;
    } while(number != 0.0);

    printf("Sum = %.2lf",sum);

    return 0;
```

## Output:
```
Enter a number: 1.5
Enter a number: 2.4
Enter a number: -3.4
Enter a number: 4.2
Enter a number: 0
Sum = 4.70
