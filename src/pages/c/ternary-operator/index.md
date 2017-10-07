---
title: Ternary Operator
---

# Ternary Operator
Programmers use ternary operators in C for decision making inplace of conditional statements **if** and **else**

Let us look at a simple decision making example using **if** and **else**

```c
int a = 10, b = 20, c;

if(a < b) {
    c = a;
}
else {
    c = b;
}

printf("%d", c);
```
This simple example takes more than 10 lines. Do we need these much lines for a simple example???

We can write the above program in just 3 lines using **ternary operator**

## Syntax
`condition ? statement_1 : statement_2`

Now let us convert the above program to use ternary operator

```c
int a = 10, b = 20, c;

c = (a < b) ? a : b;

printf("%d", c);
```

This looks pretty simple right.
