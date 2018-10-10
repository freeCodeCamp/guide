---
title: Support Vector Machine
---
My additions to the SVM concept

TUNING PARAMETERS:

1. REGULARIZATION: The regularization parameter (generally the C parameter in python sklearn library) tells the SVM optimizer the extent to which the user wants to avoid misclassifying each training example.
--> For large values of C, the optimizer will choose a SMALLER-MARGIN HYPERPLANE if that hyperplane does a good job of correctly classifying the training points.
--> For smaller values of C, the optimizer will go for LARGE-MARGIN SEPARATING HYPERPLANE even if that hyperplane misclassifies more points.

2. GAMMA -  The gamma parameter defines how far the influence of a single training example reaches. 
"Low Gamma" means points which are far away from the plausible separation line are considered when finding out the separation line and vice versa happens in case of "HIGH GAMMA".

3. MARGIN: Every SVM classifier tries to achieve a good margin.
A "Good MArgin" is one in which the points are equidistant as far as possible from the separation line.
