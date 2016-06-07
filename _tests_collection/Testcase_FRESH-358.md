---
title: IT FRESH-358
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   pricelists: customer pricelist CP, vendor pricelist VP
   layout: default
---

# IT FRESH-358
### Producer Invoice: Jasper Document shows Recapitulation for technical tax
> Testcase to check if the technical tax is not
> displayed in Recapitulation of producer invoices.


1. Make sure G000X has producer invoice checked in bpartner, tab vendor 

1. Check bpartner group of G000X, make sure that:

	* Show VAT (MwST ausweisen) is not checked
	* IsPrintTaxSales is checked

1. Set prices for P0001 and P0002 in CP and VP, if not set already
	
1. Create a vendor invoice for G000X, using technical tax (2.5641%)

	* select producer invoice (Produzentenabrechnung) as doc type
	* set orderline P0001, e.g. 15kg with 1.00 EUR per kg
	* set orderline P0002, e.g. 10kg with 2.00 EUR per kg

1. Complete the invoice and print jasper

	|	MwSt	|	Total Artikel	|	Total	|	Recapitulation					|	
	| ---------	|:-----------------:|:---------:|:---------------------------------:|
	|	empty	|	15.00 & 20.00	|	35.00	|	35.00, no tax displayed / added	|
				
	
1. Create a customer invoice for G000X, using a different tax (e.g. 2.5%)

	* select customer invoice (Ausgangsrechnung) as doc type
	* set orderline P0001, e.g. 15kg with 1.00 EUR per kg
	* set orderline P0002, e.g. 10kg with 2.00 EUR per kg

 
1. Complete the invoice and print jasper

	|	MwSt	|	Total Artikel	|	Total	|	Recapitulation					|	
	| ---------	|:-----------------:|:---------:|:---------------------------------:|
	|	empty	|	15.00 & 20.00	|	35.00	|	35.00, 2.5%, 35.85				|
	
	
1. Create a purchase order and a sales order for G000X, using the same tax, products and qties as the invoices (no TUs!)

1. Complete the purchase order and print the jasper (order confirmation)

	|	MwSt	|	Total Artikel	|	Total	|	Recapitulation					|	
	| ---------	|:-----------------:|:---------:|:---------------------------------:|
	|	empty	|	15.00 & 20.00	|	35.00	|	35.00, no tax displayed / added	|
	
	
1. Complete the sales order and print the jasper (order confirmation)

	|	MwSt	|	Total Artikel	|	Total	|	Recapitulation					|	
	| ---------	|:-----------------:|:---------:|:---------------------------------:|
	|	2.5		|	15.00 & 20.00	|	35.00	|	35.00, 2.5%, 35.85			 	|
	
	
1. Go back to bpartner group of G000X, and set:

	* Show VAT (MwST ausweisen) is checked
	* IsPrintTaxSales is not checked
	
1. Go back to your producer invoice, print the jasper again

	|	MwSt	|	Total Artikel	|	Total	|	Recapitulation					|	
	| ---------	|:-----------------:|:---------:|:---------------------------------:|
	|	2.56	|	15.00 & 20.00	|	35.00	|	35.00, 2.56%, 35.90				|
	
	
1. Do the same for your sales invoice

	|	MwSt	|	Total Artikel	|	Total	|	Recapitulation					|	
	| ---------	|:-----------------:|:---------:|:---------------------------------:|
	|	empty	|	15.00 & 20.00	|	35.00	|	35.00, no tax displayed / added	|

	
