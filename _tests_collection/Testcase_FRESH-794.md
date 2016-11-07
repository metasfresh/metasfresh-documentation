---
title: IT FRESH-794
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001 (carrots)
   HUs: TU A
   flatrate term: for carrots washing test (Waschprobe)s, with storage of carrots
   pricelists: vendor pricelist VP   
   warehouses: warehouses with IDs A, B & C
layout: default
tags:
  - washing test (Waschprobe)
---
## #505 Possibility to define multiple washing test (Waschprobe)cycles for Carrots

> Testcase to check the possibility of multiple washing test (Waschprobe)cycls for carrots

1. Log in as SysAdmin and create 2 new SysConfigs:
	* QualityInspectionWarehouseDest.A.1, set value: B
	* QualityInspectionWarehouseDest.A.2, set value: C
	
1. Log out, and in again as Admin

1. Check distribution network for warehouse A

1. Create a material tracking for G000X, for P0001: 12345
1. Create a material tracking for G000X, for P0001: 12345

1. Create a purchase order for G000X with:
	* warehouse: A
	* P0001: 1 TU A, set attributes: material tracking 12345, washing test (Waschprobe) 1
	* P0001: 1 TU A, set attributes: material tracking 12345, washing test (Waschprobe) 2
	* P0001: 10 TU A, set attributes: material tracking 12345, NO washing test (Waschprobe) 
	* => washing test (Waschprobe)cycle 1 / 2 are selectable attributes
	* => only washing test (Waschprobe) is not selectable as attribute!
	
1. Open Wareneingang POS, warehouse A, select your purchase order:
	* => destination warehouse for orderline 1: B
	* => destination warehouse for orderline 2: C
	* => destination warehouse for orderline 3: not set, selectable are the warehouses which are set in the distribution network for warehouse A
	
1. Open orderline 1 & 2 in HU Editor:
	* => washing test (Waschprobe) can be changed, 1 / 2
	* => old washing test (Waschprobe) attribute is still included in the editor, but cannot be set anymore
	
1. Print preview the Wareneingangsetikett for the 2 TUs:
	* => washing test (Waschprobe) 1 / 2 is displayed at the top of the label
	
1. Create the receipt, check the receiptlines in Wareneingang, and print preview the receipt:
	* => washing test (Waschprobe) 1 / 2 is not displayed as attribute in the receiptline, and not in the receipt
	
1. Check the material tracking you created:
	* => 1st tab: qty of TUs for washing test (Waschprobe):
	* => 6th tab, HUs: column for washing test (Waschprobe): 1 / 2 displayed for the resp. HU you received, old washing test (Waschprobe) attribute still displayed
	
1. Create a PP_Order, doctype washing test (Waschprobe), for your material tracking 

1. In db, change the attributes of the TU from 2nd receipt:
	* take out washing test (Waschprobe) 2
	* set the old washing test (Waschprobe) attribute
	
1. Open Produktion Fertigstellung POS, select your PP_Order:
	* => button for the PP_Order says "washing test (Waschprobe)"
	
1. Click Zuteilung (Action Issue):
	* => TU from 1st receipt is displayed, NOT from the 2nd receipt
	
1. In db, change the attributes of the TU from 2nd receipt back to what they were before

1. Click Zuteilung (Action Issue) again:
	* => both TUs from the 1st & 2nd receipt are now displayed