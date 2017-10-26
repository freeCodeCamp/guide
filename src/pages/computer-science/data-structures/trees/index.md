---
title: Trees
---
## Trees

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/computer-science/data-structures/trees/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
A tree is a widely used abstract data type (ADT)—or data structure implementing this ADT—that simulates a hierarchical tree structure, with a root value and subtrees of children with a parent node, represented as a set of linked nodes.<br>
A tree data structure can be defined recursively (locally) as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.<br>
Alternatively, a tree can be defined abstractly as a whole (globally) as an ordered tree, with a value assigned to each node. Both these perspectives are useful: while a tree can be analyzed mathematically as a whole, when actually represented as a data structure it is usually represented and worked with separately by node (rather than as a set of nodes and an adjacency list of edges between nodes, as one may represent a digraph, for instance). For example, looking at a tree as a whole, one can talk about "the parent node" of a given node, but in general as a data structure a given node only contains the list of its children, but does not contain a reference to its parent (if any)<br><br>
<strong> Terminology used in trees </strong>
<ul>
  <li>Root: The top node in a tree.</li>
  <li>Child: A node directly connected to another node when moving away from the Root.</li>
  <li>Parent: The converse notion of a child.</li>
  <li>Siblings: A group of nodes with the same parent.</li>
  <li>Descendant: A node reachable by repeated proceeding from parent to child.</li>
  <li>Ancestor: A node reachable by repeated proceeding from child to parent.</li>
  <li>Leaf: A node with no children.</li>
  <li>Branch: (Internal node)A node with at least one child.</li>
  <li>Degree: The number of subtrees of a node.</li>
  <li>Edge: The connection between one node and another.</li>
  <li>Path: A sequence of nodes and edges connecting a node with a descendant.</li>
  <li>Level: The level of a node is defined by 1 + (the number of connections between the node and the root).</li>
  <li>Height of node: The height of a node is the number of edges on the longest path between that node and a leaf.</li>
  <li>Height of tree: The height of a tree is the height of its root node.</li>
  <li>Depth: The depth of a node is the number of edges from the tree's root node to the node.</li>
  <li>Forest: A forest is a set of n ≥ 0 disjoint trees.</li>
  </ul>
<strong>Applications of tree</strong>
<ol>
<li>	Manipulate hierarchical data.
<li>	Make information easy to search (see tree traversal).
<li>	Manipulate sorted lists of data.
<li>	As a workflow for compositing digital images for visual effects.
<li>	Router algorithms
  </ol>
