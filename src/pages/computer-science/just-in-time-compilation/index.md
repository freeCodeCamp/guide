---
title: Just in Time Compilation
---
## Just in Time Compilation

Just-in-time compilation (JIT) is a mixture between normal compilation (Where all the code is translated to machine code before execution) and interpretation (where the code is compiled on the fly). The JIT compiler is part of a normal compiler or language interpreter, as it works as a helper of those and works at runtime (While the code is already running).

Usually the JIT works by taking some unoptimized intermediate or machine code and starts checking how often that piece of code is used (That is, called Hotness), if that code pass a certain threshold of hotness set by the JIT, the JIT will then take that piece of code and further optimize it for the future uses, the more the code is used, the more the JIT will try to make better optimizations.

Some notorious examples of languages implementing JIT compilers are .NET languages with their CLR, and Java in the JVM. 

#### More Information:

[Wikipedia](https://en.wikipedia.org/wiki/Just-in-time_compilation) Holds more technical information regarding JIT compilation and compilers.

