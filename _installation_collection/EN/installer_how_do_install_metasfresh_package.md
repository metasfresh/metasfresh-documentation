---
title: How do I install metasfresh using the Installation Package?
layout: default
tags:
  - Installation Package
  - Installation
lang: en
sequence: 10
ref: installer_how_do_install_metasfresh_package
---

## Installation using the metasfresh Installation Package

**System Requirements:**
* Ubuntu 16.04 LTS (x86_64)

**Hardware Requirements:**
* min. 4 GB free RAM
* min. 10 GB free disk space

**Purpose:**
This installation aims at installing metasfresh directly on a bare-metal or a virtual machine.
If you want a more flexible installation, try using [metasfresh-docker](How_do_I_setup_the_metasfresh_stack_using_Docker).

## Installation
1. [Download](https://metasfresh.com/download/) the latest metasfresh-server installation package to your server.
1. Update your Ubuntu server source list.
```bash
user@host:~/$ sudo apt update
```
1. Check if you can resolve the hostname of your server on the server itself as well as on every client you want to use the Java Swing Client or WebUI interface from. Should this not be the case, check your DNS server or your host files.
1. Install the metasfresh-server package.
```bash
user@host:~/$ tar xvzf ./metasfresh_5_X.tar.gz
user@host:~/$ cd metasfresh_install
user@host:~/metasfresh_install$ chmod +x ./install_metasfresh.sh
user@host:~/metasfresh_install$ sudo ./install_metasfresh.sh
```

## Access

After a successful installation, the application server as well as the webapi back end start up. Wait a few minutes for the services to be completely booted up before you try accessing the service.

When the services have been initialized, you can either:
* Use `http://XXX.YYY.ZZZ.AAA:8080/` to download the Java Swing Client to your client workstations<br>

**or**

* Use `http://XXX.YYY.ZZZ.AAA/` to access metasfresh-WebUI
 >**Note:** Check out [this TO DO guide](installer_how_to_change_hostnames_for_webui) for using a hostname instead of an IP address to access the WebUI.

If you want to check the statuses of the metasfresh services, you can simply stop or restart them. To do so, you can use the following commands:
```bash
user@host:~/$ sudo systemctl start/stop/restart/status metasfresh_server.service
user@host:~/$ sudo /etc/init.d/metasfresh-webui-api start/stop/restart/status
```

The application server uses ports `8080/TCP`, `61616/TCP` and `5432/TCP` for communication with the Java Swing Clients. Please ensure access to these ports before trying to connect with the Java Client.

The metasfresh-WebUI uses port `80/TCP` by default for browser access. Make sure to allow connections in your firewall to your server if you want to use the WebUI.

## Frequently Asked Questions (FAQ)
Q: `Which software/services will be installed?`

A: Along with the metasfresh-server, the installer will download and setup [PostgreSQL-Server 9.5](https://www.postgresql.org/), [Apache2](https://httpd.apache.org/), [Elasticsearch](https://www.elastic.co/) and [OpenJDK-8 JDK](http://openjdk.java.net/projects/jdk8/).

---

Q: `Where can I find the binaries and config files for metasfresh?`

A: The binaries as well as their config files will be located in their respective directories under the main folder `/opt/`.

---

Q: `I want to check out the source code. Where am I able to find it?`

A: You can find and download the source code for all of our applications on Github: https://github.com/metasfresh.

---

Q: `Which ports are used by metasfresh?`

A:
* Port `80/TCP`(http) - WebUI
* Port `443/TCP` (https) - WebUI (optional)
* Port `8080/TCP` - Download of the Java Swing Client
* Port `61616/TCP` - Connection for the Java Client to the application-server
* Port `5432/TCP` - Connection for the Java Client to the database-server

---

Q: `When trying to connect to the server I get an error message about a non-working "DB Connection". Why does this error appear?`

A: The hostname of the Ubuntu server needs to be resolved by the server itself as well as the client workstations.<br>
**Please note**: The hostname resolved in your network needs to be identical to the one set on the server itself.
If for example the hostname of your Ubuntu server is set to "erpserver", the name needs to be pingable using "ping erpserver" in the command line interface of the server and all client workstations.


## Feedback
If you have any questions or problems that have not been mentioned here, feel free to ask for support in our official public forum: [forum.metasfresh.org](http://forum.metasfresh.org).
