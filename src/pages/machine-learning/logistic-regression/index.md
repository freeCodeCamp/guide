---
title: Logistic Regression
---
## Logistic Regression

Logistic regression is very similar to linear regression in that it attempts to predict a response variable Y given a set of X input variables. It's a form of supervised learning, which tries to predict the responses of unlabeled, unseen data by first training with labeled data, a set of observations of both independent (X) and dependent (Y) variables. But while <a href='https://guide.freecodecamp.org/machine-learning/linear-regression' target='_blank'>Linear Regression</a> assumes that the response variable (Y) is quantitative or continuous, Logistic Regression is used specifically when the response variable is qualititative, or discrete.

#### How it Works 
Logistic regression models the probability that Y, the response variable, belongs to a certain category. In many cases, the response variable will be a binary one, so logistic regression will want to model a function y = f(x) that outputs a normalized value that ranges  from, say, 0 to 1 for all values of X, corresponding to the two possible values of Y. It does this by using the logistic function: 

![Logistic function](https://raw.githubusercontent.com/shamikh-mill/ml-reference/master/logistic_regression.png)

Using the available training data, logistic regression approximates optimal values for the regression coefficients, which are the β0 and β1 parameters above, that best predict the response (i.e with the least error). When there are more predictor/inputs, x1...xn, the model can be tuned appropriately to predict values for β0...βn. For cases in which the response variable is not binary but rather can fall into n > 2 categories, a special form of logistic regression called multinomial logistic regression is used. 

<!-- <a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.-->

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
1. http://www-bcf.usc.edu/~gareth/ISL/
2. http://ufldl.stanford.edu/tutorial/supervised/LogisticRegression/
3. http://www.stat.cmu.edu/~cshalizi/uADA/12/lectures/ch12.pdf
