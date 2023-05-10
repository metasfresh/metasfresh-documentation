---
title: How do I browse the REST API using Swagger?
layout: default
tags:
  - System Administration
lang: en
ref: how_do_i_browse_the_rest_api_using_swagger
---

## Overview

metasfresh uses Swagger to expose REST API functions.

You can browse the REST API via Swagger using:

`http://<yourserver:port>/app/swagger-ui/index.html`

## Set User Session Language using Swagger

1. Open Swagger.
1. Search for **PUT** `/rest/api/userSession/language`.
1. Enter the language code `en_US` into the field **adLanguage**.
1. Click on "Try it out".
1. Refresh the metasfresh browser session to apply the change.
