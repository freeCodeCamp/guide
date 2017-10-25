---
title: Clustering Algorithms
---
## Goal
Group data into similar classes s.t.
* Objects within a group are similar/related, i.e Maximize intra-cluster similarity.
* Objects in different groups are different/unrelated, i.e. Minimize inter-cluster similarity.

## Clustering Algorithms

### 1. K-Means Algorithm:

It is a **Centroid-based Clustering** in which given a dataset and a fixed parameter 'K', aim is to associate each data point with one of 'K' clusters, such that the Sum of the squares of the distances from each data point to its cluster's mean is minimized.

* It generates **Partitional** Clusters with **Exclusive** membership of each point to a cluster.


### 2. Agglomerative Clustering:

It is a type of **Hierarchical Clustering** which starts with all points as individual clusters and keep merging two "closest" clusters until only one cluster remains.

* It generates **Hierarchical** Clusters with **Overlapping** membership of each point to many clusters.

### 3. DBSCAN Algorithm:

It is a **Density-based Clustering** in which given a set of points, it groups each set of closely packed points into a separate cluster, and simultaneously marking noise points that lie alone in low-density regions (whose nearest neighbors are too far away). 

* It generates **Partitional** Clusters with **Exclusive** membership of each point to a cluster.

#### More Information:
<a href='http://scikit-learn.org/stable/modules/clustering.html'>Clustering Overview</a>

<a href='https://www.datascience.com/blog/k-means-clustering'>K-Means Clustering</a>

<a href='https://home.deib.polimi.it/matteucc/Clustering/tutorial_html/hierarchical.html'>Agglomerative Hierarchical Clustering</a>

<a href='https://blog.dominodatalab.com/topology-and-density-based-clustering/'>DBSCAN Algorithm</a>

<a href='http://hdbscan.readthedocs.io/en/latest/comparing_clustering_algorithms.html'>Comparing Clustering Algorithms(Python)</a>


