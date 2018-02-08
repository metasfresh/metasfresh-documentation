---
title: IT gh#277 - webui
required data:
   bpartner: G000X (vendor) 
   products: P0001 
   Packing Material: TU1
   CU-TU config for TU1 and P0001
   
layout: default
tags:
  - Material Receipt Workflow
---
## #277 Processed HU in Material Receipt Workflow

> Testcase to make sure the processed HUs look different than the un-processed ones



1. Create a purchase order for G000X
    * Add line for Produyct P0001 on TU1

2. GO to its receipt schedules, select the one for the CU product
    
3. Go to the quick actions, select Receive HUs
    * Select 5 LUs, 5 TUs and 1 CU
    * => OK: All HUs are displayed
    
4. Select one HU (by clicking on the LU line or TU line)
    
5. Call " Create Material Receipt" 
    *=> OK: The HU you created a material receipt for has now a ligh-grey backgroud
    
6. Select another HU
   
7. Call " Create Material Receipt" for it too
    * => OK: This HU also has now a ligh-grey backgroud 
    * => OK: the backgroud on the first one is still light grey
