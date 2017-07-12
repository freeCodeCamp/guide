---
title: javaScript Arrayprototypeforeach
---
The `forEach()` method executes a provided function once per array element.

**Syntax**

    arr.forEach(callback[, thisArg])

## Parameters

*   **callback** Function to execute for each element, taking three arguments:
    *   **currentValue** The current element being processed in the array.

    *   **index** The index of the current element being processed in the array.
    *   **array** The array that forEach is being applied to.
*   **thisArg** Optional. Value to use as this when executing callback.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/ff679980%28v=vs.94%29.aspx)

## Description

`forEach()` executes the provided callback once for each element present in the array in ascending order. It is not invoked for index properties that have been deleted or are uninitialised (i.e. on sparse arrays). Unlike `map()` or `reduce()` it always returns the value `undefined` and is not _chainable_. The typical use case is to execute side effects at the end of a chain.

## Examples

    function logArrayElements(element, index, array) {
      console.log('a[' + index + '] = ' + element);
    }

    // Note elision, there is no member at 2 so it isn't visited
    [2, 5, , 9].forEach(logArrayElements);
    // logs:
    // a[0] = 2
    // a[1] = 5
    // a[3] = 9

    // Create an array.
    var numbers = [10, 11, 12];

    // Call the addNumber callback function for each array element.
    var sum = 0;
    numbers.forEach(
        function addNumber(value) { sum += value; }
    );

    document.write(sum);
    // Output: 33