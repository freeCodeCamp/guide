---
title: Numbers
---
## Numbers

Numbers or commonly called as Integer is one of the type use for variable.There are other datatype such as string,array and object.

According to the ECMAScript standard, there is only one number type: the double-precision 64-bit binary format IEEE 754 value (number between -(253 -1) and 253 -1). There is no specific type for integers. In addition to being able to represent floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number).

JavaScript has only one type of number. Numbers can be written with or without decimals.
```javascript
var x = 3.14;    // A number with decimals
var y = 3;       // A number without decimals
```
Extra large or extra small numbers can be written with scientific (exponent) notation:
```javascript
var x = 123e5;    // 12300000
var y = 123e-5;   // 0.00123
```
### NaN - Not a Number

NaN is a JavaScript reserved word indicating that a number is not a legal number.
Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
```javascript
var x = 100 / "Apple";  // x will be NaN (Not a Number)
```
### Addition
```javascript
var x = 10;
var y = 20;
var z = x + y;           // z will be 30 (a number)
```
#### More Information:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures
https://www.w3schools.com/js/js_numbers.asp


