---
title: Just in Time Compilation
---
## Just in Time Compilation

## JIT stands for Just-in-Time which means that code gets compiled when it is needed, not before runtime.

In the beginning, a compiler was responsible for turning a high-level language (defined as higher level than assembler) into object code (machine instructions), which would then be linked (by a linker) into an executable.

At one point in the evolution of languages, compilers would compile a high-level language into pseudo-code, which would then be interpreted (by an interpreter) to run your program. This eliminated the object code and executables, and allowed these languages to be portable to multiple operating systems and hardware platforms. Pascal (which compiled to P-Code) was one of the first; Java and C# are more recent examples. Eventually the term P-Code was replaced with bytecode, since most of the pseudo-operations are a byte long.

A Just-In-Time (JIT) compiler is a feature of the run-time interpreter, that instead of interpreting bytecode every time a method is invoked, will compile the bytecode into the machine code instructions of the running machine, and then invoke this object code instead. Ideally the efficiency of running object code will overcome the inefficiency of recompiling the program every time it runs.

A JIT compiler runs after the program has started and compiles the code (usually bytecode or some kind of VM instructions) on the fly (or just-in-time, as it's called) into a form that's usually faster, typically the host CPU's native instruction set. A JIT has access to dynamic runtime information whereas a standard compiler doesn't and can make better optimizations like inlining functions that are used frequently.

This is in contrast to a traditional compiler that compiles all the code to machine language before the program is first run.

To paraphrase, conventional compilers build the whole program as an EXE file BEFORE the first time you run it. For newer style programs, an assembly is generated with pseudocode (p-code). Only AFTER you execute the program on the OS (e.g., by double-clicking on its icon) will the (JIT) compiler kick in and generate machine code (m-code) that the Intel-based processor or whatever will understand.

## Typical scenario:

The source code is completely converted into machine code

## JIT scenario:

The source code will be converted into assembly language like structure [for ex IL (intermediate language) for C#, ByteCode for java].

The intermediate code is converted into machine language only when the application needs that is required codes are only converted to machine code.

## JIT vs Non-JIT comparison:

In JIT not all the code is converted into machine code first a part of the code that is necessary will be converted into machine code then if a method or functionality called is not in machine then that will be turned into machine code... it reduces burden on the CPU.
As the machine code will be generated on run time....the JIT compiler will produce machine code that is optimised for running machine's CPU architecture.
JIT Examples:

In Java JIT is in JVM (Java Virtual Machine)
In C# it is in CLR (Common Language Runtime)
In Android it is in DVM (Dalvik Virtual Machine), or ART (Android RunTime) in newer versions.

Java Virtual Machine (JVM)( JVM executes bytecode) maintains a count as of how many time a function is executed. If this count exceeds a predefined limit JIT compiles the code into machine language which can directly be executed by the processor (unlike the normal case in which javac compile the code into bytecode and then java - the interpreter interprets this bytecode line by line converts it into machine code and executes).

Also next time this function is calculated same compiled code is executed again unlike normal interpretation in which the code is interpreted again line by line. This makes execution faster.
