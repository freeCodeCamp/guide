---
title: Backpropagation
---
## Backpropagation 
<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'></a>

Yoshua Bengio, a Pioneer in AI, defines Backpropagation as "the procedure that is used to compute gradients of a loss function (e.g. a prediction error, but not necessarily, it could be a negative log-likelihood of a probabilistic model) with respect to parameters. The procedure is based on the application of the chain rule and computationally proceeds 'backwards' with respect to the computations performed to compute the loss itself. It is the most efficient possible procedure to compute the exact gradient and its computational cost is always of the same O( ) complexity as computing the loss itself".

**Backward Prorogation of Errors**, often abbreviated as BackProp is one of the several ways in which an artificial neural network (ANN) can be trained. It is a supervised training scheme, which means, it learns from labeled training data (there is a supervisor, to guide its learning).

To put in simple terms, BackProp is like **"learning from mistakes"**. The supervisor **corrects** the ANN whenever it makes mistakes.

An ANN consists of nodes in different layers; input layer, intermediate hidden layer(s) and the output layer. The connections between nodes of adjacent layers have "weights" associated with them. The goal of learning is to assign correct weights for these edges. Given an input vector, these weights determine what the output vector is.

## **BackProp Algorithm**:
Initially all the edge weights are randomly assigned. For every input in the training dataset, the ANN is activated and its output is observed. This output is compared with the desired output that we already know, and the error is "propagated" back to the previous layer. This error is noted and the weights are "adjusted" accordingly. This process is repeated until the output error is below a predetermined threshold. 

Once the above algorithm terminates, we have a "learned" ANN which, we consider is ready to work with "new" inputs. This ANN is said to have learned from several examples (labeled data) and from its mistakes (error propagation)<sup>1</sup>.

## **Related videos**:

- [Neural Networks Demystified: BackPropagation ](https://youtu.be/GlcnxUlrtek)
- [BackProp in 5 minutes](https://youtu.be/q555kfIFUCM)

## **Sources**:
- [Explain back propagation algorithm to a beginner](https://www.quora.com/How-do-you-explain-back-propagation-algorithm-to-a-beginner-in-neural-network)

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [How the backpropagation algorithm works](http://neuralnetworksanddeeplearning.com/chap2.html)
