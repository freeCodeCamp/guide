---
title: Falsey Values
---

## Description

A falsey value is something which evaluates to FALSE, for instance when checking a variable. There are only six falsey values in JavaScript: `undefined`, `null`, `NaN`, `0`, `""` (empty string), and `false` of course.

## Checking for falsey values on variables

It is possible to check for a falsey value in a variable with a simple conditional:

```javascript
if (!variable) {
  // When the variable has a falsey value the condition is true.
}
```

## General Examples

```javascript
var string = ""; // <-- falsy

var filledString = "some string in here"; // <-- truthy

var zero = 0; // <-- falsy

var numberGreaterThanZero // <-- truthy

var emptyArray = []; // <-- truthy, we'll explore more about this next

var emptyObject = {}; // <-- truthy
```

## Fun With Arrays

```javascript
if ([] == false) // <-- truthy, will run code in if-block

if ([]) // <-- truthy, will also run code in if-block

if ([] == true) // <-- falsy, will NOT run code in if-block

if (![]) // <-- falsy, will also NOT run code in if-block
```

## More Information

- <a>**truthy**</a> | <a href='http://james.padolsey.com/javascript/truthy-falsey/' target='_blank' rel='nofollow'>Blog Post - Truthy & Falsey</a>
