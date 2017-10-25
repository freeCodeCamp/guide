---
title: Spark
---
## Spark

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/data-science-tools/spark/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

![](https://spark.apache.org/images/spark-logo-trademark.png "Spark")

Apache Spark™ is a fast and general engine for large-scale data processing. Spark run programs up to 100x faster than Hadoop MapReduce in memory, or 10x faster on disk. It provides an interface for programming entire clusters with implicit data parallelism and fault-tolerance.

![Spark Stack](https://spark.apache.org/images/spark-stack.png "spark stack")


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://spark.apache.org/docs/latest/quick-start.html

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
