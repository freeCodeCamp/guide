---
title: AVL Trees
---
## AVL Trees

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/avl-trees/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

An AVL tree is a self-balancing binary search tree.
An AVL tree is a binary search tree which has the following properties:
->The sub-trees of every node differ in height by at most one.
->Every sub-tree is an AVL tree.

AVL tree checks the height of the left and the right sub-trees and assures that the difference is not more than 1. This difference is called the Balance Factor.
The height of an AVL tree is always O(Logn) where n is the number of nodes in the tree.

AVL Tree Rotations:-

In AVL tree, after performing every operation like insertion and deletion we need to check the balance factor of every node in the tree. If every node satisfies the balance factor condition then we conclude the operation otherwise we must make it balanced. We use rotation operations to make the tree balanced whenever the tree is becoming imbalanced due to any operation.

Rotation operations are used to make a tree balanced.There are four rotations and they are classified into two types:
->Single Left Rotation (LL Rotation)
In LL Rotation every node moves one position to left from the current position.
->Single Right Rotation (RR Rotation)
In RR Rotation every node moves one position to right from the current position. 
->Left Right Rotation (LR Rotation)
The LR Rotation is combination of single left rotation followed by single right rotation. In LR Roration, first every node moves one position to left then one position to right from the current position.
->Right Left Rotation (RL Rotation)
The RL Rotation is combination of single right rotation followed by single left rotation. In RL Roration, first every node moves one position to right then one position to left from the current position.
