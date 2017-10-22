---
title: AVL Trees
---
## AVL Trees

In computer science, an AVL tree is a self-balancing Binary Search Tree (BST) where the difference between heights of 
left and right subtrees cannot be more than one for all nodes.  This difference is called the Balance Factor.

Example of AVL tree:
![Example of AVL tree](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/AVL-tree-wBalance_K.svg/1054px-AVL-tree-wBalance_K.svg.png)

The above tree is AVL because differences between heights of left and right subtrees for every node is less than or equal to 1.
###Why AVL Trees?
Most of the BST operations (e.g., search, max, min, insert, delete.. etc) take O(h) time where h is the height of the BST. 
If we make sure that height of the tree remains O(Logn) after every insertion and deletion, 
then we can guarantee an upper bound of O(Logn) for all these operations. The height of an AVL tree is always O(Logn) 
where n is the number of nodes in the tree.

###AVL Rotations
To balance itself, an AVL tree may perform the following four kinds of rotations:
* Left rotation
* Right rotation
* Left-Right rotation
* Right-Left rotation

The first two rotations are single rotations and the next two rotations are double rotations.
####Left Rotation
If a tree becomes unbalanced, when a node is inserted into the right subtree of the right subtree, then we perform a single left rotation
![Left Rotation](https://www.tutorialspoint.com/data_structures_algorithms/images/avl_left_rotation.jpg)
####Right Rotation
AVL tree may become unbalanced, if a node is inserted in the left subtree of the left subtree. The tree then needs a right rotation.
![Right Rotation](https://www.tutorialspoint.com/data_structures_algorithms/images/avl_right_rotation.jpg)
####Left-Right Rotation
The LR Rotation is combination of single left rotation followed by single right rotation. 
In LR Rotation, first every node moves one position to left then one position to right from the current position.
![Left-Right-Rotation](http://btechsmartclass.com/DS/images/LR%20Rotation.png)

####Right-Left Rotation
The RL Rotation is combination of single right rotation followed by single left rotation. 
In RL Rotation, first every node moves one position to right then one position to left from the current position.
![Right-Left-Rotation](http://btechsmartclass.com/DS/images/RL%20Rotation.png)