---
title: Trees
---
#### An abstract data type that is structured like a hierarchical tree with a parent node, and substrees of children nodes.

```
            (2)
            / \
          (7) (5)
         / \     \
       (2) (6)    (9)
           / \    /
         (5)(11) (4)

```
A tree is made up of nodes/vertices with edges. Typically, a tree consists of a root node which is stationed at the top of the hierarchical tree. Children nodes directly connect to the root or parent node branching off. Trees do not have cycle and therefore cannot be linked back.

####Terminology
* Path - Sequence of nodes
* Root Node - Top of the tree
* Parent Node - Any node except the root node that has only one connection upward, and has downward connected children node(s)
* Child Node - A node connected to another node on a downward edge
* Leaf Node - A node without children

####Popular Trees
* Binary Trees
	Exp: Binary Search Tree, AVL Tree, Cartesian Tree
* B-trees
* Multiway Trees
	Exp: Ternary Tree, Fenwick Tree
* Space-partitioning Trees
	Exp: R-tree
* Application-Specific Trees
	Exp: Minimax Tree

#### Applications
* Representing hierarchical data
* Storing data in a way that makes it efficient in regards to searching
* Representing sorted lists of data
* Routing algorithms

#### More Information
<a href="http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm">http://www.cs.cmu.edu/~clo/www/CMU/DataStructures/Lessons/lesson4_1.htm</a>


