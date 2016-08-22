---
title: IT FRESH-558
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002, P0003
layout: default
tags:
  - Invoicing
---
## #251 Invoice Candidates double invoiced

> Testcase to check if invoice candidates are not invoiced twice because they weren't updated.

**Note:** We had different cases on live where invoice candidates weren't updated and therefore invoiced twice; one of them was a problem with a missing UOM conversion,
which is the case we chose for testing here.

1. Open AD_SysConfig, and make sure that de.metas.invoicecandidate.api.impl.InvoiceCandInvalidUpdater.ItemsPerBatch has value = 1

1. Open Product window, search for P0001

1. Check the UOM, make sure a UOM conversion exists:
	* UOM: e.g. PCE
	* UOM conversion: 0.01 / 10 for PCE / Kg

1. Open pricelist CP, search for P0001

1. Make sure the price UOM is different from the product UOM (or set it differently for testing!)
	* e.g. Price UOM: Kg
	* Price 3.00 EUR per Kg
	
1. Create a sales order for G000X, add P0001, P0002, P0003 (> 1 TU)
	 * => UOM of product in PCE for P0001, while price UOM is Kg
	 
1. Create the inout for your sales order

1. Open Rechnungsdispo, search for the invoice candidates of your sales order
	* => IC for P0001: price is for qty in Kg
	
1. Go back to Product window, search for P0001

1. Deactivate the UOM conversion

1. In Rechnungsdispo, click Gear, Auswahl fakturieren to create the invoice
	* => invoice is created for P0002, P0003 and Gebinde used in the inout
	* => invoice candidates for P0002, P0003 are processed after the invoice is created
	* => invoice candidates for Gebinde are processed after the invoice is created
	* => invoice candidate for P0001 is NOT processed, but has an error about the missing UOM conversion

1. Go back to Product window, search for P0001 and activate the UOM conversion

1. Go to invoice candidates, select the one with error 

1. Set the error checkbox on N

1. Click Gear, Auswahl fakturieren to create the invoice
	* => invoice is created for P0001
	* => invoice candidate for P0001 is processed after the invoice is created
	* => invoice candidates for P0002, P0003 and gebinde are still processed and nothing changed
	
