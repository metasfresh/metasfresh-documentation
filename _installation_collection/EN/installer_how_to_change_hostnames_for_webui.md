---
title: How do I change the hostname (URL) of metasfresh webui?
layout: default
tags:
  - Installer Package
  - Setup
lang: en
---

## Change the URL of metasfresh webui
If you want to change the URL of the metasfresh webui so clients won't need to use the IP address but instead can use a DNS-Entry of your choice, you will need to change the `config.js` on your server:
1. login to your server's terminal (shell) as user `metasfresh`
1. browse to the directory: `/opt/metasfresh-webui-frontend/dist/`
1. modify the file `./config.js` and replace the current URL-Entries with the hostname of your choice
1. make sure you're able to connect to your server using the URL you set in the js-file

## Example
Assuming your server's hostname is `myerpserver` and you want your clients to use `http://myerpserver.domain.com` in order to connect to the webui.

```bash
user@myerpserver:~$ sudo su metasfresh
metasfresh@myerpserver:~$ cd /opt/metasfresh-webui-frontend/dist
metasfresh@myerpserver:~$ vi ./config.js
#replace http://XXX.YYY.ZZZ.AAA/rest/api with http://myerpserver.domain.com/rest/api
#replace http://XXX.YYY.ZZZ.AAA/stomp with http://myerpserver.domain.com/stomp
#where "XXX.YYY.ZZZ.AAA" should be the IP of your server
#save and exit
```
Open your browser and enter the URL: `http://myerpserver.domain.com`
