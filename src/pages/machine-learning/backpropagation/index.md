---
title: Backpropagation
---
## Backpropagation

![Error Curve for one neuron with two inputs.](https://upload.wikimedia.org/wikipedia/commons/6/6d/Error_surface_of_a_linear_neuron_with_two_input_weights.png)

Image by AI456 [GFDL](http://www.gnu.org/copyleft/fdl.html) or [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0), via Wikimedia Commons

Backpropagation is used within deep learning to mathimatically estimate the error and then update a neural network to approach a local error minimum within a given feature space. Backpropogation can be split into the four following steps:

1. Propogation
2. Cost Estimation
3. Cost Propogation
4. Neural Updates

During the propogation step a batch of input data is fed into the first layer of a deep neural network. Each layer within the network is then caluclated to obtain an output prediction. This process is often refered to as feed forward propogation and this process is the only step used in final predictions.

The cost estimation is then calculated. There are many premade cost estimators available today, some of the more popular being Stochastic Gradient Descent([SGD](https://en.wikipedia.org/wiki/Stochastic_gradient_descent)), the [Adam Optimizer](https://medium.com/@nishantnikhil/adam-optimizer-notes-ddac4fd7218), and Mean Squared Error([MSE](https://en.wikipedia.org/wiki/Mean_squared_error). Each of these estimators use ground truth output data and compare that data with the predicted output to obtain an error estimate.

The third step is cost propogation. In this step paritail error derivatives are calculated for each neuron in the neural network using the [chain rule](https://en.wikipedia.org/wiki/Chain_rule) stepping backwards through the network one layer at a time. This backward propogation of error derivatives is what gives Back Propogation its name.

Finally, once error values have been determined for each neuron in the network, the weight and bias of each neuron is proportianlly shifted along the gradient in order to minimize the cost estimation. The end effect of this process is to slowly move along the error curve of the neural network in order to obtain a better mapping from inputs to outpus.

One of the main critiques of using the backpropogation method is that it is only capable of searching the error space for local minima rather than global minima. This often means that the neural network will hit a certain level of accuracy that it is never able to move past. Recently it has been suggested that neural evolution of weights and [biases may be as fast and effective as gradient descent](https://blog.openai.com/evolution-strategies/) but there has been far fewer research efforts in that direction.

#### More Information:
[Backpropogation - Wikipedia](https://en.wikipedia.org/wiki/Backpropagation)

