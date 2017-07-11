---
title: "JavaScript String.prototype.indexOf()"
parent: "javascript"
---

The indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex. Returns -1 if the value is not found.

**Syntax**  

    str.indexOf(searchValue[, *fromIndex*]);

### Parameters

**searchValue**  
A character/string whose index is to be found.

**fromIndex**  
Optional. The location within the calling string to start the search from. It can be any integer. The default value is 0\. If `fromIndex < 0` the entire string is searched (same as passing 0). If `fromIndex >= str.length`, the method will return -1 unless `searchValue` is an empty string in which case `str.length` is returned.

## Description

Characters in a string are indexed from left to right. The index of the first character is 0, and the index of the last character of a string called `str` is `str.length - 1`.

## Examples

**Finding a character in a string**  

    var str1 = "Hello";
    console.log(str1.indexOf('H'));
    // Console will output: 0

    var str1 = "Hello";
    console.log(str1.indexOf('Y'));
    // Console will output: -1.

**indexOf() is case-sensitive**  

    var str1 = "Hello";
    console.log(str1.indexOf('ello'));
    // Console will output 1

    var str1 = "Hello";
    console.log(str1.indexOf('Ello'));
    // Console will output -1

**indexOf() with fromIndex**  

    var str1 = "FreeCodeCamp is a place for people to learn";
    console.log(str1.indexOf('Camp'));
    // Console will output 8

    console.log(str1.indexOf('Camp', 9));
    // Console will output -1

Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
