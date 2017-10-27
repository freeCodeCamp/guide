---
title: Array.prototype.map
---
## Array.prototype.map

The `.map()` method loops through the given array and performs a function. The return statement in a `.map()` clause is  a value to add to a new array at a given index.

Here is an example of `.map()` that iterates through an array of numbers and creates `newArray` with the doubled values.
```js
var arr = [1, 2, 3, 4];
var newArray = arr.map(function(element) { return element * 2});
console.log(newArray); // [2, 4, 6, 8]
```


Scrimba Screencast explaining `.map()`: https://scrimba.com/cast/c2Lg3hB.embed

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

