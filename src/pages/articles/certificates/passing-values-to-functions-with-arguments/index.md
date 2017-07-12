---
title: Passing Values To Functions with Arguments
---
`Parameters` are variables that act as placeholders for the values that are to be input to a function when it is called. When a function is defined, it is typically defined along with one or more parameters. The actual values that are input (or "_passed_") into a function when it is called are known as `arguments`.

Here is a function with two parameters, `param1` and `param2`:

    function functionWithArgs(param1, param2) {
      console.log(param1, param2);
    }

Then we can call functionWithArgs:

`functionWithArgs("Hello", "World");`

We have passed two arguments, `"Hello"` and `"World"`. Inside the function, `param1` will equal "Hello" and `param2` will equal "World". Note that you could call `functionWithArgs` again with different arguments and the parameters would take on the value of the new arguments.