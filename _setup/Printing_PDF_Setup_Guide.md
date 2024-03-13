---
title: How to set up a printer? (or&#58; How to save PDFs to a server)
layout: default
tags:
  - System
lang: en
ref: Printing_PDF_Setup_Guide
---

<!--
Merged with infos from the following obsolete docs:
- appdictionary_collection\EN\sysconfig_printing.Enabled.md
- howto_collection\EN\how_to_use_the_standalone_printing_client.md
-->

## Overview
In metasfresh, when talking about a printer we primarily refer to virtual printing, i.e. generating PDFs and saving them to a data storage device. This is especially useful if you are using a hosted metasfresh instance that runs on our servers and has no access to your local printers but you still want to be able to physically print out your documents.

The way this works is that your (hosted) metasfresh instance generates the PDFs of your required documents, saves ("prints") them to dedicated folders which can be configured individually, both for remote and on-premise servers, and then you can take those digital printouts and assign them to your local printers as required to produce hard copies.

**Care for a Pro tip?** A proven method for automatically processing these incoming documents in a corporate environment is to use <abbr title="e.g., FolderMill">server-side applications</abbr> that continuously monitor the defined "hot folders" and automatically convert incoming files or print them on a specified printer according to predefined rules on a server, workstation, or desktop PC.

<!-- compare also SAP Print Queues Quick Guide: https://help.sap.com/docs/SAP_BUSINESS_BYDESIGN/2754875d2d2a403f95e58a41a9c7d6de/2dd40a0c722d1014aa7791b695bc8fdf.html?locale=en-US -->

## Requirements

### Configure outbound documents for the printing queue
In order to automatically forward your documents to the printing queue from where they can then be processed individually or as part of collective print jobs via their assigned printer, make sure to [follow theses steps for outbound documents](../webui_collection/EN/Outbound_Documents_Config), taking into account the following settings:
- Pick the appropriate database **Table** whose documents are targeted for printing.
- Tick the checkbox **Is Direct Enqueue** so the documents are added to the [printing queue](../webui_collection/EN/Menu).
- If enqueued documents shall be processed automatically (i.e. their PDFs saved to the printer folder), tick the checkbox **Directly process queue item**.

<!--
### Client Archive Setting
1. Open "Client" from the [menu](../webui_collection/EN/Menu).
1. Open the entry of an existing client or [add a new one](../webui_collection/EN/New_Record_Window).
1. Make sure the **Auto Archive** settings are NOT set to *None* but to, e.g., *Documents*.
1. [metasfresh saves the progress automatically](../webui_collection/EN/Saveindicator).
-->

## Steps

### Configure a logical printer
A logical printer can be construed as a virtual representation of a physical printer. A physical printer can be an actual (hardware) printer, a file, or a follow-up process for further processing.

Logical printers contain specific attributes and configurations determining the printing properties and formats of documents intended for physical printers. They also allow defining logical printer trays that can be associated with specific criteria used to route documents to the appropriate tray. Of course, these logical trays can also be linked to physical document output trays.

1. Open "Logical Printer" (Ger.: *Logischer Drucker*) from the [menu](../webui_collection/EN/Menu).
1. [Create a new entry](../webui_collection/EN/New_Record_Window).
1. Give the **Printer** a name.
1. Pick a **Printer Type**, e.g. *General*, *Label*, *Fax*.

#### Add logical printer trays (optional)
1. Go to the record tab "Tray" (Ger.: *Schacht*) at the bottom of the page and click !["Add new"](../webui_collection/EN/assets/Add_New_Button.png). An overlay window opens up.
1. Give the tray a **Name**.
1. Click "Done" to close the overlay window and add the logical tray to the list.
 >**Note:** You can add any number of trays this way.

#### Define criteria for document routing to a logical tray (optional)
Documents for printing will be routed to their respective printer tray based on the settings combinations defined here.

1. Go to the record tab "Allocation/Mapping" (Ger.: *Zuordnung*) at the bottom of the page and click !["Add new"](../webui_collection/EN/assets/Add_New_Button.png). An overlay window opens up.
1. Choose a combination of document attributes, e.g., **Document Type**, **Process**, **Role**, **User/Contact**, **Table**, etc.
1. ***Optional:*** In the field **Page Range** (Ger.: *Seiten-Kriterium* / *Seitenbereich*) you can choose *Pages from-to* or *Last pages*.
    - *Pages from-to*: Enter the number of the **From page** and the **To page**.
    - *Last pages*: Enter the number of the **Last pages**.
1. Pick a **Logical Tray** (Ger.: *Logischer Schacht*) for the document output.
1. Click "Done" to close the overlay window and add the tray mapping entry to the list.
  >**Note:** You can add any number of tray mappings this way.

### Create a PDF printer (physical/hardware printer)
1. Open "Printer" from the [menu](../webui_collection/EN/Menu).
1. [Create a new entry](../webui_collection/EN/New_Record_Window).
1. Give the printer a **Name**.
    >**Note:** This name will be used to name the **output directory** on the server where the generated PDFs will be stored.

1. The **Host Key** is automatically filled in with the user session ID. Alternatively, you may also [configure the user **login name** to be used as host key](#enable-user-login-as-host-key) by default.
1. Pick the **Output Type** *Store PDF to disk*.

#### Add hardware printer trays (optional)
1. Go to the record tab "Tray" (Ger.: *Schacht*) at the bottom of the page and click !["Add new"](../webui_collection/EN/assets/Add_New_Button.png). An overlay window opens up.
1. Give the tray a **Name**.
1. Click "Done" to close the overlay window and add the hardware tray to the list.
 >**Note:** You can add any number of trays this way.

#### <a name="enable-user-login-as-host-key">Optional: Enable User Login as Host Key</a>
By enabling this the system will use the user login name instead of the session ID as host key which is used to do the matching between the user and the printer settings.

1. Open "User" from the [menu](../webui_collection/EN/Menu).
1. Open the entry of an existing user or [add a new one](../webui_collection/EN/Add_user).
1. Open the [advanced edit menu](../webui_collection/EN/ViewModes#adv-edit) from the [actions menu](../webui_collection/EN/StartAction#actions-menu).
 >**Note:** Use shortcut `Alt` + `E` / `⌥ alt` + `E`.

1. Scroll down to the bottom and tick the checkbox **Use Login As Printing HostKey** (`isloginhostkey`).
 >**Note:** The user login name is defined in the field **Login** of the user entry.

1. Click "Done" to apply the changes and close the advanced edit menu.

### Assign logical and physical printers to each other (Printer Allocation)
A printer allocation must be set up for each user who has access to printers/printing rights.

1. Open "Printer Allocation" from the [menu](../webui_collection/EN/Menu).
1. [Add a new printer allocation entry](../webui_collection/EN/New_Record_Window).
1. In the field **Host Key**, enter the [user login name, if enabled](#enable-user-login-as-host-key). Otherwise, enter the session ID.
1. Tick the checkbox **Shared** if you want to allow these allocation settings to be included in other printer allocation entries.

#### Allocate Printers
1. Go to the record tab "Printer Allocation" (Ger.: *Drucker-Zuordnung*) at the bottom of the page and click !["Add new"](../webui_collection/EN/assets/Add_New_Button.png). An overlay window opens up.
1. Pick a **Logical Printer**.
1. Pick a **Hardware Printer**.
1. Click "Done" to close the overlay window and add the printer allocation entry to the list.
 >**Note:** You can allocate any number of printers this way.

### Assign logical and physical printer trays to each other (Printer Tray Allocation)
1. Open "Printer-Tray-Mapping" from the [menu](../webui_collection/EN/Menu).
1. [Create a new entry](../webui_collection/EN/New_Record_Window).
1. In the field **Printer Matching Config**, pick a printer allocation entry.
1. Pick a **Logical Printer**.
1. Pick a **Hardware-Drucker**.

#### Allocate Printer Trays
1. Go to the record tab "Printer tray matching" at the bottom of the page and click !["Add new"](../webui_collection/EN/assets/Add_New_Button.png). An overlay window opens up.
1. Pick a **Logical Tray**.
1. Pick a **Media Tray** (printer tray).
1. Click "Done" to close the overlay window and add the printer tray allocation entry to the list.
 >**Note:** Repeat the above steps to add further entries to the list.

## Test print
1. Open "Printing Queue" from the [menu](../webui_collection/EN/Menu).
1. [Select](RecordSelection) a printing queue item that has not yet been processed.
1. [Start the action](StartAction#actions-menu) "Print all" (Ger.: *Alle drucken*).
