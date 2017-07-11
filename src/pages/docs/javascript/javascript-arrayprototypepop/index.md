---
title: "JavaScript Array.prototype.pop()"
parent: "javascript"
---

The JavaScript array method `.pop()` will remove the last element from an array and returns that element.

**Syntax**

    var array = [1, 2, 3, 4, 5];
    array.pop();

## Description

`.pop()` 'pops' the last element in an array off and returns that element

`.pop()` will return `undefined` if the array it is called on is empty.

## Examples

**Popping off the last value in an array**

    var array = [1, 2, 3, 4, 5];
    console.log(array);
    // Console will output 1, 2, 3, 4, 5

    array.pop();
    /* If we console.log(array.pop()); the console would output 5
    because 5 was popped off the array by .pop(). */

    console.log(array);
    /* Console will output 1, 2, 3, 4 and 
    the variable array now contains the set [1, 2, 3, 4] */

Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
