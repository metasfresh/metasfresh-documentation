---
title: IT FRESH-510
required data:
   bpartner: bpartner G000X (vendor)
   flatrate term: Lagerkonferenz (Karotten)
   products: P0001 (Karotten)
layout: default
tags:
  - Label
---
## Report "Wareneingangsbeleg" with Information "1." / "2. Waschprobe" ergänzen

> Testcase to check if "Waschprobe" is displayed
> correctly on Wareneingangsetikett.

1. Create a Material-Vorgang (material tracking) for G000X, with flatrate term Lagerkonferenz (Karotten), 

1. Create a purchase order for P0001 (Karotten), for e.g. 5 TUs, and change the Attributes in orderline: set the material tracking you created

1. Select your orderline in Wareneingang POS, open the HU Editor (with e.g. 2 TUs)

1. Click Alles auswählen, then click Waschprobe

1. Select 1 TU, click Etikett drucken, then click Wareneingangsetikett
	* => label has "Waschprobe" displayed in bold, at the top
	
1. Create an inout with the 2 TUs, then open the editor once more with the remaining 3 TUs (don't set Waschprobe for them!)

1. Select 1 TU, click Etikett drucken, then click Wareneingangsetikett
	* => label does not have "Waschprobe" displayed
	



