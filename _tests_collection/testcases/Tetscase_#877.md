---
title: IT gh#877
required data:
   bpartner: bpartner G000X (cendor)
   products: P0001, P0002, P0003
   HUs: TU A, TU B
   pricelists: vendor pricelist VP   
layout: default
tags:
  - Jasper
---
## #877 Make "Wareneingang POS (Jasper)" report work with M_ReceiptSchedule_ID as parameter

> Testcase to check if the Wareneingang POS (Jasper) works as before after the changes.


1. If possible, create a Wareneingang POS (Jasper) before this task is rolled out, or try and find an older one that contains the latest changes before this task!

1. Create a purchase order with sev. orderlines:
	* P0001, 5 x TU A
	* P0002, 10 x TU B
	* P0003, 8 x TU A
	
1. In Wareneingang POS, create several inouts for each orderline:
	* use the ordered type of TU
	* use another type of TU if possible, or Virtual PI
	* set different ASI
	* set quality discount & quality note
	
1. Run the Jasper:
	* => products, TU types, qties, attributes etc. are displayed correctly
	* => product with same TU type and attribute are summed up
	* => product with different TU type / attribute has sum in extra line
	* => product with quality note is displayed underneath the one which has same attribute / TU type, quality note displayed, and discount in %
	* => general info like date, bpartner, receipt no.s etc. are all displayed correctly, no cut-offs etc.
	* => TUs with type and qties are displayed correctly in Gebinde
	* => Gebindesaldo is displayed underneath, with Gebinde from receipts, empties inouts etc.
	* => correct Header & Footer, as before
