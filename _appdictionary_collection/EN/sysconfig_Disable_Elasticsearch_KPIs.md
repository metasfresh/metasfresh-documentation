---
title: Disable Elasticsearch KPIs
layout: default
tags:  
  - System Config
lang: en
---

## Overview
Allows you to disable Elasticsearch KPIs.

## Example
```
  update AD_SysConfig set Value='N' where Name='de.metas.elasticsearch.PostKpiEvents';
```
