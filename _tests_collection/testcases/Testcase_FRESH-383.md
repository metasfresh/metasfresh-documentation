---
title: IT FRESH-383
required data:
   orders: purchase & sales orders   
   layout: default
---
## Make orders print preview run faster

> Testcase to check if the print preview performance
> for purchase and sales invoices has improved.


1. Make sure you have the correct Setup for printing in Preferences:
	
	* Check always print preview
	
1. Open a purchase order, select one that includes:

	* different products
	* different ASI (e.g. Bio, CH, Inland, AdR, Freiland, Karotten-ID)

1. Press print preview 

	* => print preview Einkaufsbestätigung opens in ~10s or less

1. Check the order and its lines

	* => each orderline is displayed with correct qty, PI, price etc.
	* => ASI displayed are the ones which have isAttrDocumentRelevant=Y in Merkmal (Bio, CH, AdR, Aktion, Karotten-ID)
	
1. Open a sales order, select one that includes:

	* different products 
	* different ASI (e.g. Bio, CH, Inland, AdR, Aktion)

1. Press print preview

	* => print preview opens in ~10s or less
	
1. Check the order and its lines

	* => each orderline is displayed with correct qty, PI, price etc.
	* => ASI displayed are the ones which have isAttrDocumentRelevant=Y in Merkmal (Bio, CH, AdR, Aktion)
	

	

