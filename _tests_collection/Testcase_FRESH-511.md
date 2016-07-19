---
title: IT FRESH-511
required data:
   bpartners: G0001, G0002
   product: P0001 (raw product), P0002 (finished product), P0003 (co-product), P0004 (by-product), TU1; P0005, TU2
   Packing instruction: for P0001 on TU1, for P0005 on TU2
   Warehouse: WH1, WH2
   Flatrates: Flat1, Flat2, both for partner G0001, Product P0001, different Conditions; Flat3 gor G0002, for all packing materials
layout: default
tags:
  - Flatrate
  - Invoice candidates
  - Material tracking
---
## Error in material tracking if one partner has two contracts (with different conditions) for the same product


**Washproble Multiple Flatrates**

1. Create a material tracking for G0001, P0001

2. Set a flatrate term for it (create one if it doesn't exist)

3. Create a Purchase order for partner G0001, P0001, TU1, WH1, Qty > 500

4. Set the material tracking  and parzelle above into the order line's ASI

5. Complete the order

6. GO to Wareneingang POS, select your receipt schedule

7. Move to WH2

8. Select everything, select washprobe

9. Select everything, OK

10. Create a new Manufacturing Order:
    * Target document type: Waschprobe
    * Material-Vorgang-ID: the one you set in your Material-Tracking
    * Produkt: P0002
    * Warehouse: WH2
    * Menge: 500
    
11. Open Produktion Fertigstellungs POS, select WH2, select the slot of your manufacturing order

12. Perform Zuteilung (Action Issue) for all the TUs

13. Perform Empfang (Action Receipt) for each of the products: P0002, P0003, P0004

14. Close the manufacturing order

15. Go to the created invoice candidates

16. Perform Awswahl Fakturieren for the invoice candidates above
    * => OK: There are 2 invoices created: One for the TU1 and one for the rest of the products
    * => OK: There is no error in the console regarding the contracts
    


** Regression: Invoicing for partner with Gebinde flatrate - SO part**

1. Create a sales order for partner G0002, P0005 on TU2

2. Complete the order, go to the created shipment schedule

3. Create a shipment out of it, complete the shipment

4. Check the created invoice candidates
    * => OK: 3 invoice candidates created
    * => OK: the invoice candidate for TU and the one for LU are both with Zur Verrechnung (IsToClear) on true
	
5.Create an invoice out of the linked invoice candidates
    * => OK: Invoice only for the product line
   


** Regression: Invoicing for partner with Gebinde flatrate - PO part**

1. Create a purchase order for partner G0002, P0005 on TU2

2. Complete the order

3. Go to Wareneingang POS, to the created receipt schedule

4. Select all, OK

5. Go to created Receipt

4. Check the created invoice candidates
    * => OK: 3 invoice candidates created
    * => OK: the invoice candidate for TU and the one for LU are both with Zur Verrechnung (IsToClear) on true
	
5.Create an invoice out of the linked invoice candidates
    * => OK: Invoice only for the product line
