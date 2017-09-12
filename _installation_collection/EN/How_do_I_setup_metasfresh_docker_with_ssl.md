---
title: How do I run metasfresh-docker with SSL?
layout: default
tags:  
  - Docker
  - Setup
lang: en
ref: how_do_i_setup_metasfresh_docker_with_ssl
---

## Installing SSL certificates
1. If you are doing a new installation, follow [this guide](How_do_I_setup_the_metasfresh_stack_using_Docker) but do not `docker-compose build` yet. Instead, proceed with `Step 4` of this guide.
1. Stop your metasfresh-docker containers if they are already running.
1. Remove your existing docker-images.
1. Generate or acquire your SSL certificates.
1. Place your Fullchain .pem-file and your Private Key .pem-file as `fullchain.pem` and `privkey.pem` in `./metasfresh-docker/webui/sources/certs/`.
1. Modify your `./metasfresh-docker/docker-compose.yml` to reflect the new port and URL (e.g. `https` instead of `http`).
1. Rebuild your metasfresh-docker images and start the containers.
1. Access your SSL metasfresh-WebUI interface on port `443/TCP` (default).


## Example

```bash
cd metasfresh-docker
docker-compose stop
docker-compose rm -f
cp /my/cert-storage/myfullchain.pem ./webui/sources/certs/fullchain.pem
cp /my/cert-storage/myprivatekey.pem ./webui/sources/certs/privkey.pem
vi ./docker-compose.yml #change to "https"
docker-compose build
docker-compose up -d
```
