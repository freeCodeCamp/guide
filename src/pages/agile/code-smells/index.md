---
title: Code Smells
---
## Code Smells

A Code Smell is a sign that there may be a deeper problem with your code, that *may* require refactoring to fix it.

#### Examples
1. Duplicated code - Blocks of code that have been replicated across the code base. This may indicate that you need to generalize the code into a function and call it in two places, or it may be that the way the code works in one place is completely unrelated to the way it works in another place, despite having been copied.
2. Large classes - Classes having too many lines of code. This may indicate that the class is trying to do too many things, and needs to be broken up into smaller classes.

#### More Information:
* _Refactoring: Improving the Design of Existing Code - Kent Beck, Martin Fowler_
* <a href='https://en.wikipedia.org/wiki/Code_smell' target='_blank' rel='nofollow'>Code Smells</a> on Wikipedia
* <a href='https://blog.codinghorror.com/code-smells/' target='_blank' rel='nofollow'>Code Smells</a> on Jeff Atwood's Blog
* <a href='http://wiki.c2.com/?CodeSmell' target='_blank' rel='nofollow'>Code Smell</a> on Ward Cunningham's C2 Wiki.
* https://martinfowler.com/bliki/CodeSmell.html
