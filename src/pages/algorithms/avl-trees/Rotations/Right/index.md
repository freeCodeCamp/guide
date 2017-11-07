---
title: Right Rotation
---

### Right Rotation
  
 AVL tree may become unbalanced, if a node is inserted in the left subtree of the left  subtree. The tree then needs a right rotation.
 
```
  z                                y
 /  \                            /   \ 
T1   y     Left Rotate(z)       z      x
    /  \   - - - - - - - ->    / \    / \
   T2   x                     T1  T2 T3  T4
       / \
     T3  T4
```
