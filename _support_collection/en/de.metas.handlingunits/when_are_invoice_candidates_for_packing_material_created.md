---
title: Why don't I have an invoice candidate for my packing material line?
component: de.metas.handlingunits
tags:
  - Handling Units
lang: en
layout: default
sequence:
---

## Problem
I have completed a sales order and as expected, one line was added on completion for packing material.
Now I was expecting this extra order line to have an invoice candidate that I can use to invoice the packing material but no invoice candidate exists for that line.

## Explanation
The invoice candidates for packing materials are not generated from sales order line but from picking.
So they will appear once you picked the sales order lines and select the final and actual packing material there.
This is to support a different packing material on shipping. Once the in/out is created the packing material will have an invoice candidate under "[Billing Candidates](https://docs.metasfresh.org/webui_collection/EN/Menu.html)".
