---
title: IT FRESH-339
required data:
   bpartner: bpartners G000X, G000Y, G000Z, G000A (customers)
   order candidates: OLCands for G000X
   bpartner relation: between G000X & G000A
layout: default
tags:
  - UI
  - Order Candidates
---
## Order Candidates BPartner Change does not effect Delivery Adress

> Testcase to check if the delivery address is
> updated correctly after the BPartner is changed
> in Order Candidates.


1. Make sure that G000X and G000Z both have 1 delivery location, and G000Y & G000A have >1 delivery addresses (check which location has the highest ID!)

1. Make sure G000X has Partner Relation with G000A as the proxy, with one of its location set as Abladeort

1. Make sure that G000Z and G000A have **no Partner Relation**

1. Import the OLCands for G000X (e.g. with WinSCP), open Auftragsdisposition, look for your import

	* => Geschäftspartner & Geschäftspartner eff.: G000X
	* => Standort & Standort eff.: delivery location of G000X
	* => Übergabe an & Übergabe an eff.: G000X
	* => Übergabeadresse & Übergabeadresse eff.: delivery location of G000X
	* => Lieferempfänger & Lieferempfänger eff.: G000X 
	* => Lieferadresse: delivery location of G000X 

1. Select 1 OLCand and set G000Z in Geschäftspartner abw., save

	* => Geschäftspartner eff.: G000Z
	* => Standort abw. & Standort eff.: delivery location of G000Z
	
1. Select another OLCand and set G000Y in Lieferempfänger abw., save

	* => Lieferempfänger eff.: G000Y
	* => Lieferadresse abw. & Lieferadresse eff.: delivery location of G000Y with the highest ID
	
1. Select another OLCand and set G000A in Übergabe an abw., save

	* => Übergabe an eff.: G000A
	* => Übergabeadresse abw. & Übergabeadresse eff.: location of G000A from Partner Relation Proxy
	
1. Try changing the Übergabeadresse abw.

	* => all locations which are set as Abladeort (Unloading location) for  G000A are selectable
		
1 Go back to the OLCand where G000Z is now set as Geschäftspartner eff.

1. Try to set G000A in Übergabe an abw. in this OLCand

	* => G000A does not pop up, you **can not** set it since there is no relation between the partners!
	
1. Delete G000Z as Geschäftspartner abw., save

	* => G000X is now Geschäftspartner eff. again
	
1. Now try once more to set G000A in Übergabe an abw. in this OLCand

	* => G000A can be set as Übergabe an abw.
	* => Übergabe an eff.: G000A
	* => Übergabeadresse abw. & Übergabeadresse eff.: location of G000A from Partner Relation Proxy