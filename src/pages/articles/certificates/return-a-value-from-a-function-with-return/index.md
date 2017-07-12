---
title: Return A Value From A Function with Return
---
We can pass values into a function with `arguments`. You can use a `return` statement to send a value back out of a function.

## Example

    function plusThree(num) {
      return num + 3;
    }
    var answer = plusThree(5); // 8

`plusThree` takes an `argument` for `num` and returns a value equal to `num + 3`.

A `return` statement will also end the execution of it's parent function. Hence, any statements inside a function scope after a `return` statement will not be executed. In case of multiple `return` statements in a function, only the first one will get executed.