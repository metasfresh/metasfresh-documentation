---
title: IT FRESH-689
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Jasper
  - UI
---
## #395 Add Description in Jasper Invoice Vendor

> Testcase to check if the description field in invoice jasper is displayed correctly.

1. Create a sales and a purchase order:
	* for G000X
	* use P0001 & P0002, set attributes for both
	* use TU A and TU B, for both products
	
1. Create the inouts, with Wareneingang POS & Lieferdispo

1. Create the invoices

1. Check the invoices:
	* => field description can be changed / set manually, for both products and Gebinde
	
1. Set stuff in the description field, short and long ones, print preview the jaspers:
	* text from description is displayed underneath the line for product / Gebinde, in both invoices
	* if there are attributes set that are displayed in > 1 line, then the description is displayed a little lower, underneath the line for ASI
	* long text in description: fully displayed, no cut-offs 
	
