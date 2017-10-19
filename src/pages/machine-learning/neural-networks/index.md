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

My Changes  -----------------

An Artificial Neural Network (ANN) is an information processing paradigm that is inspired the brain. ANNs, like people, learn by example. An ANN is configured for a specific application, such as pattern recognition or data classification, through a learning process. Learning largely involves adjustments to the synaptic connections that exist between the neurons.

The brain consists of hundreds of billion of cells called neurons. These neurons are connected together by synapses which are nothing but the connections across which a neuron can send an impulse to another neuron. When a neuron sends an excitatory signal to another neuron, then this signal will be added to all of the other inputs of that neuron. If it exceeds a given threshold then it will cause the target neuron to fire an action signal forward — this is how the thinking process works internally.

In Computer Science, we model this process by creating “networks” on a computer using matrices. These networks can be understood as abstraction of neurons without all the biological complexities taken into account. To keep things simple, we will just model a simple NN, with two layers capable of solving linear classification problem.

Forward Propagation:
Take the inputs, multiply by the weights (just use random numbers as weights)
Let Y = WiIi = W1I1+W2I2+W3I3
Pass the result through a sigmoid formula to calculate the neuron’s output. The Sigmoid function is used to normalise the result between 0 and 1:
1/1 + e-y

Back Propagation
Calculate the error i.e the difference between the actual output and the expected output. Depending on the error, adjust the weights by multiplying the error with the input and again with the gradient of the Sigmoid curve:
Weight += Error Input Output (1-Output) ,here Output (1-Output) is derivative of sigmoid curve.
Note: Repeat the whole process for a few thousands iterations.

Let’s code up the whole process in Python. We’ll be using Numpy library to help us with all the calculations on matrices easily. You’d need to install numpy library on your system to run the code

from numpy import *
 
class NeuralNet(object):
    def __init__(self):
        # Generate random numbers
        random.seed(1)
 
        # Assign random weights to a 3 x 1 matrix,
        self.synaptic_weights = 2 * random.random((3, 1)) - 1
 
    # The Sigmoid function
    def __sigmoid(self, x):
        return 1 / (1 + exp(-x))
 
    # The derivative of the Sigmoid function.
    # This is the gradient of the Sigmoid curve.
    def __sigmoid_derivative(self, x):
        return x * (1 - x)
 
    # Train the neural network and adjust the weights each time.
    def train(self, inputs, outputs, training_iterations):
        for iteration in xrange(training_iterations):
 
            # Pass the training set through the network.
            output = self.learn(inputs)
 
            # Calculate the error
            error = outputs - output
 
            # Adjust the weights by a factor
            factor = dot(inputs.T, error * self.__sigmoid_derivative(output))
            self.synaptic_weights += factor
 
    # The neural network thinks.
    def learn(self, inputs):
        return self.__sigmoid(dot(inputs, self.synaptic_weights))
 
if __name__ == "__main__":
 
    #Initialize
    neural_network = NeuralNet()
 
    # The training set.
    inputs = array([[0, 1, 1], [1, 0, 0], [1, 0, 1]])
    outputs = array([[1, 0, 1]]).T
 
    # Train the neural network
    neural_network.train(inputs, outputs, 10000)
 
    # Test the neural network with a test example.
    print neural_network.learn(array([1, 0, 1]))
    
Output - 
After 10 iterations our neural network predicts the value to be 0.65980921.  It looks not good as the answer should really be 1. If we increase the number of iterations to 100, we get 0.87680541. Our network is getting smarter! Subsequently, for 10000 iterations we get 0.9897704 which is pretty close and indeed a satisfactory output.

My changes end -----------------------
