---
title: How to set up the metasfresh stack using docker?
layout: default
tags:
  - Docker
  - Installation
lang: en
sequence: 10
ref: How_do_I_setup_the_metasfresh_stack_using_Docker
---

## Overview

This manual describes the installation of the following services according to this [overview](howto_collection\EN\metasfresh_architecture.md):
* DB
* App
* API
* WebUI
* Search


## Hardware Requirements

|     | Minimum      | Recommended
| :------------- | :------------- |
| RAM | 3 GB       | 4 GB
| CPU | 1 VCPU | 4 VCPU
| HDD | 10 GB | 20 GB


## Installation with Docker

### Install Docker and Docker Compose
1. [Install Docker](https://docs.docker.com/engine/installation/linux/ubuntu/).
1. [Install Docker Compose](https://docs.docker.com/compose/install/).


### Install metasfresh

1. Clone the docker compose file  .

 `git clone https://github.com/metasfresh/metasfresh-docker.git`

1. Uncomment and replace "http://example.com:8080" with an externally available hostname and port of the docker host.

 `vi ./metasfresh-docker/docker-compose.yml`
 ```
 ...
 #environment:
  #- WEBAPI_URL=http://example.com:8080
 ...
 ```
 >Note: PORT `:8080` is only necessary if 80 is not used.

1. Build Docker project.

 `docker-compose build`

1. Start Docker project.

 `docker-compose up -d`

 >Note: At the first start it may take a few minutes until the database is populated and the service is available.


## Access

After the successful installation you can access the WebUI via:

http://MYDOCKERHOST

or

http://MYDOCKERHOST:PORT (if the default port is not 80)


## Docker container visualization

See this [forum post](https://forum.metasfresh.org/t/docker-gui-recommendation) about the topic which recommends two widely used tools.

## Feedback

If you have any questions or problems, feel free to ask for support in our official public forum: [forum.metasfresh.org](http://forum.metasfresh.org).
