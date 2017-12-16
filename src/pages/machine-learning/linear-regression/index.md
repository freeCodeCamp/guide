---
title: Linear Regression
---
## Linear Regression
Linear regression helps us predict score of a variable X from the scores on other variables Y. When the variables Y are plotted, linear regression finds the best-fitting straight line through the points. The best-fitting line is called a regression line.

<a href='https://www.mladdict.com/linear-regression-simulator' target='_blank' rel='nofollow'>Online linear regression simulator</a>

In Python:
```py
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

Code example is from <a href='http://blog.floydhub.com/coding-the-history-of-deep-learning/' target='_blank' rel='nofollow'>this article</a>. It also explains gradient descent and other essential concepts for deep learning.

It is important to note that not all linear regression is done with gradient descent. The normal equation can also be used for finding the linear regression coefficients, however, this uses matrix multiplication, and therefore can be very time consuming to use for more than 100,000 or 1,000,000 instances.
