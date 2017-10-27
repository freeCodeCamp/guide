---
title: Array.prototype.slice
---
## Array.prototype.slice

The `slice()` method creates and returns a copy of an array. The original array will not be modified. 

### Syntax

```js
arr.slice([begin], [end])
```
*brackets `[ ]` indicate an optional parameter 

**Parameters**

`begin`
The index at which extraction begins. If omitted, extraction begins at index `0`.

`end`
The non-inclusive index at which extraction ends. If omitted, extraction continues through the rest of the array.

**Return Value**

A new array containing the extracted elements.

### Examples

```js
var shapes = [“circle”, “rectangle”, “square”, “triangle”, “oval”];
var fourSidedShapes = shapes.slice(1, 3);

console.log(fourSidedShapes); // [“rectangle”, “square”]
```

```js
var arr1 = [1, 2, 3, 4];
var arr2 = arr1.slice();

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]

arr1.push(5);

console.log(arr1); // [1, 2, 3, 4, 5]
console.log(arr2); // [1, 2, 3, 4]
```

### More Information:

<a href=“https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice” target=“_blank” rel=“nofollow”>MDN</a>


