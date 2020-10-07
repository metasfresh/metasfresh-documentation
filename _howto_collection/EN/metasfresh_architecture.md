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
| Reporting | JRXML | Jasperserver | Java Rest Client for JasperReports Server |
| elastic Search |  |  | Standard Elastic Search |
| RabbitMQ |  |  |Standard RabbitMQ |
| Java Client | Java 8 | Java JRE 8+ | Swing |
|  |  |  |  |
| ***Optional:*** |
| Material Schedule | Java 8 | Spring Boot | Real-time calculation of material |
| Jasper Reports | Java 8 | Spring Boot | Render Jasper reports |
