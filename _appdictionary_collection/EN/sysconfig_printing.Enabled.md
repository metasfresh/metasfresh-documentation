---
title: Enable Printing (printing.Enabled)
layout: default
tags:  
  - System Config
lang: en
---

## Overview
If you want to use server-based mass printing either for real printers or PDF printing you need to enable this switch.

By default its off (N).

This change requires a restart of the APP Server to become effective.

## Example


```
  update ad_sysconfig
  set value='Y' 
  where name='de.metas.printing.Enabled'
```