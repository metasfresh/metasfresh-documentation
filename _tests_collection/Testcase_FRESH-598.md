---
title: IT FRESH-598
required data:
   bpartner: bpartner G000X (customer & vendor)
   HUs: TU A, TU B 
layout: default
tags:
  - Jasper
  - language
---
## #299 FRESH-598 Report "Leergutausgabe" from Window "Lieferantenrücklieferung"

> Testcase to check if the correct language is used in Jasper for RMA inouts.

1. Open bpartner window, search for G000X

1. Set language to french

1. Open window Kundenrücklieferung

1. Create inouts for G000X as customer, for each doctype (Leergutrücknahme, Saldokorrektur, Kundenwarenrückgabe)

1. Add lines for Gebinde TU A, TU B (>1 qty), complete

1. Print preview the inouts:
	* => all headers are in french
	* => product names (TU A, etc.) are in french as well (if not, check Product, tab Translation to make sure a translation exists!)
	* => name of document is in french too (if not, check DocType, tab Translation to see if the translation exists!)
	
1. Open window Lieferantenrücklieferung

1. Repeat the same for all doctypes there:
	* => all headers are in french
	* => product names (TU A, etc.) are in french as well (if not, check Product, tab Translation to make sure a translation exists!)
	* => name of document is in french too (if not, check DocType, tab Translation to see if the translation exists!)
	
