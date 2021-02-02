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

| Service | Dev Language | Running on | Technologies |
| :--- | :--- | :--- | :--- |
| WebUI | Javascript | Apache / Nginx | React Redux, HTML5, PostCSS |
| WebAPI | Java 8 | Spring Boot | REST, JSON, Swagger, Spring, hazelcast, websocket |
| App | Java 8, SQL | Spring Boot | Jasper Reports, Application Dictionary |
| DB | SQL, PgSQL | Postgres (9.5+) | Application Dictionary |
| Reporting | JRXML | Spring Boot | <a href="https://community.jaspersoft.com/project/jasperreports-library/releases" title="Open Source Java Reporting Library" target="\_blank">JasperReports® Library 6.5.1</a> |
| elastic Search |  |  | Standard Elastic Search |
| RabbitMQ |  |  |Standard RabbitMQ |
| Java Client | Java 8 | Java JRE 8+ | Swing |
|  |  |  |  |
| ***Optional:*** <abbr title="Can be run as a separate service.">*</abbr> |
| Material Schedule | Java 8 | Spring Boot | Real-time calculation of material |
| Jasper Reports | Java 8 | Spring Boot | Render Jasper reports |

<em>* <small>Can be run as a separate service.</small></em>
