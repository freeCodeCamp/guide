---
title: Just in Time Compilation
---
## Just in Time Compilation

Just-in-time compilation is a method for improving the performance of interpreted programs.  During execution the program may be compiled into native code to improve its performance.  It is also known as dynamic compilation.

Dynamic compilation has some advantages over static compilation.  When running Java or C# applications, the runtime environment can profile the application while it is being run.  This allows for more optimized code to be generated.  If the behavior of the application changes while it is running, the runtime environment can recompile the code.

Some of the disadvantages include startup delays and the  overhead of compilation during runtime.  To limit the overhead, many JIT compilers only compile the code paths that are frequently used.

### Overview

Traditionally there are two methods for converting source code into a form that can be run on a platform.  Static compilation converts the code into a language for a specific platform.  An interpreter directly executes the source code.

JIT compilation attempts to use the benefits of both.  While the interpretted program is being run, the JIT compiler determines the most frequently used code and compiles it to machine code.  Depending on the compiler, this can be done on a method or smaller section of code.

Dynamic compilation was first described in a paper by J. McCarthy on LISP in 1960.

#### More Information:
[Wikipedia description](https://en.wikipedia.org/wiki/Just-in-time_compilation)

[JIT Introduction](https://eli.thegreenplace.net/2013/11/05/how-to-jit-an-introduction/)
