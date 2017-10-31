---
title: Docker
---
## Docker

The Docker project (backed by Docker inc.) contains a lot of tools. The Docker Community Edition has 2 main components: the engine and the client. You can install both of them on your computer (Linux/macOS/Windows). The engine will run the _containers_ which are isolated processes in your OS. You can command the engine through the client.

### Benefits

Why do you need containers? A container is working like a tiny virtual machine. Although every running container is using the same core components of your OS (e.g. the kernel), these containers have a separate runtime. Would you like to test 3 different versions of a web server or a database? Not a problem, you can do this in 3 minutes, without making a mess on your system.

### Images

The base of the container is the image. An image is a small, complete environment which contains an application with its dependencies (configs, tools, libraries). You simply says `docker run -d -p 9200:9200 elasticsearch` and the engine will goes to DockerHub (the biggest registry of docker images) and download the latest version of the official Elasticsearch (ES) image. Also it will start a container in the background.

Congratulations! Now you can push some data into ES:
`curl -XPOST localhost:9200/whatever/message/0 -d '{"message": "Hello Docker!"}'`
and test the result:
`curl -XGET localhost:9200/whatever/message/0`

When you finished your tests with ES, you can easy clean up everything with:
`docker image rm -f elasticsearch`

It was really simple for you, although in the background Docker handles resources, networking, storage, control groups, etc.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Install guides: https://www.docker.com/community-edition
Browse for images: https://hub.docker.com/
