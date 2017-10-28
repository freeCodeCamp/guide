---
title: Basic Operations
---
# Basic Operations

Java supports the following operations on variables:

*   Arithmetic : `Addition(+)`, `Subtraction(-)`, `Multiplication(*)`, `Division(/)`, `Modulus(%)`,`Increment(++)`,`Decrement(--)`.
*   String concatenation: `+` can be used for String concatenation but subtraction `-` on a String is not a valid operation.
*   Relational: `Equal to(==)`, `Not Equal to (!=)`, `Greater than(>)`, `Less than(<)`, `Greater than or equal to(>=)`, `Less than or equal to(<=)`
*   Bitwise: `Bitwise And(&)`, `Bitwise Or(|)`, `Bitwise XOR(^)`, `Bitwise Compliment(~)`, `Left shift(<<)`, `Right Shift (>>)`, `Zero fill right shift (>>>)`
*   Logical: `Logical And (&&)`, `Logical Or(||)`, `Logical Not (!)`
*   Assignment: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `&=`, `^=`, `|=`
*   Others: `Conditional/Ternary(?:)`, `instanceof`

While most of the operations are self-explanatory, the Conditional (Ternary) Operator works as follows:

`expression that results in boolean output ? return this value if true : return this value if false`

For e.g:
```java
    int x = 10;
    int y = (x == 10) ? 5 : 9; // y will equal 5 since the expression x == 10 evaluates to true
```
The Modulus(%) Operator works as follows:

`The % operator returns the remainder of two numbers`

For e.g:
```java
    int x = 10;
    int y = 5;
    int z = 3;
    int result1 = (x % y); // result1 will be equal to 0
    int result2 = (x % z); // result2 will be equal to 1
    
```




