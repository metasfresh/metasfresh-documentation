---
title: IT FRESH-377
required data:
   invoices: purchase & sales invoices   
   layout: default
---

# IT FRESH-377
### make invoice print preview faster
> Testcase to check if the print preview performance
> for purchase and sales invoices has improved.


1. Make sure you have the correct Setup for printing in Preferences:
	
	* Check always print preview
	
1. Open a purchase invoice, select one that includes:

	* different products
	* different ASI (e.g. Bio, CH, Inland, AdR, Freiland)
	* quality issue
	* several inouts per product

1. Press print preview 

	* => print preview of inout opens in ~10s or less

1. Check the invoice and its lines

	* => different inouts for the same product in 1 line, if the ASI are the same
	* => >1 line for the same product, when ASI are different
	* => separate line for the qty with quality issue
	* => ASI displayed are the ones which have isAttrDocumentRelevant=Y in Merkmal (Bio, CH, AdR)
	
1. Open a sales invoice, select one that includes:

	* different products
	* different ASI (e.g. Bio, CH, Inland, AdR, Aktion)
	* several inouts per product

1. Press print preview

	* => print preview of inout opens in ~10s or less
	
1. Check the invoice and its lines

	* => different inouts for the same product in 1 line, if the ASI are the same
	* => >1 line for the same product, when ASI are different
	* => the different inouts are listed above, "Lieferschein: AB, XY"
	* => ASI displayed are the ones which have isAttrDocumentRelevant=Y in Merkmal (Bio, CH, AdR, Aktion)
	

	

