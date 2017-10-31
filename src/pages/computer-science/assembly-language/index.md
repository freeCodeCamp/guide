---
title: Assembly Language
---
## Assembly Language


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Assembly Language is the interface between high level languages such as C++ and Java, and binary machine code. High level code is compiled into Assembly Language code. Assembly Language is the human-readable format of instructions, while machine-language is the computer-readable binary format of instructions.

Assembly Languages are divided into different Instruction Set Architectures (ISA), which are basic instructions the CPU can understand and process. More complex instuctions from high level languages are decomposed by a compiler into the simpler operations in the defined instruction set. Different computer architectures have different ISAs. A few common ISAs are MIPS, ARM, Intel x86, RISC-V.

Assemblers decompose Assembly instructions into their respective binary representations. Assemblers replace the generic addresses of assembly code with explicit register and memory addresses of your computer.

Assembly code is generated through two methods; hand written Assembly Language or generating Assembly Language from high level code. Efficient embedded electronic systems frequently implement hand written Assembly code if execution speed and control are absolutely paramount. Otherwise high level languages are used for easier development. These two options of developing Assembly code presents various limitations. Hand written Assembly Language is significantly more efficient than computer generated Assembly, but the hand written assembly is device specific, where it loses portability and can not be directly ported to another device without requiring modification. In comparison, high level language generated Assembly code is less efficient than hand written Assembly Language, but it offers the advantage of easily porting code between devices.

![Image of Levels of Code](https://raw.githubusercontent.com/colbybanbury/assemblyPicture/master/Screenshot%20from%202017-10-14%2014-03-06.png)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


