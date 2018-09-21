---
title: Logical Operators
---
## Logical Operators

* **AND**
* **OR**
* **NOT**
* **IF**
* **IFF** (if and only if)
* **XOR** ("exclusive or")

## How They Function
**AND** is only true when both inputs are true. If either input is false, the output will also be false.

| A | B |AND(A,B)|
|---|---|---|
|  f| t | f |
|  f| f | f |
|  t| t | t |
|  t| f | t |

**OR** is true when one or both inputs are true. You'll see in the table below that OR is false only when both inputs are false

| A | B |OR(A,B)|
|---|---|---|
|  f| t | t |
|  f| f | f |
|  t| t | t |
|  t| f | t |

**NOT** is also known as inversion. The output of **NOT** is the opposite of the input. This is the only logical operator that works on only one input, which makes it a unary operator.

| A | B |NOT(A)| NOT(B)
|---|---|---|---|
|  f| t | t |f|
|  f| f | t |t|
|  t| t | f |f|
|  t| f | f |t|

**XOR** is known as **exclusive or** is true when one input or the other is true, but not both. This may seem like a trivial difference from or, but **XOR** is an extremely useful operator.

| A | B |XOR(A,B)|
|---|---|---|
|  f| t | t |
|  f| f | f |
|  t| t | f |
|  t| f | t |

**IF** is known as a conditional, it can be read as A -> B (if A then B, A implies B, or A therefore B). It means that if A is true, then so is B.

As with all operators it is important to stress that the truth value of the output belongs to the operator. This is particularly true with the conditional. Since **IF** can be also be displayed as A -> B, it is easy to associate the value of B as the value of the operator, which is not the case.

A common point of confusion is when A is flase and B is true. It is possible for something other than A to cause B to be true, so A being false does not imply that B is also false.

The only time the conditional is false is when a true value leads to a false value. 

| A | B |IF(A,B)|
|---|---|---|
|  f| t | t |
|  f| f | t |
|  t| t | t |
|  t| f | f |

**IFF** is known as the biconditional. It is the equivalent of A -> B **AND** B->A. It means that both conditionals must be satisfied in order for the biconditional to be true.

| A | B |IF(A,B)| IF(B,A)| IFF(A,B)|
|---|---|---|---|---|
|  f| t | t |f|f|
|  f| f | t |t|t|
|  t| t | t |t|t|
|  t| f | f |t|f|

You can easily see that the out output of the IFF operator in the truth table is the same as the ANDing of columns 3 and 4.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

 +* [Logical Operators in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
 +* [Logical Operators in PHP](http://php.net/manual/en/language.operators.logical.php)
 +* [Logical Operators in C++](http://en.cppreference.com/w/cpp/language/operator_logical)
