---
title: "JavaScript parseInt()"
parent: "javascript"
---

The `parseInt()` function parses a string argument and returns an integer of the specified `radix` (the base in mathematical numeral systems).

## Syntax

    parseInt(string, radix);

## Parameters

**string**

The value to parse. If string is not a string, then it is converted to a string (using the ToString abstract operation). Leading whitespace in the string is ignored.

**radix**

An integer between 2 and 36 that represents the radix (the base in mathematical numeral systems) of the above mentioned string. Specify 10 for the decimal numeral system commonly used by humans. Always specify this parameter to eliminate reader confusion and to guarantee predictable behavior. Different implementations produce different results when a radix is not specified, usually defaulting the value to 10.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) | [MSDN link](https://msdn.microsoft.com/en-US/library/x53yedee%28v=vs.94%29.aspx)

## Description

The parseInt function converts its first argument to a string, parses it, and returns an integer or NaN. If not NaN, the returned value will be the decimal integer representation of the first argument taken as a number in the specified radix (base). For example, a radix of 10 indicates to convert from a decimal number, 8 octal, 16 hexadecimal, and so on. For radices above 10, the letters of the alphabet indicate numerals greater than 9\. For example, for hexadecimal numbers (base 16), A through F are used.

For arithmetic purposes, the `NaN` value is not a number in any radix. You can call the `isNaN` function to determine if the result of `parseInt` is NaN. If `NaN` is passed on to arithmetic operations, the operation results will also be `NaN`.

To convert number to its string literal in a particular radix use `intValue.toString(radix)`.

## Examples

    //The following examples all return 15:
    parseInt(" 0xF", 16);
    parseInt(" F", 16);
    parseInt("17", 8);
    parseInt(021, 8);
    parseInt("015", 10);
    parseInt(15.99, 10);
    parseInt("15,123", 10);
    parseInt("FXX123", 16);
    parseInt("1111", 2);
    parseInt("15*3", 10);
    parseInt("15e2", 10);
    parseInt("15px", 10);
    parseInt("12", 13);

    //The following examples return NaN:
    parseInt("Hello", 8); // Not a number at all
    parseInt("546", 2);   // Digits are not valid for binary representations
