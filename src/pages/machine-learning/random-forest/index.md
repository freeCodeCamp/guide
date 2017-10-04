---
title: Random Forest
---
## Random Forest
A Random Forest is a group of decision trees that make better decisions as a whole than individually.

### Problem
Decision trees by themselves are prone to **overfitting**. This means that the tree becomes so used to the training data that it has difficulty making decisions for data it has never seen before.

### Solution with Random Forests
Random Forests belong in the category of **ensemble learning** algorithms. This class of algorithms use many estimators to yield better results. This makes Random Forests usually **more accurate** than plain decision trees. In Random Forests, a bunch of decision trees are created. Each tree is **trained on a subset of the data and a subset of the features of that data**. This way the possibility of the estimators getting used to the data (overfitting) is greatly reduced, because **each of them work on the different data and features** than the others. This method of creating a bunch of estimators and training them on subsets of data is a technique in *ensemble learning* called **bagging** or *Bootstrap AGGregatING*. To get the prediction, the each of the decision trees vote on the correct prediction (classification) or they get the mean of their results (regression).

#### Extremely Randomized Trees (ExtraTrees)
Extremely Randomized Trees, A.K.A. ExtraTrees or ERTs are like Random Forests but they kick it up a notch by doing random splits on decision trees, instead of measuring the entropy or information loss. This makes it even more accurate than Random Forests by reducing the bias even more.

#### More Information:
- [Random Forests (Wikipedia)](https://www.wikiwand.com/en/Random_forest)
- [Introduction to Random Forests - Simplified](https://www.analyticsvidhya.com/blog/2014/06/introduction-random-forest-simplified/)
