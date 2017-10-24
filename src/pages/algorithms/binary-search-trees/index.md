---
title: Binary Search Trees
---
## Binary Search Trees

![Binary Search Tree](https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png)

A tree is a data structure composed of nodes that has the following characteristics:
1. Each tree has a root node (at the top).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on.

A binary search tree adds these two characteristics:
1. Each node has up to two children.
2. For each node, its left descendent nodes are less than the current node, which is less than the right descendent nodes.

Binary search trees allow fast lookup, insert and removal of nodes. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree.

Using the second rule, think about how you would perform a search for the number 7 in the image above. You'd start at the very top, at 8. 7 is smaller than 8, so you'd go left down the tree. This eliminates half of the tree already.

7 is larger than 3, so you'd go to the right after that and end up at 6. You'd go right again and find the number, 7.

Notice that each time you move, you cut off approximately half of the remaining tree. This is the key to why a tree is so efficient at data retrieval. At most, you'll need to perform a log<sub>2</sub>(n) number of operations to find any item, or conclude that it's not in the tree.

Here's a visualization of searching through a tree vs. searching through a sorted array. The tree takes 3 operations to find what we're looking for while the array takes 10.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/9/9b/Binary_search_tree_example.gif)

### Relevant videos on freeCodeCamp YouTube channel
* <a href='https://youtu.be/5cU1ILGy6dM' target='_blank' rel='nofollow'>Binary Search Tree</a>
* <a href='https://youtu.be/Aagf3RyK3Lw' target='_blank' rel='nofollow'>Binary Search Tree: Traversal and Height</a>
