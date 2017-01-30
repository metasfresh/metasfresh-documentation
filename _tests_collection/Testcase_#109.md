---
title: IT FRESH-1179
required data:
   bpartner: G000X (customer or vendor)  
layout: default
tags:
  - WebUI
---
## #109 No field for zip code when entering address

> Testcase to check if the pricelist of an order is updated correctly if the bpartner is changed.

1. Go to BPartner window and create a new one, or pick an already existing one (G000X)

2. Go to Location subtab and create a new location

3. Press on "Edit attributes" 
	* => you can add Address1, Address2, Address3, Address4, ZIP, City and Country 

4. add some data, set ZIP code, done
	* => you can see the whole address you set up in the line

5. right click on the line - advanced edit

6. update the zip code, save
	* => zip code is now changed on the line	

7. Check a window where the address field is shown: 

8. e.g. Create a new Sales order, add bpartner G000X and wait for Shipment Schedule

9. open Shipment Schedule
	* => ZIP code is set in address