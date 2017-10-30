---
title: Switch Case
---

# Switch Case

The switch statement is like a set of `if statements`or simply it is a substitute for long if statements.
It's a list of possibilities, with an action for each possibility. The condition of a switch statement is a value. The case says that if it has the value of whatever is after that case then do whatever follows the colon.The break is used to break out of the case statements. An optional default action, in case nothing else evaluates to true.
We exit from the switch by `break`. Default simply skips out of the switch case construction and allows the program to terminate naturally.
An important thing to note about the switch statement is that the case values may only be constant integral expressions.

## Example
```
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
```
-> Enter an operator (+, -, *,): -
-> Enter two operands: 32.5
-> 12.4
-> 32.5 - 12.4 = 20.1
```
