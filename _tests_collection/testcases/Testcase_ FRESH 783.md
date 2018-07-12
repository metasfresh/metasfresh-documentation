---
title: IT FRESH-783
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - Request
---
## #500 Migration: Create Requests for all inout lines with quality issues

> Testcase to check last changes in request.

1. Create a sales order and the resp. shipment for G000X, for P0001 & P0002

1. From the shipment, create a request (click button Anfrageverfolgung):
	* => Vorgangsart: Kundenbeanstandung
	* => G000X and no. of shipment set
	* => Note (Notiz) has to be set manually, as the product: shipment contains >1 line! various notes possible!
	
1. Create a new request manually:
	* => doctype: Kundenbeanstandung
	* => Beanstandung field: empty initially, values from quality note selectable in dropdown
	
1. Open M_QualityNote, select 2 different quality notes you can set in Wareneingang POS and set a performance type for them
	
1. Create a purchase order and a receipt for G000X, for P0001 & P0002:
	* receipt 1: P0001: partial receipt with quality issue & quality note (one of the 2 you selected in Quality Note before))
	* receipt 2: P0001: 2nd partial receipt with quality issue & quality note (same as before)
	* receipt 3: P0002: partial receipt with quality issue & quality note (the other one of the 2 you selected in Quality Note before)
	* receipt 4: P0002: partial receipt without quality issue
	
1. Check Request window:
	* => 3 new requests for your receipts
	
1. Check the new requests:
	* => doctype: Lieferantenbeanstandung, Notiz: Qualitätsabzug Wareneingang, with G000X and resp. product, receipt no.
	* => quality note set in Wareneingang POS is displayed in Beanstandung
	* => performance type for the 2nd and 3rd receipt as set for the quality note you selected

1. Run Bericht Reklamationen, for G000X, and dates covering day of test:
	* => receipt 1: with no., and ff. since there are >1 receipts with issues for the orderline
	* => receipt 2: with no., no ff. since there is only 1 receipt with quality issue for this orderline
	* => quality note set is displayed in Beanstandung
	* => performance type is displayed as set