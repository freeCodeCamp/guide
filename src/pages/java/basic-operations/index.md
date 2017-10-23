---
title: Basic Operations
---
# Basic Operations


Java provides a wide variety of operators to perform various operations. These operators usually fall into one of these five main categories:

1. Arithmetic
2. Bitwise
3. Relational
4. Logical
5. Assignment

Apart from these, Java also defines some additional operators to perform certain special operations. 

### Arithmetic Operators

Arithmetic operators are used to handle operations on mathematical expressions. 

| Operator | Operation |                                                                        
|--------- | --------- |
| * (Multiplication) | Multiplies values on either side of the operator. |	
|  / (Division) | Divides left-hand operand by right-hand operand.|  
|  - (Subtraction) | Subtracts right-hand operand from left-hand operand. | 
|  + (Addition) | Adds values on either side of the operator. |  
|  % (Modulus) | Divides left-hand operand by right-hand operand and returns remainder. |           
|  ++ (Increment) | Increases the value of operand by 1. |                                             
|  -- (Decrement) | Decreases the value of operand by 1. |    

### Bitwise Operators

Bitwise operators are used to work on bits and perform bit-by-bit operation. 

| Operator | Description |
| -------- | ----------- |
| \| (bitwise or) | Binary OR Operator copies a bit if it exists in either operand. |	
| & (bitwise and) |	Binary AND Operator copies a bit to the result if it exists in both operands. |	
| ~ (bitwise compliment) | Binary Ones Complement Operator is unary and has the effect of 'flipping' bits. |	
| ^ (bitwise XOR) |	Binary XOR Operator copies the bit if it is set in one operand but not both. |	
| >>> (zero fill right shift) |	Shift right zero fill operator. |
| << (left shift) |	Binary Left Shift Operator. |
| >> (right shift) | Binary Right Shift Operator. | 

### Relational Operators

Relational operators are used to check the relation between the left and right operand.

| Operator | Description |
| -------- | ----------- |
| < (less than) | checks if the value of left operand is less than the value of right operand, if yes then condition becomes true. |
| > (greater than) | checks if the value of left operand is greater than the value of right operand, if yes then condition becomes true. |	
| >= (greater than or equal to) | checks if the value of left operand is greater than or equal to the value of right operand, if yes then condition becomes true. |	
| <= (less than or equal to) | checks if the value of left operand is less than or equal to the value of right operand, if yes then condition becomes true. |
| == (equal to) | checks if the values of two operands are equal or not, if yes then condition becomes true. |	
| != (not equal to) | checks if the values of two operands are equal or not, if values are not equal then condition becomes true. |	

### Logical Operators

Logical operators are used to perform logical operations which then returns boolean values. 

| Operator | Description |
| -------- | ----------- |
| && (logical and) | Logical AND operator. If both the operands are non-zero, then the condition becomes true. |	
| \|\| (logical or) | Logical OR Operator. If any of the two operands are non-zero, then the condition becomes true. |	
| ! (logical not) |	Logical NOT Operator. Used to reverse the logical state of its operand. If a condition is true then Logical NOT  operator will make false. |

### Assignment Operators

Assignment operators are used to perform assigmnet operations from right side operands to left side operands.

| Operator | Description |
| -------- | ----------- |
|= | Simple assignment operator- assigns values from right side operands to left side operand. |
|&= | Bitwise AND assignment operator. |	
|^= | Bitwise exclusive OR and assignment operator. |	
|\|= | Bitwise inclusive OR and assignment operator. |
|<<= | Left shift AND assignment operator. |	
|>>= | Right shift AND assignment operator. |	
| += | Add AND assignment operator- adds right operand to the left operand and assign the result to left operand. |	
|-= | Subtract AND assignment operator- subtracts right operand from the left operand and assign the result to left operand. |	
|\*= | Multiply AND assignment operator- multiplies right operand with the left operand and assign the result to left operand. |	
|/= | Divide AND assignment operator- divides left operand with the right operand and assign the result to left operand. |	
|%= | Modulus AND assignment operator- takes modulus using two operands and assign the result to left operand. |	

Apart from these categories of operators, Java supports a further set of operators that perfrom special functions.

*String concatenation(+)* - The (+) symbol is used to concatenate two strings. 

*Ternary Operator(?:)* - THe ternary operator consists of three operands and is used to evaluate Boolean expressions.
It is of the form:
 ```
 expression that results in boolean output ? return this value if true : return this value if false
```
Example:
```
int x = 10;
int y = (x == 10)? 5 : 9; // y will be equal to 5 since the expression x == 10 is true.
```








