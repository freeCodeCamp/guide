---
title: javaScript Arrayprototypepush
---
The JavaScript array method `.push()` adds one or more new elements to the end of an array and returns the length of the newly expanded array.

**Syntax**

    var array = [1, 2, 3, 4, 5];
    array.push(6);

## Parameters

`.push` accepts one or multiple parameters.

## Returns

The length of the array is returned by `.push()`

## Description

`.push()` 'pushes' new values onto the end (the right side) of an array.

## Examples

**Pushing a new element into an array**

    var array = [1, 2, 3, 4, 5];
    var totalArrayElements = array.push(6);

    console.log(array);
    // Console will output 1, 2, 3, 4, 5, 6

    console.log(totalArrayElements);
    // Console will output 6

Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)