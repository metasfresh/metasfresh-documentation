---
title: How do I browse the REST API using Swagger ?
layout: default
tags:
  - System Administration
lang: en
---

## Overview

metasfresh uses swagger to expose REST API functions.

You can browse the REST API via swagger using:

`http://<yourserver:port>/swagger-ui.html#`

## Set User Session Language using Swagger

1. open Swagger
1. search for **PUT** `/rest/api/userSession/language`
1. enter the language code `en_US` into the field adLanguage
1. click on "Try it out"
1. Refresh the metasfresh Browser Session to make the change active
