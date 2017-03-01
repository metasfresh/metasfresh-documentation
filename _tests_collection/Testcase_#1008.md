---
title: IT gh#1008
required data:
   products: P0001, P0002
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - pricing
  - UI
---
## #1008 Inactive prices should not be modified when copied

> Testcase to check if inactive prices are not modified when copied.

1. Have a pricelist, e.g. customer pricelist, with several product prices

1. In Produkt Preise, set one product price inactive

1. Make sure you have a discount schema for using when copying pricelists, that adds + 1.00 to the standard price

1. In your pricelist, create a new pricelist version:
	* set a name and start date as you like
	* select your CP (with the inactive product price!) as base pricelist
	* select the discount schema which adds + 1.00 to the standard price
	
1. Check the prices of the new PLV in Produkt Preise:
	* => all prices from the new PLV have standard price + 1.00, compared to the original CP
	* => the product price you set inactive was NOT modified: price on the new PLV is the same as in CP!
	
1. In Produkt Preise, select another product price from CP

1. Set "Staffelpreis" active, then set the product price inactive

1. Create another new pricelist, using the same discount schema and CP as base pricelist

1. Check the prices of the new PLV in Podukt Preise:
	* => all prices from the new PLV have standard price + 1.00, compared to the original CP
	* => the product price you set inactive was NOT modified: price on the new PLV is the same as in CP!
	* => product price you set inactive is a "Staffelpreis", like in the original CP
	
1. Have another pricelist, e.g. vendor pricelist, that includes attribute prices

1. In your pricelist, create a new pricelist version:
	* set a name and start date as you like
	* select your VP (with the attribute pices) as base pricelist
	* have a discount schema that copies the prices from the original pricelist (modifying prices is not necessary)
	
1. In the original VP, change the attributes for a price with attributes set
	
1. Check the prices of the new PLV in Produkt Preise:
	* => all prices are copied
	* => attribute prices have the same attributes set as the original VP, from when the new PLV was created
	* => attributes for the price recently changed in VP is different from the new PLV, which has the old attribute set