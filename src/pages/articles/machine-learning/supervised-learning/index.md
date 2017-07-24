---
title: Supervised Learning
---
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- https://en.wikipedia.org/wiki/Supervised_learning
- https://stackoverflow.com/a/1854449/6873133

#### Draft of Article:
<!-- Please add your working draft below in GitHub-flavored Markdown -->
<!--
Discussion points:
- Supervised learning is task when you have a response you're trying to predict
- Ideas of training data to use
- Use test data to test learning from training data
- Think about complexity of learning model
- Should validate your learning with methods such as cross-validation
- Should be wary of overfitting
- Give examples e.g. logistic regression, support vector machines, neural networks
Takeaway points:
- What is special about supervised learning?
- In what scenario would you use it in?
- Caveats or traps to think about?
- What are some example models? 
-->
What is Supervised Learning ?

Supervised learning is a type of machine learning algorithm that uses a known data-set (called the training data-set) to make predictions.

Category of supervised learning:

Regression: In a regression problem, we are trying to predict results within a continuous output, meaning that we are trying to map input variables to some continuous function.
Classification: In a classification problem, we are instead trying to predict results in a discrete output. In other words, we are trying to map input variables into discrete categories.

Example 1:

Given data about the size of houses on the real estate market, try to predict their price. Price as a function of size is a continuous output, so this is a regression problem.

Example 2:

(a) Regression - For continuous-response values. For example given a picture of a person, we have to predict their age on the basis of the given picture

(b) Classification - for categorical response values, where the data can be separated into specific “classes”. For example given a patient with a tumor, we have to predict whether the tumor is malignant or benign.
