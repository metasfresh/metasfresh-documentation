---
title: How do I use the Java Client using Docker?
layout: default
tags:
  - Docker
  - Setup
lang: en
ref: how_do_i_use_java_client_using_docker
---

## Requirements

[Install metasfresh on Docker](How_do_I_setup_the_metasfresh_stack_using_Docker).

## Use the docker-compose_javaclient.yml

These additional ports are needed in order to use the java client:

1. db: 5432 (Access to Postgres via JDBC)
1. app: 8282 (Web for downloading java client)
1. app: 61616 (activeMQ for Notifications)

They are exposed to the docker host in the **docker-compose_javaclient.yml** file. According to this, these ports should not be in use by other programs on the docker host, otherwise the docker image will not boot.

By using `docker-compose --file` you can control, which configuration file should be used instead of the default file called **docker-compose.yml** (e.g. docker-compose_javaclient.yml).

## Example

```bash
# change to the docker dir
cd metasfresh-docker

# check if metasfresh-docker still running
docker-compose ps

# if metasfresh-docker is still running, stop it and remove the images
docker-compose stop

# start metasfresh-docker with access to the java client
docker-compose --file docker-compose_javaclient.yml up -d

# check if all docker images were booted correctly
docker-compose ps

# all images must show the status "Up"
```

## Access
Make sure that your computer can resolve the dockerhost by a DNS name (e.g. MYDOCKERHOST). For example, by adding the server name with the IP of the dockerhost to your local host file.

Additionally, your computer must be able to reach the database directly. Add the hostname `db` to your local host file and set it to the IP address of your dockerhost.

Now download the java client via http://MYDOCKERHOST:8282, install and use it as usual.

## Feedback
If you have any questions or problems, feel free to ask for support in our official public forum: [forum.metasfresh.org](http://forum.metasfresh.org).
