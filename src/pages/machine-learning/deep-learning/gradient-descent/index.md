
## Gradient Descent

* Gradient descent is an optimization algorithm used to find the values of parameters (coefficients) of a function that minimizes the cost function (error)[1]. 
* Cost-function can be understood as the error in some function(f), which is usually represented as the derivative of the function. 
* Error here is the difference between the desired value and obtained value.
* Gradient descent is best used when the parameters cannot be calculated analytically (e.g. using linear algebra) and must be searched by some hit and trial method(substituting random values until the result moves towards the desired result, i.e cost becomes least).

 ## Intuition for Gradient Descent
* Intuition for Gradient Descent can be derived from a large bowl. The bowl is the plot of the cost function. [1]
* The botton represents the set of coefficients which amount to least cost for the function.

![alt text](https://3qeqpr26caki16dnhd19sv6by6v-wpengine.netdna-ssl.com/wp-content/uploads/2016/03/Large-Bowl.jpg "Bowl")[1][2]

* An arbitrary point on the bowl is the cost of the current coefficient values. 
* The task of Gradient Descent is to continuosly move towards a global minima, i.e reaching the bottom of the bowl in this case. 
* It does so by continuosly iterating through random values for the set of coefficients of the parameters of some function (f) and selecting a set of coefficients each time the cost reduces, 

```
where, f (some function): ax + by + c,
        x and y are parameters,
        a, b, and c are coefficients.
```
* Repeating the above process enough times will lead to the bottom of the bowl and hence derive values of the coefficients that results in the minimum cost, i.e values of a, b, and c such that the cost of function (f) is least.

[1]Reference: [MachineLearningMastery.](https://machinelearningmastery.com/gradient-descent-for-machine-learning/)<br />
[2]Reference: [Bowl Image](https://www.flickr.com/photos/wwarby/4046737583/)
