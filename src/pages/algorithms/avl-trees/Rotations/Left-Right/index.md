---
title: Left-Right-Rotation
---

### Left Right Rotation

AVL tree may become unbalanced if a node is inserted in the left subtree of the left subtree. The tree then needs a right rotation.

```     z                               z                           x
    / \                            /   \                        /  \ 
   y   T4  Left Rotate (y)        x    T4  Right Rotate(z)    y      z
  / \      - - - - - - - - ->    /  \      - - - - - - - ->  / \    / \
T1   x                          y    T3                    T1  T2 T3  T4
    / \                        / \
  T2   T3                    T1   T2```
