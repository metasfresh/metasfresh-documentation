---
title: IT FRESH-596
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
layout: default
---

### #297 Performance problems related to zoom-to
> Testcase to check the performance on zoom-across for documents

**OLCand**

1. go to Auftragsdisposition and select a C_OLCand which has an order for it 

2. (optional) if you can't find one, you have to import an edi file and to do Transaktion Ferigaben from Gear
	
3. press the zoom-across button
	* => it takes around 3 seconds to open the dropdown for the related documents

**Sales and purchase order**

1. go to Sales order and select a document which has invoice(s) and inout(s) for it

2. (optional) if you can't find one, you have to create a new sales order, go to lieferdispo and create inout from gear. Then go to rechnungsdispo and create invoice from gear
	
3. press the zoom-across button
	* => it takes around 4-8 seconds to open the dropdown for the related documents

4. go to purchase order and select a document which has invoice(s) and inout(s) for it

5. (optional) if you can't find one, you have to create a new purchase order, go to wareneingang pos and create inout from HU. Then go to rechnungsdispo and create invoice from gear

6. press the zoom-across button
	* => it takes around 4-8 seconds to open the dropdown for the related documents

	
**Sales and purchase InOut**

1. go to sales and purchase inout and pick one document of each

2. press the zoom-across button
	* => it takes around 2-5 seconds to open the dropdown for the related documents
	
**Sales and purchase invoice**

1. go to sales and purchase invoice and pick one document of each

2. press the zoom-across button
	* => it takes around 2-4 seconds to open the dropdown for the related documents
	
**Invoice Candidate**

1. go to invoice candidates window and open one which has invoice for it

2. press the zoom-across button
	* => it takes around 1 second to open the dropdown for the related documents	
	
	