---
title: Function Invocation
---
## Function Invocation
The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function".

Functions must be in scope when they are called. The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.

```javascript
function myFunction(a, b) {
  return a * b;
}
myFunction(10, 2);           // Function invocation, will return 20 
```

### Invoking a Function as a Method
In JavaScript, you can define functions as object methods.

The following example creates an object (`myObject`), with two properties (`firstName` and `lastName`), and a method (`fullName`):

```javascript
var myObject = {
  firstName:"John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
myObject.fullName();         // Function invoked as a method, will return "John Doe"
```

### More Information:
- Function documentation: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)


