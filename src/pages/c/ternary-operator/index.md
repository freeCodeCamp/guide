---
title: Ternary Operator
---

## Ternary Operator
Programmers use ternary operators in C for decision making inplace of conditional statements **if** and **else**.

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

Output of the example should be:
```
10
```

This looks pretty simple, right?
