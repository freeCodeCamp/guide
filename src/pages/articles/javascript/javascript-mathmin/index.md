---
title: javaScript Mathmin
---
The `Math.min()` function returns the smallest of zero or more numbers.

## Syntax

    Math.min(value1, value2, ...)

### Parameters

`value1`, `value2` and other arguments should be numbers. All arguments are optional.

If no arguments are given, the result is Infinity. If at least one of arguments cannot be converted to a number, the result is NaN.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/min) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/7x8968dh%28v=vs.94%29.aspx)

## Examples

    Math.min();         // Infinity
    Math.min('a');      // NaN
    Math.min(NaN);      // NaN
    Math.min(5);        // 5
    Math.min(-1, 10);   // -1

    var x = Math.min(107 - 3,  48 * 90);
    document.write(x);

    // Output:
    // 104