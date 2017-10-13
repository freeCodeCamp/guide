---
title: Compilers
---
## Compilers

Compilers are a kind of translator. We write the source code in JavaScript, Python, and other languages. Then the compiler takes the code and converts it to code the computer understands.

This converted code is binary code, which is nothing but 1s and 0s. When you run your source code, a compiler translates all the code first, then produces the binary code. Then the computer takes the binary code and runs it.

If there are errors in your source code, the compiler detects them. This stops the compilation process. Even after the compiler converts the code, the converted code can still fail when it's running.

<b>Types Of Compilers<b>
  
  One classification of compilers is by the platform on which their generated code executes. This is known as the target platform.

A native or hosted compiler is one which output is intended to directly run on the same type of computer and operating system that the compiler itself runs on. The output of a cross compiler is designed to run on a different platform. Cross compilers are often used when developing software for embedded systems that are not intended to support a software development environment.

The output of a compiler that produces code for a virtual machine (VM) may or may not be executed on the same platform as the compiler that produced it. For this reason such compilers are not usually classified as native or cross compilers.

The lower level language that is the target of a compiler may itself be a high-level programming language. C, often viewed as some sort of portable assembler, can also be the target language of a compiler. E.g.: Cfront, the original compiler for C++ used C as target language. The C created by such a compiler is usually not intended to be read and maintained by humans. So indent style and pretty C intermediate code are irrelevant. Some features of C turn it into a good target language. E.g.: C code with #line directives can be generated to support debugging of the original source.

While a common compiler type outputs machine code, there are many other types:
  1. source-to-source compiler
  2. Bytecode compiler
  3. Hardware compiler


#### More Information:
<a href='https://medium.freecodecamp.org/a-gentler-introduction-to-programming-707453a79ee8' target='_blank' rel='nofollow'>Matt Adesanya's "A Gentler Introduction to Programming"</a> covers compilers vs. interpreters, along with other basic programming concepts.
