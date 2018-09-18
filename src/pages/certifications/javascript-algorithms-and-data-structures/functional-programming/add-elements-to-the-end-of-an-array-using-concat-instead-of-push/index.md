---
title: Add Elements to the End of an Array Using concat Instead of push
---
## Add Elements to the End of an Array Using concat Instead of push

### Problem Explanation

Change the `nonMutatingPush` function so it uses `concat` to add `newItem` to the end of original instead of `push`. The function should return an array.

#### Relevant Links:
  - [Array.prototype.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
  

### Solution:
```javascript
function nonMutatingPush(original, newItem) {
  // Add your code below this line
  return original.concat(newItem);
  
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingPush(first, second);
```

