---
title: Scalability Cube
---
## Scalability Cube

The book, The Art of Scalability<sup>1</sup>, describes a really useful, three dimension scalability model: the scale cube.

![The Scale Cude](http://microservices.io/i/DecomposingApplications.021.jpg)


X-axis scaling
scaling an application by running clones behind a load balancer is known as X-axis scaling. Each clone handles a part of the load based on the load balancing algorithm. Disadvantages of X-axis scaling is that each clone accesses all of the data requiring more demand for cahce memory. Suitable only for small monolith applications.

Y-axis scaling
The microservice architecture is an application of Y-axis scaling where in each service is responsible for one or more closely related functions. 

Z-axis scaling
Z-axis scaling is commonly used to scale databases. Data is sharded or partitioned across a set of servers based on an attribute of each record. It is similar to X-axis scaling. with a big difference that each server is responsible for only a subset of the data.

### Sources
[The Art of Scalability](http://theartofscalability.com/)

[Microservices.io](http://microservices.io/articles/scalecube.html)

