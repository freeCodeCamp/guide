---
title: Neural Networks
---
## Neural Networks
![Feed-forward neural network](http://ufldl.stanford.edu/tutorial/images/SingleNeuron.png)

A neural network is a computing system. They are like biological neural networks that constitute animal brains. 
To train  a neural network, we need an input vector and a corresponding output vector.
The training works by minimizing an error term. This error can be the squared difference between the predicted output and the original output.

The most basic element of a neural network is a neuron. It's input is a vector, say `x`, and its output is a real valued variable, say `y`. Thus, we can conclude that the neuron acts as a mapping between the vector `x` and a real number `y`.

Neural networks are used on a variety of tasks. These include computer vision, speech recognition, translation, social network filtering, playing video games, and medical diagnosis among other things.

### Problems solved using Neural Networks
- Classification
- Clustering
- Regression
- Anomaly detection 
- Association rules 
- Reinforcement learning 
- Structured prediction 
- Feature engineering 
- Feature learning 
- Learning to rank
- Grammar induction

### More Information:
- <a href=' https://en.wikipedia.org/wiki/Artificial_neural_network#Components_of_an_artificial_neural_network ' target='_blank' rel='nofollow'>Wikipedia</a>
- <a href='http://natureofcode.com/book/chapter-10-neural-networks/' target='_blank' rel='nofollow'>Daniel Shiffman's Nature of Code</a>
- <a href='http://ufldl.stanford.edu/tutorial/supervised/MultiLayerNeuralNetworks/' target='_blank' rel='nofollow'>Stanford University</a>
- <a href='https://youtu.be/aircAruvnKk' target='_blank' rel='nofollow'>3Blue1Brown</a>
- <a href='https://youtu.be/h3l4qz76JhQ' target='_blank' rel='nofollow'>Siraj Raval</a>

## Convolution Neural Network 
CNNs, like neural networks, are made up of neurons with learnable weights and biases. Each neuron receives several inputs, takes a weighted sum over them, pass it through an activation function and responds with an output. The whole network has a loss function and all the tips and tricks that we developed for neural networks still apply on CNNs

CNNs have a couple of concepts called parameter sharing and local connectivity
Parameter sharing is sharing of weights by all neurons in a particular feature map.
Local connectivity is the concept of each neural connected only to a subset of the input image (unlike a neural network where all the neurons are fully connected)
This helps to reduce the number of parameters in the whole system and makes the computation more efficient.
