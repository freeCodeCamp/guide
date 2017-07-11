---
title: "JavaScript String.prototype.match()"
parent: "javascript"
---

The `match()` method retrieves the matches when matching a string against a regular expression.

## Syntax

    str.match(regexp)

## Parameters

**regexp**

A regular expression object. If a non-RegExp object obj is passed, it is implicitly converted to a RegExp by using `new RegExp(obj)`.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/7df7sf4x%28v=vs.94%29.aspx)

## Returns

An `Array` containing the matched results or `null` if there were no matches.

## Description

If the regular expression does not include the `g` flag, returns the same result as `RegExp.exec()`. The returned `Array` has an extra input property, which contains the original string that was parsed. In addition, it has an index property, which represents the zero-based index of the match in the string.

If the regular expression includes the `g` flag, the method returns an `Array` containing all matched substrings rather than match objects. Captured groups are not returned. If there were no matches, the method returns `null`.

## Examples

    var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var regexp = /[A-E]/gi;
    var matches_array = str.match(regexp);

    console.log(matches_array);
    // ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

    var str = 'For more information, see Chapter 3.4.5.1';
    var re = /(chapter \d+(\.\d)*)/i;
    var found = str.match(re);

    console.log(found);

    // logs ['Chapter 3.4.5.1', 'Chapter 3.4.5.1', '.1']

    // 'Chapter 3.4.5.1' is the first match and the first value 
    // remembered from `(Chapter \d+(\.\d)*)`.

    // '.1' is the last value remembered from `(\.\d)`.
