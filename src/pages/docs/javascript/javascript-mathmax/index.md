---
title: "JavaScript Math.max()"
parent: "javascript"
---

The `Math.max()` function returns the largest of zero or more numbers.

## Syntax

    Math.max(value1, value2, ...)

### Parameters

`value1`, `value2` and other arguments should be numbers. All arguments are optional.

If no arguments are given, the result is Infinity. If at least one of arguments cannot be converted to a number, the result is NaN.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/dxcwky7y%28v=vs.94%29.aspx)

## Examples

    Math.max();         // Infinity
    Math.max('a');      // NaN
    Math.max(NaN);      // NaN
    Math.max(5);        // 5
    Math.max(10, 20);   //  20
    Math.max(-10, -20); // -10
    Math.max(-10, 20);  //  20

    var x = Math.max(107 - 3,  48 * 90);
    document.write(x);

    // Output:
    // 4320
