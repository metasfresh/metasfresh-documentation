---
title: IT gh#330 - webui
required data:
   bpartner: G000X (vendor) 
   products: P0001 
   Packing Material: TU1
   CU-TU config for TU1 and P0001
   
layout: default
tags:
  - Material Receipt Workflow
---
## #330 HUEditor displays HUs which are destroyed 

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
    
6. Select the same HU
    * => OK: Now the default action is Reverse

7. Perform Reverse on this HU
    => OK: The HU completely dissapears from the list

8. Create material receipts and reverse all the HUs
    => OK: They dissapear one by one when you reverse them
    => OK: In the end, the HU list is empty and this text is displayed in its place: 
>" There are no detail rows
You can create them in this window." 
