---
title: Linear Regression
---
## Linear Regression

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/machine-learning/linear-regression/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

Linear regression helps us predict score of a variable X from the scores on other variables Y. When the variables Y are plotted, linear regression finds the best-fitting straight line through the points. The best-fitting line is called a regression line.

Online linear regression simulator:
https://www.mladdict.com/linear-regression-simulator

In Python:
```
#Price of wheat/kg and the average price of bread
wheat_and_bread = [[0.5,5],[0.6,5.5],[0.8,6],[1.1,6.8],[1.4,7]]

def step_gradient(b_current, m_current, points, learningRate):
    b_gradient = 0
    m_gradient = 0
    N = float(len(points))
    for i in range(0, len(points)):
        x = points[i][0]
        y = points[i][1]
        b_gradient += -(2/N) * (y - ((m_current * x) + b_current))
        m_gradient += -(2/N) * x * (y - ((m_current * x) + b_current))
    new_b = b_current - (learningRate * b_gradient)
    new_m = m_current - (learningRate * m_gradient)
    return [new_b, new_m]

def gradient_descent_runner(points, starting_b, starting_m, learning_rate, num_iterations):
    b = starting_b
    m = starting_m
    for i in range(num_iterations):
        b, m = step_gradient(b, m, points, learning_rate)
    return [b, m]

gradient_descent_runner(wheat_and_bread, 1, 1, 0.01, 100)
```

Code taken from this article. It also explains gradient descent and other essential concepts for deep learning.  
http://blog.floydhub.com/coding-the-history-of-deep-learning/


