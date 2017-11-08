---
title: AVL Trees
---

# AVL Trees

***

## Introduction

***

  * Named after their inventor **Adelson**,**Velski** & **Landis** .
  * AVL trees are height balancing binary search tree.
  * AVL tree checks the height of the left and the right sub-trees and assures that the difference is not more than 1.
  * This difference is called the **Balance Factor**.

## Need For AVL Tree

What if the input to binary search tree comes in a sorted (ascending or descending) manner? It will then look like this −

![alt text](https://lh4.googleusercontent.com/-kdGx4EYZbrQZJAZWBCAxwc4c38Ijs4DQ8qA0HYPaXYKrG25saZIQ67Qwy75WivXdSVXd04Fd4cztPBd8gR3=w1366-h641 "Worst Case")

***

  * It is observed that BST's worst-case performance is closest to linear search algorithms, that is Ο(n).

  * In real-time data, we cannot predict data pattern and their frequencies. So, a need arises to balance out the existing BST.

# Examples of Balanced and Unbalanced Trees

***

![alt text](https://lh3.googleusercontent.com/fw00O5Ay8ooHal1Ci0AgUT_5rrIKSpN4lKhK7kugQNKUkbNbFkL7euQGjyLnEi53f0Kn66w84K_Ine2t7TsF=w1366-h641 "Worst Case")

1. Here we see that the first tree is balanced and the next two trees are not balanced.

2. In the second tree, the left subtree of C has height 2 and the right subtree has height 0, so the difference is 2.

3. In the third tree, the right subtree of A has height 2 and the left is missing, so it is 0, and the difference is 2 again.

**AVL tree permits difference (balance factor) to be only 1.**
