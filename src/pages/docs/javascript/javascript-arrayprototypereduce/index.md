---
title: "JavaScript Array.prototype.reduce()"
parent: "javascript"
---

The `reduce()` method applies a function against an accumulator and each value of the array (from left-to-right) to reduce it to a single value.

**Syntax**

    arr.reduce(callback[, initialValue])

## Parameters

*   **callback** Function to execute on each value in the array, taking four arguments:

    *   **previousValue** The value previously returned in the last invocation of the callback, or initialValue, if supplied. (See below.)

    *   **currentValue** The current element being processed in the array.
    *   **currentIndex** The index of the current element being processed in the array.

    *   **array** The array reduce was called upon.

*   **initialValue** Optional. Value to use as the first argument to the first call of the callback.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/ff679975%28v=vs.94%29.aspx)

## Returns

The accumulated result from the last call to the callback function.

## Description

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

## Remarks

If an `initialValue` is provided, the reduce method calls the `callback` function one time for each element present in the array, in ascending index order. If an `initialValue` is not provided, the reduce method calls the `callback` function on each element, starting with the second element.

The return value of the callback function is provided as the `previousValue` argument on the next call to the callback function. The return value of the last call to the callback function is the return value of the `reduce` method.

The callback function is not called for missing elements of the array.

## Examples

    var total = [0, 1, 2, 3].reduce(function(a, b) {
      return a + b;
    });
    // total == 6

    var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
      return a.concat(b);
    }, []);
    // flattened is [0, 1, 2, 3, 4, 5]

    // Define the callback function.
    function appendCurrent (previousValue, currentValue) {
        return previousValue + "::" + currentValue;
        }

    // Create an array.
    var elements = ["abc", "def", 123, 456];

    // Call the reduce method, which calls the callback function
    // for each array element.
    var result = elements.reduce(appendCurrent);

    document.write(result);

    // Output:
    //  abc::def::123::456
