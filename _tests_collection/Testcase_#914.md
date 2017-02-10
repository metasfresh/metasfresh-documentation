---
title: IT gh#914
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   HUs: TU A, TU B, TU C, LU X, LU Y, LU Z
   pricelists: vendor pricelist VP   
layout: default
tags:
  - Jasper
---
## #914 Customs Report Weight adjustment

> Testcase to check the weight adjustment in custom report.

1. Make sure P0001 and P0002 have several different types fo TUs and LUs available for usage

1. Check the weight of each packing item you will use in window Produkt

1. Create a purchase order for G000X:
	* P0001, 10 TU A
	* P0002, 5 TU B
	
1. Open Wareneingang POS, select the first orderline for P0001 and create partial inouts:
	* use TU A on LU X
	* use TU A on LU Y
	* use TU A on LU Z
	* use TU A without LU
	* use TU C without LU
	
1. Create partial inouts for P0002 as well:
	* use TU B on 2 LU X
	* use TU B on LU Y, set quality discount
	
1. Open window Wareneingang, and in Gear, select Zolldokument drucken:
	* => customs report "Hausverzollung", with G000X, date of inout
	* => Artikel displays P0001 & P0002
	* => each HU number is displayed in "Paletten-Nr.", with LU or TU no.
	* => Menge brutto shows the gross weight
	* => no HU is displayed twice!
	
1. Check the gross weight displayed for each inout you created:
	* => TU A on LU X: weight of product + weight of TU A
	* => TU A on LU Y: weight of product + weight of TU A
	* => TU A on LU Z: weight of product + weight of TU A
	* => TU A without LU: weight of product + weight of TU A
	* => TU C without LU: weight of product + weight of TU C
	* => TU B on 2 LU X: weight of product + weight of TUs B
	* => TU B on LU Y: weight of product + weight of TUs B