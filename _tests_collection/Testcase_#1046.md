---
title: IT gh#1046
required data:
   products: P0001, P0002, P0003  
layout: default
tags:
  - pricing
---
## Automatic Naming of Pricelist Version Name

> Testcase to check if the pricelist version is set correctly in new procut prices.


1. Create a new pricelist or use an already existing one

1. Make sure the pricelist has set:
	* name
	* currency
	* country
	
1. Create a pricelist version for this pricelist, set a valid from date

1. Create new product prices for your products and check the pricelist version ID in the product price:
	* => name of pricelist_country_currency_valid from date for every new product price
	
1. When you have created the PLV with product prices, create a new PLV:
	* use your existing pricelist as base pricelist
	* set another name for the version
	* set another valid from date
	
1. Use the Preise erstellen button to create the new PLV, check the product prices:
	* => PLV ID: name of pricelist_country_currency_valid from date (new one!) for every new product price
	
	
**Note:** The name of the pricelist, currency and valid from date of the PLV are mandatory, but the country is not, so when using an old pricelist the country might not be shown in the pricelist version ID, if it's not set.
