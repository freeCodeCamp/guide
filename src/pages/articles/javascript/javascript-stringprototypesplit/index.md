---
title: javaScript Stringprototypesplit
---
The split() method splits a string into an array of strings.

**Syntax**

    str.split(separator[, limit]);

## Parameters

**separator** Optional. The separator specifies which characters to use for separating the string. If separator is omitted `str.split();` the array will contain just one element consisting of the entire string. If separator is an empty string `str.split("");` the string is converted into an array of characters.

**limit** Optional. Whole number integer that sets a limit to the number of splits that can be found. The `split()` method will still find all of the matches to the separator, but will truncate the returned array to a maximum length of `limit` elements.

## Description

The split() method returns the new array.

At each match of the separator `.split()` will split the string and add the split section as an element to an array.

## Examples

**Splitting a string into an array of substrings**

    var str = "HelloWorld";
    console.log(str.split(""));
    // Console will output: ["H", "e", "l", "l", "o", "W", "o", "r", "l", "d"]

    var str2 = "HelloWorld";
    console.log(str2.split());
    // Console will output: ["Hello World"]

    var str3 = "HelloWorld";
    console.log(str3.split("Wo"));
    // Console will output: ["Hello", "rld"]

Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)