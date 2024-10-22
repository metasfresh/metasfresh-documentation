---
title: How do I browse the REST API using Swagger?
layout: default
tags:
  - A Beginner's Guide to the metasfresh Web Service
lang: en
sequence: 20
ref: how_do_i_browse_the_rest_api_using_swagger
---

## Overview
metasfresh uses Swagger to expose REST API functions and endpoints.

Via Swagger you can browse through and use all [available endpoints](../../pages/rest_api/index_en).<br>
For more information about using the REST API, please refer to our [general guide on the metasfresh web service](General_info_REST_API).

Depending on your metasfresh build version, you can reach the REST API by appending the following path to your personal instance/server URL, which usually begins with `https://<yourserver:port>`:

### Builds up to version `5.175`
- metasfresh webui (**webapi**) REST API
    - `/swagger-ui/index.html`
    >**Note:** Useful endpoint for enabling migration scripts.

- metasfresh **app**lication **server** REST API
    - `/app/swagger-ui/index.html`

### Builds as of version `5.176` (Java 17)
The instance/server URL of these build versions is always composed in the same way: `https://<yourserver:port>/swagger-ui/index.html`.<br>
For browsing, the Swagger web pages include an "**Explore**" search box at the top where you can enter the URL path in order to open the desired REST API endpoint.

- metasfresh webui (**webapi**) REST API
    - `/v3/api-docs`<br>
    <kbd><img src="assets/Swagger Explore search box - webapi.png" alt="Swagger 'Explore' box" style="max-height: 35px"></kbd>

- metasfresh **app**lication **server** REST API
    - `/app/v3/api-docs`<br>
    <kbd><img src="assets/Swagger Explore search box - app server.png" alt="Swagger 'Explore' box" style="max-height: 35px"></kbd>

## Next Steps (optional)
- [Change the user session language via Swagger](set_user_session_language_via_swagger).
- [Enable the Developer View using Swagger](enable_developer_view_via_Swagger).
