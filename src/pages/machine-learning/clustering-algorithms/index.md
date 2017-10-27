---
title: Clustering Algorithms
---
## Clustering Algorithms

Clustering is an unsupervised learning method. If data set samples have labels, we prefer to use supervised method, but in real world mostly we don’t have labels and that’s why we prefer clustering methods which are known as unsupervised methods. 

### Methods of Clustering
#### Hierarchical Clustering
There are methods for clustering that only use similarities of instances, without any other requirement on the data; the aim is to find groups such that instances in a group are more similar to each other than instances in different groups. This is the approach taken by hierarchical clustering.
This needs the use of a similarity, or equivalently a distance, measure defined between instances.  Generally Euclidean distance is used, where one has to make sure that all attributes have the same scale.
#### Point Assignment
This method maintains a set of cluster. And it places points to nearest clusters.

### Clustering Algorithms

### Mixture Density
We can write *mixture density* as:
![mixture density](https://latex.codecogs.com/gif.latex?p%28x%29%20%3D%20%5Csum_%7Bi%3D1%7D%5E%7Bk%7Dp%28x%7CG_%7Bi%7D%29p%28G_%7Bi%7D%29)
where Gi are the mixture components. They are also called group or clusters. p(x|Gi) are the component densities and P(Gi) are the mixture proportions. The number of components, k, is a hyperparameter and should be specified beforehand.

### K-Means Clustering
K-Means Clustering is an unsupervised learning method.The goal of this algorithm is to find groups in the data, with the number of groups represented by the variable K. The algorithm works iteratively to assign each data point to one of K groups based on the features that are provided. Data points are clustered based on feature similarity. The results of the K-means clustering algorithm are:
1. The centroids of the K clusters, which can be used to label new data
2. Labels for the training data (each data point is assigned to a single cluster)

Rather than defining groups before looking at the data, clustering allows you to find and analyze the groups that have been formed organically. The “Choosing K” section below describes how the number of groups can be determined.

### Expectation-Maximization 
In this approach is probabilistic and we look for the component density parameters that maximize the likelihood of the sample.
The EM algorithm is an efficient iterative procedure to compute the Maximum Likelihood (ML) estimate in the presence of missing or hidden data. In ML estimation, we wish to estimate the model parameter(s) for which the observed data are the most likely. 

Each iteration of the EM algorithm consists of two processes: The E-step, and the M-step. 
1. In the expectation, or E-step, the missing data are estimated given the observed data and current estimate of the model parameters. This is achieved using the conditional expectation, explaining the choice of terminology.
2. In the M-step, the likelihood function is maximized under the assumption that the missing data are known. The estimate of the missing data from the E-step are used in lieu of the actual missing data. 

Convergence is assured since the algorithm is guaranteed to increase the likelihood at each iteration.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [K-means Clustering](https://www.datascience.com/blog/k-means-clustering)
* [Expectation-Maximization Algorithm](https://www.cs.utah.edu/~piyush/teaching/EM_algorithm.pdf)
* [Using K-Means Clustering with Python](https://code.likeagirl.io/finding-dominant-colour-on-an-image-b4e075f98097)


