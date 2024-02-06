---
title: Setup a PDF Printer
layout: default
tags:
  - System
lang: en
ref: Printing_PDF_Setup_Guide

---

## Server

### Enable printing
1. Set sysconfig `de.metas.printing.Enabled` to `Y`.
1. Restart app server.

Eventually add to docoutbound config to have printing queue records.

### Client Archive Setting
1. Open window "Client".
1. Make sure the **Auto Archive** settings are NOT set to *None*. e.g., *Documents*.

### Enable HostKey of User
1. Open user window.
1. Set checkbox `isloginhostkey`.

By enabling this the system will not use the session ID but the login name of the user as HostKey which is used to do the matching between the user and the printer settings.

### Create PDF printer
1. Open window "Printer".
1. Create new PDF printer.
1. Output type = PDF.

### Create printer allocation
1. Open Java client.
1. Log in with the user where you want to use the PDF printer.
1. Open window "printing allocation".
1. Create new record printer allocation.

### Create printer tray allocation
1. Go to Window "Printer Tray Allocation".
1. Go to subtab "Tray" and add one record that links the logical tray with the printer tray.

### Configure logical printer
You can go with the existing logical printer.

### Test print
1. Open window "Printing Queue".
1. Select a record which is not processed yet.
1. Run action "Print all".
