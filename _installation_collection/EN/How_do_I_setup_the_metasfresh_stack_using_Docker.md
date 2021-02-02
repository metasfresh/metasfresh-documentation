---
title: How to set up the metasfresh stack using Docker?
layout: default
tags:
  - Docker
  - Installation
lang: en
sequence: 10
ref: How_do_I_setup_the_metasfresh_stack_using_Docker
---

## Overview
This manual describes the installation of the following services according to [this overview](../../howto_collection/EN/metasfresh_architecture):
- DB
- App
- API
- WebUI
- Search

## Hardware Requirements

|  | Minimum | Recommended |
| :--- | :--- | :--- |
| RAM | 4 GB | 8 GB (increases with db size) |
| CPU | 1 VCPU | 4 VCPU |
| HDD | 10 GB | 20 GB |

## Installation with Docker

### Install Docker and Docker Compose
1. [Install Docker](https://docs.docker.com/engine/installation/linux/ubuntu/).
1. [Install Docker Compose](https://docs.docker.com/compose/install/).

### Install metasfresh
1. Clone the Docker Compose file and go to the newly created directory.

   ```
   git clone https://github.com/metasfresh/metasfresh-docker.git
   cd metasfresh-docker/
   ```

1. Comment out and replace `http://example.com:8080` with an externally available hostname and port of the docker host.

   `vi ./metasfresh-docker/docker-compose.yml`
   ```
   ...
   #environment:
    #- WEBAPI_URL=http://example.com:8080
   ...
   ```
   >**Note:** Port `:8080` is only necessary if another port should be used as port 80. <br> See also: [How do I change the WebUI ports for metasfresh-Docker?](How_do_I_change_the_webui_ports_for_metasfresh_docker)

   >***IMPORTANT:*** If you are using an RPM-based distribution and/or the file `/etc/timezone` is not available on your Docker host, comment out or remove the line `- /etc/timezone:/etc/timezone:ro` from your `docker-compose.yml` file!

1. Build the Docker container.

   `docker-compose build`

1. Start the Docker container.

   `docker-compose up -d`
   >**Note:** The first time you start the container, it may take a few minutes until the database is populated and the service is available.

1. ***Optional:*** Stop the Docker container.

   `docker-compose down`

## Access
After the successful installation you can access the WebUI via:

http://MYDOCKERHOST

or

http://MYDOCKERHOST:PORT (if the default port is not 80).

## Example docker-compose.yml
```yml
db:
  build: db
  restart: always
  volumes:
    - ./volumes/db/data:/var/lib/postgresql/data
    - ./volumes/db/log:/var/log/postgresql
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
  environment:
    - METASFRESH_USERNAME=metasfresh
    - METASFRESH_PASSWORD=metasfresh
    - METASFRESH_DBNAME=metasfresh
    - DB_SYSPASS=System
app:
  build: app
  hostname: app
  links:
    - db:db
    - search:search
  expose:
    - "8282"
    - "61616"
  restart: always
  volumes:
    - ./volumes/app/log:/opt/metasfresh/log:rw
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
  environment:
    - METASFRESH_HOME=/opt/metasfresh
webapi:
  build: webapi
  links:
    - app:app
    - db:db
    - search:search
  #for accessing the api directly (eg. for debugging or connecting your
  #app to the metasfresh api) uncomment following lines:
  #ports:
    #- "8080:8080"
  restart: always
  volumes:
    - ./volumes/webapi/log:/opt/metasfresh-webui-api/log:rw
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
webui:
  build: webui
  links:
    - webapi:webapi
  ports:
    - "80:80"
    - "443:443"
  restart: always
  volumes:
    - /etc/localtime:/etc/localtime:ro
    - /etc/timezone:/etc/timezone:ro
  #uncomment and set to URL where metasfresh will be available from browsers
  environment:
    - WEBAPI_URL=http://myserver.com
    search:
      build: search
      ulimits:
        memlock:
          soft: -1
          hard: -1
        nofile:
          soft: 65536
          hard: 65536
      cap_add:
        - IPC_LOCK
      volumes:
        - ./volumes/search/data:/usr/share/elasticsearch/data
        - /etc/localtime:/etc/localtime:ro
        - /etc/timezone:/etc/timezone:ro
      environment:
        - "ES_JAVA_OPTS=-Xms128M -Xmx256m"
      restart: always
```

## Docker Container Visualization
See this [forum post](https://forum.metasfresh.org/t/docker-gui-recommendation) about this topic for recommendations on two widely used tools.

## Feedback
If you have any questions or problems, feel free to ask for support in our official public forum: [forum.metasfresh.org](http://forum.metasfresh.org).
