---
title: Binary Search Trees
---
## Binary Search Trees

![Binary Search Tree](https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png)

A tree is a data structure composed of nodes that has the following characteristics:
1. Each tree has a root node (at the top).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on.

A binary search tree adds these two characteristics:
1. Each node has up to two children.
2. For each node, its left descendent nodes are less than the current node, which is less than the right descendent nodes.

Binary search trees allow fast lookup, insert and removal of nodes. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

Binary search trees (BSTs) also give us quick access to predecessors and successors.
  Predecessors can be described as the node that would come right before the node you are currently at.
   - To find the predecessor of the current node, look at the rightmost/largest leaf node in the left subtree.
  Successors can be described as the node that would come right after the node you are currently at.
   - To find the successor of the current node, look at the leftmost/smallest leaf node in the right subtree.
  
### Relevant videos on freeCodeCamp YouTube channel
* <a href='https://youtu.be/5cU1ILGy6dM' target='_blank' rel='nofollow'>Binary Search Tree</a>
* <a href='https://youtu.be/Aagf3RyK3Lw' target='_blank' rel='nofollow'>Binary Search Tree: Traversal and Height</a>
