---
title: Wie aktualisiere ich die Java Version auf meinem Server ?
layout: default
tags:
  - Systemadministration
lang: de
---

## OpenJDK-8-JDK on Ubuntu Server 12.04 / 14.04


```
sudo service metasfresh_server stop
sudo apt-get autoremove openjdk-7*
sudo apt-get update
sudo apt-get install python-software-properties software-properties-common
sudo add-apt-repository ppa:openjdk-r/ppa
sudo apt-get update
sudo apt-get install openjdk-8-jdk-headless
-------------------------------------------
Einzeiler:
sudo service metasfresh_server stop && sudo apt-get autoremove openjdk-7* && sudo apt-get update && sudo apt-get -y install python-software-properties software-properties-common && sudo add-apt-repository -y ppa:openjdk-r/ppa && sudo apt-get update && sudo apt-get -y install openjdk-8-jdk-headless
```
Dieser Befehl entfernt das derzeit installierte OpenJDK-7 und installiert OpenJDK-8.
Es wird automatisch ein neuer Link auf "/usr/bin/java" erstellt.
Der Service "metasfresh_server" greift auf diese Binär-Datei direkt zu.

