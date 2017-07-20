---
title: JavaScript Forin Loop
---
The `for..in` statement iterates over the enumerable properties of an object, in arbitrary order. For each distinct property, statements can be executed.

    for (variable in object) {
    ...
    }

| Required/Optional | Parameter | Description |  
|-------------------|-----------|----------------------------------------------------------------------|  
| Required | Variable | A different property name is assigned to variable on each iteration. |  
| Optional | Object | Object whose enumerable properties are iterated. |

[MDN link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in) | [MSDN link](https://msdn.microsoft.com/library/55wb2d34.aspx)

## Examples

    // Initialize object.
    a = {"a" : "Athens" , "b" : "Belgrade", "c" : "Cairo"}

    // Iterate over the properties.
    var s = ""
    for (var key in a) {
        s += key + ": " + a[key];
        s += "<br />";
        }
    document.write (s);

    // Output:
    // a: Athens
    // b: Belgrade
    // c: Cairo

    // Initialize the array.
    var arr = new Array("zero","one","two");

    // Add a few expando properties to the array.
    arr["orange"] = "fruit";
    arr["carrot"] = "vegetable";

    // Iterate over the properties and elements.
    var s = "";
    for (var key in arr) {
        s += key + ": " + arr[key];
        s += "<br />";
    }

    document.write (s);

    // Output:
    //   0: zero
    //   1: one
    //   2: two
    //   orange: fruit
    //   carrot: vegetable