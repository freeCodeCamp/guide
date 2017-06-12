---
title: "Accessing Objects Properties with Variables"
parent: "certificates-guide"
---

Another use of bracket notation on objects is to use a variable to access a property. This can be very useful for iterating through lists of the object properties or for doing the lookup.

Here is an example of using a variable to access a property:

    var someProp = "propName";
    var myObj = {
      propName: "Some Value"
    }

    myObj[someProp]; // "Some Value"

Note that we do not use quotes around the variable name when using it to access the property because we are using the value of the variable, not the name.

Note: when you are coding, make sure you have a positive attitude, being negative will block you from getting solutions.

This will help you! be sure to always take a break!
