---
title: How do I run metasfresh-docker with SSL?
layout: default
tags:  
  - Docker
  - Setup
lang: de
---

## Installing SSL certificates
1. If you're doing a new installation, follow [this guide](http://docs.metasfresh.org/installation_collection/EN/How_do_I_setup_metasfresh_docker_with_ssl.html) but don't `docker-compose build` yet. Then, proceed with `Step 4` of this guide.
1. Stop your metasfresh-docker containers if they are already running
1. Remove your existing docker-images
1. Generate or aquire your SSL certificates
1. Place your fullchain pem-file and your private key pem-file as `fullchain.pem` and `privkey.pem` in `./metasfresh-docker/webui/sources/certs/`
1. Modify your `./metasfresh-docker/webui/sources/configs/config.js` to reflect the new port and URL (eg. `https` instead of `http`)
1. Rebuild your metasfresh-docker images and start the containers
1. Access your SSL metasfresh-webui interface on Port `443/TCP` (default)


## Example

```bash
cd metasfresh-docker
docker-compose stop
docker-compose rm -f
cp /my/cert-storage/myfullchain.pem ./webui/sources/certs/fullchain.pem
cp /my/cert-storage/myprivatekey.pem ./webui/sources/certs/privkey.pem
vi ./webui/sources/configs/config.js #change to "https"
docker-compose build
docker-compose up -d
```
