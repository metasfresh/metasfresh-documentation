---
title: How do I set up Dunning?
layout: default
tags:
  - Workflow
  - Dunning
lang: en
sequence: 10
ref: setup_dunning
---

## Overview
Before you can start a [Dunning Run](Dunning_Run), you need to set up the dunning procedure first. In metasfresh you can also individualize this procedure for single customers and business partner groups.


## Steps
1. [Configure the Outbound Documents](Outbound_Documents_Config_Dunning) for the dunning procedure.
1. Define a [Dunning Type](Define_Dunning_Type) with at least one level.
1. [Link](link_dunning_type_to_partner) this dunning type to a single [customer](New_business_partner_customer) or a [business partner group](New_Business_Partner_Group).

1. configure Outbound Documents Config for table c_dunning_docs in order to have dunning Documents created in outbound documents.  Make sure you select a print format here as this is explicitly required for table c_dunning_docs.
![](assets/Setup_Dunning-f0dcd.png)

1. define a dunning type in window "Dunning Type" with at least one step
![](assets/Setup_Dunning-e98f4.png)
1. link dunning type to a partner group in window "Partner Group"
![](assets/Setup_Dunning-fe276.png)

or to a single customer
![](assets/Setup_Dunning-2c48d.png)

