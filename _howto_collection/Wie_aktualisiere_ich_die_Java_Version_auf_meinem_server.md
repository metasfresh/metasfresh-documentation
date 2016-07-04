---
title: Wie aktualisiere ich die Java Version auf meinem Server ?
layout: default
tags:
  - Serveradministration
lang: de
---

## OpenJDK-8-JDK on Ubuntu 14.04
So aktualisierst Du Java auf einem Ubuntu 14.04:

```
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-8-jdk-headless
```

It will automatically create links to "/usr/bin/java" (link to /etc/alternatives/java -> link to /usr/lib/jvm/openjdk-8-jdk/bin/java). 
So metasfresh_server using spring-boot will automatically pick the most recently installed java (openjdk-8 in this case)

