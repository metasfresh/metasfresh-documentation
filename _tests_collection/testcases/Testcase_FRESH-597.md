---
title: IT FRESH-597
required data:
   bpartner: bpartner G000X (customer)
   products: P0001
   pricelists: customer pricelist CP   
layout: default
tags:
  - Update
  - Shipment schedule
  - UOM
---
## #298 ShipmentSchedule updating fails on missing UOM conversion

> Testcase to check if the shipment schedules update correctly if a UOM conversion is missing.

1. Open Product window, search for P0001

1. Check the UOM, make sure a UOM conversion exists:
	* UOM: e.g. PCE
	* UOM conversion: 0.01 / 10 for PCE / Kg

1. Open pricelist CP, search for P0001

1. Make sure the price UOM is different from the product UOM (or set it differently for testing!)
	* e.g. Price UOM: Kg
	* Price 3.00 EUR per Kg
	
1. Create a sales order for G000X, for P0001, for 10 PCE
	* => orderline for 10 PCE P0001
	* => product UOM: PCE, price UOM: Kg
	* => price: 3.00 (10 PCE = 1 Kg)
	
1. Zoom into the shipment schedule, when it's created
	* => Maßeinheit: PCE
	* => Netto (offen): 3.00
	
1. Go back to Product, UOM Conversion, and deactivate the conversion

1. In Lieferdispo, refresh (change sth like e.g. Prio, and save, so refreshing is necessary)
	* => Netto (offen) is now set to -1.00, because of the missing conversion
	
1. Create the inout with Auswahl liefern
	* => inout is created without errors, despite Netto (offen) was changed and the UOM conversion is missing