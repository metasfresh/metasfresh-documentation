---
title: IT gh#1011
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - pricing
  - UI
---
## #1011 M_ProductPrice for >1 ASI not set in orderline.

> Testcase to check if the price in orderline is set correctly when setting and changing attributes.

1. In VP, have P0001 with different prices (with the same PI or no PI set:
	* no asi: 1,00
	* Bio: 1,75
	* Bio and AdR: 2,50
	* Bio, AdR and Aktion: 3,25
	
1. Create a purchase order for G000X, add P0001 with Add new, don't set an attribute:
	* => price is 1,00
	
1. Change attributes, with Advanced Edit or in the orderline field directly, and check the prices:
	* => Bio: 1,75
	* => AdR: 1,00
	* => Bio and AdR: 2,50
	* => Bio and Sonderaktion: 1,00
	* => Bio, AdR and Aktion: 3,25
	
1 Repeat the test for P0002 on CP, with different attributes:
	* => price is updated according to the attributes you set
	* => if the attribute / attribute combination has no specific price, the standard price is taken!



