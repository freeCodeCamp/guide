---
title: Neural Networks
---
## Neural Networks
![Feed-forward neural network](http://ufldl.stanford.edu/tutorial/images/SingleNeuron.png)

A artificial neural network is a computing system. They are like biological neural networks that constitute animal brains. 
To train a neural network, we need an input vector and a corresponding output vector.
The training works by minimizing an error term. This error can be the squared difference between the predicted output and the original output.

The most basic element of a neural network is a neuron. Its input is a vector, say `x`, and its output is a real valued variable, say `y`. Thus, the neuron acts as a mapping between the vector `x` and a real number `y`.

Neural networks are used on a variety of tasks, including computer vision, speech recognition, translation, social network filtering, playing video games, and medical diagnosis.

### Visualization

There's an awesome tool to help you grasp the idea of neural networks without any hard math: <a href='http://playground.tensorflow.org' target='_blank' rel='nofollow'>TensorFlow Playground</a>, a web app that lets you play with a real neural network running in your browser and click buttons and tweak parameters to see how it works.

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

### Types of Neural Networks
- Recurrent Neural Network (RNN)
- Long-short Term Memory (LSTM), a type of RNN
- Convolutional Neural Network (CNN)

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
