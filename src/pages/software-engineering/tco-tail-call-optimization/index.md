---
title: Tco Tail Call Optimization
---
## Tco Tail Call Optimization

Tail Call Optimization (**TCO**) is a solution to the problem of stack overflows when doing recursion.

### The Problem
Every call to a function is pushed to a stack in computer memory. When the function finishes, it is popped from the stack. In recursion, the function calls itself so it keeps on adding to the stack until all those functions finishes. There is, of course, a limit to this stack. When there are too many functions called, too many calls are added to the stack. When the stack is full and a function is called, this results in a **stack overflow** because the stack is already full. The recursive function will not finish and will result in an error.

#### Example
Here is an example of a factorial function using recursion **without** TCO:

<a class="jsbin-embed" href="http://jsbin.com/gunirobofi/1/embed?js,console">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?4.0.4"></script>

Notice that running `fact` with an argument of 10000 will result in a **stack overflow**.

### Using TCO to solve the problem
To solve this using Tail Call Optimization, the statement where the function calls itself should be in a tail position. The tail position is the last statement to be executed in a function. Therefore, the function's call to itself should be the last thing called before the function ends.

In the previous example, the multiplication operation is executed last in the `return x * fact(x-1)` statement, so it was not the final operation of the function. Therefore, it is not tail call optimized. In order for it to be tail call optimized, we need to make the call to itself the last operation of the function.

#### Example
Here is an example of a factorial function using recursion **with** TCO:

<a class="jsbin-embed" href="http://jsbin.com/poxozekugi/embed?js,console">JS Bin on jsbin.com</a><script src="http://static.jsbin.com/js/embed.min.js?4.0.4"></script>

Notice that running `fact` on 10000 this time will **not result in a stack overflow** because the call to `factTCO` is the last operation of the function.

### Why this works
When the compiler or interpreter notices that the self-call is the last operation of the function, it pops the current function and pushes the self-call to the stack. This way the size of the stack isn't changed. Therefore, the stack doesn't overflow because of the function.

### Notes
TCO is usually available in compiled languages. Javascript didn't have support for tail call optimization until ES6. For the previous versions of Javascript, techniques such as [trampolining](http://raganwald.com/2013/03/28/trampolines-in-javascript.html) were employed to achieve a similar effect.

#### More Information:
- [What is tail call optmization?](https://stackoverflow.com/questions/310974/what-is-tail-call-optimization) (StackOverflow)
- [Tail call optimization in ECMAScript 6](http://2ality.com/2015/06/tail-call-optimization.html) (2ality - Dr. Axel Rauschmayer's blog)
