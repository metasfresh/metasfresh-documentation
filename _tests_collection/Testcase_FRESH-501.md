---
title: IT FRESH-501
required data:
   bpartner: bpartner G000X (customer)
   products: P0001, P0002
   HUs: TU A, TU B, LU C, LU D
   AD_Orgs: Org I, Org II
layout: default
tags:
  - HUs
  - InOut
---
## Wrong LU taken in InOut Generate

> Testcase to check if the correct LU is taken in InOut.

1. Log in with each Org in 2 different clients! Test for Org I and Org II in the resp. client!

1. Make sure G000X is customer for both Org I and Org II

1. Open window Packvorschrift

1. Set LU C as standard LU for Org I, and LU D as standard LU for Org II (checkbox in first tab, Packing Instruction)

1. Set TUs A as Unter-Packvorschrift (M_HU_PI_Item) for LU C, and TU B for LU D

1. Open Product, search for P0001

1. Create a CU-TU allocation for P0001, with TU A x 1, for G000X

1. Repeat for P0002, with TU B

1. Create a sales order, for Org I:
	* G000X as customer
	* P0001 on 10 TU A
	
1. Zoom into Lieferdispo, and create the inout with gear, Auswahl liefern (don't check Fertigstellen!)
	* => inout is created
	
1. Zoom into the inout
	* => 10 TU A for P0001
	* => 1 LU C
	* => status: Draft
	
1. Set qty TU to e.g. 5, save and complete the inout

1. Open Kommissionier Terminal, for the warehouse set in the sales order above

1. Open the orderline for your sales order

1. Select a picking slot, your product, and TU A

1. Pick another 3 TUs with Verteilen, OK

1. Go to Verdichtung, open the HU Editor for your bpartner and his location
	* => 3 TUs A

1. Select all your TUs, and click LU zuteilen
	* => only LU C is selectable
	
1. Put your TUs on the LU, select a Speditionsauftrag, and create the inout by clicking Lieferschein erstellen

1. Check the inout
	* => the inout includes the LU C you selected before
	
1. Repeat testing for Org II, with a sales order for:
	* G000X as customer
	* P0002 on 10 TU B
	
1. Check the inouts:	
	* => LU D was taken as LU for both
	
	
	
**Regression:**

1. Use Kommissionier Terminal for picking the remaining 2 TUs (each order separately, for each Org)

1. Create the inouts with Lieferdispo, gear, Erstellen mit kommissionierter Menge

1. Check the inouts:
	* => no LUs are included!
