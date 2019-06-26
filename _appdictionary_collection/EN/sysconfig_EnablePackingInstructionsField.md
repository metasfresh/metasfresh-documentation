---
title: Enable / Disable Packing Instruction Field in Order Windows
layout: default
tags:  
  - System Config
lang: en
---

## Overview
Allows to control whether the field for packing instruction is displayed in quick order entry in order window.

## Example
```
update ad_sysconfig
set value ='N' --disables the field
where name ='webui.quickinput.EnablePackingInstructionsField';

```
