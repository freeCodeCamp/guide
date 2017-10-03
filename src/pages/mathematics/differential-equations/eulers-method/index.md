---
title: Euler's Method
---

# Euler's Method

The Euler's method is a first-order numerical procedure for solving ordinary differential equations (ODE) with a given initial value.

## The General Initial Value Problem

![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn1.png) ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/comma.png)  ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn2.png)

## Methodology

Euler's method uses the simple formula
![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn3.png)
to construct the tangent at the point `x` and obtain the value of `y(x+h)`, whose slope is ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn-5.png)  or simply,  ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn4.png) .

In Euler's method, you can approximate the curve of the solution by the tangent in each interval (that is, by a sequence of short line segments), at steps of `h`.

In <i>general</i>, if you use small step size, the accuracy of approximation increases.

## General Formula

![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn7.png)

where,
* ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn9.png) is the next estimated solution value;
* ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn10.png) is the current value;
* `h` is the interval between steps;
* ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn-5.png) is the value of the derivative at the current ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn11.png) point.

## Functional value at any point `b`, given by `y(b)`

![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn6.png)

where,
* <b>n</b> = number of steps</p>
* <b>h</b> = interval width (size of each step)</p>

### Pseudocode

1. define `f(x,y)`
2. input ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn17.png)
3. input `h`, `n`
4. for `j` from `0` to `(n-1)` do

* ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn13.png)
* ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn14.png)
* Print ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn15.png) and ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn16.png)

5. end

## Example

Find `y(1)`, given

&nbsp;&nbsp;&nbsp;&nbsp; ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn18.png) ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/comma.png)  ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn19.png) .

Solving analytically, the solution is ![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/eqn20.png) and `y(1)`= `2.71828`. (Note: This analytic solution is just for comparing the accuracy.)

Using Euler's method, considering `h` = `0.2`, `0.1`, `0.01`, you can see the results in the diagram below.

![](https://github.com/pranabendra/articles/blob/master/Euler-method/images/comparison.png)

When `h` = `0.2`, `y(1)` = `2.48832`  (error = 8.46 %)

When `h` = `0.1`, `y(1)` = `2.59374`  (error = 4.58 %)

When `h` = `0.01`, `y(1)` = `2.70481`  (error = 0.50 %)

You can notice, how accuracy improves when steps are small.

## More Information:
1. [Numerical Methods for Solving Differential Equations](http://calculuslab.deltacollege.edu/ODE/7-C-1/7-C-1-h-c.html)
2. [Euler's method](https://en.wikipedia.org/wiki/Euler_method)
