---
title: Support Vector Machine
---
## Support Vector Machine

![SVM vs logistic regression](https://i.imgur.com/KUeOSK3.png)

A SVM cost function seeks to approximate the logistic function with a piecewise linear. This ML algorithm is used for classification problems and is part of the subset of supervised learning algorithms.

### The Cost Function

![SVM Cost Function](https://i.imgur.com/SOhv2jZ.png)

The Cost Function is used to train the SVM. By minimizing the value of J(theta), we can ensure that the SVM is as accurate as possible. In the equation, the functions cost1 and cost0 refer to the cost for an example where y=1 and the cost for an example where y=0. Cost, for SVMs, is determined by kernel (similarity) functions.

### Kernels

Polynomial features are possibly computationally expensive and may slow down runtime with large datasets.
Rather than adding more polynomial features, add "landmarks" against which you test the proximity of other datapoints.
Each member of the training set is a landmark.
A kernel is the "similarity function" that measures how close an input is to a certain marker.

### Large Margin Classifier
An SVM will find the line (or hyperplane in the more general case) that splits the data with the largest margin.
While outliers may sway the line to one direction, a small enough C value will enforce regularization. 
This new regularizing works the same with 1/\lambda, as seen in linear and logistic regression, but here we modify the cost component.


#### More Information:
[Andrew Ng's ML Course](https://www.coursera.org/learn/machine-learning/)
[Standalone Video Lecture](https://www.youtube.com/watch?v=1NxnPkZM9bc)
[SVM on Wikipedia](https://en.wikipedia.org/wiki/Support_vector_machine)

