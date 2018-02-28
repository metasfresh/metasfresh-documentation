---
title: IT FRESH-568
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002, P0003, P0004
   flatrate term: procurement flatrate term   
layout: default
tags:
  - Procurement
---
## #263 Delivery Conditions Flag sometimes not set in Procurement Candidates

> Testcase to check if the Delivery Conditions Flag is set correctly in Procurement Candidates

1. Make sure you have flatrate terms for procurement for G000X for:
	* P0001: qty for current month, no price set
	* P0002: no qty for current month, no price set
	* P0003: qty & price for current month set
	
1. Make sure P0004 is also available as Produkt für Lieferantenvertrag, but G000X has no flatrate term for it

1. In WebUI, log in for G000X and send qty to deliver for all 4 products, for date of test

1. Open procurement candidates, and search for G000X and date of test:

	| Product | checkbox V  |
	| ------- | ----------- |
	| P0001   | checked     |
	| P0002   | not checked |
	| P0003   | checked     |
	| P0004   | not checked |
	
	
	* => if the qty is set for the month, a price is not necessary!
	* => if no qty is set, it's like there is no flatrate term for this period!
	

