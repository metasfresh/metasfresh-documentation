---
title: IT gh#774
required data:
   bpartner: bpartner G000X (customer & vendor?)
   addresses: have 2 different ones for G000X
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Jasper
---
## #774 show address on all docs so it fits the letter window

> Testcase to check if the address in all docs fits the letter window.

1. Create a sales order for G000X:
	* P0001, TU A
	* P0002, TU B
	* check different delivery address, and set another one for G000X
	
1. Save, and print Jasper:
	* => the address fields are positioned in a way so that the normal address of G000X will be displayed in the window of an envelope
	* => other addresses, like delivery address or org address, are not displayed in the envelope window
	
1. Create the inout, and the invoice for it

1. Print the jaspers:
	* => inout: address fields are positioned in a way so that the delivery address of G000X will be displayed in the window of an envelope
	* => invoice: address fields are positioned in a way so that the normal address of G000X will be displayed in the window of an envelope
	* => both: other addresses, like delivery address or org address, are not displayed in the envelope window
	
	
