---
title: Conditional Statements
---
# Conditional Statements in C
Conditional Statements are also known as Branching Statements. They are so called because the program chooses to follow one branch or another.

## 1. if statement
This is the most simple form of the conditional statements. It consists of a Boolean expression followed by one or more statements. If the Boolean expression evaluates to **true**, then the block of code inside the 'if' statement will be executed. If the Boolean expression evaluates to **false**, then the first set of code after the end of the 'if' statement (after the closing curly brace) will be executed.

C programming language **_assumes any non-zero and non-null values as true_** and if it is **_either zero or null, then it is assumed as false_** value.

#### Syntax
```C
if(boolean_expression) {
    //Block of Statements executed when boolean_expression is true
}
```
#### Example
```C
int a = 100;
if(a < 200) {
    printf("a is less than 200\n" );
}
```
#### Result

`a is less than 200`


## 2. if...else statement
If the Boolean expression evaluates to **true**, then the if block will be executed, otherwise, the else block will be executed.
#### Syntax
```C
if(boolean_expression) {
    //Block of Statements executed when boolean_expression is true
}
else {
    //Block of Statements executed when boolean_expression is false
}
```
#### Example
```C
int a = 300;
if(a < 200) {
    printf("a is less than 200\n" );
}
else {
    printf("a is more than 200\n");
}
```
#### Result

`a is more than 200`

## 3. if...else if...else statement
When using if...else if..else statements, there are few points to keep in mind -
- An **if** can have **zero or one else**'s and it **must come after any else if**'s.
- An **if** can have **zero to many else if**'s and they **must come before the else**.
- Once an **else if** succeeds, none of the remaining else if's or else's will be tested.

#### Syntax
```C
if(boolean_expression_1) {
    //Block of Statements executed when boolean_expression_1 is true
}
else if(boolean_expression_2) {
    //Block of Statements executed when boolean_expression_1 is false and boolean_expression_2 is true
}
else if(boolean_expression_3) {
    //Block of Statements executed when both boolean_expression_1 and boolean_expression_2 are false and boolean_expression_3 is true
}
else {
    //Block of Statements executed when all boolean_expression_1, boolean_expression_2 and boolean_expression_3 are false
}
```
#### Example
```C
int a = 300;
if(a == 100) {
    printf("a is equal to 100\n" );
}
else if(a == 200) {
    printf("a is equal to 200\n");
}
else if(a == 300) {
    printf("a is equal to 300\n");
}
else {
    printf("a is more than 300\n");
}
```
#### Result

`a is equal to 300`

## 4. Nested if statement
It is always legal in C programming to nest if-else statements, which means you can use one if or else if statement inside another if or else if statement(s).
#### Syntax
```C
if(boolean_expression_1) {
    //Executed when boolean_expression_1 is true
    if(boolean_expression_2) {
      //Executed when both boolean_expression_1 and boolean_expression_2 are true
    }
}

```
#### Example
```C
int a = 100;
int b = 200;
if(a == 100) {
    printf("a is equal to 100\n" );
    if(b == 200) {
        printf("b is equal to 200\n");
    }
}

```
#### Result

```bash
a is equal to 100
b is equal to 200
```
