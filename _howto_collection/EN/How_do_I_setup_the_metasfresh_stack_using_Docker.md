---
title: How do I setup the metasfresh stack using Docker ?
layout: default
tags:
  - Systemadministration
  - Installation
lang: en
---

## Installation using Docker

*Systemrequirements:* > 3 GB RAM

*Purpose:* This installation is meant for evaluating the new WebUI of metasfresh.

1. [Install Docker](https://docs.docker.com/engine/installation/linux/ubuntu/)
1. [Install Docker Compose](https://docs.docker.com/compose/install/)
1. Install metasfresh :

```
git clone https://github.com/metasfresh/metasfresh-docker.git
vi ./metasfresh-docker/webui/sources/configs/config.js    #Replace "MYDOCKERHOST" with FQDN of the Dockerhost
cd metasfresh-docker
docker-compose build
docker-compose up -d  #to run the stack in the background.
```
 
After successful installation you may access the WebUI via:

http://MYDOCKERHOST 

