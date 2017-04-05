---
title: IT gh#1174
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: customer pricelist CP
   picking slot: for G000X / Dynamic
layout: default
tags:
  - Picking
  - Shipment
  - UI
---
## Shipment problem when different order lines are commissioned into one HU

> Testcase to check if shipment works correctly when different order lines get commissioned into one HU.


1. Create 2 sales orders, for G000X:
	* both have the same delivery address and date promised
	* 1st order: P0001, small qty (>1 TU A)
	* 2nd order: P0002, small qty (>1 TU B)
	
1. Open Kommissionier Terminal, select both orderlines, OK
	* => 2nd window for Kommissionierung opens

1. Select a picking slot for your orders

1. Select P0001, then TU A:
	* => picking slot is updated with TU A
	* => Hinzuf., Verteil. & Entfern. become usable
	* => overall qty ordered of P0001 is set 
	
1. Add P0001 to the picking slot by using Hinzuf. (DON'T close yet!):
	* => product slot of P0001 turns green
	
1. Add P0002 to the same picking slot, click Schliessen afterwards:
	* => product slot of P0002 turns green
	
1. Open the shipment schedule (Lieferdispo) for P0001:	
	* => qty you commissioned is displayed in Auf Packzettel
	
1. Check the 2nd tab Liefer-/ Kommissioierzeile, and zoom into the HU displayed there:
	* => TU A is displayed
	* => Handling Unit window opens: TU A has status picked
	
1. In shipment schedule, create the inout, using "Erstelllen mit kommissionierter Menge", and complete the inout
	* => inout for P0001 is created
	* => inout is displayed in 2nd tab for TU A 
	
1. Check the HU again, also tab Lagerung:
	* => status is now shipped
	* => tab Lagerung shows both P0001 & P0002
	
1. Open shipment schedule for P0002, also check the 2nd tab:
	* => qty you commissioned is displayed in Auf Packzettel
	* => TU A is displayed, but no inout yet (since the inout was created for the 1st order!)
	
1. Create the inout, using "Erstelllen mit kommissionierter Menge", and complete the inout:
	* => no error, inout is created for P0002
	* => this 2nd inout is now displayed in 2nd tab for TU A 
	* => inout shows only the product from order / shipment schedule in 1st tab and Jasper
	* => both products and the HU value are displayed in tab HU Assignment
	
1. Check the Handling Unit window for TU A once more, tab HU Assignment:
	* => both inouts are displayed there, with the resp. inoutlines
	* => when you click Datensatz-ID, you get to the resp. inout, for each order
	* => HU value for both inouts is the same though, since you used only 2 TU!
	
1. Create another 2 sales orders for G000X, for both P0001 and P0002, with both TU A and B, but order a higher qty this time (e.g. 1 full TU each, or on Virtual PI)

1. Create several partial inouts (e.g. 3 partial inouts per product), using both TU A & TU B in Kommissionier Terminal:
	* change the qty to > qty ordered for a product, then add this to the picking slot with Hinzuf.
	* add qty also > qty ordered for the other product with Hinzuf.
	* after commissioning, create the inouts from shipment schedule, for kommissionierte Menge and complete the inouts
	
1. Check the inouts and the shipment schedules, as well as the HUs:
	* => inouts are created separately, for each order and each product (so overall 6, e.g.), but show both products in tab HU Assignment
	* => shipment schedules are updated accordingly: qty from commissioning is displayed in Auf Packzettel, after inout in Geliefert
	* => HU used in picking is displayed in tab Liefer- /Kommissionierzeile, without inout after picking & with inout after inout created
	* => HU is picked after commissioning, shipped after the 1st (!) inout is created
	* => HU shows both products in tab Lagerung
	* => HU shows both inouts in tab HU Assignment
	* => 2nd inout can be created without problems or errors, shows the same HU as the 1st one and both products in tab HU Assignment
	
	
**Note:** It's not necessary that P0001 and P0002 both have a CU-TU Zuordnung with both TU A and B, you should be able to use both in Kommissionier Terminal for picking both products; however, if TU A is not available for P0002,
then you can't set the picking slot when P0002 is first selected: you have to select the product for which the TU is available first to set it for the picking slot, but you should be able to add another product when the picking 
slot is set with the TU.