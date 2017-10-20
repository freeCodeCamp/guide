---
title: Avl Trees
---
## Avl (Adelson-Velskii & Landis) Trees

<!--This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/avl-trees/index.md'    target='_blank' rel='nofollow'>Help our community expand it</a>. -->

<!-- <a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>. -->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
![avl-tree](https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/AVL-tree-wBalance_K.svg/1024px-AVL-tree-wBalance_K.svg.png)

AVL tree is a self balanced binary search tree (BST). i.e, an AVL tree is also a binary search tree but it is a balanced tree. A binary tree is said to be balanced, if the difference between left subtree height and right subtree height is at most 1. In other words, a binary tree is said to be balanced if for every node, the difference between left subtree height and right subtree height of every node in the tree is either -1, 0 or +1. In an AVL tree, every node maintains a extra information known as balance factor. The AVL tree was introduced in the year of 1962 by G.M. Adelson-Velsky and E.M. Landis.

# Properties of AVL Trees

A binary tree is said to be an AVL tree, if:
* It is a binary search tree.
* For any node `X`, the height of left subtree of `X` and height of right subtree of `X` differ by at most 1. i.e HB(k), if k = 1 (balance factor is one).![avl-or-not](http://slideplayer.com/4945547/16/images/4/Example+12+12+8+16+8+16+4+10+14+4+10+14+2+6+2+6+An+AVL+tree+1+Not+an+AVL+tree+%28look+at+node+8%2C+12%29.jpg) As an example, among the above binary search trees, the right one is not an AVL tree, whereas the left one is an AVL tree.
* Every sub-tree is an AVL tree. 

> NOTE: Every AVL Tree is a binary search tree but all the Binary Search Trees need not to be AVL trees.

# AVL Tree Declaration
Since AVL tree is a BST, the declaration of AVL tree is similar to that of BST.

```C++
struct AVLTreeNode{
  int data;
  nt height;
  struct AVLTreeNode *left;
  struct AVLTreeNode *right;
};
```
# Finding the Height of an AVL tree
```c++
int Height(struct AVLTreeNode *root){
  if(!root)
    return -1;
  else
    return root->height;
}

Time Complexity: O(1)
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
![AVL tree Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)


