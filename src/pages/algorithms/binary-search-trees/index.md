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

## Traversal in BST.
here are mainly three types of tree traversals.
1. Pre-Order Traversal
2. In-Order Traversal
3. Post-Order Traversal

## Pre-Order Traversal
In this traversal technique the traversal order is root-left-right i.e.

1. Process data of root node
2. First, traverse left subtree completely
3. Then, traverse right subtree

void perorder(struct node*root)
    {
        if(root)
        {
            printf("%d ",root->data);    //Printf root->data
            preorder(root->left);    //Go to left subtree
            preorder(root->right);     //Go to right subtree
        }
    }
    
   
## Post-order traversal

In this traversal technique the traversal order is left-right-root.
1. Process data of left subtree
2. First, traverse right subtree
3. Then, traverse root node
    
    void postorder(struct node*root)
    {
        if(root)
        {
            postorder(root->left);    //Go to left sub tree
            postorder(root->right);     //Go to right sub tree
            printf("%d ",root->data);    //Printf root->data
        }
    }

## In-order traversal

In in-order traversal, do the following:
1. First process left subtree (before processing root node)
2. Then, process current root node
3. Process right subtree
   
   void inorder(struct node*root)
    {
        if(root)
        {
            inorder(root->left);    //Go to left subtree
            printf("%d ",root->data);    //Printf root->data
            inorder(root->right);     //Go to right subtree
        }
    }
    
### Relevant videos on freeCodeCamp YouTube channel
* <a href='https://youtu.be/5cU1ILGy6dM' target='_blank' rel='nofollow'>Binary Search Tree</a>
* <a href='https://youtu.be/Aagf3RyK3Lw' target='_blank' rel='nofollow'>Binary Search Tree: Traversal and Height</a>
