---
title: IT FRESH-689
required data:
   pricelists: customer pricelist CP or vendor pricelist VP   
layout: default
tags:
  - UI
---
## #423 Dropdown List shows wrong records on rare cases

> Testcase to check if dropdown list shows correct records.

1. Open window Preise

1. Go to price list CP / VP and enter Base Pricelist

1. Go to price list version and have a record where Base Pricelistversion is filled

1. Grid view, and uplicate record:
	* => field Base Pricelistversion shows entries matching the base price list selected in 2.

