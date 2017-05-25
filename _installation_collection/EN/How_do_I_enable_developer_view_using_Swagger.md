---
title: How do I enable developer view using Swagger ?
layout: default
tags:
  - System Administration
lang: en
---

## Overview

In case you want to see the columsn behind the fields - independet from your language settings - and the ID of Tabs you might want to enable the developer view.

## Steps

1. open Swagger
1. search for `/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT` <br> or run this URL directly <br> `http://<yourserver:port>/swagger-ui.html#!/debug-rest-controller/setShowColumnNamesForCaptionUsingPUT`
1. enter the language code `true` into the field adLanguage
1. click on "Try it out"
1. Refresh the metasfresh Browser Session to make the change active


## example

### before

![](assets/How_do_I_enable_developer_view_using_Swagger-defcb.png)

### after enabling

![](assets/How_do_I_enable_developer_view_using_Swagger-fbec7.png)
