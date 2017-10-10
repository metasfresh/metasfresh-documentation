---
title: How do I change the hostname (URL) of metasfresh WebUI?
layout: default
tags:
  - Installation Package
  - Setup
lang: en
ref: installer_how_to_change_hostnames_for_webui
---

## Overview
If you want to change the URL of the metasfresh WebUI so clients need not use the IP address but instead can use a DNS entry of your choice, you will need to change the `config.js` on your server.

## Steps
1. Login to your server's terminal (shell) as user `metasfresh`.
1. Browse to the directory: `/opt/metasfresh-webui-frontend/dist/`.
1. Modify the file `./config.js` and replace the current URL entries with the hostname of your choice.
1. Make sure you are able to connect to your server using the URL you set in the js-file.

## Example
Assuming your server's hostname is `myerpserver` and you want your clients to use `http://myerpserver.domain.com` in order to connect to the WebUI:

```bash
user@myerpserver:~$ sudo su metasfresh
metasfresh@myerpserver:~$ cd /opt/metasfresh-webui-frontend/dist
metasfresh@myerpserver:~$ vi ./config.js
#replace http://XXX.YYY.ZZZ.AAA/rest/api with http://myerpserver.domain.com/rest/api
#replace http://XXX.YYY.ZZZ.AAA/stomp with http://myerpserver.domain.com/stomp
#where "XXX.YYY.ZZZ.AAA" should be the IP of your server
#save and exit
```
Open your browser and enter the URL `http://myerpserver.domain.com`. You should now be able to access your server's WebUI as usual.
