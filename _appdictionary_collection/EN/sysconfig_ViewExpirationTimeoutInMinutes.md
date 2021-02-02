---
title: Configure View Expiration (ViewExpirationTimeoutInMinutes)
layout: default
tags:  
  - System Config
lang: en
sequence:
ref: sysconfig_ViewExpirationTimeoutInMinutes
---

## Overview
Allows to control when the views of an user expire and require refiltering.

### Default

Default is `60` which leads to expiration after 60 Minutes.

### Source
Feature was implemented in https://github.com/metasfresh/metasfresh/issues/6480

### Update
search for sysconfig name: `de.metas.ui.web.view.ViewExpirationTimeoutInMinutes`
and set the desired Minutes as Value.

## Caveats

The persisting of views takes a lot of disk space and IO.
Be careful and do not set high values as they might spill your drive when you got many users filtering many records (Depending on role setting max records).
