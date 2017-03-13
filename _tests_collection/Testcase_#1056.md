---
title: IT gh#1056
required data:
   bpartner: bpartner G000X, G000Y and G000Z (vendor and cusomer)
   products: P0001
layout: default
tags:
  - bpartner relation
---
## #1056 Purchase Order from Sales Order process, wrong InvoiceBPartner

> Testcase to check invoice BPartner in purchase order

0. Setup:
	* have bpartner G000X customer and vendor, with no invoice address
	* have bpartner G000Y customer and vendor, with at least one invoice address
	* have bpartner G000Z customer, with invoice address
	* have product P0001 with bpartner G000X as current vendor and used for vendor, and another one used for vendor only

1. go to BP Relation window and create a new one for G000X no address and G000Y as proxy, with the address that is used for invoice. Set isBillTo on Y

2. go to purchase order and create a new one, set bpartner G000X
	* => bill bpartner is G000Y

3. go to purchase order and create a new one, set bpartner G000Y
	* => bill bpartner is G000Y
	
4. go to sales order and create a new one, bpartner G000Z
	* => bill bpartner is G000Z

5. add product P0001 and complete

6. gear, select Purchase Order from Sales Order process, start
	* => new purchase order was created
	* => bpartner G000X and bill bpartner G000Y
	
7. create a new sales order, bpartner G000X, product P0001
	* => bill bpartner is G000Y

8. Make Purchase order from sales order
	* => new purchase order was created
	* => bpartner G000X and bill bpartner G000Y

9. create a new sales order, bpartner G000Y, product P0001
	* => bill bpartner is G000Y
	
10. Make Purchase order from sales order
	* => new purchase order was created
	* => bpartner G000X and bill bpartner G000Y

11. Go to bpartner G000X and add an invoice address

12. create a sales order with G000X, product P0001
	* => bill bpartner is G000X

13. make Purchase order from Sales order
	* => new purchase order was created
	* => bpartner G000X and bill bpartner G000X