---
title: Docker
---
## Docker

Remember those trucks or lage ships loaded with containers of different colors but all same size? This was the general idea of creating Docker - make the delivery of an application to any destination (development, testing or production server, etc.) unified and easy. The idea was to standardise the "containers" with the applications, so that those containers could be then easily transfered by network and installed on a Docker-running system.

Idea of Docker is close to creating a virtual machine with the required operating system for your application, set up all the necessary libraries and services and then ship those along with the application code. All you need is setup Docker on your local machine, select the target OS image and configure required services.

The main difference from a VirtualBox or VMWare virtual machine is that you application and all services will run through you native OS libraries and your active OS kernel. Thanks to the Docker distribution packeages making it possible. Moreover, the actual "container" is just a snapshot of the memory state of that "kind-of virtual machine" (called image in Docker universe) that makes the run of your application possible. Thus the actual delivery of the new version of your application setup is lightweight and quick.

Thanks to this concept, you can have exactly the same environment (set of services and libraries, with exactly the same versions and settings) on you local development machine and on all the testing servers.

### More information
http://docker.com
