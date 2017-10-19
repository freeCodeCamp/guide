---
title: Trees
---
## Trees

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/computer-science/data-structures/trees/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

A binary tree is a non linear data structure consisting nodes, where each node has the following 3 components:

Data element: Stores any kind of data in the node
Left pointer: Points to the sub-tree on the left side of node
Right pointer: Points to the sub-tree on the right side of the node
As the name suggests, the data element stores any kind of data in the node.
The left and right pointers point to binary trees on the left and right side of the node respectively.

If a tree is empty, it is represented by a null pointer.

Code of a tree node
`  struct node
    {
         int data;                 //Data element
         struct node * left;          //Pointer to left node
         struct node * right;         //Pointer to right node
    };

`

