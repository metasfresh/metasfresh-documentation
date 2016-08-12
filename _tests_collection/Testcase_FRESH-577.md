---
title: IT FRESH-577
required data:
   bpartner: bpartner G000X (customer), G000Y (vendor)
   products: P0001
   User: User U and Default User Z for G000Y
layout: default
tags:
  - bpartner contact
  - Email
---
## #274 Purchase Order without BPartner Contact, Billto Contact wrong email

> Testcase to check if the bpartner contact and the billto contact email are set correctly.

1. Open window bpartner, search for G000Y

1. Make sure User U is set as billto contact for purchase orders, User Z is set as default user, and both have email addresses

1. Also make sure that the User_ID of U is lower than the ID of Z (if not, create a new user as default user; the default one should have the higher / highest ID)

1. Open window product, search for P0001, open tab bpartner

1. Make sure that P0001 is set for G000X as customer, and G000Y as the current vendor

1. Create a sales order for G000X, with P0001 in orderline

1. Gear, select Bestellung aus Auftrag generieren, OK

1. Open the purchase order that was created for the sales order:
	* => vendor: G000Z
	* => billto contact: User U
	* => warehouse: the same as in the sales order
	
1. Change the warehouse, save, check billto contact:
	* => billto contact: still User U
	
1. Click the Email button, select Email:
	* => address of recepient: User U's email address
	
1. In the purchase order, delete User U as billto contact, save

1. Click the Email button again, select Email:
	* => address of recepient: Default User Z's email address
	


