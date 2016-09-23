---
title: IT FRESH-692
required data:
   bpartner:  bpartner G000X (customer), G000Y (customer, vendor), G000Z (vendor)
   products: P0001, P0002
layout: default
tags:
  - dropship
---
## #403 Callout error when opening Shipment window

> Testcase to check if dropship callouts work fine

**Dropship callouts**

1. go to sales order and create a new one 

2. add bpartner G000X and all mandatory data, save

3. set isDropShip on Y
	* => new fields appear for dropship bpartner, location and address
	* => those fields are already set with bpartner G000X name, location and address

4. change the dropship bpartner to G000Y
	* => location gets empty, you have to set it manually
	* => address didn't change yet

5. set a dropship location
		* => address updated accordingly (before save)

6. go to sales inout

7. create a new one, manually

8. add bpartner G000X and all mandatroy data, save

9. set isdropship on Y
	* => new fields appear for dropship bpartner, location and contact user
	* => the fields are empty
	
10. set dropship bpartner to G000Y
	* => location and contact user are still empty but you can set them manually

**Dropship propagation**

1. create a new sales order, bpartner G000X

2. go to product window, select product P0001, go to product bpartner subtab 

3. create 2 new entries: one G000Z, used for vendor, current vendor and one for G000Y used for customer, isDropShip, set C_BPartner_Vendor_ID on G000Z

4. go back to your sales order and set dropship bpartner to G000Y, set location, save

5. add products P0001, and P0002 (this one does not have bpartner product with G000Z)

6. complete order and zoom in to shipment schedule
	* => both are made for bpartner G000Y
	* => one with P0001 has isDropShip on Y, vendor bpartner G000Z
	* => one with P0002 has isDropShip on N, vendor bpartner field is hidden

7. gear, create inout
	* => inout created with bpartner G000Y
	* => isDropShip is on N (dropship related fields are hidden)
	

	