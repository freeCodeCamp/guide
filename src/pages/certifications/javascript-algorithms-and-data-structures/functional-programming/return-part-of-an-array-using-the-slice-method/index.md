---
title: Return Part of an Array Using the slice Method
---
## Return Part of an Array Using the slice Method

### Problem Explanation

Use the slice method in the sliceArray function to return part of the anim array given the provided beginSlice and endSlice indices. The function should return an array.
  

### Solution:
```javascript
function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  
  return anim.slice(beginSlice, endSlice);
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```
#### Relevant Links:
  - [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
