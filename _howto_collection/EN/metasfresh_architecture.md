---
title: metasfresh Architecture
layout: default
tags:
  - System Administration
lang: en
---
## Overview

![architecture](../../images/metasfresh_architecture.png)

## Service Details

| Service     | Dev Language     | Running on | Technologies | Repo
| :------------- | :------------- | :------------- | :------------- |  :------------- |
| WebUI        | Javascript        | Apache / Nginx | React Redux, HTML5, PostCSS | [Github](https://github.com/metasfresh/metasfresh-webui-frontend)
| WebAPI        | Java 8      | Spring Boot |REST, JSON, Swagger, Spring, hazelcast, websocket| [Github](https://github.com/metasfresh/metasfresh-webui)
| App Server        | Java 8, SQL       | Spring Boot | Jasper Reports, Application Dictionary| [Github](https://github.com/metasfresh/metasfresh)
| DB         | SQL, PgSQL       | Postgres (9.5+) | Application Dictionary | [Github](https://github.com/metasfresh/metasfresh)
| Java Client| Java 8 | Java JRE 8+ | Swing | [Github](https://github.com/metasfresh/metasfresh)
