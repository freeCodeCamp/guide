---
title: Linked Lists
---
## Linked Lists

A linked list is a basic data structure which uses pointers to string together lists of data objects.

Each data object consists of two parts - the actual data you want to store, and a pointer to the next data object in the list.

Here's how you can do it in C++ -

`class list_item {
  int data; // this can be any data-type you want
  list_item* next = NULL; // this is the pointer to the next data object
}`

The next pointer should always be set to NULL when creating a new list item. This makes sense because a new list item is not part of a list yet.

Referring to a linked list is done by means of the head pointer, which points to the first object in the linked list.

Here's an algorithm to traverse a linked list and carry out some operations on it -

`void traverse(list_item * head) {
  list_item* current = head;
  while (current -> next != NULL) {
    process(current -> data);
    current = current -> next;
  }
}`
  

#### More Information:
http://www.geeksforgeeks.org/data-structures/linked-list/
https://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html


