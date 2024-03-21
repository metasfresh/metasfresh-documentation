---
title: How do I set up a printer? (or&#58; How to save PDFs to a server)
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
  - Printer & PDF Routing
lang: en
sequence: 10
ref: Printing_PDF_Setup_Guide
---

<!--
Merged with infos from the following obsolete docs:
- appdictionary_collection\EN\sysconfig_printing.Enabled.md
- howto_collection\EN\how_to_use_the_standalone_printing_client.md
-->

## Overview
In metasfresh, when talking about a printer we primarily refer to virtual printing, i.e. generating PDFs and saving them to a data storage device. This is especially useful if you are using a hosted metasfresh instance that runs on our servers and has no access to your local hardware printers but you still want to be able to physically print out your documents.

The way this works is that your (hosted) metasfresh instance generates the PDFs of your required documents, saves ("prints") them to dedicated folders which can be configured individually, both for remote and on-premise servers, and then you can take those digital printouts and assign them to your local printers as required to produce hard copies.

**Care for a Pro tip?** A proven method for automatically processing these incoming documents in a corporate environment is to use <abbr title="e.g., FolderMill, e-FileWatcher">server-side applications</abbr> that continuously monitor the defined "hot folders" and automatically convert incoming files or print them on a specified printer according to predefined rules on a server, workstation, or desktop PC.

<!-- compare also SAP Print Queues Quick Guide: https://help.sap.com/docs/SAP_BUSINESS_BYDESIGN/2754875d2d2a403f95e58a41a9c7d6de/2dd40a0c722d1014aa7791b695bc8fdf.html?locale=en-US -->

## Requirements

### Configure outbound documents for the printing queue
In order to automatically forward your documents to the printing queue from where they can then be processed individually or as part of collective print jobs via their assigned printer, make sure to [follow theses steps for outbound documents](Outbound_Documents_Config), taking into account the following settings:
- Pick the appropriate database **Table** whose documents are targeted for printing.
- Tick the checkbox **Is Direct Enqueue** so the documents are added to the [printing queue](Menu).
- If enqueued documents shall be processed automatically (i.e. their PDFs saved to the printer folder), tick the checkbox **Directly process queue item**.

<!--
### Client Archive Setting
1. Open "Client" from the [menu](../webui_collection/EN/Menu).
1. Open the entry of an existing client or [add a new one](../webui_collection/EN/New_Record_Window).
1. Make sure the **Auto Archive** settings are NOT set to *None* but to, e.g., *Documents*.
1. [metasfresh saves the progress automatically](../webui_collection/EN/Saveindicator).
-->

## Steps

### Main Setup
1. [Configure a logical printer with optional printer trays](Logical_printer_configuration_WebUI).
1. [Configure a PDF printer with optional printer trays](PDF_printer_configuration_WebUI).
    - ***Optional:*** [Enable user login as host key](Enable_UserLogin_as_HostKey_for_Printing).
1. [Allocate logical and physical printers](Allocate_logical_and_physical_printers).
1. [Allocate logical and physical printer trays, if any](Allocate_logical_and_physical_printer_trays).

### Test Print
1. Open "Printing Queue" from the [menu](Menu).
1. [Select](RecordSelection) a printing queue item that has not yet been processed.
1. [Start the action](StartAction#actions-menu) "Print all" (Ger.: *Alle drucken*).
