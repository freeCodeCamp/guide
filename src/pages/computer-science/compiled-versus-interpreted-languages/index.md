---
title: Compiled Versus Interpreted Languages
---
## Compiled Versus Interpreted Languages

### Programming
At its heart, a barebones computer (aka a stored program computer) is nothing but a machine which knows how to read steps written in a fixed instruction set and execute the same. The set of instructions a computer understands is very specific to it. This is also known as machine language (**opcodes**). Machine Language is often alos referred to as Bianry Code.

Humans interact with computers using **Programs**. A program is simply a sequence of opcodes provided to the computer along with data that is necessary for executing the opcodes. 

For example,
```
ADD 10, 20  // ADD is the Opcode 
            // and 10, 20 are the two operands(data) 
            // needed for the ADD instruction to be executed successfully
```
Humans develop programs to solve complex problems. Looking at how simple opcodes are, if we try to develop programs using opcodes alone, it will be very cumbersome and difficult to debug. To solve this problem, high level languages like C/C++, Python, Java, Javascript, etc were developed. 

Now, high level languages aren't suitable for execution by computers. Hence, the need arose for a translator that can digest the high-level language programs and convert them to machine language instructions suitable for execution by a computer.

#### [HUMANS] -> [Highlevel language programs] -> [Translator] -> [Machine Language] -> [Computer]

### Translators
Translators are majorly of two kinds:-
1. Compilers
2. Interpreters

In a nutshell, a Compiler translates high-level programs to machine understandable binary code. This can then be directly executed by the computer. Here, the process of executing a program involves a discrete step called *compilation*. Only after the compilation is completed, can the program begin execution and calculate the results. 

On the other hand, an interpreted language depends on another program usually referred to as an **Interpreter**. The function of the interpreter is to take parts of the high-level program, convert it and execute it step by step. The result of execution of each step will usually be available as soon as the step is executed. It is possible to incrementally develop more high-level code while viewing the results of the past steps.

To Put it in plain english:-
#### Compiler
```
This is akin to taking a document written in Japanese, and translating it into English. 
An English reader, has to wait for the entire translation step to be completed before they can read the book. 
```
#### Interpreter
```
This is akin to a japanese speech being translated on the fly by an interpreter who knows both Japanese & English.
An English speaker, can listen to the English version line by line.
```
* C/C++, Basic, Java, are classic examples of Compiled Languages.
* Javascript, Python, Ruby are classic examples of Interpreted Languages.

Strictly speaking, the terms interpreted language and compiled language are not well defined because, in theory, any programming language can be either interpreted or compiled. In modern programming language implementation it is increasingly popular for a platform to provide both options.
e.g. Python can be executed either as a compiled program, or as an interpreted language in interactive mode.

**Most command line tools, CLIs, and shells can theoretically be classified as interpreted languages.**

### Advantages of Compiled Languages
Programs compiled into native code at compile time usually tend to be faster than those translated at run time, due to the overhead of the translation process.

### Disadvantages of Compiled Languages
The most notable disadvantages are :-
* Additional time needed to complete the entire compilation step before testing, and 
* Platform dependence of the generated binary code.

### Advantages of Interpreted Languages
An Interpreted language gives implementations some additional flexibility over compiled implementations. Because interpreters execute the source program code themselves, the code itself is platform independent (Java's byte code, for example). Other features include dynamic typing, and smaller executable program size.

### Disadvantages of Interpreted Languages
The most notable disadvantage is typical execution speed compared to compiled languages.

#### More Information:
(https://github.com/79man/guides/blob/4aa86872ae5fd25a2c88ef98f12df5d454fb2c48/src/pages/computer-science/compilers/index.md)
