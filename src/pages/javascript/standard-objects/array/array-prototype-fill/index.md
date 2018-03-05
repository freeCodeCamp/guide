---
title: Array.prototype.fill
---
## Array.prototype.fill

The fill() method fills all the elements in an array with a static value.

Syntax:

``` javascript
arr.fill(value)
arr.fill(value, start)
arr.fill(value, start, end)
```

The fill method takes up to three arguments value, start and end. The start and end arguments are optional with default values of 0 and the length of the this object.

The fill method is a mutable method, it will change this object itself, and return it, not just return a copy of it.

## Examples

```javascript
[1, 2, 3].fill(4);                 // [4, 4, 4]
[1, 2, 3].fill(4, 1);              // [1, 4, 4]

var fruits = ["Grape", "Pear", "Apple", "Strawberry"];
fruits.fill("Watermelon", 2, 4);   // Banana, Pear, Watermelon, Watermelon
```

#### More Information:
For more information visit [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

