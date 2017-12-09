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
6. The difference between the depth of right and left subtrees cannot be more than one.In order to maintain this guarantee, an implementation of an AVL will include an algorithm to rebalance the tree when adding an additional element would upset this guarantee.

AVL trees have a worst case lookup, insert and delete time of O(log n).

### Right Rotation

![AVL Tree Right Rotation](https://github.com/HebleV/valet_parking/blob/master/images/avl_right_rotation.jpg)

### Left Rotation

![AVL Tree Left Rotation](https://github.com/HebleV/valet_parking/blob/master/images/avl_left_rotation.jpg)

### AVL Insertion Process

You will do an insertion similar to a normal Binary Search Tree insertion. After inserting, you fix the AVL property using left or right rotations.

  - If there is an imbalance in left child of right subtree, then you perform a left-right rotation.  
  - If there is an imbalance in left child of left subtree, then you perform a right rotation.  
  - If there is an imbalance in right child of right subtree, then you perform a left rotation.  
  - If there is an imbalance in right child of left subtree, then you perform a right-left rotation.  
 

#### More Information:
[YouTube - AVL Tree](https://www.youtube.com/watch?v=7m94k2Qhg68)


