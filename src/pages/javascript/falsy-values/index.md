---
title: Falsy Values
---
## Description

Something which evaluates to FALSE. There are only five falsey values in JavaScript: `undefined`, `null`, `NaN`, `0`, `""` (empty string), and `false` of course.

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

See also: <a>**truthy**</a> | <a href='http://james.padolsey.com/javascript/truthy-falsey/' target='_blank' rel='nofollow'>Truthy & Falsey blog post</a>
