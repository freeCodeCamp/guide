---
title: Converting Strings to Numbers
---
## Converting Strings to Numbers

There are a number of ways to convert a string to a number. This is because JavaScript is a loosely-typed language, meaning you don't declare the type of variables. The result is JavaScript tries to make the variable into whichever type it is most suited to.

This means you can convert a string to a number by 'tricking' the JavaScript engine. Say you have a string `var x = "100";`. You can convert this string into a number in several ways:

* Using unary plus `var x = +"100";`
* Multiplying by 1 `var x = "100" * 1; // JavaScript knows multiplication is a math operation and must involve numbers`
* Dividing by 1 `var x = "100" / 1; // Same reason as for multiplication`

Simplest way to convert string to number is to add `+` before the string:

```javascript
var str = "123";
str = +str; // str now number
```

It will also convert strings into decimal numbers. For example

```javascript
var s = "0XFF"; // hexadecimal number
var n = +s; // equal to 255
```

Another way is to use the built-in function `parseInt()` that converts the first number in the string to a number.

```javascript
var a = parseInt("10"); // a will be equal to 10
var b = parseInt("20 30"); // b will be equal to 20
```

If the first character cannot be converted to a string, the result will be `NaN`.

Radix (base) can be passed as seocnd argument:

```javascript
var a = "10";
var n = parseInt(a, 2); // n is 2
var m = parseInt(a, 8); // n is 8
var p = parseInt(a, 5); // n is 5
```

#### More Information:

There are also built-in functions that you can use:

* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt' target='_blank' rel='nofollow'>parseInt()</a> and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat' target='_blank' rel='nofollow'>parseFloat()</a> attempt to convert the string to a number if possible. For example, `var x = parseInt("100"); // x = 100`
* <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number' target='_blank' rel='nofollow'>Number()</a> will convert to a number the value can be represented by. This includes dates into the number of milliseconds since midnight January 1, 1970 UTC, boolean values to 1 or 0, and values that can't be converted to a recognisable number will become NaN. That stands for Not a Number and is also technically a number!
