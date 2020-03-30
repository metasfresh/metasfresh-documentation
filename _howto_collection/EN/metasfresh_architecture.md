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

| Service | Dev Language | Running on | Technologies | Repo |
| :--- | :--- | :--- | :--- | :--- |
| WebUI | Javascript | Apache / Nginx | React Redux, HTML5, PostCSS | <a href="https://github.com/metasfresh/metasfresh-webui-frontend" title="metasfresh-webui-frontend on Github" target="\_blank">Github</a> |
| WebAPI | Java 8 | Spring Boot | REST, JSON, Swagger, Spring, hazelcast, websocket | <a href="https://github.com/metasfresh/metasfresh-webui" title="metasfresh-webui on Github" target="\_blank">Github</a> |
| App | Java 8, SQL | Spring Boot | Jasper Reports, Application Dictionary | <a href="https://github.com/metasfresh/metasfresh" title="metasfresh on Github" target="\_blank">Github</a> |
| DB | SQL, PgSQL | Postgres (9.5+) | Application Dictionary | <a href="https://github.com/metasfresh/metasfresh" title="metasfresh on Github" target="\_blank">Github</a> |
| Reporting | JRXML | Jasperserver | Jasper Reports 6.5.1 <a href="https://community.jaspersoft.com/project/jaspersoft-studio/releases#project_releases-old-1" title="Jaspersoft® Studio" target="\_blank">Client</a> | <a href="https://github.com/metasfresh/metasfresh/tree/master/de.metas.fresh/de.metas.fresh.base/src/main/jasperreports/de/metas" title="jasperreports/de/metas on Github" target="\_blank">Github</a> |
| elastic Search |  |  | Standard Elastic Search | <a href="https://github.com/elastic/elasticsearch" title="elasticsearch on Github" target="\_blank">Github</a> |
| RabbitMQ |  |  |Standard RabbitMQ | <a href="https://github.com/rabbitmq" title="rabbitmq on Github" target="\_blank">Github</a> |
| Java Client | Java 8 | Java JRE 8+ | Swing | <a href="https://github.com/metasfresh/metasfresh" title="metasfresh on Github" target="\_blank">Github</a> |
|  |  |  |  |  |
| ***Optional:*** |
| Material Schedule | Java 8 | Spring Boot | Real-time calculation of material | <a href="https://github.com/metasfresh/metasfresh" title="metasfresh on Github" target="\_blank">Github</a> |
| Jasper Reports | Java 8 | Spring Boot | Render Jasper reports | <a href="https://github.com/metasfresh/metasfresh" title="metasfresh on Github" target="\_blank">Github</a> |
