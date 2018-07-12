---
title: IT FRESH-484
required data:
   bpartner: bpartners G000X & G000Y (customer & vendor)
   products: P0001, P0002
   orders: sales orders   
layout: default
tags:
  - Distribution
  - UI
---
## Error creating manual DD_Order

> Testcase to check manual Distribution Orders
> can be created without errors.

1. Open Distribution Order

1. Press New, and set Distribution Order in DocType
	* => no errors
	
1. Set bpartner, Transit Warehouse etc. save

1. Add one or more movement lines, select products, qties, packing instructions, warehouses etc., save
	* => no errors
	* => qty product is calculated directly when qty TU is set etc.
	
1. Complete the order, and create the movements with Bereitstellung POS
	* => qties, warehouses and packing instructions are displayed in Bereitstellung POS as set in Distribution Order
	
1. Go back to Distribution Order
	* => qty moved in Bereitstellung is displayed correctly as Gelieferte Menge in movement line
	* => if the whole qty was moved, then Zugestellt is checked in movement line
	

Regression:

1. Open Material Receipt, create a new one with DocType Produktanlieferung

1. Set G000X as vendor, (set a warehouse), save
	* => address of G000X is set automatically
	* => if a default contact is set for G000X, it is taken as well; if several are set, you can select them
	
1. Change vendor to G000Y
	* => address is updated to the one of G000Y
	
1. Open Shipment, create a new one with DocType Lieferschein

1. Set G000Y as customer, (set a warehouse), save
	* => address of G000X is set automatically
	* => if a default contact is set for G000X, it is taken as well; if several are set, you can select them
	
1. Change  customer to G000Y
	* => address is updated to the one of G000Y
	
1. In order, set the doc no. of an existing sales order of G000X, enter
	* => G000X is set as customer 
	* => address is updated to the one of G000X

	
