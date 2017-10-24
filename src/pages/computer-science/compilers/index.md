---
title: Compilers
---
## Compilers

Within the field of computer programming, compilers usually refer to applications that take source code written in a high level language such as C++ and translate it into a lower level representation such as a machine code so they can be run by the computer hardware. With a compiled language this step is required before any program you write can be run. By contrast, with interpreted languages programs are read and interpreted on the fly without a separate compilation step. Compiled languages tend to be faster than interpreted languages, as there is no overhead from the run time interpretation of the code, and additional optimisations can be applied during the compilation step, although modern interpreter design has reduced the gap between the two approaches.

The target output of a compiler is usually machine code for specific CPU. For example C++ could be compiled into x86 machine code for running on desktop PCs. Alternatively, some language compilers create machine code for a specification that doesn't represent real hardware, but is instead used as general machine code like language that can be quickly interpreted into real machine code on any CPU. This allows for compiled programs to be portable, without the larger overhead of a fully interpreted language. Java and Python fall into this category.

As part of the compilation process, the code is checked for errors in syntax and semantics and the process is stopped if the compiler cannot correctly translate the entire source into machine code. This is in contrast to interpreted languages where errors are usually identified only at runtime.

### Parts of a compiler

Compilation of a program can usually be broken down into several steps:

1. In <b>lexical analysis</b>, a program called a lexer takes in the source code and produces a stream of tokens. These tokens annotate the source code with data that will be useful in later steps. For example, quoted strings in the source code may result in tokens of type 'string literal'.

2. <b>Parsing</b> involves building an <b>abstract syntax tree (AST)</b>, a data structure that summarizes the source code, using the tokens output by the lexer.

3. <b>Code generation</b> uses the AST to output code in the desired language.

All compilers need to perform these steps. Most modern compilers also carry out other steps such as checking for type errors and optimizing the resulting compiled code.

### Linking

After compilation, most compiled languages also require a linking step. Most programs consist of multiple source files, which would get compiled into multipe separate machine code files. The job of a linker is to take the compiler output of multiple files and combine them into a single executable file. During this process any names that are referenced across the multiple source files are resolved to point to the same variable or function in the final executable.

#### More Information:
<a href='https://medium.freecodecamp.org/a-gentler-introduction-to-programming-707453a79ee8' target='_blank' rel='nofollow'>Matt Adesanya's "A Gentler Introduction to Programming"</a> covers compilers vs. interpreters, along with other basic programming concepts.
