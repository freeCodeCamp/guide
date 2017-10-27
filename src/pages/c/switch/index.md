---
title: Switch Case
---

# Switch Case

The switch statement is like a set of `if statements`.
It's a list of possibilities, with an action for each possibility, and an optional default action, in case nothing else evaluates to true.
We exit from the switch by `break`.

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
A C switch statement acts as a routing device that tells the computer which line of code to
execute next. On reaching a switch statement, a program jumps to the line labeled with the
value corresponding to the value of integer-expression. For example, if integerexpression
has the value 4, the program goes to the line that has a case 4: label.

The value integer-expression, as the name suggests, must be an expression that reduces to an integer
value. Also, each label must be an integer constant expression. Most often, labels are simple
int or char constants, such as 1 or ‘q’, or enumerators. If integer-expression doesn’t
match any of the labels, the program jumps to the line labeled default. The default label is
optional.
