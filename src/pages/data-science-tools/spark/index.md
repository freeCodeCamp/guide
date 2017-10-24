---
title: Spark
---
##                                                      Spark

<p align="center"> <strong>Apache Spark is a powerful open source processing engine built around speed, ease of use, and sophisticated analytics. It was originally developed at UC Berkeley in 2009.</strong> </p>

Spark is a data processing engine that ca be applied in a wide range of domains. Data Scientists, and developers utilize Spark in their applications to analyze, transform and query at higher speed and scale. Spark is most commonly used to process streaming data from financial systems or sensors, queries across giant data sets and for machine learning tasks.

Spark is able to hadle multiple petabytes of data at a time distributed throughout thousands of linked physical or more commonly virtual servers. It's API's and develper libraries support multiple languages such as R, Scala, Python and Java. Commonly Spark is used together with the HDF5, Hadoop's data storage module although it can be used alongside others such as MongoDB, Cassandra and Amazon S3.


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [Spark] (https://spark.apache.org/)
* [MapR]  (https://mapr.com/blog/spark-101-what-it-what-it-does-and-why-it-matters/)

## The Tool

Spark is a fast and general cluster computing system for Big Data. It provides high-level APIs in Scala, Java, Python, and R, and an optimized engine that supports general computation graphs for data analysis. It also supports a rich set of higher-level tools including Spark SQL for SQL and DataFrames, MLlib for machine learning, GraphX for graph processing, and Spark Streaming for stream processing.

http://spark.apache.org/

## Core Features
Spark 2.0 has many new features:
 * Native CSV data source, based on Databricks’ spark-csv module
 * Off-heap memory management for both caching and runtime execution
 * Hive style bucketing support
 * Approximate summary statistics using sketches, including approximate quantile, Bloom filter, and count-min sketch.
## How it is used for Data Science
Spark has become a standard tool in many data scientist's tool box. With its flexibility in API choices, any programmer can work with Spark in their preferred language. As noted by <a href=https://blog.cloudera.com/blog/2014/03/why-apache-spark-is-a-crossover-hit-for-data-scientists/>Cloudera</a>, Spark has gained popularity for many reasons:
 * Being Scala-based, Spark embeds in any JVM-based operational system, but can also be used interactively in a REPL in a way that will feel familiar to R and Python users.
 * For Java programmers, Scala still presents a learning curve. But at least, any Java library can be used from within Scala.
Spark’s RDD (Resilient Distributed Dataset) abstraction resembles Crunch’s PCollection, which has proved a useful abstraction in Hadoop that will already be familiar to Crunch developers. (Crunch can even be used on top of Spark.)
 * Spark imitates Scala’s collections API and functional style, which is a boon to Java and Scala developers, but also somewhat familiar to developers coming from Python. Scala is also a compelling choice for statistical computing.
 * Spark itself, and Scala underneath it, are not specific to machine learning. They provide APIs supporting related tasks, like data access, ETL, and integration. As with Python, the entire data science pipeline can be implemented within this paradigm, not just the model fitting and analysis.
 * Code that is implemented in the REPL environment can be used mostly as-is in an operational context.
 * Data operations are transparently distributed across the cluster, even as you type. 
 
 ## For more information, <a href=https://github.com/apache/spark>visit the Spark Github page</a>
