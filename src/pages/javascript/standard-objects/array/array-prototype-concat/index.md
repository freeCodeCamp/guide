---
title: Array.prototype.concat
---
## Array.prototype.concat
The 'concat' method returns a new array consisting of the elements of the array on which you call it, followed by the elements of the arguments in the order they are passed.

You can pass multiple arguments to the 'concat' method. The arguments can be arrays, or data types like booleans, strings, and numbers.

Concatenating two arrays:
```javascript
var cold = ['Blue', 'Green', 'Purple'];
var warm = ['Red', 'Orange', 'Yellow'];

var result = cold.concat(warm);

console.log(result);
// results in ['Blue', 'Green', 'Purple', 'Red', 'Orange', 'Yellow'];
```

Concatenating values to an array:
```javascript
var fruits = ['Orange', 'Apple', 'Strawberry'];

var result = cold.concat(5, 7, 9);

console.log(result);
// results in ['Orange', 'Apple', 'Strawberry', 5, 7, 9];
```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

