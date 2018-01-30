---
title: Code Smells
---
## Code Smells

A Code Smell is a sign that there may be a deeper problem with your code, that may require refactoring to fix it. Smelly code works, but is not of good quality.

#### Examples
1. Duplicated code - Blocks of code that have been replicated across the code base. This may indicate that you need to generalize the code into a function and call it in two places, or it may be that the way the code works in one place is completely unrelated to the way it works in another place, despite having been copied.
2. Large classes - Classes having too many lines of code. This may indicate that the class is trying to do too many things, and needs to be broken up into smaller classes.

#### More Information:
* _Refactoring: Improving the Design of Existing Code - Kent Beck, Martin Fowler_
* [Code Smells on Wikipedia](https://en.wikipedia.org/wiki/Code_smell)
* [Code Smells on Jeff Atwood's Blog (Coding Horror)](https://blog.codinghorror.com/code-smells/)
* [Code Smells on Ward Cunningham's C2 Wiki](http://wiki.c2.com/?CodeSmell)
* https://martinfowler.com/bliki/CodeSmell.html
