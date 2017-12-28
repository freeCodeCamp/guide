---
title: Code Smells
---
## Code Smells

A Code smell is like a smelly person on the bus. That person is alive and well, but something went a bit wrong (either he/she was too busy to take a shower or ate something horrid and can't contain the gas exhaust).

With smelly code everything is working, however there is an underlying problem which slows down the software/app, or make the code overly complicated and thus unreadable.

### Definition

Code smells are warning signs in the code that are typically indicative of a deeper underlying problem.

Code smells are typically not bugs, in that they do not stop the program from running. Rather, much like a bad smell indicates that there is something unpleasant nearby, code smells indicate that some sort of best practice has not been followed. They often result from hacked-together solutions put together quickly, and typically lead to difficult-to-maintain code and technical debt.

The solution to code smells is aggressive refactoring of code so that it follows consistent and well-understood design patterns. Turning longer methods into shorter methods and reducing logical complexity will reduce code smell. A program with less code smell will be easier to understand, and thus easier to troubleshoot and maintain.

#### Examples

1. Duplicated code - Blocks of code that have been replicated across the code base
2. Large classes - Classes having too many lines of code

Both these smells indicate that there is no modularity in the design.

#### Other Examples

1. Long lists of parameters
2. Complex conditional statements
3. Bad naming conventions


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://martinfowler.com/bliki/CodeSmell.html
