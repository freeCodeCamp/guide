---
title: "Use Conditional Logic with If Statements"
parent: "certificates-guide"
---

We can use `if` statements in JavaScript to execute code only if the specified condition is met.

Each `if` statement requires a `boolean` condition to evaluate. If the boolean evaluates to `true`, the statements inside the curly braces will execute. Otherwise, if it evaluates to `false`, the code will not execute.

## Example

    function trueOrFalse(myVal) {
      if (myVal > 10) {
         return "Greater Than";
      }
      return "Not Greater Than";
    }

If `myVal` is greater than `10`, the function will return `"Greater Than"`. If it is not, the function will return `"Not Greater Than"`. Both `return` statements will never get executed because as soon as the first one is encountered, the execution exits the function and returns control to where the function was called.
