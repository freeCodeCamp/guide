---
title: Docker
---

## Docker

Docker is a computer program that performs operating-system-level virtualization, also known as "containerization".

Docker is a platform for developers and sysadmins to develop, deploy, and run applications with containers. The use of Linux containers to deploy applications is called containerization. Containers are not new, but their use for easily deploying applications is.

Containerization is increasingly popular because containers are:

- Flexible: Even the most complex applications can be containerized.
- Lightweight: Containers leverage and share the host kernel.
- Interchangeable: You can deploy updates and upgrades on-the-fly.
- Portable: You can build locally, deploy to the cloud, and run anywhere.
- Scalable: You can increase and automatically distribute container replicas.
- Stackable: You can stack services vertically and on-the-fly.

Installation for [Mac](https://docs.docker.com/docker-for-mac/install/)

Installation for [Windows](https://docs.docker.com/docker-for-windows/install/)

Installation for [Ubuntu](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

_All thoses links are for Docker CE (Community Edition)_

---

## Test Docker Version

For testing if the application went well, run :

```
docker --version
```

Ensure that you have an output which looks like this :

```
Docker version 18.06.1-ce, build e68fc7a
```

---

## Test Docker Installation

Test that your installation works by running the simple Docker image, hello-world :

```
docker run hello-world

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
ca4f61b1923c: Pull complete
Digest: sha256:ca0eeb6fb05351dfc8759c20733c91def84cb8007aa89a5bf606bc8b315b9fc7
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.
...
```
