---
title: IT FRESH-861
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001 (carrots unwashed), P0002 (carrots washed)
   HUs: TU A
   flatrate term: flatrate term for carrot washing cycles  
   warehouses: I, II & III
layout: default
tags:
  - HUs
  - Attributes
---
## #579 Handling units without washing cycle shall be allowed in washing Manufacturing Order

> Testcase to check if HUs without attribute washing cycle are allowed in washing Manufacturing Order too.

1. Make sure you have a SysConfig for destination warehouses being set for attributes Waschprobe 1 / 2, and material tracking (see https://metasfresh.atlassian.net/browse/FRESH-794):
	* for warehouse I: if attribute Waschprobe 1, it has destination warehouse II 
	* for warehouse I: if attribute Waschprobe 2, it has destination warehouse III

1. Create a new material tracking for G000X, for P0001, with the flatrate term for carrot washing cycles, set a number you like

1. Create a purchase order for G000X:
	* warehouse I
	* P0001, 1 TU A, set the material tracking no. you created, Waschprobe 1
	* P0001, 1 TU A, set the material tracking no. you created, Waschprobe 2
	* P0001, 5 TU A, set the material tracking no. you created, no Waschprobe
	
1. Open Wareneingang POS, select warehouse I, G000X, your purchase order:
	* => 3 orderlines:
		* => P0001, 1 TU A, destination warehouse: II
		* => P0001, 1 TU A, destination warehouse: III
		* => P0001, 5 TU A, no destination warehouse set
	
1. Create material receipts for the first 2 orderlines, leave the destination warehouse as set

1. Create 2 partial material receipts for the 3rd orderline:
	* 2 TUs A, with destination warehouse: II
	* 2 TUs A, with destination warehouse: III
	
1. Create a Manufacturing Order for washing:
	* warehouse: II
	* product: P0002
	* qty: e.g. 250kg
	* bpartner: G000X
	
1. Open Produktion Fertigstellung POS, select warehouse II, and the PP_Order you just created

1. Click Zuteilung:
	* => HU Editor opens with:
		* => the HUs from the 1st material receipt, with attribute Waswchprobe 1
		* => the 2 HUs from the 3rd material receipt, where you set destination warehouse: II,  without attribute Waswchprobe 1 / 2
		
1. Create a Distribution Order:
	* 3 TUs of P0001
	* warehouse III, destination warehouse II
	
1. Go back to Produktion Fertigstellung POS, select warehouse II, and your PP_Order 

1. Click Bereitstellung POS, select your Distribution Order

1. Select the HU from 2nd material receipt, with attribute Waschprobe 2, and 1 HU 3rd material receipt, where you set destination warehouse: III,  without attribute Waswchprobe 1 / 2, OK
	* => the HUs you selected are moved to warehouse II

1. Back in Produktion Fertigstellung POS, select warehouse II, and your PP_Order again

1. Click Zuteilung once more:
	* => HU Editor opens with:
		* => the HU from the 1st material receipt, with attribute Waswchprobe 1
		* => the 2 HUs from the 3rd material receipt, where you set destination warehouse: II,  without attribute Waswchprobe 1 / 2
		* => the HU from the 2nd material receipt, with attribute Waswchprobe 2, which you moved with DD_Order
		* => the 2 HUs from the 3rd material receipt, where you set destination warehouse: III,  without attribute Waswchprobe 1 / 2, which you moved with DD_Order