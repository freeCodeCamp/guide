---
title: Array.prototype.reduce
---
## Array.prototype.reduce

The `.reduce()` method loops through an array and executes a callback function at each iteration in order to reduce the array to a single value. It then returns this value.

The most basic use case of `.reduce()` is to sum numbers like in this example :

```
var numbers = [0, 1, 2, 3, 4];

var result = numbers.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
});

console.log(result); // = 10
```

The `.reduce()` method is not limited to numbers. It is a less specific, broader method than `.map()` or `.filter()` but it is logically less efficient at doing the same work.

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b)

[Funfunfunction - video on the basics of `.reduce()`](https://youtu.be/Wl98eZpkp-c)


