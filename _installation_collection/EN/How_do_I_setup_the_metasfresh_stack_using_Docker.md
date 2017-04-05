---
title: How to setup the metasfresh stack using docker ?
layout: default
tags:
  - Docker
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
1. [Install Docker](https://docs.docker.com/engine/installation/)
1. [Install Docker Compose](https://docs.docker.com/compose/install/)
1. Install metasfresh :

```bash
git clone https://github.com/metasfresh/metasfresh-docker.git

#Use an editor to replace "MYDOCKERHOST:PORT" with externally reachable hostname
#and port of the Dockerhost - eg: 'http://myhost.provider.com/rest/api'
vi ./metasfresh-docker/webui/sources/configs/config.js

cd metasfresh-docker
docker-compose build

#Use '-d' to run the stack in the background. On first start it may take
#a few minutes until the database is populated and the service is available
docker-compose up -d
```

## Access

After successful installation you can access the WebUI via:

http://MYDOCKERHOST:PORT/
(or http://localhost if you've installed on a local dev machine)

## Note

If you don't know with what to replace MYDOCKERHOST:PORT in the config.js file, just skip this point and run 'docker-compose build' followed by 'docker-compose up -d' first and then do the following:

```
#list the docker network config in order to find the ip address of the webapi docker container
docker network inspect bridge

#get the webapi docker container id
docker ps

#get a terminal to the docker container
docker exec -it <container id> /bin/bash

#change to the interesting directory
cd /opt/metasfresh-webui-frontend/dist

#backup the config.js or not, up to you
cp config.js config.jsBAK

#display the content of the config.js, you must have the same structure in the next step
cat config.js

#no vi available! use cat to overwrite the file and save the file with CTRL+d:
cat > config.js

#write your own config with the ip address you got before and use default port 8080

#open metasfresh webui your browser (http://localhost if you did not change anything else) and you should the login screen instead of a blank window and errors in your browser console (you maybe have to clean your browser cache first)
```

## Feedback

If you got questions or problems just ask for support in the public forum: [forum.metasfresh.org](http://forum.metasfresh.org)
