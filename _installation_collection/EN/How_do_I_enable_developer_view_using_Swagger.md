---
title: How do I enable Developer View using Swagger?
layout: default
tags:
  - System Administration
lang: en
ref: how_do_i_enable_developer_view_using_swagger
---

## Overview

In case you want to see the columns behind the fields (independent from your language settings) and the ID of tabs, you might want to enable the *Developer View*.

## Steps

1. Open Swagger.
1. Search for `/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT` <br> or run this URL directly <br> `http://<yourserver:port>/swagger-ui.html#!/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT`.
1. Enter the language code `true` into the field **adLanguage**.
1. Click on "Try it out".
1. Refresh the metasfresh browser session to apply the change.

## Example

### Before enabling Developer View

![](assets/How_do_I_enable_developer_view_using_Swagger-defcb.png)

### After enabling Developer View

![](assets/How_do_I_enable_developer_view_using_Swagger-fbec7.png)
