---
title: Orthogonality
---
## Orthogonality

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/software-engineering/orthogonality/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
In computer programming, "orthogonality in a programming language means that a relatively small set of primitive constructs can be combined in a relatively small number of ways to build the control and data structures of the language" (Sebesta, Robert. Concepts of Programming Languages.). The term is most-frequently used regarding assembly instruction sets, as orthogonal instruction set.

Orthogonality is an important concept, addressing how a relatively small number of components can be combined in a relatively small number of ways to get the desired results. It is associated with simplicity; the more orthogonal the design, the fewer exceptions. This makes it easier to learn, read and write programs in a programming language. The meaning of an orthogonal feature is independent of context; the key parameters are symmetry and consistency (for example, a pointer is an orthogonal concept).

An example from IBM Mainframe and VAX highlights this concept. An IBM mainframe has two different instructions for adding the contents of a register to a memory cell (or another register). These statements are shown below:

A Reg1, memory_cell

AR Reg1, Reg2

In the first case, the contents of Reg1 are added to the contents of a memory cell; the result is stored in Reg1. In the second case, the contents of Reg1 are added to the contents of another register (Reg2) and the result is stored in Reg1.

In contrast to the above set of statements, VAX has only one statement for addition:

ADDL operand1, operand2

In this case the two operands (operand1 and operand2) can be registers, memory cells, or a combination of both; the instruction adds the contents of operand1 to the contents of operand2, storing the result in operand1.

VAX’s instruction for addition is more orthogonal than the instructions provided by IBM; hence, it is easier for the programmer to remember (and use) the one provided by VAX.

The design of C language may be examined from the perspective of orthogonality. The C language is somewhat inconsistent in its treatment of concepts and language structure, making it difficult for the user to learn (and use) the language. Examples of exceptions follow:

Structures (but not arrays) may be returned from a function. An array can be returned if it is inside a structure. A member of a structure can be any data type (except void, or the structure of the same type). An array element can be any data type (except void). Everything is passed by value (except arrays). Void can be used as a type in a structure, but a variable of this type cannot be declared in a function.

Though this concept was first applied to programming language, orthogonality has since become recognized as a valuable feature in the design of APIs and even user interfaces. There, too, having a small set of composable primitive operations without surprising cross-linkages is valuable. leading to systems that are easier to explain and less frustrating to use.
#### More Information:
<a href='https://www.javaworld.com/article/2078767/open-source-tools/java-tip-orthogonality-by-example.html' target='_blank' rel='nofollow'>Orthogonality by example</a>.
<a href='http://codebetter.com/jeremymiller/2007/01/09/orthogonal-code/' target='_blank' rel='nofollow'>Orthogonal Code</a>.
<!-- Please add any articles you think might be helpful to read before writing the article -->


