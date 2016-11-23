---
title: IT FRESH-834
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
layout: default
tags:
  - Request
  - UI
---
## #548 keep M_QualityNote and M_AttributeValue in sync

> Testcase to check the relation between M_QualityNote and M_AttributeValue.

1. Open window Quality Note:
	* => all currently available types of quality note
	* => names can be changed
	* => performance type can be set

1. Also open window Merkmal (Attribute), select Qualitäts Notiz, and go to tab Merkmals-Wert:
	* => same results as in Quality Note, all currently available types of quality note
	* => names are read only and cannot be changed
	* => new one cannot be created, button is read only too
	
1. Create a new quality note in Quality Note:
	* set some name for testing
	* set a value in Suchschlüssel (if you don't, you will get an exception!)
	* set a performance type if you like
	
1. Check Merkmal (Attribute), Qualitäts Notiz, tab Merkmals-Wert, try changing / deleting it:
	* => the new quality note is displayed
	* => it cannot be changed / deleted
	
1. In Quality Note, make changes to your new quality note (name, performance type):
	* => changes can be made without problems or errors
	
1. Create a purchase order for G000X, use P0001 & P0002, on TU A & TU B

1. In Wareneingang POS, create receipts:
	* => set quality discount and your new quality note for P0001
	* => set quality discount and an older quality note for P0002
	
1. Check request (Vorgang alle) for new entries:
	* => 2 new requests were created
	* => info about products, receipts, purchase order all correct
	* => quality note is set in field Beanstandung as set in Wareneingang
	
1. Check the receipts as well:
	* => quality notes are displayed with ASI (if set) in receiptlines
	
1. Create another new quality note in Quality Note, then delete it:
	* => deleting works as well