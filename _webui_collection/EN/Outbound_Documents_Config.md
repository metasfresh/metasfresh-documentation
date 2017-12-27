---
title: How do I configure the Outbound Documents?
layout: default
tags:
  - Setup
lang: en
sequence: 40
ref: outbound_documents_config
---

## Overview
You can set up the Outbound Documents for a variety of tables so the documents that are created, such as invoices, shipment notes, dunning letters etc., get listed under "Outbound Documents" in the menu where you can then continue to process them either one by one or by the dozen.

## Steps
1. Open "Outbound Documents Config" from the [menu](Menu).
1. [Create a new configuration entry](New_Record_Window).
1. Start typing the name of the **Table** you want to configure and select the corresponding one from the suggestions, e.g. "Dunning".
1. Select a **Print Format**.
1. Make sure the box **In Direct Enqueue** is checked if you also want to send the completed documents to the print queue.
1. [metasfresh saves the progress automatically](Saveindicator).

**Important:** For the changes to take effect on the application server, it has to be restarted by the admin first.

## Example
![](assets/Outbound_documents_config+dunning.gif)
