---
title: Compiled Versus Interpreted Languages
---
## Compiled Versus Interpreted Languages

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/computer-science/compiled-versus-interpreted-languages/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

A compiled language is one where the program, once compiled, is expressed in the instructions of the target machine. For example, an addition "+" operation in your source code could be translated directly to the "ADD" instruction in machine code.

An interpreted language is one where the instructions are not directly executed by the target machine, but instead read and executed by some other program (which normally is written in the language of the native machine). For example, the same "+" operation would be recognised by the interpreter at run time, which would then call its own "add(a,b)" function with the appropriate arguments, which would then execute the machine code "ADD" instruction.

You can do anything that you can do in an interpreted language in a compiled language and vice-versa - they are both Turing complete. Both however have advantages and disadvantages for implementation and use.

I'm going to completely generalise (purists forgive me!) but, roughly, here are the advantages of compiled languages:

Faster performance by directly using the native code of the target machine
Opportunity to apply quite powerful optimisations during the compile stage
And here are the advantages of interpreted languages:

Easier to implement (writing good compilers is very hard!!)
No need to run a compilation stage: can execute code directly "on the fly"
Can be more convenient for dynamic languages
Note that modern techniques such as bytecode compilation add some extra complexity - what happens here is that the compiler targets a "virtual machine" which is not the same as the underlying hardware. These virtual machine instructions can then be compiled again at a later stage to get native code (e.g. as done by the Java JVM JIT compiler).
[Source](https://stackoverflow.com/questions/3265357/compiled-vs-interpreted-languages#3265602)


