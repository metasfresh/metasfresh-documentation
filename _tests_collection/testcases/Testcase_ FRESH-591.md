---
title: IT FRESH-591
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
layout: default
---

### #292 Automatically add reference no from purchase order to invoice candidate
> Testcase to check if the reference no is set in invoice candidates

**Reference number propagation**

1. Create a new purchase order for bpartner G000X and add 2 products, P0001, P0002

2. set a reference number, save and complete 

3. zoom in on the created invoice candidates
    * => 2 invoice candidates are created, for products P0001 and P0002. Both have the reference number you set on step 2

4. Go to receipt pos and create 2 inouts (1 per product)
	* => 2 inouts are created and both have the reference number empty

5. zoom in to invoice candidates
    * => new invoice candidates are created for the handling units. All have the reference number you set on step 2

6. Go to gear and create an invoice
	* => invoice was created with the same reference number 	
