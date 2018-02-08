---
title: IT FRESH-441
required data:
   bpartner: bpartner G000X (customer & vendor)
   products: P0001
layout: default
---

### Notification bar in Material Receipt (POS) covers OK Button
> Testcase to check if notifications bar is above ok button from material receipt pos

**Notification bar**

1. Make a sales order, business partner G000x, product P0001, complete

2. make a purchase order, business partner G000x, product P0001, complete

3. go to material receipt pos and receive P0001 from your purchase order
    * => when your inout is created, a notification bar appears
    * => while you are in material receipt pos, notice you can select the line and press ok while the notification bar is still there
    * => notification bar lasts 20s and if you press on the document number, the document opens

4. go to your sales order and zoom in to shipment schedule 

5. gear, create a completed inout
    * => when your inout is created, a notification bar appears
    * => while you are in shipment schedule window you can see the history/ changelog
    * => if you go to material receipt pos you can see/use the ok button 

6. go to invoice candidate window and filter for both orders you created in steps 1 and 2

7. gear, create invoice, deselect the first checkbox and select the second one, press ok
    * => when the invoices are created, 2 notification bars appear, one above the other
    * => while you are in invoice candidates window you can see the history/ changelog
    * => if you go to material receipt pos you can see/use the ok button 