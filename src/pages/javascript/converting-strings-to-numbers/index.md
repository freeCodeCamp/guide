---
title: Converting Strings to Numbers
---

## Converting Strings to Numbers
There are a number of ways to convert a string to a number. This is because JavaScript is a loosely-typed language, meaning you don't declare the type of variables. The result is JavaScript tries to make the variable into whichever type it is most suited to.

This means you can convert a string to a number by 'tricking' the JavaScript engine. Say you have a string `var x = "100";`. You can convert this string into a number in several ways:

* Using unary plus `var x = +"100";`
* Multiplying by 1 `var x = "100" * 1; // JavaScript knows multiplication is a math operation and must involve numbers`
* Dividing by 1 `var x = "100" / 1; // Same reason as for multiplication`

There are also built-in functions that you can use:

* [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt) and [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat) attempt to convert the string to a number if possible. For example, `var x = parseInt("100"); // x = 100`
* [Number()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number) will convert to a number the value can be represented by. This includes dates into the number of milliseconds since midnight January 1, 1970 UTC, boolean values to 1 or 0, and values that can't be converted to a recognisable number will become NaN. That stands for Not a Number and is also technically a number!
