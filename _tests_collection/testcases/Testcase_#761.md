---
title: IT gh#761
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP   
layout: default
tags:
  - inout
  - UI
---
## #761 Reactivating an InOut fails sometimes

> Testcase to check if an InOut can be reactivated without errors.


1. Create a 2 sales orders for G000X:
	* one with P0001 on TU A, with send EDI checked
	* one with P0002 on TU B, without send EDI checked
	
1. Create the inouts for both

1. Try reactivating both inouts:
	* => no errors, reactivating works fine
	* => after reactivating, you can change the inout again (e.g. change qties in inout line, use process Gebindezeilen zurücksetzen after changing qty of HUs etc.)
	
1. Complete the inouts again

1. For the 1st inout, send the EDI file (e.g. from DESADV window)

1. For the 2nd inout, create the invoice

1. Try reactivating both inouts once more:
	* => not possible to reactivate the 1st inout because EDI status is S (sent)
	* => not possible to reactivate the 2nd inout because already invoiced
	
