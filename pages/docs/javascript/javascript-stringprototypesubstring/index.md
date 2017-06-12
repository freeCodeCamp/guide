---
title: "JavaScript String.prototype.substring()"
parent: "javascript"
---

The `substring()` method returns a subset of a string between one index and another, or through the end of the string.

## Syntax

    str.substring(indexStart[, indexEnd])

## Parameters

**indexStart**

An integer between 0 and the length of the string, specifying the offset into the string of the first character to include in the returned substring.

**indexEnd**

Optional. An integer between 0 and the length of the string, which specifies the offset into the string of the first character not to include in the returned substring.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/3cz15ahb%28v=vs.94%29.aspx)

## Description

`substring()` extracts characters from `indexStart` up to but not including `indexEnd`. In particular:

*   If `indexStart` equals `indexEnd`, `substring()` returns an empty string.
*   If `indexEnd` is omitted, `substring()` extracts characters to the end of the string.
*   If either argument is less than 0 or is `NaN`, it is treated as if it were 0.
*   If either argument is greater than `stringName.length`, it is treated as if it were `stringName.length`.

If `indexStart` is greater than `indexEnd`, then the effect of `substring()` is as if the two arguments were swapped; for example, `str.substring(1, 0) == str.substring(0, 1)`.

## Examples

    var anyString = 'Mozilla';

    // Displays 'Moz'
    console.log(anyString.substring(0, 3));
    console.log(anyString.substring(3, 0));

    // Displays 'lla'
    console.log(anyString.substring(4, 7));
    console.log(anyString.substring(7, 4));

    // Displays 'Mozill'
    console.log(anyString.substring(0, 6));

    // Displays 'Mozilla'
    console.log(anyString.substring(0, 7));
    console.log(anyString.substring(0, 10));

    var s = "The quick brown fox jumps over the lazy dog.";
    var ss = s.substring(10, 15);
    document.write(ss);

    // Output:
    // brown
