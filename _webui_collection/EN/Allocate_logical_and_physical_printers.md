---
title: How do I allocate logical and physical printers?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
  - Printer & PDF Routing
lang: en
sequence: 40
ref: allocate_logical_and_physical_printers
---

## Overview
A printer allocation must be set up for each user ([host key](Enable_UserLogin_as_HostKey_for_Printing)) who has access to printers/printing rights.

## Requirements
1. [Configure a logical printer](Logical_printer_configuration_WebUI).
1. [Configure a PDF/physical printer](PDF_printer_configuration_WebUI).

## Steps

### Define Printer Allocation Settings
1. Open "Printer Allocation" from the [menu](Menu).
1. [Add a new printer allocation entry](New_Record_Window).
1. In the field **Host Key**, enter the [user login name, if enabled](Enable_UserLogin_as_HostKey_for_Printing). Otherwise, enter the session ID (can be found in the [physical printer entry](PDF_printer_configuration_WebUI)).
1. ***Optional:*** Tick the checkbox **Shared** if you want to allow these allocation settings to be included in other printer allocation entries to establish printer hierarchies.

### Assign logical and physical printers to each other
1. Go to the record tab "Printer Allocation" (Ger.: *Drucker-Zuordnung*) at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Pick a [**Logical Printer**](Logical_printer_configuration_WebUI).
1. Pick a [**Hardware Printer**](PDF_printer_configuration_WebUI).
1. Click "Done" to close the overlay window and add the printer allocation entry to the list.
 >**Note:** You can allocate any number of printers this way.

## Next Steps
1. [Allocate logical and physical printer trays, if any](Allocate_logical_and_physical_printer_trays).
1. [Test the printer configurations with a test print](Printing_PDF_Setup_Guide#test-print).
