---
title: Compiled Versus Interpreted Languages
---
## Compiled Versus Interpreted Languages

## Introduction

Compilation and Interpretation transforms the code in to executable code. Code can either be executed natively through the operating system after it is converted to machine code (via compilation) or can be evaluated line by line through another program which handles executing the code instead of the operating system itself (via interpretation).

Before going further, it needs to be said that most programming languages have both compiled implementations and interpretated implementations like java, and thus you can’t really classify an entire language as being compiled or interpreted – only a specific implementation.

## Compiled Languages

The major advantage of compiled languages over interpreted languages is their execution speed. Because compiled languages are converted directly into machine code, they run significantly faster and more efficiently than interpreted languages, especially considering the complexity of statements in some of the more modern scripting languages which are interpreted.

Lower-level languages tend to be compiled because efficiency is usually more of a concern than cross-platform support. Additionally, because compiled languages are converted directly into machine code, this gives the developer much more control over hardware aspects such as memory management and CPU usage. Examples of pure compiled languages include C, C++, Erlang, Haskell, and more modern languages such as Rust and Go.

Some of the pitfalls of compiled languages are pretty substantial however. In order to run a program written in a compiled language, you need to first manually compile it. Not only is this an extra step in order to run a program, but while you debug the program, you would need to recompile the program each time you want to test your new changes. That can make debugging very tedious. Another detriment of compiled languages is that they are not platform-independent, as the compiled machine code is specific to the machine that is executing it.

## Interpreted Languages

In contrast to compiled languages, interpreted languages do not require machine code in order to execute the program; instead, interpreters will run through a program line by line and execute each command. In the early days of interpretation, this posed a disadvantage compared to compiled languages because it took significantly more time to execute the program, but with the advent of new technologies such as just-in-time compilation, this gap is narrowing. Examples of some common interpreted languages include PHP, Perl, Ruby, and Python. Some of the programming concepts that interpreted languages make easier are:

Platform independence
Reflection
Dynamic typing
Smaller executable program size
Dynamic scoping
The main disadvantage of interpreted languages is a slower program execution speed compared to compiled languages. However, as mentioned earlier, just-in-time compilation helps by converting frequently executed sequences of interpreted instruction into host machine code.

## Overview

Most languages today can either be compiled or interpreted through their various implementations, making the difference between the two less relevant. One language execution style isn’t better than the other, but they certainly have their strengths and weaknesses.

In a nutshell, compiled languages are the most efficient type of programming language because they execute directly as machine code and can easily utilize more of the hardware specs of the running machine. In turn, this forces a significantly stricter coding style and a single program usually can’t be run on different operating systems. Interpreted languages on the other hand offer much more diversity in coding style, are platform-independent, and easily allow for dynamic development techniques such as metaprogramming. However, interpreted languages execute much slower than compiled languages – though just-in-time compilation has been helping to speed this up.



