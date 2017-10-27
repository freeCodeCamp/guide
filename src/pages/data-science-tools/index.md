---
title: Data Science Tools
---
## Data Science Tools

In this section, we'll have guides to a wide variety of tools used by data scientists.


- Data Analysis

The R Project for Statistical Computing is still the most popular. I agree with William that it's best used through R Studio.
Pandas is a set of Python libraries if you don't want to learn a new language
The Julia Language is an upcoming alternative to R. I spent a little bit of time learning it and would like to keep track of where the project goes.

- Data Warehousing

MySQL: It can comfortably handle datasets that are a few GBs. Don't prematurely go to Hive. MySQL is optimized to death and is super good at latency for running ad-hoc queries.

CSV Files: You'd be surprised how far you can get with using these as your primary storage.

Hive/Shark/Redshift: For when your big data is actually big. Hive can do giant joins while Redshift is better for latency but more limited in its joins.

- Data Visualization
D3.js for pretty visualizations to put on the web
Matplotlib for ad-hoc Python plotting
ggplot2 for R.

Machine Learning

I'm a little rusty on this one - the state of the art is moving quickly here.
I've mostly trained models in R and used it directly or over Hive.
I've played around with scikit-learn in the past and it seems to be maturing.
I've used Weka for trying out standard algorithms quickly on new datasets in the past but its hard to productionize anything with it.

Social Network Analysis

It's been a while since I've done hands-on SNA, so things might have changed recently.
NetworkX is a pretty good Python library for SNA but isn't distributed
Stanford Network Analysis Project
Apache Giraph is an open-source implementation of the Google Pregel paper.

This is a Quora answer by Abhinav Sharma. 
Link to the answer: https://www.quora.com/What-tools-do-data-scientists-use
