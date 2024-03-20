---
title: How do I configure a logical printer?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
  - Printer & PDF Routing
lang: en
sequence: 20
ref: Logical_printer_configuration_WebUI
---

## Overview
A logical printer is a **named collection of printer settings** for a physical printer used to trigger creation and/or distribution of electronic documents. You can define more than one logical printer for the same physical printer. A **physical printer** can be an actual (hardware) printer, a file, or a follow-up process for further processing.

Logical printers contain **specific attributes and configurations** determining the printing properties and formats of documents intended for physical printers. They also allow defining logical **printer trays** that can be associated with specific rules used to **route documents** to the appropriate tray. Of course, these logical trays can also be linked to physical document output trays.

<!-- Compare information from
- https://www3.rocketsoftware.com/rocketd3/support/documentation/Uniface/10/uniface/platformSupport/printing/tasks/settingUpPrinter.htm?TocPath=Platform%20Support%7C%20Printing%20from%20Uniface%7C_____7
- https://documentation.softwareag.com/natural/ngc351e/ug/ug_print_0110.htm
- https://docs.ifs.com/techdocs/Foundation1/040_administration/250_operational_reporting/030_logical_printers/
- https://docs.infor.com/ln/10.4/en-us/lnolh/help/tt/aad/ttaad3101m000.html
- https://help.sap.com/doc/saphelp_nw73ehp1/7.31.19/en-us/4e/9c274f6ecb7117e10000000a42189e/content.htm?no_cache=true
-->

## Steps

### Configure a logical printer
1. Open "Logical Printer" (Ger.: *Logischer Drucker*) from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Give the **Printer** a name.
1. Pick a **Printer Type**, e.g. *General*, *Label*, *Fax*.

### Add logical printer trays (optional)
1. Go to the record tab "Tray" (Ger.: *Schacht*) at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Give the tray a **Name**.
1. Click "Done" to close the overlay window and add the logical tray to the list.
 >**Note:** You can add any number of trays this way.

### Define criteria for document routing to a logical tray (optional)
Documents for printing will be routed to their respective printer tray based on the settings combinations (rules/logic) defined here.

1. Go to the record tab "Allocation/Mapping" (Ger.: *Zuordnung*) at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Choose a combination of document attributes, e.g., **Document Type**, **Process**, **Role**, **User/Contact**, **Table**, etc.
1. ***Optional:*** In the field **Page Range** (Ger.: *Seiten-Kriterium* / *Seitenbereich*) you can choose *Pages from-to* or *Last pages*.
    - *Pages from-to*: Enter the number of the **From page** and the **To page**.
    - *Last pages*: Enter the number of the **Last pages**.
1. Pick a **Logical Tray** (Ger.: *Logischer Schacht*) for the document output.
1. Click "Done" to close the overlay window and add the tray mapping entry to the list.
  >**Note:** You can add any number of tray mappings this way.

## Next Steps
1. [Configure a PDF/physical printer](PDF_printer_configuration_WebUI).
1. [Allocate logical and physical printers](Allocate_logical_and_physical_printers).
1. [Allocate logical and physical printer trays, if any](Allocate_logical_and_physical_printer_trays).
1. [Test the printer configurations with a test print](Printing_PDF_Setup_Guide#test-print).
