---
title: Naive Bayes 
---
## Inroduction to what is Navie Bayes

Naive Bayes methods are a set of supervised learning algorithms based on applying Bayes’ theorem with the “naive” assumption of independence between every pair of features. Given a class variable y and a dependent feature vector x_1 through x_n, Bayes’ theorem states the following relationship:
P(y \mid x_1, \dots, x_n) = \frac{P(y) P(x_1, \dots x_n \mid y)}
                                 {P(x_1, \dots, x_n)}
Using the naive independence assumption that
P(x_i | y, x_1, \dots, x_{i-1}, x_{i+1}, \dots, x_n) = P(x_i | y),
for all i, this relationship is simplified to
P(y \mid x_1, \dots, x_n) = \frac{P(y) \prod_{i=1}^{n} P(x_i \mid y)}
                                 {P(x_1, \dots, x_n)}
Since P(x_1, \dots, x_n) is constant given the input, we can use the following classification rule:
P(y \mid x_1, \dots, x_n) \propto P(y) \prod_{i=1}^{n} P(x_i \mid y)

\Downarrow

\hat{y} = \arg\max_y P(y) \prod_{i=1}^{n} P(x_i \mid y),
and we can use Maximum A Posteriori (MAP) estimation to estimate P(y) and P(x_i \mid y); the former is then the relative frequency of class y in the training set.
The different naive Bayes classifiers differ mainly by the assumptions they make regarding the distribution of P(x_i \mid y).
In spite of their apparently over-simplified assumptions, naive Bayes classifiers have worked quite well in many real-world situations, famously document classification and spam filtering. They require a small amount of training data to estimate the necessary parameters. (For theoretical reasons why naive Bayes works well, and on which types of data it does, see the references below.)
Naive Bayes learners and classifiers can be extremely fast compared to more sophisticated methods. The decoupling of the class conditional feature distributions means that each distribution can be independently estimated as a one dimensional distribution. This in turn helps to alleviate problems stemming from the curse of dimensionality.
On the flip side, although naive Bayes is known as a decent classifier, it is known to be a bad estimator, so the probability outputs from predict_proba are not to be taken too seriously.

#### More Information:
 <!-- Please add any articles you think might be helpful to read before writing the article -->
- Refer for more details about the algorithm (scikit-learn.org/stable/modules/naive_bayes.html)
