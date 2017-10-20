---
title: Red Black Trees
---
## Red Black Trees

A *red-black tree* is a type of self-balancing binary search tree, a data structure used in computer science, typically to implement associative arrays. 

#### Why Red-Black Trees?

It is complex, but has good *worst-case running time* for its operations and is efficient in practice. It can search, max, min, insert, and delete in *O(log N) time*, where N is the number of elements in the tree.

<picture>
  
#### Non-linear data structure

Trees — like linked lists — are made up of nodes and links.  

Here are some good terms to know when it comes to talking about trees:

* *Root (node)*. Each piece of data is stored in a *node*. The topmost node of the tree, which never has any links or edges connecting to it. It has up to two "children", other nodes to which it connects.
* *Link/Edge*. The root node thus has a *path* connecting it to any other node in the tree. The reference that a parent node contains that tells it what its child node is.
* *Child*. Any node that has a parent node that links to it.
* *Parent*. Any node that has a reference or link to another node.
* *Sibling*. Any group of nodes that are the children of the same node.
* *Leaf (node)*. Any node that does not have a child node in the tree

As red-black trees are also binary search trees, they must satisfy the constraint that every node contains a value greater than or equal to all nodes in its left subtree, and less than or equal to all nodes in its right subtree. 
*This makes it quick to search the tree for a given value.*

#### So Red-Black Tree is a self-balancing Binary Search Tree where every node follows following rules

1) Every node has a color either red or black.
2) Root of tree is always black.
3) There are no two adjacent red nodes (A red node cannot have a red parent or red child).
4) Every path from root to a NULL node has same number of black nodes.

#### The insert operation algorithm

The goal of the insert operation is to insert key K (or keys K1,K2,.., Kn) into tree T, maintaining T's red-black tree properties. 
A special case is required for an empty tree. If T is empty, replace it with a single black node containing K. This ensures that the root property is satisfied.

*If T is a non-empty tree, then we do the following:*

1. Use the Binary Search Tree insert algorithm to add K to the tree
2. Make the color of newly inserted node(s) as RED
3. Restore red-black tree properties (if necessary)

*Implementation*

1. A recursive function to insert a new key in BST.

    Node insertRec(Node root, int key) {
 
        /* If the tree is empty, return a new node */
        if (root == null) {
            root = new Node(key);
            return root;
        }
 
        /* Otherwise, recur down the tree */
        if (key < root.key)
            root.left = insertRec(root.left, key);
        else if (key > root.key)
            root.right = insertRec(root.right, key);
 
        /* return the (unchanged) node pointer */
        return root;
    }
2. If x is root, change color of x as BLACK (Black height of complete tree increases by 1).

3. Do following if color of x’s parent is *not BLACK* or x is not root.

  ##### If x’s uncle is RED (Grand parent must have been black)
   * (i) Change color of parent and uncle as BLACK.
   * (ii) Change color of grand parent as RED.
   * (iii) Change x = x’s grandparent, repeat steps 2 and 3 for new x.
    <img align="center" src="https://user-images.githubusercontent.com/5860906/31822957-2d9fa8c4-b5b3-11e7-8c72-09d2874aeabe.png">

  ##### If x’s uncle is BLACK, then there can be four configurations for x, x’s parent (p) and x’s grandparent (g) 
   * (i) Left Left Case (p is left child of g and x is left child of p)
    <img align="center" src="https://user-images.githubusercontent.com/5860906/31822953-2c9d3ea0-b5b3-11e7-9412-8a33afe61216.png">
   * (ii) Left Right Case (p is left child of g and x is right child of p)
    <img align="center" src="https://user-images.githubusercontent.com/5860906/31822954-2d2f3346-b5b3-11e7-9684-193869136f1f.png">
   * (iii) Right Right Case
    <img align="center" src="https://user-images.githubusercontent.com/5860906/31822956-2d7bd9e4-b5b3-11e7-885b-60cc1de16602.png">
   * (iv) Right Left Case
    <img align="center" src="https://user-images.githubusercontent.com/5860906/31822955-2d552326-b5b3-11e7-8506-6aeaadf844ee.png">

*Following operations would be performed in four subcases when uncle is BLACK.*

Remember that:
 * The Binary Search Tree insert algorithm always adds a leaf node. 
 * We are dealing with a *non-empty red-black tree*, so adding a leaf node *will not affect* T's satisfaction of the root property. 
 * Adding a *red leaf node will not affect* T's satisfaction of the black property. 
 * Adding a red leaf node *may affect T's satisfaction* of the red property, so we will need to check if that is the case and, if so, fix it (step 3). 
 * In fixing a red property violation, we will need to make sure that we don't end up with a tree that violates the root or black properties.
