---
title: IT FRESH-713
required data:
   bpartner: bpartner G000X (customer)
   products: P0001
   pricelists: customer pricelist CP  
layout: default
tags:
  - Invoicing
---
## #428 NPE when reversing an invoice including a product with inactive UOM conversion

> Testcase to check if reversing an invoice including a product with inactive UOM conversion does not cause a NPE.

1. Make sure P0001 has different price & product UOM, and an active UOM conversion

1. Create a sales order for G000X, for P0001:
	* product UOM: Pce
	* price UOM: Kg (or the other way round)
	
1. Create the inout, and the invoice

1. Check the invoice candidate for P0001:
	* => IC is completely invoiced

1. Set the UOM conversion for P0001 inactive, save

1. Reverse the invoice you created:
	* => no NPE
	* => invoice is reversed normally
	
1. Go back to invoice candidates:
	* => IC for P0001 has error and msg about UOM conversion problem
	* => IC is not completely invoiced anymore, and can be invoiced again (if the UOM conversion is set active again)
	
1. Set the UOM conversion for P0001 active again, save

1. Uncheck the Error checkbox in the invoice candidate for P0001, save, refresh:
	* => IC is updated: no more error, IC can be invoiced again

1. Create the invoice again:
	* => invoice is created ad before