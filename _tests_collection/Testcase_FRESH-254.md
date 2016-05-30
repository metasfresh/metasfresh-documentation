---
title: IT FRESH-254
required data:
   bpartner: bpartner G000X (customer & vendor)
   HUs: TU A, TU B 
---

# IT FRESH-254
### Customer-Vendor Returns manual flag
> Testcase to check if manually created 
> Customer-Vendor Returns have the manual flag
> set to Y automatically.


1. Open window Kundenrücklieferung, create a new one (Leergutrücknahme) for G000X
 
	* => Manuell (manual flag) is checked automatically
	
1. Open window Lieferantenrücklieferung, create a new one (Leergutausgabe)for G000X

	* => Manuell (manual flag) is checked automatically
	
1. Open Wareneingang POS, select a warehouse

1. Click Leergut, select Leergutausgabe and create an empties inout for G000X with TU A, TU B

1. Check the Leergutausgabe that was created

	* => Manuell (manual flag) is not checked
	
1. Go back to Wareneingang POS, select a warehouse

1. Click Leergut, select Leergutrücknahme and create an empties inout for G000X with TU A, TU B

1. Check the Leergutrücknahme that was created

	* => Manuell (manual flag) is not checked


