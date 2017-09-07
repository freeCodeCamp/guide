---
title: Understanding Uninitialized Variables
---
When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an undefined variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an undefined variable, you will get a literal string of "undefined".

Basically this means that before you do any operations with them you **must** assign an initial value at some point.