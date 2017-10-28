---
title: Trees
---
## Trees

Tree data structures are based on the structure of trees in graph theory. Graphs consist of nodes (vertices) and edges. A tree is a graph in which there is no loop, and the graph is connected.
Trees that are used in data structures usually have a "root" node. A hierarchy is then defined on rooted trees, where for two nodes that are connected together with an edge, the node which is closer to the root is the "parent" of the node that is further from the root (the "child" node).
The simplest and most common tree data structure is the binary tree. In this tree each node, except the root, has one parent, and each node has 0, 1, or 2 children.

# Uses

Trees can be used to structure the data ready for searching. In a binary tree, one can enforce the condition that all the nodes that are a decendent of the left child, must have smaller values, and all decendants of the right child have larger values. In such tree, searching for an item can start at the root node, and based on the value of the root, recursively continue in either the left sub-tree or the right one.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


