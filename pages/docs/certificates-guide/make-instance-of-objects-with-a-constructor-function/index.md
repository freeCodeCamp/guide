---
title: "Make Instance of Objects with a Constructor Function"
parent: "certificates-guide"
---

A function that creates objects is called a _constructor_, my favorite way of creating objects when you have to create more than one of the same object. You can also edit the second object to add more properties if needed. This is called creating _instances_ of an object.

Each new instance of this object inherits all the properties and methods of your original object.

    var Car = function() {
       this.wheels = 4;
    };

    // New instance of Car object.
    var myCar = new Car();

    //Add the property "engines" to myCar, and make it a number.
    myCar.engines = 1;
