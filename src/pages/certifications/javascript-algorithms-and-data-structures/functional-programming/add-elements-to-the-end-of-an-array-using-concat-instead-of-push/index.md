---
title: Add Elements to the End of an Array Using concat Instead of push
---
## Add Elements to the End of an Array Using concat Instead of push

- The differance between push and concat methot is that the concat method adds new item to the end of the orginal array without mutating it.
- The concat method does not change the original array, it returns a new array.

## Solution
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
