---
title: How to setup the metasfresh stack using docker ?
layout: default
tags:
  - System Administration
  - Installation
  - Docker
lang: en
---

## Installation using Docker

**System Requirements:** Linux Host

**Hardware Requirements:**
* min. 3 GB free RAM
* min. 10 GB free disk space


**Purpose:** This installation is meant for evaluating the new webinterface of metasfresh.


**Installation:**
1. [Install Docker](https://docs.docker.com/engine/installation/)
1. [Install Docker Compose](https://docs.docker.com/compose/install/)
1. Install metasfresh :

```bash
git clone https://github.com/metasfresh/metasfresh-docker.git

#Use an editor to uncomment and replace "http://example.com:8080" with externally
#reachable hostname and port of the Dockerhost
#eg: 'http://myhost.provider.com'
vi ./metasfresh-docker/docker-compose.yml
#uncomment following lines and replace URL with your server's reachable URL:
#  #environment:
#    #- WEBAPI_URL=http://example.com:8080

cd metasfresh-docker
docker-compose build

#Use '-d' to run the stack in the background. On first start it may take
#a few minutes until the database is populated and the service is available
docker-compose up -d
```

## Access

After successful installation you can access the WebUI via:

http://MYDOCKERHOST:PORT/


## Feedback

If you got questions or problems just ask for support in the public forum: [forum.metasfresh.org](http://forum.metasfresh.org)
