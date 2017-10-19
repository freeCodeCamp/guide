---
title: Linked Lists
---
## Linked Lists

A Linked List is a data structure that is composed of nodes and references. Each node has a pointer(s) that provides references to other nodes. A node usually contains data, such as integer, double, or a custom object that you initialized.

A Linked List is very useful for implementing stacks and queues. It also allows for fast retrieving of the first item. In computer science, how fast a data structure can perform certain functions is defined by Big O notation. In the case of looking up the first item in a Linked List, this is an O(1) operation.

Unlike an Array, Linked List does not be to declared a size at compile-time. However, a Linked List does not have random access - that basically means that you cannot look up a specific value because there is no indices in the Linked List. In order to traverse through each node, you need to start from the first node (sometimes called `front` or `root` node). That is why traversing through a Linked List will take O(N) time (which is bad).

### Doubly Linked List

Computer scientists recognize the fact that a Linked List takes O(N) time to traverse from the first node to the last. So they thankfully come up with a solution -- a new data structure that extends the Linked List data structure. They called it "Doubly Linked List".

A Doubly Linked List allows you to navigate backward. That is, for each node in a Linked List, there are two pointers: 1) a `previous` pointer that points to the previous node, and (2) a `next` node that points to the next node.

### General Methods

- `insert`: Inserting an item at the beginning is very fast and cheap - O(1). Once the item is inserted, we set its pointer pointing to the next node.
- `update`: Updating an item by replacing its current value is an O(1) operation. But to get there, doing `find` will take O(N) time.
- `find`: Doing a look up of any node (except for the beginning) will take O(N) time. For reference, the last node is the one that is pointing to `null`
- `remove`: Removing the first item is very fast. Supposed the first item has been removed, simply set the `root` of the Linked List to point to the second node. 
  - Remember that removing an item that is not the first node is going to take time. In the worst case scenario (say we are looking for the item that happens to be at the end of Linked List), we will need to traverse through all of the nodes until the last node is found.
