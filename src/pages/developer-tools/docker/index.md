---
title: Docker
---
[logo]: https://www.docker.com/sites/default/files/Whale%20Logo332_5.png "Docker"

Docker is an open-source software aimed at facilitating application deployment. It offers the possibility to build containers, including an operating system, libraries and all you need to run your application. Therefore, your application can then be deployed on any machine. Its lightweight structure enables you to run several containers on the same machine. A container image is a lightwieght, stand-alone, execuateble package of a piece of software that includes everything need to run it.

Docker is available for both Windows and Linux environment. Docker container running on a single machine share that machine's oprating system kernel. Docker container isolates applications from one another. Similar to Github, DockerHub offers a wide variety of images (Ubuntu and others), on which containers are built.

### Container Vs. Virtual Machines

* Container virtualises the Operating System and more portable, where as VMs virtualises the Hardware. 

* Container are an abstraction at the app layer that packages code and dependencies togehter. VMs are an abstraction of physical hardware turning one server into many. Hypervisor helps VM to do so.

* [CONTAINERS ARE NOT VMS](https://blog.docker.com/2016/03/containers-are-not-vms/)


### Installation of Docker

Docker is available in two editions: Community Edition (CE) and Enterprise Edition (EE).

[Install it from here](https://docs.docker.com/engine/installation/)

Once installed try this

```
$ docker run hello-world

Hello from Docker!
```
This message shows that your installation appears to be working correctly.


### Where to use Docker

* [8 Proven Real-World Ways to Use Docker](https://www.airpair.com/docker/posts/8-proven-real-world-ways-to-use-docker)

* [What is Docker and When to Use It](https://www.ctl.io/developers/blog/post/what-is-docker-and-when-to-use-it/)

### Docker Tutorials

* [Documentation](https://docs.docker.com/get-started/)

* [Docker for beginners](https://docker-curriculum.com/)

* [Docker Tutorials and Courses](https://hackr.io/tutorials/learn-docker)

* [Docker Training. Learn Docker From Docker. Official Docker Training.](https://training.docker.com/)


#### More Information:
You can find plenty of informations in the following sites : 
- <a href='https://www.docker.com/' target='_blank' rel='nofollow'>Docker website</a>
- <a href='https://docs.docker.com/' target='_blank' rel='nofollow'>Docker docs</a>
- <a href='https://hub.docker.com/' target='_blank' rel='nofollow'>DockerHub</a>


