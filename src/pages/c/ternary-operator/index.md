---
title: Ternary Operator
---

## Ternary Operator
Programmers use ternary operators in C for decision making inplace of conditional statements **if** and **else**.
The ternary operator is used to execute code based on the result of a binary condition.

It takes in a binary condition as input, which makes it similar to an 'if-else' control flow block. It also, however, returns a value, behaving similar to a function.

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
`condition ? statement_1 : statement_2`

Here's the above example re-written to use the ternary operator:

```c
int a = 10, b = 20, c;

c = (a < b) ? a : b;

printf("%d", c);
```

This looks pretty simple, right?
