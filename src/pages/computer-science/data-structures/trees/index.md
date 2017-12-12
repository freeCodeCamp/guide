---
title: Trees
---
# Trees

A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root. A tree with no nodes is called a null or empty tree.

A binary tree is a non linear data structure consisting nodes, where each node has the following 3 components:

**Data element**: Stores any kind of data in the node
**Left pointer**: Points to the sub-tree on the left side of node
**Right pointer**: Points to the sub-tree on the right side of the node
As the name suggests, the data element stores any kind of data in the node.
The left and right pointers point to binary trees on the left and right side of the node respectively.

If a tree is empty, it is represented by a null pointer.

## Terminology used in trees:

**Root** :
The top node in a tree.

**Child**:
A node directly connected to another node when moving away from the Root.

**Parent**:
The converse notion of a child.

**Siblings**:
A group of nodes with the same parent.

**Descendant**:
A node reachable by repeated proceeding from parent to child.

**Ancestor**:
A node reachable by repeated proceeding from child to parent.

**Branch**(internal node):
A node of a tree that has child nodes.

**Leaf**(less commonly called External node):
A node with no children.

**Degree**:
The number of subtrees of a node.

**Edge**:
The connection between one node and another.

**Path**:
A sequence of nodes and edges connecting a node with a descendant.

**Level**:
The level of a node is defined by 1 + (the number of connections between the node and the root). 

**Height of tree**:
The height of a tree is the height of its root node.

**Depth**:
The depth of a node is the number of edges from the tree's root node to the node.

**Forest**:
A forest is a set of n ≥ 0 disjoint trees. 

### Some Popular Types of Trees:

* Binary Tree
* Binary Search Tree
* AVL Tree
* Red Black Tree
* Splay Tree
* Huffmann Tree

### Common uses

* Representing hierarchical data
* Storing data in a way that makes it easily searchable
* Representing sorted lists of data
* Routing algorithms



###Code of a tree node

``` c_cpp
struct node
    {
         int data;                 //Data element
         struct node * left;          //Pointer to left node
         struct node * right;         //Pointer to right node
    };

```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

* <a href='https://en.wikipedia.org/wiki/Tree_(data_structure)' target='_blank' rel='nofollow'>Trees (data structure)</a>
