---
title: IT FRESH-875
required data:
   bpartner: bpartner G000X (vendor), G000Y (customer)
   HUs: TU A, TU B 
layout: default
tags:
  - UI
---
## #597 Empties mask and functionality with autom. set the selected bpartner

> Testcase to check if the empties mask opens with the bpartner selected in Material Receipt automatically set.

1. Make sure you have orderlines for G000X in Material Receipt (Wareneingang) POS

1. Open Material Receipt (Wareneingang) POS, select a warehouse

1. Click the Empties button:
	* => Empties mask opens, no bpartner is set yet
	
1. Select G000X:
	* => orderlines are displayed
	
1. Click the Empties button again:
	* => Empties mask opens, G000X is already set automatically
	
1. Select some HUs, set a qty, OK
	* => Empties document was created for G000X, type: Leergutausgabe, with the HUs & qties as selected
	
1. Select one of the orderlines of G000X, and click the empties button again:
	* => Empties mask opens, G000X is already set automatically
	
1. Select some HUs, set a qty, OK
	* => Empties document was created for G000X, type: Leergutausgabe, with the HUs & qties as selected

1. While the orderline is selected, click the empties button again:
	* => Empties mask opens, G000X is already set automatically
	
1. Click Leergutrücknahme, set G000Y as bpartner, select some HUs, set a qty, OK
	* => Empties document was created for G000Y, type: Leergutrücknahme, with the HUs & qties as selected