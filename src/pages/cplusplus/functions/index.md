---
title: Introduction to C++ functions
---

## Introduction to C++ functions

Functions let you encapsulate a reusable set of execution steps that can be called from elsewhere in your program. Functions may be passed inputs and may return results. The inputs to functions are called *arguments*, and the result returned, if any, is called the *return value*.

Your program won't compile unless all functions that it calls are declared and defined somewhere in your program (or in compiled files that you link to).

To use a function, you must:

* Declare it in a file in your program (or link to a library that declares it).
* Define it in a file in your program (or link to a library that defines it).
* Call the function from your program with the correct number and type of arguments, and ensure that if you're assigning the return value to a variable, that variable is of the proper type.

Here's an example function declaration:

```cpp
int max(int a, int b);
```

Here's an example function definition for the function `max`:

```cpp
int max(int a, int b) {
	if(a>b) return a;
	return b;
}
```

The `return` statement does two things:

* It immediately returns execution control to the code that called the function
* It returns its argument, either `a` or `b` in the above example, as the return value of the function.




