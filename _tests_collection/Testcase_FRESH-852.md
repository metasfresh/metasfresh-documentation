---
title: IT FRESH-852
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A
   pricelists: vendor pricelist VP   
layout: default
tags:
  - WebUI
  - Material Receipt
---
## #567 WebUI - Material Receipt Schedule

> Testcase to check Material Receipt Schedule in WebUI.


**Material Receipt Schedule Look**

1. Open webui, click the home button

1. Click browse whole tree
	* => new page opens with a menu
	* => in section WARENEINGANG you can see window Wareneingangsdisposition

1. Open Wareneingangsdisposition 
	* => Opens in grid view, starting with the schedules from the "oldest" Bestellung (see order no. in column Bestellung)
	* => following fields are displayed: Bestellung, Geschäftspartner, Produkt, Bereitstellungszeit, Bestellte Menge, Bewegungsmenge, Bewegt, Maßenheit, Ziel-Lager, Ausprägung Merkmal

1. Select a random entry and double click on it
	* => detail view
	* => following fields are displayed: Belegart, DB-Tabelle, Bestellung, Auftragsdatum, Bereitstellungszeit, Produkt, Ausprägung Merkmals-Satz, Bestellte Menge, Maßeinheit, Qualitätsabzug %,
	Qualität-Notiz, Lager, Lager abw., Ziel-Lager, Bewegungs-Datum, Priorität, Lieferart, Bewegungsmenge abw., Priorität Abw., Lieferart abr.,Lieferung, Lieferung durch abw., Geschäftspartner,
	Geschäftspartner abw., Standort abw., Ansprechpartner abw., Anschrift-Text, Anschrift-Text abw., Verarbeitet, Status, Kopf-Aggregationsmarkmal, Gebindekonfiguration, Verpackungskapazität, Packbeschreibung,
	Packaging Material, HU Prepared, Bewegte TU-Menge
	* => included tabs, with lines for receipts and Handling Unit Assignment
	
1. Click the list button at the top right:
	* => all Material Receipt Schedules are displayed in the list, with the latest one at the top
	* => you can browse through the list, and the different pages
	
1. Double click on of the schedules in the list:
	* => the selected Material Receipt Schedule opens in single view
	
	
**Using Material Receipt Schedule**
	
1. Click home, select browse whole tree, and open Neue Bestellung

1. Create a new purchase order, for G000X:
	* with P0001 on TU A and P0002 as Virtual PI
	* for P0001 set attributes (if none are set already), for P0002, don't set attributes

1. Set different dates for ordered and promised, then click the actions button:
	* => no material receipt schedules created yet
	
1. Complete the order, click the actions button again:
	* => material receipt schedules were now created (3)

1. Select the Wareneingangsdisposition in referenced documents:
	* => Wareneingangsdispo window opens in grid mode, with 3 lines (1 for each product, 1 for the TU)
	* => dates, qtys and other data are the same as in order
	
1. Try editing things, e.g. product, or qty ordered:
	* => not possible
	
1. Open 1 Wareneingangsdispo in single view, try editing things again:
	* => you can edit several things, like e.g warehouse, product, ASI, qty, but not e.g. bpartner
	
1. Click actions button, select Advanced Edit:
	* => a window pops up and you can't select anything from outside of this window
	* => you can edit several fields, like e.g warehouse, product, ASI, qty, but not e.g. bpartner
	* => note: no referenced documents for Wareneingangsdispo!
	
1. Click actions button, select Wareneingangsdispo zu Wareneingang:
	* => a window pops up and you can't select anything from outside of this window
	* => you can select Lager, and Datum von / Datum bis, also checkbox for creating movement

1. Select the warehouse from your purchase order, and set dates so that your Wareneingangsdispos are covered, then click Start:
	* => window closes
	* => notifications button is updated, new unread messages
		
1. Select the notification message:
	* => Wareneingang window opens with the new created receipt, in detail view

1. Go back to Wareneingangsdispo: 
	* => qty in Bewegt is now updated, with the qty that was received (= the ordered qty)
	* => included tab for receipts show the receiptline from your Wareneingang (Handling Unit Assignment is empty, since no "real" HUs were received)
	
1. Go back to your purchase order, check the referenced documents:
	* => Wareneingang is now displayed as well, besides Wareneingangsdispo
	
1. Select your Wareneingang, check the referenced documents there as well:
	* => Bestellung is referenced (no reference to Wareneingangsdispo, which has no references itself!)
	
1. Open Wareneingangsdispo window again, in grid view, and right click on any entry (also use right click on the right side, when the page ends):
	* => small pop-up with actions: open in new tab, delete

1. Select open in new tab:
	* => Wareneingangsdispo opens in new tab, in single view

1. Select another entry in grid view, right click and select delete:
	* => pop-up opens with "Are you sure?"
	
1. While the pop-up is opened try to click outside it:
	* => you can't do anything else while the pop-up is there

1. Click delete:
	* => if the Wareneingangsdispo is processed an error appears, you cannot delete 
	* => pop-up closes and the line is removed or not (depends if you can delete it or not) 
	
1. Filter for e.g. a date, or qty ordered (ascending / descending), and skip / jump through the pages / from page to page:
	* => Wareneingangsdispo should keep the order from your filter, no matter how you moved from page to page



