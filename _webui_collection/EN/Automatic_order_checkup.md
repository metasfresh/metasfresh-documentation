---
title: How do I generate order checkups?
layout: default
tags:
  - Sales
  - Order Checkups
lang: en
sequence: 10
ref: automatic_order_checkup
---

## Overview
Order checkups are lists that are used for controlled order processing in procurement, manufacturing and order picking. Depending on the system configuration, the order checkup lists are automatically created and forwarded to the respective processors as soon as a sales order is completed. The intended department for an order checkup is specified in the [planning data](Product_planning) of the ordered products. It is also determined therein whether an ordered item has to be purchased or manufactured first, from which [warehouse](Add_new_warehouse) the products are taken and whether they are subject to certain workflows.

metasfresh distinguishes between two types of order checkups. Order checkups of the
- type "order checkup" are issued per warehouse which is specified in the product planning data, and contain all products from the sales order that are stored in the respective warehouse.
- type "order checkup (shipping)" are issued for the (dispatch) warehouse specified in the sales order, and contain all ordered products that have to be picked for shipping after their procurement or manufacturing.

With the help of order checkups, it can be ensured that sales orders for procured and manufactured goods are processed on time and in full.

| **Important note:** |
| :--- |
| The module `C_BPartner.DisableOrderCheckup` must be deactivated (i.e. =`N`) for the main business partner of the sales order. This value is set by default in metasfresh. |

## Steps
1. [Activate automatic order checkups](Activate_automatic_order_checkup). (System Administrator)
1. [Configure the planning data according to the respective products](Product_planning).
1. [Enter a sales order with procured and/or manufactured goods](SalesOrder_recording).
1. The order checkup lists are created automatically and can be found under "[Order Control](Menu)" in the menu.
 >**Note:** The "responsible user" (print recipient) of an order checkup is by default the "user/contact" of the respective manufacturing plant.

### Set the number of printouts (System Administrator)
1. [Log in to metasfresh](Login) with the [user role](NewUserRole) "System Administrator".
1. Open "System Configuration" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the system configuration with the **Name** `de.metas.fresh.ordercheckup.Copies`.
1. Open the system configuration entry.
1. In the field **Search Key**, enter the number of copies to be printed out in total per order checkup.
1. [metasfresh saves the progress automatically](Saveindicator).
