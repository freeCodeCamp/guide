---
title: Monte Carlo
---
## Monte Carlo

<p align="justify">
Randomized algorithms fall into two rough categories: Las Vegas algorithms and Monte Carlo algorithms. Las Vegas algorithms always return precisely the correct answer (or report that they failed). These algorithms consume a random amount of resources, usually memory or time. In contrast, Monte Carlo algorithms return answers with a random amount of error. The amount of error can typically be reduced by expending more resources (usually running time and memory). For any ﬁxed computational budget, a Monte Carlo algorithm can provide an approximate answer. Many problems in machine learning are so diﬃcult that we can never expect to obtain precise answers to them. This excludes precise deterministic algorithms andLas Vegas algorithms. Instead, we must use deterministic approximate algorithmsor Monte Carlo approximations. Both approaches are ubiquitous in machine learning.
</p>

#### Sampling and Monte Carlo Methods
<p align="justify">
Many important technologies used to accomplish machine learning goals are based on drawing samples from some probability distribution and using these samples tof orm a Monte Carlo estimate of some desired quantity.
</p>

<p align="justify">
We may wish to draw samples from a probability distribution for many reasons.Sampling provides a ﬂexible way to approximate many sums and integrals at reduced cost. Sometimes we use this to provide a signiﬁcant speedup to a costly but tractable sum, as in the case when we subsample the full training cost with minibatches. In other cases, our learning algorithm requires us to approximate an intractable sum or integral, such as the gradient of the log partition function of an undirected model. In many other cases, sampling is actually our goal, in the sense that we want to train a model that can sample from the training distribution.
</p>

<p><a href="http://www.deeplearningbook.org/contents/monte_carlo.html" target='_blank' rel='nofollow'>More Read</a></p>

#### Resources:
<p>1. <a href="https://arogozhnikov.github.io/2016/12/19/markov_chain_monte_carlo.html">Alex Rogozhnikov</a></p>
<p>2. <a href="http://helper.ipam.ucla.edu/publications/gss2012/gss2012_10791.pdf">Iain Murray</a></p>
<p>3. <a href="http://www.deeplearningbook.org/contents/monte_carlo.html">Ian Goodfellow and Yoshua Bengio and Aaron Courville</a></p>
