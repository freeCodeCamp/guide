---
title: javaScript Mathpow
---
The Math.pow() returns the `base` to the `exponent` power.

## Syntax

    Math.pow(base, exponent);

## Parameters

**base**

The base number

**exponent**

The exponent with which to raise the base number.

## Description

.pow() is a static method of the Math object, so you must always use it as `Math.pow()`

## Examples

    // Simple exponents
    Math.pow(2, 2);          // 4
    Math.pow(2, 3);          // 8
    Math.pow(2, 10);         // 1024

    //Fractional exponents
    Math.pow(9, 0.5);        // 3 (the square root of 9)
    Math.pow(24, 1/3);       // 8 (the cubed root of 24)

    //Signed exponents
    Math.pow(5, -2);         // .04 (1/25)

    //Signed bases
    Math.pow(-5, 2);         // 25 (squares are positive)
    Math.pow(-5, 3);         // -125 (cubes can be negative)
    Math.pow(-5, 0.5);       // NaN because negative numbers don't have a real square root

    //Due to limits in the precision of floating point numbers, 
    //a negative base with a fractional exponent will always return NaN

    Math.pow(-5, 1/2);       // NaN

Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/pow)