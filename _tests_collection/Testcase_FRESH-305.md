---
title: IT FRESH-305
required data:
   bpartner: bpartner G000X (vendor)
   products: P0001, P0002
   distribution network: for Material Receipt Warehouse W1
layout: default
---

# IT FRESH-305
### Reduce Warehouse Dropdown List in Wareneingang (POS)
> Testcase to check if a Material Receipt Warehouse
> has only those destination warehouses selectable
> for an inout, which are set as such in its distribution 
> network.


1. Create a purchase order for G000X
	* set Material Receipt Warehouse W1
	* add orderlines for P0001 and P0002
	
1. Check distribution networks that have Distribution Network Lines with source warehouse = W1: (the following is an Example!)

	|	Distribution Network		|	Source Warehouse		|	Destination Warehouse		|	
	| -----------------------------	|:-------------------------:|:-----------------------------:|
	|	Distribution Network I		|	W1						|	DW 1						|	
	|	Distribution Network II		|	W1						|	DW 2						|				
	|	Distribution Network III	|	W1						|	DW 3						|	

	
1. Complete the purchase order, open Wareneingang POS	

1. Select Material Receipt Warehouse W1 and your orderline

1. In your orderline for P0001, click in field for destination warehouse (Ziel-Lager)

	* => selectable are only DW 1, DW 2 and DW 3
	
1. Do the same for orderline for P0002

	* => selectable are only DW 1, DW 2 and DW 3
	
1. Add another distribution network line with an additional destination warehouse in one of the distribution networks including W1 as source warehouse

1. In one of your orderlines in Wareneingang POS, click in field for destination warehouse (Ziel-Lager) once more

	* => the additional destination warehouse is now selectable as well
	
1. Repeat the testcase with selecting another Material Receipt Warehouse in your purchase order

	* => selectable as destination warehouse are only those warehouses which are set as destination warehouse for your selected Material Receipt Warehouse in the distribution networks

