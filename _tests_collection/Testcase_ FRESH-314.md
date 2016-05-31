---
title: IT FRESH-314
required data:
   bpartner: bpartner G000X & G000Y (both EDI customer)  
   products: P0001, P0002
   pricelist: customer pricelist for G000X & G000Y, including P0001 & P0002
   OLCands: for G000X, including P0001 & P0002, qty > 1 for both
---

# IT FRESH-314
### Foreign BPartner reference included in sales order C_Order.C_BPartner_ID
> Testcase to check if all changes & updates made are correctly
> logged and displayed in Changelog.


1. Make sure that Maintain Changelog is checked for OLCands, C_Invoice_Candidate, M_Inout 

1. Make sure Role Admin has Changelog enabled as well 

1. Log in as User S, Role Admin, and have your OLCands imported

1. In the OLCands of P0001 and P0002, change bpartner from G000X to G000Y (Geschäftspartner abw.), also change the location to G000Y's, save
	
	* => Geschäftspartner eff. is set to G000Y, Standort eff. is set to G000Y's
	
1. Check the changelog
	
	* => Created by: System, Updated by: User S
	
1. Create the sales order for your OLCands by running Transaktion Freigeben for your import

1. Open the sales order(s) for the OLCands of P0001 and P0002, zoom into Invoice Candidates

1. Check the changelog

	* => Created by: EDI-ORDERS Import Automatic User
	
1. Zoom into Lieferdispo, create the inout with Gear, Auswahl liefern (note the time!)

1. Zoom into the inout, and reduce the qty for both products P0001 and P0002

1. Save and complete the inout, check the changelog

	* => Created by: User S, Updated by: User S

1. Go back to the Invoice Candidates, check the changelog

	* => Created by: EDI-ORDERS Import Automatic User, Updated by: User S
	
1. Go back to the OLCands of P0001 and P0002, check the changelog again

	* => Header: Created by: System, Updated by: EDI-ORDERS Import Automatic User 
	* => Table: Updated by: EDI-ORDERS Import Automatic User (new), User S (old) 

1. In database, run

	```sh
	SELECT * 
	FROM AD_Changelog 
	WHERE AD_PInstance_ID IS NOT NULL
 	AND TrxName ilike 'GenerateInOutFromShipmentSchedules'
 	AND Created>='2016-05-24 16:20:00' 
 	AND Created>='2016-05-24 16:25:00'
 	```
 	*Data for Created shall cover the time when you created the inout, this is just an example!*
 	
1. Open Prozess-Revision, and search for Prozess-Instanz (ID): = the one you received from the query above

	* => all info about the process creating your inout, e.g. User, protocol etc.
	
