---
title: How do I use the picking terminal for shipments?
layout: default
tags:
  - Workflow
  - Sales
lang: en
sequence: 50
ref: picking_terminal
---

## Overview
In metasfresh, you can pick *handling units* (HUs) for shipments, which are then deducted from stock.<br>
You can check your stock inventory at any time under "[Handling Unit Editor](Menu)" in the menu.

## Steps
1. Open the entry of a [completed sales order](SalesOrder_recording).
1. [Jump to](JumptoviaSidebar) "Picking Terminal".
 >**Note 1:** Press `Alt` + `6` / `⌥ alt` + `6` to open the sidebar with the list of referenced documents.<br><br>
 >**Note 2:** After completing a new sales order, it may take a couple of seconds for the picking terminal to appear in the sidebar.

1. From the [list view](ViewModes), [select](RecordSelection) the HU you want to pick.
1. [Start the quick action](StartAction) "Pick". The picking overlay window opens up.
1. In the left pane of the picking window, [select](RecordSelection) the sales order in question.
1. In the right pane, [select](RecordSelection) a picking slot, e.g., "101.0", and [start the quick action](StartAction) "Open HU selection window".
1. [Select](RecordSelection) an HU and [start the quick action](StartAction) "Pick HU". The HU will now be moved to the picking slot 101.0.
1. [Select](RecordSelection) the HU line and [start the quick action](StartAction) "Process picking". This makes the HU line read-only.
 >**Note:** The HU line must be selected for the quick action to work.
 ![](../DE/assets/Kommissionierung_HU_auswählen.png)

1. Click "Done" to close the picking window.

## Next Steps
- [Create a shipment with picked quantities](Ship_salesorder_picked_qty).

## Example
![](../DE/assets/Lieferung_kommissionieren.gif)
