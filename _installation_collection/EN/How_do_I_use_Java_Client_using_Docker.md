---
title: How do I use the Java Client using Docker ?
layout: default
tags:
  - System Administration
  - Installation
  - Docker
  - Setup
lang: en
---

## Requirements

[Install metasfresh on Docker](How_do_I_setup_the_metasfresh_stack_using_Docker)

## Use the docker-compose_javaclient.yml

These ports are used additionally in order to use the java client:

1. db: 5432
1. app: 8282 and 61616

They are exposed to the docker host in the docker-compose_javaclient.yml file.
Accordingly these ports should not be in use by other programs on the docker host, otherwise the docker image will not boot.

By using `docker-compose --file` one can control which configuration file should be used (i.e. docker-compose_javaclient.yml).

## Example

```bash
# change to the docker dir
cd metasfresh-docker

# check if metasfresh-docker still running
docker-compose ps

# if metasfresh-docker is still running, stop it and remove the images
docker-compose down

# start metasfresh-docker with access to the java client
docker-compose --file docker-compose_javaclient.yml up -d

# check if all docker images were booted correctly
docker-compose ps
# all images must show the status "Up"
```

## Access
Assure that your computer can resolve the dockerhost by a DNS name (i.e. MYDOCKERHOST). I.e. by adding the servername with the IP of the dockerhost to your local host file.

Additionally your computer must be able to reach the database directly. Add the hostname `db` to your local host file and set it to the IP-Adress of your dockerhost

Now download the java client via
http://MYDOCKERHOST:8282
and install and use it as usual

## Feedback

If you got questions or problems just ask for support in the public forum: [forum.metasfresh.org](http://forum.metasfresh.org)
