---
title: Ternary Operator
---
## Ternary Operator
Programmers use ternary operators in C for decision making inplace of conditional statements **if** and **else**.
The ternary operator is an operator that takes three arguments. The first argument is a comparison argument, the second is the result upon a true comparison, and the third is the result upon a false comparison. If it helps you can think of the operator as shortened way of writing an if-else statement.

Here's a simple decision-making example using **if** and **else**:

```c
int a = 10, b = 20, c;

if (a < b) {
    c = a;
}
else {
    c = b;
}

printf("%d", c);
```

This example takes more than 10 lines, but that isn't necessary. You can write the above program in just 3 lines of code using the **ternary operator**.

### Syntax
`condition ? value_if_true : value_if_false`

Here's the above example re-written to use the ternary operator:

```c
int a = 10, b = 20, c;

c = (a < b) ? a : b;

printf("%d", c);
```


This looks pretty simple, right? Do note that `value_if_true` and `value_if_false` must have the same type, and they cannot be full statements but simply expressions.
