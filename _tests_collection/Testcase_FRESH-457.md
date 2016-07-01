---
title: IT FRESH-457
required data:
   bpartner: bpartner G000X (customer & vendor)
   users: 2 users A & B for G000X
layout: default
tags:
  - Email
---
## Make recipient of the mail configurable in Process SendPDFMailsForSelection

> Testcase to check if Emails sent from Doc_Outbound are sent
> to the correct recipient,  who can now be configured in Email  
> Server Routing.

1. Make sure you have the correct set up for sending Emails fron Doc_Outbound (Ausgehende Belege), [see IT for Procurement: Mail in BPartner language, other eMail Address]({{ site.baseurl }}/Testcase_FRESH-203)

1. Also make sure you don't have the AD_Sysconfig for DebugMailTo set active (or else all outgoing mails will be send to this DebugMailTo address!)

1. Open EMail Server Routing

	* => new column Column User To
	
1. For different Document BaseTypes, set Column User To: 

	| Document BaseType | Column User To   |
	| ----------------- | ---------------- |
	| Purchase Order    | Rechnungskontakt |
	| Purchase Invoice  | Ansprechpartner  |
	| Sales Invoice     | Ansprechpartner  |

	
1. Open bpartner, search for G000X

1. Make sure you have only one bill location (Rechnungsanschrift)

1. Check which user, A or B, is the "oldest" user linked to that bill location (=> lowest User_ID)

	* => in my test, it was User A (with Default contact checked!)
	
1. Set 2 different email addresses for users A and B

1. Create a purchase order for G000X, with user A as Ansprechpartner (AD_User_ID) and user B as Rechnungskontakt (Bill_User_ID)

1. Create a sales order for G000X, DON'T set a certain user as Ansprechpartner or Rechnungskontakt (the "oldest" user, who is usually default, linked to that bill location will be set automatically)

1. Create the respective inout (Lieferschein) for your sales order, and the respective invoices

1. Open Doc_Outbound (Ausgehende Belege), search for G000X and the date of test

	* => all orders, inout & invoices you created are displayed
	
1. Press gear, Auswahl als Email an Geschäftspartner senden:

	| Email for        | User receiving Email                      |
	| ---------------- | ----------------------------------------- |
	| Purchase Order   | User B (Bill_User_ID)                     |
	| Sales Order      | User A (AD_User_ID & Bill_User_ID)	       |
	| Purchase Invoice | User B (AD_User_ID)                       |
	| Sales Invoice    | User A (AD_User_ID)                       |
	| Purchase Inout   | User A (AD_User_ID)                       |
	| Sales  Inout     | User A (AD_User_ID)                       |

	* note: invoice and inout don't have a Bill_User_ID column, only an AD_User_ID!
	* the Bill_User_ID from order will be used as the AD_User_ID in invoice
	* the AD_User_ID from order will be used as the AD_User_ID in inout
	* if no config is set in EMail Server Routing for a Doctype, then the "oldest" user linked to the bill location is used instead (which usually is also used as default user when creating the order)
	* the same happens, if the config is set to Column User to = Bill_User_ID, but the column Bill_User_ID does not exist in the Doctype (e.g. invoice and inout)


