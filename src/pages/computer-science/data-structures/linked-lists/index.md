---
title: Linked Lists
---
## Linked Lists

In a linked list you have a series of nodes, each comprised of:
* The actual data that we are storing.
* A link (or pointer) to the next node.

in pseudo-code:
```
node =
{
    data: "my data",
    next: nextNode,
}
```
This is a useful structure in lower level languages such as C, where we engage in memory management in a very direct way, and the pointers are simply a way to point to an address in memory where the next piece of data starts. Here is a graphical representation:

![some](https://people.engr.ncsu.edu/efg/210/s99/Notes/LLdefs.gif "Linked List")

### More Information:
[Linked lists](https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html)
