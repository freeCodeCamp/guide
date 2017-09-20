---
title: Testing Objects for Properties
---
Sometimes it is useful to check if the property of a given object exists or not. We can use the .hasOwnProperty([propname]) method of objects to determine if that object has the given property name. .hasOwnProperty() returns true or false if the property is found or not.

## Example

    var myObj = {
      top: "hat",
      bottom: "pants"
    };
    myObj.hasOwnProperty("top");    // true
    myObj.hasOwnProperty("middle");