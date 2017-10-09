---
title: How do I reset the database using docker?
layout: default
tags:  
  - Docker
  - Maintenance
lang: en
---
## Overview

Sometimes when you ran into a dead end with your test environment you may want to start from scratch. This shows you how to do it.

**BEWARE**: ALL DATA IS LOST if you do not [Backup!](How_do_I_backup_metasfresh_docker)

## Steps

```
docker-compose stop
docker rm <name of your db container>
rm -r volumes/db
docker-compose up -d
```
