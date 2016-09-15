---
title: IT FRESH-648
required data:
   pricelists: customer pricelist CP   
layout: default
tags:
  - Pricing
---
## #366 Faulty unique constraint on M_PriceList

> Testcase to check the unique constraint for pricelists is working correctly.

1. Open pricelist CP, check the country

1. Create a new pricelist, with the same country, but don't check "Verkaufspreisliste", save:
	* => the pricelist is saved with the same country, as purchase pricelist
	
1. Create another new pricelist, try to set the same country:
	* => not possible, autocomplete not working and country not displayed in the list, since there already are a purchase & sales pricelist for this country
	
1. Set another country (choose from list / use autocomplete), save:
	* => working fine, country is displayed in the list / set with autocomplete
	
1. Copy the first sales pricelist, with the country, try to save:
	* => error message: only 1 sales and 1 purchase pricelist with the same country allowed!
	
1. In the 2nd pricelist, for purchase, check "Verkaufspreisliste":
	* => the country is set back to empty, since there already is a sales pricelist for this country
