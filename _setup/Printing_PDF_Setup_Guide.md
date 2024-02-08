---
title: Set up a printer for physical or virtual printing (PDF)
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
A standalone printing client is useful in different scenarios. For example, if you use a hosted metasfresh instance, that instance which runs on our server has no access to your local printers.
Still, your processes might require that at certain stages documents are automatically printed by your local servers.

To address this and other scenarios, the standalone printing client can run locally, with access to your local printers.
It can retrieve print jobs from metasfresh and perform them using your printers.

## Steps
1. [Log in to metasfresh](Login) with the [user role](NewUserRole) "System Administrator".

### Enable printing (system configuration)
If you want to use server-based mass printing either for real, physical printers or virtual (PDF) printers you need to enable the corresponding system configuration which by default is turned off (`N`).

1. Open "System Configuration" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the system configuration with the **Name** `de.metas.printing.Enabled`.
1. Open the system configuration entry.
1. In the field **Search Key**, enter `Y` and hit `↵ Enter` to apply.
1. Restart the App Server for the change to become effective.

Eventually add to docoutbound config to have printing queue records.

##### SQL Command Example
```SQL
  update ad_sysconfig
  set value='Y'
  where name='de.metas.printing.Enabled'
```

### Client Archive Setting
1. Open "Client" from the [menu](Menu).
1. Open the entry of an existing client or [add a new one](New_Record_Window).
1. Make sure the **Auto Archive** settings are NOT set to *None* but to, e.g., *Documents*.
1. [metasfresh saves the progress automatically](Saveindicator).

### Enable HostKey of User
1. Open "User" from the [menu](Menu).
1. Open the entry of an existing user or [add a new one](Add_user).
1. Open the [advanced edit menu](ViewModes#adv-edit) from the [actions menu](StartAction#actions-menu).
 >**Note:** Use shortcut `Alt` + `E` / `⌥ alt` + `E`.

1. Scroll down to the bottom and tick the checkbox **Use Login As Printing HostKey** (`isloginhostkey`).
1. Click "Done" to apply the changes and close the advanced edit menu.

By enabling this the system will not use the session ID but the login name of the user as HostKey which is used to do the matching between the user and the printer settings.

### Create a PDF printer
1. Open "Printer" from the [menu](Menu).
1. [Add a new PDF printer](New_Record_Window).
1. Pick the **Output Type** *PDF*.

### Create a printer allocation
1. Open Java client.
1. Log in with the user where you want to use the PDF printer.
1. Open "Printer Allocation" from the [menu](Menu).
1. [Add a new printer allocation entry](New_Record_Window).

### Create a printer tray allocation
1. Go to Window "Printer Tray Allocation".
1. Go to subtab "Tray" and add one record that links the logical tray with the printer tray.

### Configure logical printer
You can go with the existing logical printer.

### Test print
1. Open window "Printing Queue".
1. Select a record which is not processed yet.
1. Run action "Print all".
