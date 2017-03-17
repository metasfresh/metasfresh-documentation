---
title: IT gh#1153 - 
required data:
   bpartner: G000X (customer), G000Y(vendor)
   products: P0001, P0002
   Packing materials: TU1 and TU2 (for P0001), T3 and T4 (for P0002)
   Pricelists: PL1 (for customer); PL2(for vendor)
   
   
layout: default
tags:
  - Pricing 
---
## ##1153 Pricing wrong w/ more than 1 Packing Instruction 

Preparing data: 
* Add product prices for P0001: 
    * for no TU, no attributes
    * for TU1, for T2, no attributes
    * for attributes, no TU
    * for TU1 with attributes, marked as Standard

* Add product prices for P0002: 
    * for no TU, no attributes
    * for TU3, for T4, no attributes
    * for attributes, no TU
    * for TU3 with attributes, marked as Standard
    
> Testcase to make sure the ASIs for default prices are correctly taken in orderlines
> Regression on pricing



## Purchase orders 

1. Create a new purchase order for G000X

2. Insert line for P0001, TU1
    => OK: the attributes from the standard price are directly set in the line
    => OK: The price is the standard one

3. Insert line for P0001, TU2
    => OK: the product specific attributes set in asi
    => OK: the correct price is set (for TU2, with correct attributes in order of Matching Order value)

4. Regression: Add lines for all combinations
    => OK: prices are correctly set based on TU and attributes, and Matching Order value

## Sales Orders



1. Create a new purchase order for G000Y

2. Insert line for P0002, TU3
    => OK: the attributes from the standard price are directly set in the line
    => OK: The price is the standard one

3. Insert line for P0002, TU4
    => OK: there is no asi set for the line
    => OK: the correct price is set (for TU4)

4. Regression: Add lines for all combinations
    => OK: prices are correctly set based on TU and attributes, and Matching Order value

