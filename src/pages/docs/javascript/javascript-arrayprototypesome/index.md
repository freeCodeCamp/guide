---
title: "JavaScript Array.prototype.some()"
parent: "javascript"
---

The JavaScript array method `.some()` will take a callback function to test each element in the array; once the callback returns `true` then `.some()` will return true immediately.

**Syntax**

    var arr = [1, 2, 3, 4];
    arr.some(callback[, thisArg]);

## Callback Function

**Syntax**

    var isEven = function isEven(currentElement, index, array) {
        if(currentElement % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

_see wiki_ on <a>Arithmetic Operators</a> to see the remainder operator `%`

**Has 3 arguments**

*   currentElement
    *   this is a variable that represents the element that is being passed to the callback.

*   index

    *   this is the index value of the current element starting at 0

*   array

    *   the array that `.some()` was call on.

The callback function should implement a test case.

## thisArg

Is an optional parameter and more info can be found at the [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

## Description

`.some()` will run the callback function for each element in the array. Once the callback returns true, `.some()` will return `true`. If the callback returns a [falsy value](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) for _every_ element in the array then `.some()` returns false.

`.some()` will not change/mutate the array that called it.

## Examples

**Passing a function to `.some()`**

    var isEven = function isEven(currentElement, index, array) {
        if(currentElement % 2 === 0) {
            return true;
        } else {
            return false;
        }
    }

    var arr1 = [1, 2, 3, 4, 5, 6];
    arr1.some(isEven);  // returns true
    var arr2 = [1, 3, 5, 7];
    arr2.some(isEven);  // returns false

**Anonymous function**

    var arr3 = ['Free', 'Code', 'Camp', 'The Amazing'];
    arr3.some(function(curr, index, arr) {
        if (curr === 'The Amazing') {
            return true;
        } 
        }); // returns true

    var arr4 = [1, 2, 14, 5, 17, 9];
    arr4.some(function(curr, index, arr) {
        return curr > 20;
        });  // returns false

    // ES6 arrows functions
    arr4.some((curr) => curr >= 14)  // returns true

Source [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
