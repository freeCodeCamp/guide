---
title: B Trees
---
## B Trees

<!--This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/algorithms/b-trees/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>. -->

<!--<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>. -->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

In a binary search tree, e.g. AVL Tree, Red-Black tree etc, every node can have only one value (key) and maximum of two children but there is another type of self balancing search tree called B-Tree in which a node can store more than one value (key) and it can have more than two children. A B-tree is a self-balancing tree data structure that keeps data sorted and allows searches, sequential access, insertions, and deletions in logarithmic time. B-Tree was developed in the year of 1972 by Bayer and McCreight with the name Height Balanced m-way Search Tree. Later it was named as B-Tree. 

More specifically, it can be defined as follows..
> A B-Tree is a self-balanced search tree with multiple keys in every node and more than two children for every node.

Here, number of keys in a node and number of children for a node is depend on the order of the B-Tree. Every B-Tree has order.

# Properties of B-Tree of order m
* All the leaf nodes must be at the same level.
* All nodes except root must have at least `(m/2)-1` keys and maximum of `m-1` keys.
* All non leaf nodes except root (i.e. all internal nodes) must have at least `m/2` children.
* If the root node is a non leaf node, then it must have at least 2 children.
* A non leaf node with `n-1` keys must have `n` number of children.
* All the key values within a node must be in Ascending Order.

For example, B-Tree of Order 5 contains maximum 4 key values in a node and maximum 5 children for a node.

![B-tree](https://image.slidesharecdn.com/b-trees-130126021111-phpapp02/95/b-trees-in-data-structure-6-638.jpg?cb=1359166330)

# Operations on B-Tree

The following operations are performed on B-Tree..
1. Serching
2. Insertion
3. Deletion etc.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
![B-Tree Wikipedia](https://en.wikipedia.org/wiki/B-tree)

