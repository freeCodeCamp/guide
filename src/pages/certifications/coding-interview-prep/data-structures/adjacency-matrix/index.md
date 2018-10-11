---
title: Adjacency Matrix
---
## Adjacency Matrix

A representation for a finite graph. This is essentially an array based data structure which is used to store mapping of a vertex with its neighboring vertices in a graph.

Let's take a step back and see why do we need this representation. 

We have two representation for a graph. 
1. Adjacency Matrix 
2. Adjacency List

Adjacency matrix is mainly used to represent a graph which is dense. As the name says, its a matrix. The cell `(i, j)` of the matrix would be marked to a value 1 if there exist an edge between `node i` and `node j`, otherwise it would be 0. For a graph with `N` number of nodes we would need a matrix of size `N * N` as there can be `N * N` possible edges. If the graph is a dense graph we would be utilizing most of the cells of this matrix. Thus for a dense graph using a matrix is considered good. 

For an undirected graph we have to make two entries to the adjacency matrix. 
We set `cell[i][j] = 1 and cell[j][i] = 1` in case there is an edge between the two nodes `i and j`. However, for a directed graph, we only add the edge adhering to the direction. e.g. for an edge from `j --> i`, we will only add `cell[j][i] = 1`.

For a sparse graph, the Adjacency matrix would be too sparse. Hence we will be wasting a lot of space. For eg. A graph with 8 nodes and just 8 edges, would have 64 cells in the adjacency matrix out of which only 8 would be utilized. This is a sheer wastage of space. In such scenarios we would rather use an Adjacency list.

A simple implementation for the adjacency matrix is by using a 2 dimensional array.

```python
adjacency_matrix = [[0 for _ in range(N)] for _ in range(N)]

# Each tuple represents an undirected edge between the two nodes. e.g.
# (1,2) is an edge between node 1 and node 2.
edges = [(1,2), (2,3), (1,4), (5,3)]

for edge in edges:
  adjacency_matrix[edge[0]] = adjacency_matrix[edge[1]]
  adjacency_matrix[edge[1]] = adjacency_matrix[edge[0]]
```
