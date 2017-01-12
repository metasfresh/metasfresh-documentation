---
title: IT FRESH-890
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002, P0003
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
   flatrate term: procurement flatrate
layout: default
tags:
  - price
  - procurement
---
## #615 Purchase Order wrong Price from Contract or Pricesystem for specific Product

> Testcase to check if the correct price is set in purchase order if a procurement contract exists.

1. Make sure G000X has procurement flatrate terms for:
	* P0001, TU A, price set for the next 3 months
	* P0002, TU B, price set for the next year, ASI: Bio (lower Seq. No.)
	* P0002, TU B, prices set for the next year, ASI: AdR (higher Seq. No.)
	* P0003, TU A, no prices set (with / without qty)
	
1. Make sure pricelist VP in the newest version and has prices set for:
	* P0001, TU A
	* P0001, TU B
	* P0002, TU B, Bio
	* P0002, TU B, CH
	* P0003, TU A
	
1. Create a purchase order for date of test (date promised), for G000X, with:
	* P0001, TU A
	* P0001, TU B
	* P0002, TU B, Bio
	* P0002, TU B, CH
	* P0003, TU A
	
1. Check the prices in the orderlines:
	* => P0001, TU A: price taken from procurement flatrate
	* => P0001, TU B: price taken from pricelist
	* => P0002, TU B, Bio: price taken from procurement flatrate
	* => P0002, TU B, CH: price taken from pricelist
	* => P0003, TU A: price taken from pricelist
	
1. Make the following changes, save (and refresh):
	* P0001, TU B: change PI to TU A
	* P0002, TU B, CH: add ASI Bio, and AdR
	
1. Check the prices again:
	* => P0001, TU A: both orderlines have price taken from procurement flatrate 
	* => P0002, TU B, CH, Bio, AdR: price taken from procurement flatrate, P0002, TU B, price for ASI: Bio, because of lower Seq. No.!
	
1. Change the price in VP for P0002:
	* P0002, TU B, Bio: take out the ASI
	
1. In flatrate term for P0003, TU A, set the price 0.00 for in 4 months
	
1. Create another purchase order, for G000X, with date promised in 4 months:
	* P0001, TU A
	* P0002, TU B, Bio
	* P0003, TU A
	
1. Check the prices in the orderlines:
	* => P0001, TU A: price taken from pricelist, since there is no price in procurement flatrate for that month!
	* => P0002, TU B, Bio: price taken from procurement flatrate	
	* => P0003, TU A: price taken from procurement flatrate (0.00)
	
1. Create a new pricelist version of VP, starting next month with new prices for:
	* P0001, TU A
	* P0001, TU B
	* P0002, TU B, Bio
	* P0002, TU B, CH
	* P0003, TU A
	
1. Create another purchase order, for G000X, with date promised in 4 months:
	* P0001, TU A
	* P0002, TU B, Bio
	* P0002, TU B, CH
	* P0003, TU A
	
1. Check the prices in the orderlines:
	* => P0001, TU A: new price taken from pricelist's latest version, since there is no price in procurement flatrate for that month!
	* => P0002, TU B, Bio: price taken from procurement flatrate	
	* => P0002, TU B, CH: new price taken from pricelist's latest version	
	* => P0003, TU A: price taken from procurement flatrate (0.00)	
	
1. Change the orderline accordingly, save, refresh:
	* P0002, TU B, CH: add ASI AdR
	
1. Check the price again:
	* => P0002, TU B, CH,  AdR: price now taken from procurement flatrate


**Note:** You can have different attribute prices in vendor pricelist (for certain TUs or attributes), but the one taken for purchase order is usually the standard one! Therefore, make sure you not only set a
price for e.g. P0001 in the pricelist, but an attribute price for e.g. P0001, TU A (in procurement flatrate term, you also always have a product combined with packing item) and make sure in purchase order you 
select the right TU!
