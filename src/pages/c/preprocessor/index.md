---
title: Preprocessor
---

```c
#include
#define
#undef
#if
#ifdef
#ifndef
#elif
#else
#endif
#error
#pragma
Operator # and ##
Predefined Symbolic Constants
Assertions
```

---
Conclusions / Review
---
Every preprocessor directive must begin with '#'.
Only whitespace characters may appear before a preprocessor directive.
The '#define' directive creates macros and symbolic constants.
The character '\' indicates that the replacement text for a symbolic constant or macro continues on the next line.
The '#include' directive inserts a file in another file.
The conditional compilation construct may be extended to test for multiple cases by using the #elif and the #else directives.
The #ifdef and #ifndef directives are provided as shorthand notation for #if defined(name) and #if !defined(name).
Conditional compilation enables you to control the execution of preprocessor directives and the compilation of program code.
The 'assert' macro prints a message and terminates program execution if the value of the expression the macro evaluates is 0.
The operator ## concatenates its two arguments.
The operator # converts its operand to a string.


