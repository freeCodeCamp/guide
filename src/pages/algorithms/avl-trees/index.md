---
title: AVL Trees
---
## AVL Trees

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/avl-trees/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

<p>In AVL Tree, the height of left and right child of every node can differ by at most +1 or -1.
So if a AVL tree is unbalanced, then you perform a left-totation or right-rotation technique to make it balanced. Below is an example.</p>

<h4>Right Rotation</h4>

![AVL Tree Right Rotation](https://github.com/HebleV/valet_parking/blob/master/images/avl_right_rotation.jpg)

<h4>Left Rotation</h4>

![AVL Tree Left Rotation](https://github.com/HebleV/valet_parking/blob/master/images/avl_left_rotation.jpg)

<h4>AVL Insertion Process</h4>
<hr>

<p>You will do an insertion similar to a normal Binary Search Tree insertion. After inserting, you fix the AVL property using left or right rotations.</p>

<ul>
  <li>If there is an imbalance in left child of right subtree, then you perform a left-right rotation.</li>
  <li>If there is an imbalance in left child of left subtree, then you perform a right rotation.</li>
  <li>If there is an imbalance in right child of right subtree, then you perform a left rotation.</li>
  <li>If there is an imbalance in right child of left subtree, then you perform a right-left rotation.</li>
 </ul>
 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<h5>Check out this video for detailed explanation about AVL Tree insertion and rotations.</h5>

<a href="https://www.youtube.com/watch?v=7m94k2Qhg68" target="_blank">AVL Tree</a>






