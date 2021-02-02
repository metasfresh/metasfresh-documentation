---
title: How do I reset the database using docker?
layout: default
tags:  
  - Docker
  - Maintenance
lang: en
ref: how_do_I_reset_database_using_docker
---
## Overview

Sometimes when you run into a dead end with your test environment you may want to start from scratch. This shows you how to do it.

>**BEWARE**: ALL DATA IS LOST if you do not [backup](How_do_I_backup_metasfresh_docker)!

## Reset Database

```
docker-compose down
rm -rf ./volumes/db 
docker-compose build
docker-compose up -d
```
