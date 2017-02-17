---
title: IT gh#317 - webui
required data:
   bpartner: G000X (vendor) 
   products: P0001 
   Packing Material: TU1
   CU-TU config for TU1 and P0001
   
layout: default
tags:
  - Sales orders, Purchase orders
---
## #317 Quick actions are not refreshed when opening the modal HU editor

> Testcase to make sure the Quick actions are correctly refreshed when opening the modal HU editor



1. Create a purchase order for G000X
    * Add line for Produyct P0001 on TU1

2. GO to its receipt schedules, select the one for the CU product
    
3. Go to the quick actions, select Receive HUs
    * The modal HU editor opens
    * Default action is "Create material receipt"
    * Call "create material receipt"
    * HUs are refreshed, their state changed from Planning to Active
    * OK :The default action displayed is "Reverse" 
    * close the modal HU editor
    
4. Go back to the same receipt schedule
    
5. Receive HUs again
    * The modal HU editor opens
    * => OK: Default action is "Create material receipt"
    * => OK you can follow these as many times as needed
   
    
