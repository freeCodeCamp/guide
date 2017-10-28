---
title: Neural Networks
---
## Neural Networks
![Feed-forward neural network](https://ujwlkarn.files.wordpress.com/2016/08/screen-shot-2016-08-09-at-3-42-21-am.png?)

A neural network is a computing system. They are like biological neural networks that constitute animal brains. 
To train  a neural network, we need an input vector and a corresponding output vector.
The training works by minimizing an error term. This error can be the squared difference between the predicted output and the original output.

The most basic element of a neural network is a neuron. It's input is a vector, say `x`, and its output is a real valued variable, say `y`. Thus, we can conclude that the neuron acts as a mapping between the vector `x` and a real number `y`.

The above network takes numerical inputs `X1` and `X2` and has weights `w1` and `w2` associated with those inputs. Additionally, there is another input `1` with weight `b` (called the Bias) associated with it. We will learn more details about role of the bias later.

The output `y` from the neuron is computed as shown in the Figure 1. The function f is non-linear and is called the Activation Function. The purpose of the activation function is to introduce non-linearity into the output of a neuron. This is important because most real world data is non linear and we want neurons to learn these non linear representations.

Every activation function (or non-linearity) takes a single number and performs a certain fixed mathematical operation on it 

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
