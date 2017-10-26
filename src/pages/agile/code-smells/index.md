---
title: Code Smells
---
## Code Smells


Code smell is a term used to describe a small problem with the code. The smell itself may be a symptom of a deeper problem in the program - too complex classes, bad practices used to write code, but may also be just a too long argument list or several unnecessary comments.

Different from bugs in that they do not crash the application, code smells can still make a programmer’s life harder. Those tiny problems can, if unwatched, make a codebase harder to understand, maintain and refactor - they increase the technical debt of the project. In some projects, teams use dedicated code analysis tools to detect them. One of more popular is [SonarQube](https://www.sonarqube.org/).

Like other smells, code smells have multiple varieties. Some of them are:
 * Bloaters - excessively complex methods, too long argument lists, large classes - they make your head spin when trying to understand what exactly is going on in there. Fixes include, but are not limited to:
    * decomposing a class to smaller objects
    * breaking up a method to make it more concise, descriptive and understandable
    * passing whole objects to methods, composing arguments into wrapper objects
 * Dispensables - pieces of code that are just not necessary and the code would be cleaner and simpler without them - duplicates, dead code, blocks of commented code or essays about the methods in comments. To get rid of them you should:
    * Rename methods to have descriptive names
    * Split confusing blocks of code into easier to understand methods
    * Extract duplicate blocks of code to a method and reusing it
    * Get rid of unused blocks of code, methods and classes
 * Couplers - mechanisms that increase code coupling (interdependency between classes) - fields of classes overly exposed to the world (too much public members), classes accessing other classes’ members more than their own and middleman objects (ones that only proxy a method call to another class) are fine examples of this type of smell. When trying to get rid of them, you may consider:
    * moving methods modifying data to objects containing that data
    * removing middlemen from your code and calling methods directly
    * strictly limiting amount of publicly available object elements


That is not an exhaustive list, as the term is quite loose and may be interpreted differently in different organizations, teams and projects. An advantage of code smells is that they are usually easy to spot even by inexperienced programmers, even if they are not experienced enough to correct them or recognize the exact problem with the code.


#### More Information:
['Code Smells' by Martin Fowler, one of creators of the term](https://martinfowler.com/bliki/CodeSmell.html)
[List of smell types and fixes](https://sourcemaking.com/refactoring/smells)
[Smells to refactoring cheat-sheet](https://www.industriallogic.com/blog/smells-to-refactorings-cheatsheet)


