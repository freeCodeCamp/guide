---
title: Array.prototype.findIndex
---
## Array.prototype.findIndex

findIndex() returns the index of the first element of an array that passes the provided testing function.

#### Example

```javascript
    function isBigEnough(element) {
      return element >= 15;
    }

    [12, 5, 8, 130, 44].findIndex(isBigEnough); 
    // index of 4th element in the Array is returned,
    // so this will result in '3'
```

Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)
