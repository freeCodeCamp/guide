---
title: javaScript Arrayprototypeconcat
---
The `concat()` method returns a new array comprised of the array on which it is called joined with the array(s) and/or value(s) provided as arguments.

**Syntax**

    var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])

## Parameters

**valueN**

Arrays and/or values to concatenate into a new array. See the description below for details.

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat) | [MSDN link](https://msdn.microsoft.com/en-us/LIBRary/2e06zxh0%28v=vs.94%29.aspx)

## Description

`concat` creates a new array consisting of the elements in the object on which it is called, followed in order by, for each argument, the elements of that argument (if the argument is an array) or the argument itself (if the argument is not an array).

## Examples

    var alpha = ['a', 'b', 'c'];
    var alphaNumeric = alpha.concat(1, [2, 3]);

    console.log(alphaNumeric); 
    // Result: ['a', 'b', 'c', 1, 2, 3]

    var a, b, c, d;
    a = new Array(1,2,3);
    b = "dog";
    c = new Array(42, "cat");
    d = a.concat(b, c);
    document.write(d);

    //Output: 
    1, 2, 3, "dog", 42, "cat"