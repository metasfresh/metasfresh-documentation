---
title: How to setup the metasfresh stack using docker ?
layout: default
tags:
  - Docker
  - Installing
lang: en
sequence: 10
---

## Installation using Docker

**System Requirements:** Linux Host

**Hardware Requirements:**
* min. 3 GB free RAM
* min. 10 GB free disk space

**Purpose:** This installation is meant for evaluating the new webinterface of metasfresh.

**Installation:**
1. Have a Hostname (e.g. MYDOCKERHOST) you can resolve both on server and client
1. [Install Docker](https://docs.docker.com/engine/installation/)
1. [Install Docker Compose](https://docs.docker.com/compose/install/)
1. Install metasfresh:

```bash
git clone https://github.com/metasfresh/metasfresh-docker.git

#Use an editor to replace "MYDOCKERHOST:PORT" with externally reachable hostname
#of the Dockerhost which supports access to the WebUI
#(provide PORT if WebUI does not use the default port 80)

vi ./metasfresh-docker/webui/sources/configs/config.js

cd metasfresh-docker
docker-compose build

#Use '-d' to run the stack in the background. On first start it may take
#a few minutes until the database is populated and the service is available
docker-compose up -d
```

## Access

After successful installation you can access the WebUI via:

http://MYDOCKERHOST:PORT or

http://MYDOCKERHOST
(if the default port 80 is used with the WebUI, which is often the case)

## Docker container visualization

Feel free to use one of the following GUI tools to visualize your docker containers:
* http://portainer.io/
* https://kitematic.com/

## Feedback

If you got questions or problems just ask for support in the public forum: [forum.metasfresh.org](http://forum.metasfresh.org)
