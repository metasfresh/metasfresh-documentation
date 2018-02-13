---
title: IT FRESH-697
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001
   pricelists: vendor pricelist VP   
layout: default
tags:
  - MRP Product Info
---
## #409 MRP Product Info might leave back stale entries after fast changes

> Testcase to check if MRP Product Info updates correctly after fast changes.

1. Open MRP Product Info
	* => opens for date of test
	
1. Set P0001 in Produkt, refresh:
	* => Bestellte Menge and Zusagbar Zählbestand qty: 0 (if it is >0, test with another product that has qty 0 in MRP Product Info)
	
1. Create a purchase order for G000X, P0001, qty: 100, and DatePromised = date of test

1. Go back to MRP Product Info
	
1. Set P0001 in Produkt, refresh:
	* => Bestellte Menge and Zusagbar Zählbestand qty: 100
	
1. Go back to your purchase order, reactivate it

1. Set DatePromised = following day, save and complete

1. In MRP Product Info, go to following day
	* => Bestellte Menge and Zusagbar Zählbestand qty: 100
	
1. Go back to date of test (use arrows / set date manually):
	* => Bestellte Menge and Zusagbar Zählbestand qty: 0