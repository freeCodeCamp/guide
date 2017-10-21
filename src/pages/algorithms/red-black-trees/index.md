---
title: Red Black Trees
---
## Red Black Trees
Red Black Trees (RBT) are a type of binary search tree (BST) which contains self-balancing algorithms. This can be highly useful as binary search trees are only useful if they are well balanced. This gives a decisive edge over the BST as we will delve deeper in.

#### Asymptotic Complexity

| Algorithm        | Average           | Worst Case  |
| ------------- |:-------------:| :-----:|
| Space      | O(n) | O(n) |
| Search      | O(log n)      |   O(log n) |
| Insert | O(log n)      |    O(log n) |
| Delete | O(log n)  | O(log n) |

As shown above, another advantage over BSTs is that RBTs have a significantly better worst-case in almost every algorithm.

#### How Does It Work
Essentially, all nodes inside the tree are either red or black. Newly inserted nodes will always be red. Depending on a set of rules, the nodes will be repainted or rotated. However, the tree will not be perfectly balanced, but as shown above, it has a worst case-in the most used-of O(log n).

![alt text](https://i.imgur.com/raWMQJk.png "Brilliant.org Red Black Trees")
-From Brilliant.org

#### More Information:
https://en.wikipedia.org/wiki/Red%E2%80%93black_tree
https://brilliant.org/practice/red-black-trees/
