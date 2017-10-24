---
title: Binary Search Trees
---
## Binary Search Trees

![Binary Search Tree](https://cdn-images-1.medium.com/max/1320/0*x5o1G1UpM1RfLpyx.png)

A tree is a data structure composed of nodes that has the following characteristics:
1. Each tree has a root node (at the top).
2. The root node has zero or more child nodes.
3. Each child node has zero or more child nodes, and so on. This create a subtree in the tree. Every node has it's own subtree made up of his children and their children, etc. This means that every node on its own can be a tree.

A binary search tree adds these two characteristics:
1. Each node has up to two children.
2. For each node, its left descendent nodes are less than the current node, which is less than the right descendent nodes.

The BST is build up on the idea of a <a href='https://guide.freecodecamp.org/algorithms/search-algorithms/binary-search' targer='_blank' rel='nofollow'>binary search</a>, because of that it allows fast lookup, insert and removal of nodes. The way that they are set up means that, on average, each comparison allows the operations to skip about half of the tree, so that each lookup, insertion or deletion takes time proportional to the logarithm of the number of items stored in the tree, O(log n). However, some times the worst case can happen, when the tree isn't balanced and the time complexity is O(n) for all three of these functions. That is why self balancing trees(AVL, red-black, ..) are a lot more effective than the basic BST.

Worst case scenario example - this can happen when you keep adding nodes that are ALWAYS larger than the node before(it's parent), the same can happen when you always add nodes with values lower than their parents.

### Operations of the BST
create - create a empty tree
insert - insert a node to the tree
search - searches for a node in the tree
delete - deletes a node from the tree

Search - we always start searching the tree at the root node and go down from there. We compare the data in each node with the one we are looking for. If the compared node isn't the one we are looking then we either proceed to the right child or the left child. This decision depends on the outcome of the comparison, if the node that we are searching for is lower than the one we were comparing it with, we proceed to to the left child, otherwise if it's larger then we go to the right child. Why? Because the BST is structured, that the right child is always larger than the parent and the left child is always lesser. Time complexity depends on the height of the tree h, so the worst case is O(h).

Insert - is very similar to the serach function. We again start at the root of the tree and recurseively go down, searching for the right place for our new node the same way as explained in the search function. If a node with the same value is already in the tree, we can choose to insert the duplicate or not. Some trees allow duplicates, some don't, it depends on the certain implementation.

### Relevant videos on freeCodeCamp YouTube channel
* <a href='https://youtu.be/5cU1ILGy6dM' target='_blank' rel='nofollow'>Binary Search Tree</a>
* <a href='https://youtu.be/Aagf3RyK3Lw' target='_blank' rel='nofollow'>Binary Search Tree: Traversal and Height</a>
