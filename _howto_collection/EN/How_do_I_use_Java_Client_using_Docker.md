---
title: How do I use the Java Client using Docker ?
layout: default
tags:
  - Installation
lang: en
---

## Requirements

[Install metasfresh on Docker](How_do_I_setup_the_metasfresh_stack_using_Docker)

## adapt Docker-Compose.yml

expose these ports additionally:

1. db: 5432
1. app: 8282 and 61616 

## Example

```
db:
  build: db
  ports:
    - "5432:5432"
  restart: always
  volumes:
    - ./volumes/db/data:/var/lib/postgresql/data
    - ./volumes/db/log:/var/log/postgresql
    - /etc/localtime:/etc/localtime:ro
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
  ports:
    - "8282:8282"
    - "61616:61616"
  restart: always
  volumes:
    - ./volumes/app/log:/opt/metasfresh/log:rw
    - /etc/localtime:/etc/localtime:ro
  environment:
    - METASFRESH_HOME=/opt/metasfresh
webapi:
  build: webapi
  links:
    - app:app
    - db:db
  restart: always
  volumes:
    - ./volumes/webapi/log:/opt/metasfresh-webui-api/log:rw
    - /etc/localtime:/etc/localtime:ro
webui:
  build: webui
  links:
    - webapi:webapi
  ports:
    - "80:80"
  restart: always

```

## Access

add "db" as hostname to your local host file and point it to the IP of your dockerhost

Now install and use the Java client as usual

## Feedback

If you got questions or problems just ask for support in the public forum: [forum.metasfresh.org](http://forum.metasfresh.org)
