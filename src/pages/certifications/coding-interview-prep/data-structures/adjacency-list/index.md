---
title: Adjacency List
---
## Adjacency List

A representation for a finite graph. This is essentially a <b>linked list based</b> data structure which is used to store mapping of a vertex with its neighboring vertices in a graph.

As mentioned in the article for [Adjacency Matrix](../adjacency-matrix/index.md), we have two representations for a graph `G(V, E)`:

1. Adjacency Matrix 
2. Adjacency List

For a sparse graph, the Adjacency matrix would be too sparse. Hence we will be wasting a lot of space. For eg. A graph with 8 nodes and just 8 edges, would have 64 cells in the adjacency matrix out of which only 8 would be utilized. This is a sheer wastage of space. In such scenarios we would rather use an Adjacency list.

An Adjacency list would have a collection of all the nodes in the graph. Each of these nodes would in turn have a list of all the neighbouring nodes. Hence for a graph with 8 nodes and 8 edges we would be utilizing space proportional to the number of edges in the graph. 

In case of a directed graph, if there is a directed edge from node `i` to node `j`, we would add node `j` to the list of node `i`. 

In case of a un-directed graph, if there is an edge between nodes `i` and `j`, we would add node `j` to the list of node `i` and we would even add the node `i` to the list of node `j`.

Adjacency list for an undirected graph with two nodes node i and node j would look something like this:

```
| i |--->| j | 
| j |--->| i | 
```

The benefits of using an adjacency list instead of an adjacency matrix become more evident when we have even more nodes in the graph but very few edges. 

`node 1` --> `node 2` --> `node 3` --> `node 4` --> `node 5` --> `node 6` --> `node 7` --> `node 8`
A directed graph with 8 edges and 8 nodes would be represented as below using adjacency list.

```
| node 1 |--->| node 2 |
| node 2 |--->| node 3 |
| node 3 |--->| node 4 |
| node 4 |--->| node 5 |
| node 5 |--->| node 6 |
| node 7 |--->| node 8 |
```

In this scenario, the adjacency matrix would be a 2D matrix of size `8-by-8` with all but 8 entries as `0`. Hence, extremely sparse. 

```python
from collections import defaultdict

# The adjacency list for the graph
adjacency_list = defaultdict(list)

# Edges. Tuple represents undirected edge between i and j.
edges = [(1,2), (4, 5), (1,4), (4, 6)]

for e in edges:
  adjacency_list[e[0]].append(adjacency_list[e[1]]
  adjacency_list[e[1]].append(adjacency_list[e[0]]
```
