---
title: javaScript Stringprototypeconcat
---
The concat() method combines the text of two or more strings and returns a new string.

**Syntax**

    str.concat(string2[,..., stringN]);

## Parameters

**string2...string_N_** The strings which are to be concatenated to this String.

## Description

The concat() method combines the text of two or more strings and returns the concatenated string. It does not modify the original strings.

## Examples

**Concatenating strings**

    var str1 = "Hello";
    var str2 = "World";
    console.log(str1.concat(str2));
    // Console will output: HelloWorld

    var str2 = "Hello, ";
    console.log(str2.concat(" Welcome ", "to FCC."));
    // Console will output: Hello, Welcome to FCC.

Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/concat)