---
title: Perceptron
---
## Perceptron

In machine learning, the perceptron is an algorithm for [supervised learning](https://en.wikipedia.org/wiki/Supervised_classification) of [binary classifiers](https://en.wikipedia.org/wiki/Binary_classification) (functions that can decide whether an input, represented by a vector of numbers, belongs to some specific class or not). It is a type of [linear classifier](https://en.wikipedia.org/wiki/Linear_classifier), i.e. a classification algorithm that makes its predictions based on a [linear predictor function](https://en.wikipedia.org/wiki/Linear_predictor_function) combining a set of weights with the [feature vector](https://en.wikipedia.org/wiki/Feature_vector). 

## Definition

In the modern sense, the perceptron is an algorithm for learning a binary classifier: a function that maps its input x (a real-valued vector) to an output value f ( x ) (a single binary value): 

f ( x ) = 1 (if w ⋅ x + b > 0) /0 (otherwise)

where w is a vector of real-valued weights, w ⋅ x is the [dot product](https://en.wikipedia.org/wiki/Dot_product) ∑ i = 1 m w i x i, where m is the number of inputs to the perceptron and b is the bias. The bias shifts the decision boundary away from the origin and does not depend on any input value. 

The value of f ( x ) (0 or 1) is used to classify x as either a positive or a negative instance, in the case of a binary classification problem. If b is negative, then the weighted combination of inputs must produce a positive value greater than 
| b  in order to push the classifier neuron over the 0 threshold. Spatially, the bias alters the position (though not the orientation) of the decision boundary. The perceptron learning algorithm does not terminate if the learning set is not [linearly separable](https://en.wikipedia.org/wiki/Linearly_separable). If the vectors are not linearly separable learning will never reach a point where all vectors are classified properly. The most famous example of the perceptron's inability to solve problems with linearly nonseparable vectors is the Boolean exclusive-or problem. The solution spaces of decision boundaries for all binary functions and learning behaviors are studied in the reference.

In the context of neural networks, a perceptron is an [artificial neuron](https://en.wikipedia.org/wiki/Artificial_neuron) using the Heaviside step function as the activation function. The perceptron algorithm is also termed the single-layer perceptron, to distinguish it from a [multilayer perceptron](https://en.wikipedia.org/wiki/Multilayer_perceptron), which is a misnomer for a more complicated neural network. As a linear classifier, the single-layer perceptron is the simplest [feedforward neural network](https://en.wikipedia.org/wiki/Feedforward_neural_network). 
