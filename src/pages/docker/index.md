---
title: Docker 
---

## Docker

Docker is an open platform to build, ship, and run distributed applications. It is written in Go. It was first released in 2013 and is developed by Docker, Inc.

Docker is used to run packages called "containers". Containers are isolated from each others and from the OS.

Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package.

![alt docker structure](https://cdn-images-1.medium.com/max/800/1*EM4xjGX5K1BLXa7919pcEA.png)

Installation

    Ubuntu: sudo apt install docker

    Windows / macOS: Download

### Why Docker?

Docker containers are to API deployments as shipping containers are to globalization. They pack your app into a standardized box that can be predictably deployed, scaled, and monitored.

In effect, you can spin up a Dockerized app with as little as a single command, both in production and in dev. In dev, it provides an easy, consistent, environment to share between teammates. 

In production, it makes consistent deployments as simple as flipping a switch (and, thus, much less error-prone).

Thus, effectively solving the problem of "it worked fine on my computer"

### What is Docker???

The Docker daemon is a service that runs on your host operating system. It currently only runs on Linux because it depends on a number of Linux kernel features, but there are a few ways to run Docker on MacOS and Windows too. The Docker daemon itself exposes a REST API which we can use to setup containers.

Docker container is an open source software development platform. Its main benefit is to package applications in “containers,” allowing them to be portable among any system running the Linux operating system (OS).

Docker Hub is a cloud-based registry service which allows you to link to code repositories, build your images and test them, stores manually pushed images, and links to Docker Cloud so you can deploy images to your hosts.


### What are Containers?

Containers and VMs are similar in their goals: to isolate an application and its dependencies into a self-contained unit that can run anywhere.

Moreover, containers and VMs remove the need for physical hardware, allowing for more efficient use of computing resources, both in terms of energy consumption and cost effectiveness.

The main difference between containers and VMs is in their architectural approach. 

Containers do not use as many resources as an VM, thus they can be operated in more number.


### What are Images?

Docker uses things called images to run in containers, these are called images. They basically are a set of instructions that Docker can follow. There are images for Ubuntu, node.js and many others in the docker cloud which we can download and load containers with.

This in turn let's us use multiple versions of the same software like I can have a node version 6 and node version 10 running in different containers in the same computer.

### Learning Resources

[Docker Mastery:The Complete Toolset From a Docker Captain](https://www.udemy.com/docker-mastery/?siteID=jU79Zysihs4-cbNu7_W3WfiTdkEAFKMTzA&LSNPUBID=jU79Zysihs4)
[Learn Docker in 12 Minutes](https://www.youtube.com/watch?v=YFl2mCHdv24)
[Docker Crash Course for busy DevOps and Developers ](https://www.udemy.com/docker-tutorial-for-devops-run-docker-containers/?siteID=jU79Zysihs4-yZGvjTfm1nGIXXb8jxo6og&LSNPUBID=jU79Zysihs4)
[Docker Series — Starting your first container](https://medium.com/pintail-labs/docker-series-starting-your-first-container-92dfd1dc859)

### More Information:

For download and documentation check the docker official site: [Docker official site](https://www.docker.com) 
