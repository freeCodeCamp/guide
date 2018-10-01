---
title: ResNet
---

Residual Neural Network (ResNet) is one of the popular Convolutional Neural Network (CNN) used for deep learning based computer vision applications. The architecture won the 2015 ImageNet Challenge (ILSVRC 2015) with a top-5 error rate of 3.57% almost resembling human-like accuracies. It involved the use of residual modules which helped to acheive deeper CNN models with less parameters and accuracy. The depth of the model ranges from 18 convolutional layers up to 152 layers respectively.

### Residual Module

ResNets are formed by building blocks named Residual blocks.

![residual-module](http://teleported.in/post_imgs/12-residual-net.png "The Residual Block")

The network can be mathematically depicted as:

```H(x) = F(x) + x```, where ```F(x) = W2*relu(W1*x+b1)+b2```

During training period, the residual network learns the weights of its layers such that if the identity mapping were optimal, all the weights get set to 0. In effect F(x) become 0, as in x gets directly mapped to H(x) and no corrections need to be made. Hence these become your identity mappings which help grow the network deep. And if there is a deviation from optimal identity mapping, weights and biases of F(x) are learned to adjust for it. Think of F(x) as learning how to adjust our predictions to match the actuals.

### ResNet Architecture

![resnet](https://cdn-images-1.medium.com/max/800/0*pkrso8DZa0m6IAcJ.png "ResNet Architecture")

The ResNet model represenrs a novel architecture with ```skip connections``` and features heavy batch normalization. Such skip connections are also known as gated units or gated recurrent units and have a strong similarity to recent successful elements applied in Recurrent Neural Networks (RNNs). Thanks to this technique, authors<sup>1</sup> were able to train a CNN with 152 layers while still having lower complexity than VGGNet.

The below tabular representation of ResNets give us a detailed idea of the architecture.

![resnet-table](https://cdn-images-1.medium.com/max/800/1*aq0q7gCvuNUqnMHh4cpnIw.png "ResNet Architectures")

### Sources

1. [Kaiming He and Xiangyu Zhang and Shaoqing Ren and Jian Sun, "Deep Residual Learning for Image Recognition", CVPR 2015](http://arxiv.org/abs/1512.03385)
