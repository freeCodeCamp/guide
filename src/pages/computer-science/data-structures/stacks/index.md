---
title: Stacks
---
## Stacks

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Stack is an abstract data type with a bounded(predefined) capacity. It is a simple data structure that allows adding and removing elements in a particular order. Every time an element is added, it goes on the top of the stack, the only element that can be removed is the element that was at the top of the stack, just like a pile of objects.

### Basic features of Stack

* Stack is an ordered list of similar data type.
* Stack is a LIFO structure. (Last in First out).
* push() function is used to insert new elements into the Stack and pop() function is used to delete an element from the stack. Both insertion and deletion are allowed at only one end of Stack called Top.
* Stack is said to be in Overflow state when it is completely full and is said to be in Underflow state if it is completely empty.

### Applications of Stack

* The simplest application of a stack is to reverse a word. You push a given word to stack - letter by letter - and then pop letters from the stack.
There are other uses also like : Parsing, Expression Conversion(Infix to Postfix, Postfix to Prefix etc) and many more.

### Implementation of Stack

Stack can be easily implemented using an Array or a Linked List. Arrays are quick, but are limited in size and Linked List requires overhead to allocate, link, unlink, and deallocate, but is not limited in size.
