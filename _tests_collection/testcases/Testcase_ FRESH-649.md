---
title: IT FRESH-606
required data:
   bpartner: bpartner G000X (customer and vendor)
   products: P0001 (HU)   
layout: default
tags:
  - Returnables
  - Invoicing
  - UI
---

## #367 Invoice candidates invoicing Pricelist not found

> Testcase to check if pricelist works without errors for returnables when you want to invoice

1. Make sure that bpartner G000X has iscustomer = Y and isvendor = Y

1. Also set a Vendor Pricing System and leave Customer Pricing System empty

1. Create a customer Returns Document (inout, kundenrücklieferung)

1. add bpartner G000X, HU P0001, complete

1. zoom in to invoice candidates
	* => new one created, with Pricing System set to the Vendor Pricing System and IsSOTrx = Y
	* => no errors

1. gear - create invoice
	* => invoice created ok, no errors
	* => Pricing System set to the Vendor Pricing System and IsSOTrx = Y (credit memo)
	
1. set a Customer Pricing System for G000X

1. create another customer Returns Document (inout, kundenrücklieferung), complete
	* => invoice candidate crated with Customer Pricing System and IsSOTrx = Y, no errors
	
1. create invoice from invoice candidates = gear
	* => invoice created ok, no errors
	* => Pricing System set to the Customer Pricing System and IsSOTrx = Y (credit memo)
	
1. set Vendor Pricing System empty for G000X

1. Create a vendor Returns Document (inout, lieferantenrücklieferung)

1. add bpartner G000X, HU P0001, complete

1. zoom in to invoice candidates
	* => new one created, with Pricing System set to the Customer Pricing System and IsSOTrx = N 
	* => no errors

1. gear - create invoice
	* => invoice created ok, no errors
	* => Pricing System set to the Customer Pricing System and IsSOTrx = N (credit memo)
	
1. set a Vendor Pricing System for G000X

1. create another vendor Returns Document (inout, lieferantenrücklieferung), complete
	* => invoice candidate crated with Vendor Pricing System and IsSOTrx = N, no errors
	
1. create invoice from invoice candidates = gear
	* => invoice created ok, no errors
	* => Pricing System set to the Vendor Pricing System and IsSOTrx = N (credit memo)