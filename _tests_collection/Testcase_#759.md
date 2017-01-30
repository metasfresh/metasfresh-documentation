---
title: IT #759
required data:
   bpartner: bpartner G000X (customer)
   products: P0001
   HUs: TU A
   pricelists: customer pricelist CP   
layout: default
tags:
  - shipment
  - HUs
---
## #759 Destroyed HU causes problem with shipment creation

> Testcase to check if destroying HUs in Kommissionierung does not cause problems in shipment creation.


1. Create a sales order for G000X, with P0001 on several TU A, e.g. 10 TU A x 6 Pce

1. Open the shipment schedule:
	* => qty to deliver: 60
	* => Auf Packzettel: 0
	
1. Open Kommissionier Terminal, select G000X and your sales order

1. Open the Picking Terminal, and add / take out qty:
	* add 6 Pce with Hinzuf
	* close the Gebinde
	* add another 6 Pce with Hinzuf
	* take out the last 6 Pce with Entfernen
	* add another 6 Pce wiht Hinzuf
	* close the Gebinde
	
1. Open your shipment schedule again, refresh:
	* => Auf Packzettel: 12
	* => 2nd tab: action from Kommissionier Terminal is shown: Qty picked, with neg. qty for the HUs that were destroyed with Entfernen
	
1. Create a shipment, checking Erstellen mit kommissionierter Menge:
	* => the shipment for the 12 PCs is created
	
1. Complete the shipment, and go back to shipment schedule, refresh:
	* => qty to deliver: 48
	* => Auf Packzettel: 0
	
1. Create another shipment, don't check Erstellen mit kommissionierter Menge:
	* => the shipment for the remaining 48 PCs is created
	* => no errors or problems because of the HUs that were destroyed
	
1. Change the qty to deliver to 12, save and complete the shipment

1. Go back to shipment schedule, refresh:
	* => qty to deliver: 36
	* => Auf Packzettel: 0
	
1. Repeat the picking process, adding qty and taking it out again, use Verteilen this time as well, so that you have another 12 Pce picked overall

1. Create the shipment for the picked qty, complete it

1. Go back to shipment schedule, refresh, and create a shipment for the remaining qty:
	* => qty to deliver: 24
	* => Auf Packzettel: 0
	* => shipment for 24 Pce is created
	* => no errors or problems because of the HUs that were destroyed
	
1. Complete the latest shipment, refresh the shipment schedule
	* => qty to deliver: 0
	
1. Also make sure that reactivating, reversing or deleting of the shipment work fine; in complete / create them again after that
	* => should all work without problems, and in case of reversing or deleting of the shipment, the shipment schedule qty to deliver will be updated correctly
	* => the shipments that were reversed or deleted are displayed as "Deactivated" in the 2nt tab of shipment schedule
