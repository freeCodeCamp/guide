---
title: AVL Trees
---
## AVL Trees

**AVL Trees**(named after their inventors Adelson-Velskii and Landis) are *self-balancing binary trees.*

The main properties of AVL trees are:

 1. The sub-trees of every node differ in height by at most one.
 2. Every sub-tree is an AVL tree.
 
The difference between the left sub-tree and right sub-tree is also known as the **Balance Factor.** 
```
Balance Factor= height(left sub-tree)- height(right sub-tree)
```
In AVL trees, the balance factor of each node is always not more than one. 
 
This is an example of an AVL tree.
It is an AVL tree because each left sub-tree has a height 1 greater than each right sub-tree.

![AVL tree](https://user-images.githubusercontent.com/22959465/31891391-e9a81a84-b823-11e7-8b39-21819d626599.png)
 
 
On the other hand, the example given below is **not** an AVL tree because the height difference between the left and right sub-trees is 2 which is more than 1 and hence, does not follow AVL condition. 


![Not an AVL tree](https://user-images.githubusercontent.com/22959465/31891776-024fa858-b825-11e7-9228-e48aed331c2c.png)
 


### Why do use AVL trees?

It is observed that most of the Binary Search Tree(BST) operations such as search,max,min,delete,insert etc. take O(h) time where h is the height of the BST. The BST's worst-case performance is closest to linear search algorithms, that is Ο(n), for a skewed structure. In real-time data, you cannot predict data pattern and their frequencies. So, there arises a need to balance out the existing BST.

You can guarantee an upper bound of O(logn) for all the operations if you make sure that the height of the tree remains O(logn) after every insertion and deletion. For this, you need to make sure that the balance factor almost always remains as *not more than one*- and this is exactly what an AVL tree achieves. 

You can deduce that the height of an AVL tree will always, therefore, be O(logn) where n is the number of nodes in the tree.

### AVL Rotations

After performing certain operations such as insertion and deletion, it is necessary that the BST satisfies the AVL condition. To make sure that the balance factor is not more than one, certain rotations are performed. They are:

1. Left rotation
2. Right rotation
3. Left-Right rotation
4. Right-Left rotation

The first two rotations are single rotations and the next two rotations are double rotations. These rotations are made accordingly and the tree is balanced to satisfiy the AVL condition. 






 

