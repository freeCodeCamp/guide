---
title: Neural Networks
---
## Neural Networks
![Feed-forward neural network](http://ufldl.stanford.edu/tutorial/images/SingleNeuron.png)

A artificial neural network is a computing system. They are like biological neural networks that constitute animal brains. 
To train a neural network, we need an input vector and a corresponding output vector.
The training works by minimizing an error term. This error can be the squared difference between the predicted output and the original output.

Neural networks initially became popular in the 1980s, but limitations in computational power prohibited their widespread acceptance until the past decade.
Innovations in CPU size and power allow for neural network implementation at scale, though other machine learning paradigms still outrank neural networks in terms of efficiency.

The most basic element of a neural network is a neuron. It's input is a vector, say `x`, and its output is a real valued variable, say `y`. Thus, we can conclude that the neuron acts as a mapping between the vector `x` and a real number `y`.

Neural networks perform regression iteratively across multiple layers, resulting in a more nuanced prediction model.
A single node in a neural network computes the exact same function as [logistic regression](../logistic-regression/index.md).
All these layers, aside from the input and output, are hidden, that is, the specific traits represented by these layers are not chosen or modified by the programmer.

![Four Layered Neural Network](http://cs231n.github.io/assets/nn1/neural_net2.jpeg)

In any given layer, each node takes all values stored in the previous layer as input and makes predictions on them based on a logistic regression analysis. 
The power of neural networks lies in their ability to "discover" patterns and traits unseen by programmers. 
As mentioned earlier, the middle layers are "hidden," meaning the weights given to the transitions is determined exclusively by the training of the algorithm.

Neural networks are used on a variety of tasks. These include computer vision, speech recognition, translation, social network filtering, playing video games, and medical diagnosis among other things.

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


## Convolution Neural Networks
![Convolution neural network](http://d3kbpzbmcynnmx.cloudfront.net/wp-content/uploads/2015/11/Screen-Shot-2015-11-07-at-7.26.20-AM.png)

A Convolutional Neural Network (CNN) is comprised of one or more convolutional layers (often with a subsampling step) and then followed by one or more fully connected layers as in a standard multilayer neural network.

Unline traditional Neural Network, Convolution Neural Network take advantage of the two-dimensional input. Convolution layers are used to extract features from the input training data. Each convolution layer is assigned a set of filters which hel in feature extraction. With depth of CNN model, complexity of feature learnt by convolution layers increases, i.e. first convolution layer captures simple features while the last convolution layer captures complex features of the traning sample. 
Apart from convolution layers CNN model also have max pooling layer which helpes in reduction of image size incase the input has  bigger dimensions.


#### Advantages of CNN model over Neural Network:

Convolutional neural networks allow networks to have fewer weights, and they are given a very effective tool - convolutions - for image processing. This guides the learning towards what we think interesting data is.

For instance, we know that images contain a lot of redundant information, and that for object recognition, edges are often all we need. We have used this insight to give the neural network a simple way to do edge detection, though convolution. This is why we use ConvNets for most computer vision deep learning tasks, as it makes use of local patterns of the data.


#### For further info:
- <a href='https://www.quora.com/What-is-a-convolutional-neural-network'></a>


