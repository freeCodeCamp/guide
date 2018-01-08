---
title: Switch Case
---

# Switch Case

The switch statement is like a set of `if statements`.

It's a list of possibilities, with an action for each possibility, and an optional default action, in case nothing else evaluates to true.

We exit from the switch by `break`. If the `break` statement is not reached before the beginning of the next case, the execution will fall through and begin executing the code in the next case.

Using a switch statement over multiple if/else statements can contribute to more speed and readability.

## Example
```c
# include <stdio.h>

int main() {

    char operator;
    double firstNumber,secondNumber;

    printf("Enter an operator (+, -, *, /): ");
    scanf("%c", &operator);

    printf("Enter two operands: ");
    scanf("%lf %lf",&firstNumber, &secondNumber);

    switch (operator) {
        case '+':
            printf("%.1lf + %.1lf = %.1lf",firstNumber, secondNumber, firstNumber+secondNumber);
            break;
        case '-':
            printf("%.1lf - %.1lf = %.1lf",firstNumber, secondNumber, firstNumber-secondNumber);
            break;
        case '*':
            printf("%.1lf * %.1lf = %.1lf",firstNumber, secondNumber, firstNumber*secondNumber);
            break;
        case '/':
            printf("%.1lf / %.1lf = %.1lf",firstNumber, secondNumber, firstNumber/firstNumber);
            break;
        // Operator is doesn't match any case constant (+, -, *, /)
        default:
            printf("Error! operator is not correct");
    }

    return 0;
}
```

## Output:
```c
-> Enter an operator (+, -, *,): -
-> Enter two operands: 32.5
-> 12.4
-> 32.5 - 12.4 = 20.1
```
