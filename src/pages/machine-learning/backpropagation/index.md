---
title: Backpropagation
---
## Backpropagation

<p align="center">
<img src="https://matthewmazur.files.wordpress.com/2018/03/neural_network-7.png">Basic Structure Of Backpropagation</img>
</p>

<p align="justify">Backpropagation is a method used in artificial neural networks to calculate the error contribution of each neuron after a batch of data (in image recognition, multiple images) is processed. This is used by an enveloping optimization algorithm to adjust the weight of each neuron, completing the learning process for that case.</p>

<p align="justify">Technically it calculates the gradient of the loss function. It is commonly used in the gradient descent optimization algorithm. It is also called backward propagation of errors, because the error is calculated at the output and distributed back through the network layers.</p>

<p align="justify">Backpropagation requires a known, desired output for each input value—it is therefore considered to be a supervised learning method (although it is used in some unsupervised networks such as autoencoders).</p>

<p align="justify"> 
Backpropagation is a generalization of the delta rule to multi-layered feedforward networks, made possible by using the chain rule to iteratively compute gradients for each layer. The backpropagation algorithm has been repeatedly rediscovered and is a special case of a more general technique called automatic differentiation in reverse accumulation mode. It is closely related to the Gauss–Newton algorithm, and is part of continuing research in neural backpropagation.
</p>

<p align="justify"> 
Backpropagation is commonly used to train deep neural networks, a term used to describe neural networks with more than one hidden layer.
</p>

#### Motivation

<p align="justify"> 
The goal of any supervised learning algorithm is to find a function that best maps a set of inputs to their correct output. An example would be a classification task, where the input is an image of an animal, and the correct output is the name of the animal. The motivation for backpropagation is to train a multi-layered neural network such that it can learn the appropriate internal representations to allow it to learn any arbitrary mapping of input to output.
</p>

<p align="justify"> 
   The manual of calculation can be seen on <strong><a href="https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/">here</a></strong>
</p>


#### Resources:
<!-- Please add any articles you think might be helpful to read before writing the article -->

<p>1. <a href="https://en.wikipedia.org/wiki/Backpropagation">Wikipedia</a></p>
<p>2. <a href="https://mattmazur.com/2015/03/17/a-step-by-step-backpropagation-example/">Matt Mazur</a></p>


