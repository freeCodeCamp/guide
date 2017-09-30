---
title: Boolean
---
The value passed as the first parameter is converted to a boolean value, if necessary. If value is omitted or is 0, -0, null, false, NaN, undefined, or the empty string (""), the object has an initial value of false. All other values, including any object or the string "false", create an object with an initial value of true.

Do not confuse the primitive Boolean values true and false with the true and false values of the Boolean object.

## More Details

Any object whose value is not undefined or null, including a Boolean object whose value is false, evaluates to true when passed to a conditional statement. For example, the condition in the following if statement evaluates to true:

    var x = new Boolean(false);
    if (x) {
      // this code is executed
    }

This behavior does not apply to Boolean primitives. For example, the condition in the following if statement evaluates to false:

    var x = false;
    if (x) {
      // this code is not executed
    }

Do not use a Boolean object to convert a non-boolean value to a boolean value. Instead, use Boolean as a function to perform this task:

    var x = Boolean(expression);     // preferred
    var x = new Boolean(expression); // don't use

If you specify any object, including a Boolean object whose value is false, as the initial value of a Boolean object, the new Boolean object has a value of true.

    var myFalse = new Boolean(false);   // initial value of false
    var g = new Boolean(myFalse);       // initial value of true
    var myString = new String('Hello'); // string object
    var s = new Boolean(myString);      // initial value of true

Do not use a Boolean object in place of a Boolean primitive.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean' target='_blank' rel='nofollow'>Boolean Object</a>
