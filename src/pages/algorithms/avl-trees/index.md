---
title: AVL Trees
---
## AVL Trees

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/avl-trees/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
An **AVL tree** is a self-balancing [binary search tree](https://guide.freecodecamp.org/algorithms/binary-search-trees). The sub-trees of every node differ in height by at most one maintaining O(logn) time for insertion, deletion, and search operation. Every sub-tree is an AVL tree. The AVL tree is named after its two inventors, Georgy **A**delson-**V**elsky and Evgenii **L**andis.  

The balance factor of a node must be 0 or 1 for an AVL Tree.  
Balance factor =  | height(leftSubTree) - height(rightSubTree) | .  

The insert and delete operation are similar to that of BST but these operation may disturb the balancing of the AVL tree. In order to bring an AVL Tree back into balance we will perform one or more **rotations** on the tree.  
There are two types of rotation.
<ol>
  <li>Left rotation</li>
  <li>Right rotation</li>
</ol>

1. Left rotation  
Consider the tree in the left half of Figure . This tree is out of balance with a balance factor of -2. To bring this tree into balance we will use a left rotation around the subtree rooted at node A.  
<img src="http://interactivepython.org/runestone/static/pythonds/_images/simpleunbalanced.png" alt="left rotate AVL" />  

2. Right rotation
 To perform a right rotation we essentially do the following:
 <ul> 
  <li>Promote the left child (C) to be the root of the subtree.</li>
  <li>Move the old root (E) to be the right child of the new root.</li>
  <li>If the new root(C) already had a right child (D) then make it the left child of the new right child (E).</li>
 </ul>
 <img src ="http://interactivepython.org/runestone/static/pythonds/_images/rightrotate1.png" alt="right rotate AVL" />  
 
Why AVL Trees?  
Consider a BST with only one single right node and n nodes to left subtree. Worst case Time complexity for search operation is O(n). If the tree is balanced(AVL Tree) then it will take O(logn) time. However AVL consume more memory (each node has to remember its balance factor).  
<img src="http://ds.prof.ninja/class20/bst.png" width="300" alt="unbalanced tree"/>




#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- http://www.geeksforgeeks.org/avl-tree-set-1-insertion/
- http://www.geeksforgeeks.org/avl-tree-set-2-deletion/
- http://interactivepython.org/runestone/static/pythonds/Trees/AVLTreeImplementation.html
