---
title: How do I configure a PDF printer?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
  - Printer & PDF Routing
lang: en
sequence: 30
ref: PDF_printer_configuration_WebUI
---

## Overview
In metasfresh, a PDF printer can be construed as a virtual representation of a physical printer, which can be an actual (hardware) printer, a file, or a follow-up process for further processing.

You can configure PDF printers to represent the physical properties of the hardware printers where the generated PDFs are routed to for actual printing. This means that output directories are created on the servers for every single printer and its individual trays (subdirectories) where the digital printouts are then stored for final processing by the designated hardware printers.

## Steps

### Configure a PDF printer
1. Open "Printer" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Give the printer a **Name**.
    >**Note:** This name will be used to name the printer's main **output directory** on the server where the generated PDFs will be stored.

1. The **Host Key** is automatically filled in with the current user session ID. Alternatively, you can replace it with the user's **login name**, provided the [corresponding option is activated in the user entry](Enable_UserLogin_as_HostKey_for_Printing).
1. Pick the **Output Type** *Store PDF to disk*.

### Add hardware printer trays (optional)
1. Go to the record tab "Tray" (Ger.: *Schacht*) at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Give the tray a **Name**.
    >**Note:** This name will be used to name the **subdirectory** of the main printer directory defined in the previous steps above.

1. Click "Done" to close the overlay window and add the hardware tray to the list.
 >**Note:** You can add any number of trays this way.

## Next Steps
1. [Allocate logical and physical printers](Allocate_logical_and_physical_printers).
1. [Allocate logical and physical printer trays, if any](Allocate_logical_and_physical_printer_trays).
1. [Test the printer configurations with a test print](Printing_PDF_Setup_Guide#test-print).
