---
title: IT FRESH-766
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   pricelists: vendor pricelist VP   
layout: default
tags:
  - HU Editor
  - production
---
## #482 Unable to issue certain HUs to a PP_Order

> Testcase to check if issuing HUs to a PP_Order works fine.

1. Open Stücklistenkonfig, make sure P0001 has P0002 as ingredient

1. Create a PP_Order, doctype Poduktionsauftrag, with a high qty for P0001 (e.g. 1.000 kg), so you will need several HUs of P0002 for the production (the problem only appears when issuing e.g. 10 HUs at once)

1. Create a purchase order for P0002, with a high qty (e.g. 200 TUs)

1. In Wareneingang POS, select the warehouse of your PP_Order as destination warehouse (if you can't select it, create a DD_Order for moving P0002 to the production warehouse)
 
1. Create the material receipt, with several LUs (e.g. 10 LUs with 20 TUs each, or 20 LUs with 10 TUs each)

1. Open Produktion Fertigstellung POS, select your PP_Order

1. Click Zuteilung (Issue):
	* => the HUs from your material receipt are displayed in the HU Editor
	
1. Select e.g. 10 LUs, Auswählen, OK:
	* => HU Editor closes, button for ingredient is updated with issued, turns yellow / green
	
1. Open the HU Editor again:
	* => the HUs you selected before are not displayed anymore, all were issued correctly
	
1. Issue another 10 HUs or more:
	* => works the same, all HUs were issued, none of the selected ones remain in HU Editor 
	
 


