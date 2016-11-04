---
title: IT FRESH-705
required data:
   bpartner: bpartner G000X (customer), G000Y (vendor)
   products: P0001
   HUs: TU A
   pricelists: customer pricelist CP, vendor pricelist VP   
layout: default
tags:
  - tracking report
---
## #418 Improve sales and purchase tracking reports

> Testcase to check if the tracking reports' performance improved and the filters work correctly.

1. Create a sales order for G000X, for P0001:
	* high qty (so you can create a higher number of inouts)
	* set only 1 or no attributes for P0001!

1. Create a purchase order for G000Y, for P0001, high qty (so you can create a higher number of inouts)

1. Create the material receipt, and make sure that:
	* the attributes of the HUs are empty (except for SSCC and weight)
	* the destination warehouse = warehouse from your sales order
	
1. Open Kommissionier Terminal, and select G000X and your order (date & P0001)

1. Open the 2nd window for picking:
	* => if you set an attribute in your order, the HUs from your material receipt will not be displayed, only if you uncheck the consider attribute button
	* => if you did not set an attribute in your order, the HUs from your material receipt will all be displayed
	
1. Make several pickings, with 1 HU each, but set attributes in the HUs first:
	* 1st: Bio, GMAA, CH
	* 2nd: Bio, GMNF
	* 3rd: Bio, DE
	* 4th: Freiland
	* 5th: don't set anything, but note the SSCC
	* 6th: MHD: day of test (MHD, not Mindesthaltbarkeit!)
	* 7th: Bio, GMAA & GMNF, CH, Inland, MHD
	
1. After each picking, create the resp. inout with Lieferdispo, Gear, Erstellen mit kommissionierter Menge

1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* ASI: empty
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => inouts displayed with date, P0001, bpartner etc., inouts #s 1-7
	
1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* ASI: Bio
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => inouts displayed with date, P0001, bpartner etc., inouts #s 1, 2, 3, 7
	
1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* ASI: GMAA
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => inouts displayed with date, P0001, bpartner etc., inouts #s 1, 2, 7 (the filter works for AdR in general, not the specific GMAA, or GMVF; the lines also show only AdR, instead of GMAA etc.)
	
1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* ASI: DE, Ausland
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => no inouts are displayed, since none match the filters

1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* ASI: Bio, CH
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => inouts displayed with date, P0001, bpartner etc., inouts #s 1 & 7 	
	
1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* ASI: AD
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => no inouts are displayed, since none match the filter

1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* bpartner: G000Z
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => no inouts are displayed, since none match the filter	
	
1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* ASI: SSCC from 5th inout
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => no inouts are displayed: SSCC is no attribute that is relevant for / displayed in the inout (you can check the actual 5th inout: SSCC is not displayed in Merkmal), therefore there is no result in the report
	* => works the same for Unterlieferant: it's not displayed in the inout, therefore there would be no result in the report
	
1. Run the sales tracking report "Verkaufsstatistik", set filters for dates & org so that your inouts are covered, plus:
	* ASI: MHD: day of test (note: Mindesthaltbarkeit cannot be set as filter for these reports)
	
1. Check the Excel:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => inout displayed with date, P0001, bpartner etc., inout 6
	
1. Test similarly for purchase tracking report "Einkaufsstatistik", test with different dates & org in filter too:
	* => Excel report only takes a couple of secs to open
	* => the filters you set are displayed at the top
	* => material receipt is displayed if org & dates are matching, no ASI (only 1 though, since there was only 1 material receipt used for 1 sales order!)
	* => if you set ASI (with org & dates matching), no material receipt is displayed since the HUs had none in Wareneingang
	
	
**NOTE:** this task was a follow-up for FRESH-567, so for more details on the reports pls check the IT doku for that!

