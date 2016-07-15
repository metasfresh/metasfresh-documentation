---
title: IT FRESH-435
required data:
   bpartner: bpartner G000X
   locations: Loc1 (default location of G000X), Loc2 (default handover location of G000X), Loc3 (handover location of G000X), Loc4 (all location for G000X)
   order candidates: OLCands for G000X
   picking slots: Slot 3 (for Loc3), slot 4 (for Loc4)
layout: default
tags:
  - Order Candidates
  - Orders
  - Shipment Schedules
  - Picking Terminal
---
## EDI wrong handover location in Picking Terminal

> Testcase to check if the handover address is propagating correctly from Order Candidates

1. Order Candidate Handover_Location_Override
* Import the OLCands for G000X (e.g. with WinSCP), open Auftragsdisposition, look for your import
    * => OK: the order candidates created with the C_BPartner_Location Loc1
    * => OK: the order candidates created with the Handover_Location Loc2
* For one of the order candidates set Handover_Location_Override to Loc3
* Go to the gear of the Order Candidate, run the process Transaktion Freigaben
* Go to the created Sales Order
    * => OK: Abladeort: Loc 3 set as handover location
* Note: The handover location is not displayed in the Shipment schedule
* Go to Picking terminal, select the product for which the order candidate was created
* Select the slot of Location Loc3
* Pick the qty, close the box, exit Picking Terminal
* Go to Verdichtung POS, select the partner G000X
    * => OK: There is a slot for Loc3
* Open the slot for Loc3, select the schedule, set a shipper transportation
* Complete the shipment,
* Go to the completed shipment
    * => OK: The shipment is made for Loc3
* Go to the invoice candidates linked with the shipment
* Create an invoice oput of them
* Go to the created invoice
    * => OK: The invoice is made for Loc1
* Print preview in the invoice
    * => OK: The report contains Loc3 on the Lieferschein line
    
2. Order Candidate Handover_Location
* Import the OLCands for G000X (e.g. with WinSCP), open Auftragsdisposition, look for your import
    * => OK: the order candidates created with the C_BPartner_Location Loc1
    * => OK: the order candidates created with the Handover_Location Loc2
* Go to an order candidate from the ones above
* Go to the gear of the Order Candidate, run the process Transaktion Freigaben
* Go to the created Sales Order
    * => OK: Abladeort: Loc 2 set as handover location
* Note: The handover location is not displayed in the Shipment schedule
* Go to Picking terminal, select the product for which the order candidate was created
* Select the slot of Location Loc4
* Pick the qty, close the box, exit Picking Terminal
* Go to Verdichtung POS, select the partner G000X
    * => OK: There is a slot for Loc4
* Open the slot for Loc3, select the schedule, set a shipper transportation
* Complete the shipment,
* Go to the completed shipment
    * => OK: The shipment is made for Loc4
* Go to the invoice candidates linked with the shipment
* Create an invoice oput of them
* Go to the created invoice
    * => OK: The invoice is made for Loc1
* Print preview in the invoice
    * => OK: The report contains Loc4 on the Lieferschein line