---
title: Unsupervised Learning
---
#### Suggested Reading:
<!-- Please add any articles you think might be helpful to read before writing the article -->

- https://en.wikipedia.org/wiki/Unsupervised_learning
- https://stackoverflow.com/a/1854449/6873133
- http://mlg.eng.cam.ac.uk/zoubin/papers/ul.pdf

#### Draft of Article:
<!-- Please add your working draft below in GitHub-flavored Markdown -->

<!--
Discussion points:
- Unsupervised learning doesn't have a correct answer i.e. you can't be more or less accurate in the output
- Learn "hidden" structure in data
- Clustering is classical example
- Group like things together
- Example use case: movie database with people's preferences, you want to cluster and see different types of people
- Example use case: grouping documents or articles of similar content
-->
What is Unsupervised Learning?

Unsupervised learning allows us to approach problems with little or no idea what our results should look like. We can derive structure from data where we don't necessarily know the effect of the variables.

Example:

Clustering: Is used for exploratory data analysis to find hidden patterns or grouping in data. Take a collection of 1,000,000 different genes, and find a way to automatically group these genes into groups that are somehow similar or related by different variables, such as lifespan, location, roles, and so on.
A common unsupervised learning technique is clustering.

Say you are given these (x,y) coordinates of points.
A(0,0) 
B(0,1)
C(100,100)
D(99,101)
E(3,4)
F(102, 103)

You can say that A,B and E are similar to each other. They can be clustered together as Cluster 1. Similarly, C,D and F can be clustered together as Cluster 2. Elements in a cluster are similar to other elements in that cluster and are different from the elements in other clusters. 

Now, let us look at some applications of clustering.

Google News
Google News clusters all similar news items together as shown in the snapshot below:


Clicking on these links will lead you to different news stories but each of these are related to the topic "NASA captures spectacular eruption from Sun".



Another example is..

Social Network Analysis: In a social network, clustering can be used to find users that interact a lot with each other (say, via e-mails). This is shown in the figure below where the users have been clustered into four clusters - A,B,C and D.

Few more Examples:
Suppose you have data for an E-commerce site. You have a list of people and things they have ordered online this last week. You can now use Clustering Algorithms and find the pattern in the data, predict the buying trend and formulate the business strategy as per the trend.
