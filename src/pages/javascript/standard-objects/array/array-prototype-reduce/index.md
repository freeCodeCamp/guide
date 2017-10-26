---
title: Array.prototype.reduce
---
## Array.prototype.reduce

The reduce() method runs the provided callback function against all elements of the array (left to right), and an accumulator to reduce the array to a single value.

>`arr.reduce(callback, initialValue);`

The `callback` is a function that is provided the following 4 arguments:  
1. `accumulator` - The accumulator accumulates the callback's return values. It's value is the previously returned value from the last invocation of teh callback, or `initialValue` if it was supplied.  
2. `currentValue` - The current element being processed from the array.  
3. `currentIndex` - The index of the current element being processed in the array. Starts at index 0 if an `initialValue` is provided, and at index 1 otherwise.  
4. `array` - The arry reduce was called upon.  

The `**initialValue**` is an **optional** argument. It is applied on the first call of the callback. If no `initialValue` is supplied, the first element in the array will be used.

### Examples

**ES5**
```
[0, 1, 2, 3, 4].reduce(
  function(
    accumulator,
    currentValue,
    currentIndex,
    array,
  ) {
    return accumulator + currentValue;
  }
);
// Result = 10
```

**ES6**
```
[0, 1, 2, 3, 4].reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
// Result = 10
```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=a)

