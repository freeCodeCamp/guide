---
title: Random Forest
---
## Random Forest
A Random Forest is a group of decision trees that make better decisions as a whole than individually.

### Problem
Decision trees by themselves are prone to **overfitting**. This means that the tree becomes so used to the training data that it has difficulty making decisions for data it has never seen before.

### Solution with Random Forests
Random Forests belong in the category of **ensemble learning** algorithms. This class of algorithms use many estimators to yield better results. This makes Random Forests usually **more accurate** than plain decision trees. In Random Forests, a bunch of decision trees are created. Each tree is **trained on a random subset of the data and a random subset of the features of that data**. This way the possibility of the estimators getting used to the data (overfitting) is greatly reduced, because **each of them work on the different data and features** than the others. This method of creating a bunch of estimators and training them on random subsets of data is a technique in *ensemble learning* called **bagging** or *Bootstrap AGGregatING*. To get the prediction, the each of the decision trees vote on the correct prediction (classification) or they get the mean of their results (regression).

#### Advantages of Random Forests
1. Overfitting problem will not occur when random forest algorithm is used in any classsification problem
2. The same random forest algorithm can be used for both classification and regression task.
3. Can be used for feature engineering. 

##### More Information:
- <a href='https://www.wikiwand.com/en/Random_forest' target='_blank' rel='nofollow'>Random Forests (Wikipedia)</a>
- <a href='https://www.analyticsvidhya.com/blog/2014/06/introduction-random-forest-simplified/' target='_blank' rel='nofollow'>Introduction to Random Forests - Simplified</a>
