---
title: Backtracking Algorithms
---
## Backtracking Algorithms
my changes
Backtracking is a form of recursion.

The usual scenario is that you are faced with a number of options, and you must choose one of these. After you make your choice you will get a new set of options; just what set of options you get depends on what choice you made. This procedure is repeated over and over until you reach a final state. If you made a good sequence of choices, your final state is a goal state; if you didn't, it isn't.

Conceptually, you start at the root of a tree; the tree probably has some good leaves and some bad leaves, though it may be that the leaves are all good or all bad. You want to get to a good leaf. At each node, beginning with the root, you choose one of its children to move to, and you keep this up until you get to a leaf.

Suppose you get to a bad leaf. You can backtrack to continue the search for a good leaf by revoking your most recent choice, and trying out the next option in that set of options. If you run out of options, revoke the choice that got you here, and try another choice at that node. If you end up at the root with no options left, there are no good leaves to be found.

This needs an example.
                       !(https://www.cis.upenn.edu/~matuszek/cit594-2012/Pages/backtracking_files/treesearch.gif)

Starting at Root, your options are A and B. You choose A.
At A, your options are C and D. You choose C.
C is bad. Go back to A.
At A, you have already tried C, and it failed. Try D.
D is bad. Go back to A.
At A, you have no options left to try. Go back to Root.
At Root, you have already tried A. Try B.
At B, your options are E and F. Try E.
E is good. Congratulations!







Example: TreeSearch

For starters, let's do the simplest possible example of backtracking, which is searching an actual tree. We will also use the simplest kind of tree, a binary tree.

A binary tree is a data structure composed of nodes. One node is designated as the root node. Each node can reference (point to) zero, one, or two other nodes, which are called its children. The children are referred to as the left child and/or the right child. All nodes are reachable (by one or more steps) from the root node, and there are no cycles. For our purposes, although this is not part of the definition of a binary tree, we will say that a node might or might not be a goal node, and will contain its name. The first example in this paper (which we repeat here) shows a binary tree.



Here's a definition of the BinaryTree class:

public class BinaryTree {
    BinaryTree leftChild = null;
    BinaryTree rightChild = null;
    boolean isGoalNode = false;
    String name;
    
    BinaryTree(String name, BinaryTree left, BinaryTree right, boolean isGoalNode) {
        this.name = name;
        leftChild = left;
        rightChild = right;
        this.isGoalNode = isGoalNode;
    }
}
Next we will create a TreeSearch class, and in it we will define a method makeTree() which constructs the above binary tree.

static BinaryTree makeTree() {
    BinaryTree root, a, b, c, d, e, f;
    c = new BinaryTree("C", null, null, false);
    d = new BinaryTree("D", null, null, false);
    e = new BinaryTree("E", null, null, true);
    f = new BinaryTree("F", null, null, false);
    a = new BinaryTree("A", c, d, false);
    b = new BinaryTree("B", e, f, false);
    root = new BinaryTree("Root", a, b, false);
    return root;
}
Here's a main program to create a binary tree and try to solve it:

public static void main(String args[]) {
    BinaryTree tree = makeTree();
    System.out.println(solvable(tree));
}
And finally, here's the recursive backtracking routine to "solve" the binary tree by finding a goal node.

static boolean solvable(BinaryTree node) {
/* 1 */  if (node == null) return false;
/* 2 */  if (node.isGoalNode) return true;
/* 3 */  if (solvable(node.leftChild)) return true;
/* 4 */  if (solvable(node.rightChild)) return true;
/* 5 */  return false;
}
Here's what the numbered lines are doing:

If we are given a null node, it's not solvable. This statement is so that we can call this method with the children of a node, without first checking whether those children actually exist.
If the node we are given is a goal node, return success.
See if the left child of node is solvable, and if so, conclude that node is solvable. We will only get to this line if node is non-null and is not a goal node, says to
Do the same thing for the right child.
Since neither child of node is solvable, node itself is not solvable.
This program runs correctly and produces the unenlightening result true.

Each time we ask for another node, we have to check if it is null. In the above we put that check as the first thing in solvable. An alternative would be to check first whether each child exists, and recur only if they do. Here's that alternative version:

static boolean solvable(BinaryTree node) {
    if (node.isGoalNode) return true;
    if (node.leftChild != null && solvable(node.leftChild)) return true;
    if (node.rightChild != null && solvable(node.rightChild)) return true;
    return false;
}
I think the first version is simpler, but the second version is slightly more efficient.

