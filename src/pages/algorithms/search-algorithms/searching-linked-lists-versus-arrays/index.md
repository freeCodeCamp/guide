---
title: Searching Linked Lists Versus Arrays
---
## Searching Linked Lists Versus Arrays

Suppose you are given an unsorted linked list & an unsorted array and you have to find a particular element in them. In that case, we need to do a linear search (since they are unsorted). Doing a linear search for an element in both will be an O(n) operation. Same goes for the case when both are sorted, you can still search in both the data structures in O(nlogn) Binary Search. Although, it will be a bit tedious to code while using Linked Lists.

Linked Lists are usually preferred over arrays where insertion is a frequent operation. It's easier to insert in linked lists as only a pointer is changed where as in arrays, the elements after the one inserted need to be moved. Another place where linked lists are used is where size is uncertain. You don't know the size when you are starting out, because in arrays size is fixed.

Arrays do provide a few advantages over LL:
1. Random Access
2. Less Memory as compared to LL.
3. Arrays have better cache locality thus providing better performance.

Whether Arrays are better or Linked Lists? Completely depends on the use case!

#### Relevant Article:

<a href='http://www.geeksforgeeks.org/programmers-approach-looking-array-vs-linked-list/' target='_blank' rel='nofollow'>A Programmer's Approach of Looking at Linked List vs Array</a>
