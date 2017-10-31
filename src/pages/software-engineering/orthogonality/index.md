---
title: Orthogonality
---
## Orthogonality

In software engineering, a system is considered orthogonal if changing one of its components changes the state of that component only. For instance, consider a program with three variables: a, b, and c. Changing the value of a, should not change the value of b, or c, provided they are independent. This property is particularly critical in debugging a program since one relies on narrowing down the number of moving parts of a program to identify the root cause of the problem.

See the following quote from Eric S. Raymond's "Art of UNIX programming"


> Orthogonality is one of the most important properties that can help make even complex designs compact. In a purely orthogonal design, operations do not have side effects; each action (whether it's an API call, a macro invocation, or a language operation) changes just one thing without affecting others. There is one and only one way to change each property of whatever system you are controlling.


#### More Information:

Wikipedia: Orthogonality_(programming). https://en.wikipedia.org/wiki/Orthogonality_(programming)

Stack Overflow: What is Orthogonality?. https://stackoverflow.com/questions/1527393/what-is-orthogonality
