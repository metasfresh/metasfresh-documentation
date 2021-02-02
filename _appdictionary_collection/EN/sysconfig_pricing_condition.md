---
title: Configure the color schema for price conditions
layout: default
tags:  
  - System Config
lang: en
sequence:
ref: sysconfig_pricing_condition
---

## Overview
You can use these configs to configure the color schema for the price conditions feature.

`de.metas.order.NoPriceConditionsColorName`
`de.metas.order.TemporaryPriceConditionsColorName`

The value will contain the name of the color that will be set in *C_OrderLine.NoPriceConditionsColor_ID* if the *C_OrderLine.M_DiscountSchemaBreak_ID* is null.

### Enable
Write a color name like "Red". Value must exist in ad_color.name (table.column).

### Disable
Leave empty or set the value to "-" if the functionality is not needed.
