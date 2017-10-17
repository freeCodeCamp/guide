---
title: Accessing Objects Properties with the Dot Operator
---
There are two ways to access the properties of an object: the dot operator (`.`) and bracket notation (`[]`), similar to an array.

The dot operator is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using the dot operator (`.`) to read an object property:

    var myObj = {
      prop1: "val1",
      prop2: "val2"
    };
    myObj.prop1; // val1
    myObj.prop2; // val2