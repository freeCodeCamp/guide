---
title: AVL Trees
---
## AVL Trees

**Introduction**
An AVL tree is a self-balancing binary search tree, where the difference between the height of the left subtree and right subtree cannot be more than one for all nodes.If at any time they differ by more than one, re-balancing is done to restore this property.

![AVL tree Example](https://www.tutorialspoint.com/data_structures_algorithms/images/unbalanced_avl_trees.jpg)

**Why AVL trees?**
If the height of the tree remains O(Log n) after every insertion and deletion,an upper bound of O(Log n) is maintained for all operations (*Search,Insert ,Delete*).[Time complexity][1] is low for most operations. Worst-case would be O(n) due to re-balancing of the tree.

**AVL rotations**
The tree balances itself by performing the following operations:

 - Left rotation
	![enter image description here](https://www.tutorialspoint.com/data_structures_algorithms/images/avl_left_rotation.jpg)

 - Right rotation
 ![enter image description here](https://www.tutorialspoint.com/data_structures_algorithms/images/avl_right_rotation.jpg)

 - left-right rotation
 - right-left rotation

The first two operations require only one rotation whereas the next two are [double rotations][2].

### Reference

- [Lecture notes](https://www.cs.purdue.edu/homes/ayg/CS251/slides/chap7b.pdf) from Purdue University, which contains examples on all operations of AVL tree.

- [Code](http://www.geeksforgeeks.org/avl-tree-set-1-insertion/) sample code for all operations in Python,C++ and Java.

  [1]: https://en.wikipedia.org/wiki/AVL_tree
  [2]: https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm
