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
The instance of operator is used for type checking. It can be used to test if an object is an instance of a class, a subclass or an interface. General format-
*object **instance** of class/subclass/interface*

Here is a program to illustrate instanecof operator:
```Java
  Person obj1 = new Person();
        Person obj2 = new Boy();
 
        // As obj is of type person, it is not an
        // instance of Boy or interface
        System.out.println("obj1 instanceof Person: " +  (obj1 instanceof Person)); /*it returns true since obj1 is an instance of person */
                           
       
 ```
 
