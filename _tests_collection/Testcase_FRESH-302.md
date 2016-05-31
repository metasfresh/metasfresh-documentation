---
title: IT FRESH-302
required data:
   bpartner: bpartner G000X (customer & vendor)
   inouts: sales & purchase inouts of G000X
provided data:
   print format: different print formats for sales inout
---

# IT FRESH-302
### make inout print preview faster
> Testcase to check if performance of inout print preview 
> has improved.


1. Set print format for bpartner G000X in C_BP_PrintFormat to Lieferschein 

1. Open a sales inout of bpartner G000X (if possible, select one with a high number of inout lines), press print preview

	* => Jasper opens in <10s
	
1. Change print format for bpartner G000X in C_BP_PrintFormat to Lieferschein Customer Individual, Lieferschein mit ADR Attribut, etc. (also set it to Null)

1. After every change in print format, go to the sales inout of bpartner G000X, press print preview again

	* => Jasper opens in <10s (correct format is displayed!)
	
1. Open a purchase inout for bpartner G000X (if possible, select one with >1 inout line), press print preview

	* => Jasper opens in ~30s
	
1. Open Wareneingang POS, select an orderline of bpartner G000X where an inout was made (if possible, select one where several inouts were made for the same order and 
	products had different ASI set), press Drucken Produktanlieferung

	* => Jasper opens in ~30s