---
title: IT FRESH-594
required data:
   bpartner: bpartner G000X (vendor)
layout: default
tags:
  - Performance
  - Jasper
---
## #295 sql in purchase inout takes too long

> Testcase to check if the performance of purchase inout jasper was improved.

1. Select / create a purchase inout for G000X with a lot of lines, that still has at least 1 orderline open in Wareneingang POS

1. Select the line in Wareneingang POS, and click Drucken Produktanlieferung:
	* => jasper for purchase inout opens, without much waiting (~1-1 sec.)
	
1. Open window Wareneingang, search for one of your inoutlines, and do print preview:
	* => jasper for purchase inout opens, without much waiting (~1-1 sec.)
	
1. Get the queries (old & new one) for retrieving the inout jasper, run them on db:
	* => execution cost and duration is much lower for the new query

