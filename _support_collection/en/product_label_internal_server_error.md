---
title: Error when running Products Data Entry (Jasper) process
layout: default
description: "Solve the internal server error for manufacturing order process 'Products Data Entry (Jasper)'"
tags:
  - Product Labels
lang: en
sequence: 10
ref: product_label_internal_server_error
---

## Issue
When running the process `Products Data Entry (Jasper)` in a Manufacturing Order:
- Error: `Internal Server Error ...` pops up
- Logs in `reports` container show error containing `reports_1   | Caused by: java.net.UnknownHostException: app`

## Solution:
- Port-Bind the app-container's api in your docker-compose.yml
eg:
```
app:
...
  ports:
    - "8282:8282"
```

- Update the ad_sysconfig entry `API_URL` in your database to the server and port which shall be reachable by your clients:
```
docker exec -u postgres metasfreshdocker_db_1 psql -d metasfresh -c "UPDATE ad_sysconfig SET value = 'http://my.metasfreshserver.com:8282/api' WHERE name = 'API_URL';"
```

- Restart your instance:
```
docker-compose down && docker-compose up -d
```

- Make sure Port `8282/TCP` is reachable from your clients
eg:
```
nc -vz my.metasfreshserver.com 8282
my.metasfreshserver.com [AAA.BBB.CCC.DDD] 8282 open
```

### Background:
In order to print labels, the `reports` container needs to send requests to the `app` internal API.
Since docker-compose v1 does not allow looping links, the `app` API needs to be exposed externally for the `reports` container to reach it.
