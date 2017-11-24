---
title: AVL Trees
---
## AVL Trees

In AVL Tree, the height of left and right child of every node can differ by at most +1 or -1.
So if a AVL tree is unbalanced, then you perform a left-rotation or right-rotation technique to make it balanced. Below is an example.

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
