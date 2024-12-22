---
layout: ../../layouts/post.astro
title: Docker and Docker Compose
description: This article introduces you to Docker and Docker Compose. It provides an overview of what...
dateFormatted: June 2nd, 2024
---

![image.png](../../../public/assets/images/post/docker/title.avif)
*Photo by Ian Taylor on Unsplash*


## Introduction

This article introduces you to **Docker** and **Docker Compose**. It provides an overview of what a **Dockerfile** is, and how to use Docker Compose to run multiple containers together. At the end, the article provides a example Dockerfile using a Node.js application.

## Docker

> "Docker is a set of platform as a service products that use OS-level virtualization to deliver software in packages called containers." (from Wikipedia)

The above definition probably confused more than enlighten you! But we can use that definition to understand what Docker is. The first keyword to look at is **"to deliver software in packages"** - this gives an idea of what Docker's primary purpose is. Docker was built as a way to enable developers to easily package their software projects and distribute this software to either other developers or to deploy the software for customers to use. The second keyword is **"OS-level virtualization"** - Docker is a virtualization runtime which enables software that is packaged (called **"containers"**) to run on any operating system. This means you can develop your project in Windows, and have your friend who uses MacOS run it without having to worry about dependencies and OS-level differences. The final keyword is **"platform as a service products"** - Docker is just one platform that provides you the ability to create and run containers. But this platform comes with a host of additional features like the container "marketplace" called **Docker Hub**.

Docker uses a **Dockerfile** to build an **Image**. This **Image** can be run using the **Docker Engine** as a **Container**.

![image.png](../../../public/assets/images/post/docker/1.png)

## Dockerfile

A **Dockerfile** is the "plan" or "instructions" that Docker uses to build your image. Let us take a look at an example Dockerfile:

```bash
# Use official Node.js image as base
FROM node:20

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if present) to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Compile TypeScript to JavaScript
RUN npm run build

# Expose the port for the server
EXPOSE 5000

# Start the server
CMD ["node", "./dist/index.js"]
```

* `FROM`: Tells Docker which base image to use. In this case it is using Node.js v20 which will be pulled from Docker Hub.
    
* `WORKDIR`: Tells Docker to use the specified directory to build and run the code (called working directory). In this case it is `/app`.
    
* `COPY`: Tells Docker what files to copy from your project code to the working directory.
    
* `RUN`: Tells Docker what commands to run. In this file, we use the run command to install dependencies and build the project.
    
* `EXPOSE`: Tells Docker what port to expose the container so that we can interact with the container. In this case, we are using port 5000.
    
* `CMD`: Tells Docker what command to run to start the server/application.
    

Dockerfiles differ from language to language (Java, Go etc.) and need to be customized as per your requirements.

> If you use a Dockerfile from any online reference (human or AI generated), please make sure you change the working directory/what files to copy/commands to run etc. as per your use case and project.

## Docker Compose

Most applications depend on another service like a database, or maybe consist of multiple services running together (a frontend, a server, and a database).

**Docker Compose** is an another file which lets you build and run containers which contain multiple images. These images might be ones you have created using a Dockerfile or an image which is available on the Docker Hub marketplace.

Let us take a look at an example docker-compose.yml file:

```bash
version: '3.8'

services:
  mongo:
    image: mongo:latest
    container_name: mongo
    ports:
      - '27017:27017'
    volumes:
      - mongo-data:/data/db

  server:
    build:
      context: ./
      dockerfile: Dockerfile
    container_name: server
    ports:
      - '5000:5000'
    depends_on:
      - mongo
    environment:
      MONGODB_URI: mongodb://mongo:27017/your_database_name
      SERVER_PORT: 5000

volumes:
  mongo-data:
```

In this file we are defining two "services":

1. `mongo`: For the MongoDB database. There is also a volume called `mongo-data` used to store the database data.
    
2. `server`: For the Node.js express server. The `dockerfile` field indicates that Docker Compose will use the source Dockerfile to build the image and create the container.
    

Because of the `depends_on` configuration in the `server` definition, Docker will first start the `mongo` service, and then start the `server` service.

## Example

If you want see an example on using Docker and Docker Compose, you can go to: [https://github.com/anikeshk/ci-books](https://github.com/anikeshk/ci-books)

This sample project is a Node.js express server which uses MongoDB as the database. The Docker Compose file will run the database first, and then the server. Instructions on how to run and test the project are present in the `README.md`.

## References

<iframe width="560" height="315" src="https://www.youtube.com/embed/gAkwW2tuIqE?si=KuQUpBmTwYCF6zf5"></iframe>