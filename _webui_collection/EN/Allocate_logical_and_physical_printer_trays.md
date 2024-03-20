---
title: How do I allocate logical and physical printer trays?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
  - Printer & PDF Routing
lang: en
sequence: 50
ref: allocate_logical_and_physical_printer_trays
---

## Requirements
1. [Configure a logical printer with printer trays](Logical_printer_configuration_WebUI).
1. [Configure a PDF/physical printer with printer trays](PDF_printer_configuration_WebUI).
1. [Allocate logical and physical printers](Allocate_logical_and_physical_printers).

## Steps

### Choose Configured Printer Allocation
1. Open "Printer-Tray-Mapping" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. In the field **Printer Matching Config**, pick a [printer allocation](Allocate_logical_and_physical_printers) configuration (logical/physical).
1. Pick a [**Logical Printer**](Logical_printer_configuration_WebUI).
1. Pick a [**Hardware Printer**](PDF_printer_configuration_WebUI) (Ger.: *Hardware-Drucker*).

### Assign logical and physical printer trays to each other (Printer Tray Allocation)
1. Go to the record tab "Printer tray matching" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Pick a **Logical Tray**.
1. Pick a **Media Tray** (physical printer tray).
1. Click "Done" to close the overlay window and add the printer tray allocation entry to the list.
 >**Note:** Repeat the above steps to add further entries to the list.

## Next Steps
- [Test the printer configurations with a test print](Printing_PDF_Setup_Guide#test-print).
