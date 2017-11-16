---
title: AVL Trees
---
## AVL Trees

An AVL tree is a subtype of binary search tree.

A BST is a data structure composed of nodes. It has the following guarantees:

1. Each tree has a root node (at the top).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on.
4. Each node has up to two children.
5. For each node, its left descendents are less than the current node, which is less than the right descendents.

AVL trees have an additional guarantee:

6. The difference between the depth of right and left subtrees cannot be more than one.
    
In order to maintain this guarantee, an implementation of an AVL will include an algorithm to rebalance the tree when adding an additional element would upset this guarantee.

AVL trees have a worst case lookup, insert and delete time of O(log n).
