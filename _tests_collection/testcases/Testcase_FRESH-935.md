---
title: IT FRESH-935
required data:
   bpartner: bpartner G000X (customer or vendor)
   products: P0001
   HUs: TU A
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - WebUI
  - UI
  - Invoicing
---
## #68 Error message when pressing "IsManual" in Invoice Candidates

> Testcase to check if pressing "IsManual" in Invoice Candidates does not cause an error.

1. Open WebUI

1. Create a new sales order or purchase order for G000X, with P0001 on TU A, complete

1. Jump to Invoice Candidate (Rechnungdisposition), double click for single view

1. Click the checkbox for "IsManual" in your invoice candidate:
	* => no error, "IsManual" is checked
	* => Rechnungskand.-Controller: updated to Manuell
	
1. Click the chekcbox again:
	* => no error, "IsManual" is not checked anymore
	* => Rechnungskand.-Controller: empty again

