---
title: IT gh#910
required data:
   bpartner: bpartner G000X (customer)
   products: P0001
   HUs: TU A
   pricelists: customer pricelist CP   
layout: default
tags:
  - Jasper
---
## #910 Put explicit delivery date on invoice.

> Testcase to check the explicit delivery date in invoice jasper.

1. Create a sales order for G000X:
	* P0001, 10 TU A
	* reference: as you like
	
1. Create several partial inouts from Lieferdispo, and set different delivery dates:
	* 1st inout: 2 TUs, date: e.g. 8.2.
	* 2nd inout: 3 TUs, date: e.g. 9.2. (date of test)
	* 3rd inout: 4 TUs, date: e.g. 10.2.
	* 4th inout: 1 TU, date: e.g. 11.2.
	
1. Create the invoice for all inouts (you have to check ignore invoicing plan!)

1. Check the invoice jasper:
	* inouts for P0001 are displayed like: Lieferschein xx, xy, xz, yx
	* dates are displayed like: Lieferdatum/ Leistungsdatum: 08.02.2017 bis 11.02.2017 - delivery address
	* inouts for TUs are displayed like Lieferschein xx Lieferdatum/ Leistungdsdatum: 08.02.2017 - delivery address
	* the inouts for Gebinde are displayed separately, since there is no "partial inout" for them like for P0001
	* reference as set in sales order, displayed for each inout 
	* not cut-offs or overlays with delivery address / reference or else
	
1. Create a purchase order for G000X  and receive the product partially several times

1. Create the invoice and heck the jasper:
	* => no change, no "Lieferdatum/ Leistungsdatum"
	
	
	
**Note:** The "Lieferdatum/ Leistungsdatum" is only included in sales invoice jasper for the normal metasfresh application, for others we still use "Lieferschein xx, yy, zz von XX bis YY" or  "Lieferschein xx vom XX"!
Depending on the aggregation rule for G000X, you will have an invoiceline for each inout of P0001, or it is summed up and aggregated into 1, with the overall qty and sum.