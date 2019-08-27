---
title: How do I automatically set the date promised in an order to a certain number of days after the order date? (System Administrator)
layout: default
tags:
  - Workflow
  - Sales
  - Setup
lang: en
sequence: 10
ref: salesorder_sysconfig_promised_date
---

## Overview
In metasfresh, the date promised of a sales order by default coincides with the order date. Should the dates diverge, they can be changed accordingly by hand. If, however, the date promised generally lies a minimum number of days after the order date, a system administrator can go ahead and adjust the default settings accordingly. To do so, please proceed as follows:

## Steps
1. [Log in to metasfresh](Login) with the [user role](NewUserRole) "System Administrator".
1. Open "System Configuration" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the system configuration with the **Name** `de.metas.order.DatePromisedOffsetDays`.
1. Open the system configuration entry.
1. In the field **Search Key**, enter the number of days by which the date promised shall be postponed, depending on the order date.
1. [metasfresh saves the progress automatically](Saveindicator). The changes apply immediately.
