---
title: Gradient Descent
---

## Gradient Descent

* Gradient descent is an optimization algorithm used to find the values of parameters (coefficients) of a function (f) that minimizes a cost function (cost).
* Gradient descent is best used when the parameters cannot be calculated analytically (e.g. using linear algebra) and must be searched for by an optimization algorithm.

## Intuition for Gradient Descent

* Think of a large bowl like what you would eat cereal out of or store fruit in. This bowl is a plot of the cost function (f).
* A random position on the surface of the bowl is the cost of the current values of the coefficients (cost).
* The bottom of the bowl is the cost of the best set of coefficients, the minimum of the function.
* The goal is to continue to try different values for the coefficients, evaluate their cost and select new coefficients that have a     slightly better (lower) cost.
* Repeating this process enough times will lead to the bottom of the bowl and you will know the values of the coefficients that result in the minimum cost.
