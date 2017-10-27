---
title: AVL Trees
---
## AVL Trees

* AVL Tree is a balanced <a href='https://guide.freecodecamp.org/algorithms/binary-search-trees/' target='_blank' rel='nofollow'>Binary Search Tree (BST)</a> structure that was designed by and named after two Soviet mathematicians Adelson Velskii and Landis.
* ***For any node in the tree, the height of the subtrees differs by no more than 1***.

#### Balance Factor
For a node N,
BalanceFactor(N) := Height(RightSubtree(N)) - Height(LeftSubtree(N))<sup>1</sup>

This balance factor must be ***-1, 0 or 1***.

The node with a balance factor of :
* 1 is called left high or LH
* 0 is called even high or EH
* -1 is called right high or RH

If this difference is more than 1, then it must go through rotation/s so that the difference in their heights is -1, 0 or 1.


#### More Information:
<a href='https://en.wikipedia.org/wiki/AVL_tree' target='_blank' rel='nofollow'>AVL on Wikipedia</a>

#### Sources
1. Knuth, Donald E. (2000). Sorting and searching (2. ed., 6. printing, newly updated and rev. ed.). Boston [u.a.]: Addison-Wesley. p. 459. ISBN 0-201-89685-0.
