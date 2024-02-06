---
title: Enable printing (printing.Enabled)
layout: default
tags:  
  - System Config
lang: en
sequence:
ref: sysconfig_printing.Enabled
published: false
---

<!--
Declared OBSOLETE by Tobi via https://github.com/metasfresh/mf15-documentation/issues/6#issue-2099995966 (January 2024)
Current documentation up to date at that time: https://docs.metasfresh.org/setup/Printing_PDF_Setup_Guide.html
-->

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
