---
title: IT gh#1070
required data:
   bpartner: G000Y (customer) 
   products: P0001 
  flatrate conditions (described below)
  flatrate transition (described below)
   
layout: default
tags:
  - Flatrate Terms, Pricing
---
## #1070 Price not transferred to flatrate term

> Testcase to make sure price is transfered from orderline to flatrate term


Setup data:
* Create a flatrate transition with following data:
    * Calendar Contract: Kalendar
    * Term Duration : 1
    * Term Duration Unit: Year
    * Delivery Interval: 1
    * Delivery Interval Unit: Year
    * Term Of Notice: 1
    * Term Of Notice Unit: Month
* Complete the transition

* Create a Flatrate Conditions entry 
    * Set the transition above
    * Set the IsNewTermCreatedOrder on true
* Complete the conditions




1. Create a sales order for G000X
    * Add line for Produyct P0001 
    * Set the flatrate conditions above
    * Set a price (e.g. 15 currency units)
    
2. Complete the order

3. Go to the partner G000X open its referenced documents
4. Go to Contract, find the one created for the product P0001
    => OK: It has the price = 15 currency units, as specified in the order line.
