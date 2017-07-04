---
title: How to set up the metasfresh stack using docker?
layout: default
tags:
  - Docker
  - Installing
lang: en
sequence: 10
ref: How_do_I_setup_the_metasfresh_stack_using_Docker
---

## Overview

This manual describes the installation of the following services according to this [overview:](howto_collection\EN\metasfresh_architecture.md)
* DB
* App
* API
* WebUI
* Search


## Hardware Requirements

|     | Minimum      | recommended
| :------------- | :------------- |
| RAM | 3 GB       | 4 GB
| CPU | 1 VCPU | 4 VCPU
| HDD | 10 GB | 20 GB


## Installation with Docker

### Install Docker and Docker Compose
1. [Install Docker](https://docs.docker.com/engine/installation/linux/ubuntu/)
1. [Install Docker Compose](https://docs.docker.com/compose/install/)


### Install metasfresh

1. Clone the docker compose file  

 `git clone https://github.com/metasfresh/metasfresh-docker.git`

1. Replace "MYDOCKERHOST:PORT" with an externally available hostname of Dockerhost

 `vi ./metasfresh-docker/webui/sources/configs/config.js`

 > Hint: PORT is only necessary if 80 is not used.

1. Build Docker project

 `docker-compose build`

1. Start Docker project

 `docker-compose up -d`

 > Hint: On first start it may take a few minutes until the database is populated and the service is available


## Access

After successful installation you can access the WebUI via:

http://MYDOCKERHOST

or

http://MYDOCKERHOST:PORT (if the default port is not 80)


## Docker container visualization

See [forum post](https://forum.metasfresh.org/t/docker-gui-recommendation) about the topic which recommends two widely used tools.

## Feedback

If you got questions or problems, feel free to ask for support in the public forum: [forum.metasfresh.org](http://forum.metasfresh.org)
