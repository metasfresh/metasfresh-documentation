---
title: How do I enable the Developer View using Swagger?
layout: default
tags:
  - A Beginner's Guide to the metasfresh Web Service
lang: en
sequence: 40
ref: enable_developer_view_via_Swagger
---

## Overview
In case you want to see the columns behind the fields (independent from your language settings) and the ID of tabs, you may want to enable the *Developer View*.

## Steps
1. [Open Swagger](How_do_I_browse_the_REST_API_using_Swagger).
1. Search for `/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT` <br> or run this URL directly <br> `https://<yourserver:port>/app/swagger-ui/index.html#/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT`.
1. Enter the language code `true` into the field **adLanguage**.
1. Click on "Try it out".
1. Refresh the metasfresh WebUI browser session to apply the change.

## Example

### Before enabling Developer View

<kbd><img src="assets/How_do_I_enable_developer_view_using_Swagger-defcb.png" alt="Fig.: Before enabling Developer View"></kbd>

### After enabling Developer View

<kbd><img src="assets/How_do_I_enable_developer_view_using_Swagger-fbec7.png" alt="Fig.: After enabling Developer View"></kbd>
