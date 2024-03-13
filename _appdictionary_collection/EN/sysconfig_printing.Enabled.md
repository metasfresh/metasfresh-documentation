---
title: Enable printing (system configuration `printing.Enabled`)
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

### Overview
If you want to use server-based mass printing either for real, physical printers or virtual (PDF) printers you need to enable the corresponding system configuration which by default is turned off (`N`).

Mind that this change requires a **restart of the App Server** to become effective.

## Steps
1. Open "System Configuration" from the [menu](../webui_collection/EN/Menu).
1. [Use the filter](../webui_collection/EN/Filtering_function) and search for the system configuration with the **Name** `de.metas.printing.Enabled`.
1. Open the system configuration entry.
1. In the field **Search Key**, enter `Y` and hit `↵ Enter` to apply.
1. **IMPORTANT:** Restart the App Server for the change to become effective.

### SQL Command Example
```SQL
  update ad_sysconfig
  set value='Y'
  where name='de.metas.printing.Enabled'
```
