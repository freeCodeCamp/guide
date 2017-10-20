---
title: Compilers
---
## Compilers

Compilers are a kind of translator. We write the source code in JavaScript, Python, and other languages. Then the compiler takes the code and converts it to code the computer understands.

This converted code is binary code, which is nothing but 1s and 0s. When you run your source code, a compiler translates all the code first, then produces the binary code. Then the computer takes the binary code and runs it.

If there are errors in your source code, the compiler detects them. This stops the compilation process. Even after the compiler converts the code, the converted code can still fail when it's running.

<b>Parts of a compiler</b>

Compilation of a program can usually be broken down into several steps:

1. In <b>lexical analysis</b>, a program called a lexer takes in the source code and produces a stream of tokens. These tokens annotate the source code with data that will be useful in later steps. For example, quoted strings in the source code may result in tokens of type 'string literal'.

2. <b>Parsing</b> involves building an <b>abstract syntax tree (AST)</b>, a data structure that summarizes the source code, using the tokens output by the lexer.

3. <b>Code generation</b> uses the AST to output code in the desired language.

All compilers need to perform these steps. Most modern compilers also carry out other steps such as checking for type errors and optimizing the resulting compiled code.

#### More Information:
<a href='https://medium.freecodecamp.org/a-gentler-introduction-to-programming-707453a79ee8' target='_blank' rel='nofollow'>Matt Adesanya's "A Gentler Introduction to Programming"</a> covers compilers vs. interpreters, along with other basic programming concepts.
