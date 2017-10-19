---
title: Array.prototype.push
---

## Information

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

**Syntax**
```javascript
arr.push([element1[, ...[, elementN]]])
```

**Parameters**
- `elementN`
  - The elements to add to the end of the array.

**Return value**
- The new length property of the object upon which the method was called.

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

## Examples

```javascript
let array = [1, 2, 3, 4];
array.push(5);
console.log(array); // [1, 2, 3, 4, 5]

array.push(6, 7, 8);
console.log(array); // [1, 2, 3, 4, 5, 6, 7, 8]
```


