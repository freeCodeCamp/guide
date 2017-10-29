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

Example for concatenation:
```java
    String name = "Tom";
    name = "Hello! " + name;
    System.out.println(name);
    // Output:
    // Hello! Tom
```

Examples for Logical Operators and Relational operators:
```java
    int i = 1, j = 2, k = 1, l = 2;
    System.out.println((i==k) && (j == l));//prints true since i==j evaluates to true and j==l evaluates to true.True && True gives true
    System.out.println((i==j) && (j == k)); // prints false
    System.out.println((i!=j) && (j!=k)); // prints true
    System.out.println((i<j)); // prints true
```

