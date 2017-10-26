---
title: Feature Engineering
---
## Feature Engineering
Machine learning models use features to help predict continuous or categorical outcomes of a variable.  Often the number of features availible to aid in creating a predictive model is inadequate, or the features themselves are not robust enough to produce a model with strong predictive capabilities.  Feature engineering is taking the available data and integrating it with additional domain-specific knowledge on the subject to create new features.  

## Why is feature engineering useful?

- The quantity and quality of features impacts the predictive power of the model.  More high-quality features results in a better model.

- Build better models by taking the data you have and augmenting it with additional subject-relevant information obtained elsewhere.

- New features can lead to 'breakthroughs' in the model's ability to predict a robust outcome.  

## Caveats to feature engineering

- New feature creation based from known features can lead to multicollinearity, a situation where two features are linearly related.  This amounts to 'double dipping' in a model and can lead to over fitting.  

- More is not always better.  Adding features with poor predictive capabilities can increase computational time without adding benefits to the model.

## Examples of feature engineering:

- If you have a 'date' feature, try subsetting it to 'day of the week', 'week of the year', or 'month of the year'.  Similarly, create an AM/PM feature from 'time of day'.

- Perform a data reduction like PCA then add the vectors from the PCA to the data as new features.

- Produce new features by numerically transforming current features.  Examples would be log transforming data or encoding categorical features as numbers (convert low/medium/high to 1/2/3).  

- Use census data to create new features (such as average income), assuming your data set contains location information (city, state, county, etc.).

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[A comprehensive guide to data analysis](https://www.analyticsvidhya.com/blog/2016/01/guide-data-exploration/)

[Data transformations](https://onlinecourses.science.psu.edu/stat501/node/318)

[Feature engineering in data science](https://docs.microsoft.com/en-us/azure/machine-learning/team-data-science-process/create-features)

