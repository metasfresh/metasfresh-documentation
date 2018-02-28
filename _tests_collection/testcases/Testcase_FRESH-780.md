---
title: IT FRESH-780
required data:
   bpartner: bpartner G000X (customer)
   products: P0001
layout: default
tag: WebUI
---

### #497 WebUI - ShipmentSchedule Window
> Testcase to check Shipment Schedule window

**Shipment Schedule**

1. open webui and press on home button

2. select browse whole tree
	* => new page opens with a menu
	* => in section LIEFERUNG you can see window Lieferdisposition

3. open Lieferdisposition 
	* => it opens in grid view
	* => there are the following fields: Geschäftspartner, Produkt, Bestellt eff., Liefermenge, Geliefert, Offen, Massenheit, Auftrag, Auftragsdatum, Referenz, Lager

4. Select a random entry and duble click on it
	* => you see it in detail view
	* => there are the following fields: Produkt, Ausprägung Merkmals-Satz, Bestellt eff., Liefermenge, Auf Packzettel, Geliefert, Offen, Massenheit, Lager, Bestand
	Belegart, Geschäftspartner, Verwendeter Adress-Text, Auftrag, Auftragsdatum, Referenz, Bereitstellungsdatum eff.
	* => there is also an included tab, with lines for packing
	
5. go back to home, select browse whole tree, and open new sales order

6. create a new sales order, with 2 products: 1 shall have hu and attributes, and the other one no hu and no attribute

7. set different dates for ordered and promised and complete it

8. go to Referenced documents and select Lieferdispo
	* => Lieferdispo window opens in grid mode, with 2 lines (1 for each product)
	* => dates, qtys and other data are the same as in order

9. (adding a new line for HU in lieferdispo is not implemented yet)
	
10. go to Actions select Auswahl Liefern
	* => a window pops up and you can't select anything from outside of this window
	* => you can select to make inout with kommissionierung qty or directly (Lieferung(en) Fertigstellen)
	* => the second one is already selected

11. press on start
		* => window closes
		* => soon you will see that you have a new unread message
		
12. select the notification message
	* => Lieferung window opens with the new created inout, in detail view

13. go back to lieferdispo and select the Referenced documents
	* => there is one with Shipment

14. select shipment from Referenced documents
	* => Lieferung window opens with the new created inout, in detail view
	
15. open lieferdispo window again and right click on any entry (also use right click on the right side, when the page ends)
	* => small pop-up with actions: open in new tab, delete
	
16. select open in new tab
	* => lieferdispo opens in new tab

17. select another entry in lieferdispo, right click and select delete
	* => pop-up opens with "Are you sure?"
	
18. while the pop-up is opened try to click outside it
	* => you can't do anything else while the pop-up is there

19. press on delete
	* => if the lieferdispo is processed an error appears that you cannot delete 
	* => pop-up closes and the line is removed or not (depends if you can delete it or not) 
	
**Stress Test**

1. Open Lieferdispo window, in grid view, and navigate from one page to another
	* => no errors
	
2. Open Lieferdispo window, in grid view, and navigate to page 5

3. Go to home, select browse whole tree, and open Sales Order window
	* => shall open on page 1
	
4. Open Lieferdispo window, in grid view, and navigate from page 1 to page 6

5. order fields by product

6. navigate from page 1 to 6
	* => each page shows the right products, ordered