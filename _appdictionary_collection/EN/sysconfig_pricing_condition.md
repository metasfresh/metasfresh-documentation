---
title: PriceConditions
layout: default
tags:  
  - System Config
lang: en
---

## Overview

You can use this configs to configure the color schema for the price conditions feature.

`de.metas.order.NoPriceConditionsColorName`
`de.metas.order.TemporaryPriceConditionsColorName`

The value will contain the  name of the colour that will be set in C_OrderLine.NoPriceConditionsColor_ID if the C_OrderLine.M_DiscountSchemaBreak_ID is null.


### Enable 

write a color name like "Red". Value must be in ad_color.name (table.column)

### Disable

Leave empty or set the value to "-" if the functionality is not needed

