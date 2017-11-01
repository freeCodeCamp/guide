---
title: Embarassingly Parallel Algorithms
---
## Embarassingly Parallel Algorithms

Also known as "pleasingly parallel" algorithms, in parallel computing, they refer to the class of algorithms which are easy to execute on a parallel machine. For instance, adding a scalar to each of the elements of a vector can be done easily in parallel as there are no dependencies on how to perform the operation. On the contrary, an inner product between two vectors requires orchestration to form the resulting scalar, which requires communication between the intermediate computations (i.e. is not straightforward to parallelize).

#### More Information:
Wikipedia: Embarrassingly parallel. https://en.wikipedia.org/wiki/Embarrassingly_parallel
Coursera: Pleasingly parallel algorithms. https://www.coursera.org/learn/data-manipulation/lecture/badi8/pleasingly-parallel-algorithms
