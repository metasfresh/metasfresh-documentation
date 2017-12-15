---
title: How do I setup dunning ?
layout: default
tags:
  - Workflow
  - Dunning
lang: en
sequence: 10
ref: dunning_setup
---

## Overview

1. configure Outbound Documents Config for table c_dunning_docs in order to have dunning Documents created in outbound documents.  Make sure you select a print format here as this is explicitly required for table c_dunning_docs.
![](assets/Setup_Dunning-f0dcd.png)

1. define a dunning type in window "Dunning Type" with at least one step
![](assets/Setup_Dunning-e98f4.png)
1. link dunning type to a partner group in window "Partner Group"
![](assets/Setup_Dunning-fe276.png)

or to a single customer
![](assets/Setup_Dunning-2c48d.png)
