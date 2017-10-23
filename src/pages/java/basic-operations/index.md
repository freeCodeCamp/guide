---
title: Basic Operations
---
# Basic Operations

Java supports the following operations on variables:

*   __Arithmetic__ : `Addition (+)`, `Subtraction (-)`, `Multiplication (*)`, `Division (/)`, `Modulus (%)`,`Increment (++)`,`Decrement (--)`.
*   __String concatenation__: `+` can be used for String concatenation but subtraction `-` on a String is not a valid operation.
*   __Relational__: `Equal to (==)`, `Not Equal to (!=)`, `Greater than (>)`, `Less than (<)`, `Greater than or equal to (>=)`, `Less than or equal to (<=)`
*   __Bitwise__: `Bitwise And (&)`, `Bitwise Or (|)`, `Bitwise XOR (^)`, `Bitwise Compliment (~)`, `Left shift (<<)`, `Right Shift (>>)`, `Zero fill right shift (>>>)`
*   __Logical__: `Logical And (&&)`, `Logical Or (||)`, `Logical Not (!)`
*   __Assignment__: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `<<=`, `>>=`, `&=`, `^=`, `|=`
*   __Others__: `Conditional/Ternary(?:)`, `instanceof`

While most of the operations are self-explanatory, the Conditional (Ternary) Operator works as follows:

`expression that results in boolean output ? return this value if true : return this value if false`

Example:
```java
    int x = 10;
    int y = (x == 10) ? 5 : 9; // y will equal 5 since the expression x == 10 evaluates to true
```
Opposite:
```java
    int x = 25;
    int y = (x == 10) ? 5 : 9; // y will equal 9 since the expression x == 10 evaluates to false
```
