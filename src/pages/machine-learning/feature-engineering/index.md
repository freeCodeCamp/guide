---
title: Feature Engineering
---
## Feature Engineering

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Machine Learning works best with well formed data. Feature engineering describes certain techniques to make sure we're working with the best possible representation of the data we collected. Following are two techniques of feature engineering: scaling and selection.

### Feature Scaling

Let's assume your data contains the weight of people, as well as the height. The raw numbers of these two features have a high difference (e.g. 80 kg and 180 cm, or 175 lbs vs 5.9 ft), which could influence the outcome of a Machine Learning algorithm. This is especially the case for algorithms that use [distance functions](https://en.wikipedia.org/wiki/Euclidean_distance).

To fix this isse, we represent the raw numbers in a 0 to 1 range. We can achieve this using the formula: `(x - xMin) / (xMax - xMin)`.

Using this formula, we need to pay special attention to outliers, as these can affect the outcome drastically by pushing up xMax and pushing down xMin. That's why outliers are often eliminated prios to scaling. 

### Feature Selection

It's all about identifying the subset of features that are responsible for the trends we observe in our data.

Why should we care? [Curse of Dimensionality](https://en.wikipedia.org/wiki/Curse_of_dimensionality) is a big enemy in times of Big Data. We can't use all of our tens to hundreds of features. This would not only raise the dimensionality of our data through the roof, but also often don't make any sense in specific use cases. Imagine wanting to predict the weather of tomorrow: It will be more likely that the weather trend of last days is more important in this scenario than the babies born in the last days. So you could easily just eliminate this feature.

#### Filtering & Wrapping

Here we describe to general approaches. Filtering methods act independently from your chosen learning algorithm & wrapping methods incorporate your learner.

Filter methods select the subset of features before injecting the data into your ML algorithm. They use e.g. the correleation with the to-be-predicted variable to identify which subset of feature to choose. These methods are relatively fast to compute, but don't take advantage of the [bias of the learner](https://en.wikipedia.org/wiki/Inductive_bias) because filtering is happening independent of your chosen ML model.

Wrapping search algorithms do take advantage of the learning bias, as they incorporate your chosen ML model. These methods function by removing the feature that has the lowest change in score when removed and repeating this process until the score changes significantly. This means running your learning algorithm over and over again, which can lead to significant computation times. These methods also have the danger of overfitting, as you're basically optimizing the feature set based on your chosen ML model.

#### Relevance

Another way of selecting features is using the [BOC (Bayes Optimal Classifier)](https://scholar.google.de/scholar?q=Bayes+Optimal+Classifier&hl=en&as_sdt=0&as_vis=1&oi=scholart&sa=X&ved=0ahUKEwiO16X0tIbXAhXiKsAKHbGrBzoQgQMIJjAA). The rule of thumbs here are:
* a feature is strongly relevant if removing it degrades the BOC
* a feature is weakly relevant if it is not strongly relevant & adding it in combination with other features improves the BOC
* otherwise a feature is irrelevant

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [Paper exploring "Feature Engineering for Text Classification"](https://pdfs.semanticscholar.org/6e51/8946c59c8c5d005054af319783b3eba128a9.pdf)
* [Article "Discover Feature Engineering, How to Engineer Features and How to Get Good at It"](https://machinelearningmastery.com/discover-feature-engineering-how-to-engineer-features-and-how-to-get-good-at-it/)

