---
title: How do I configure outbound documents?
layout: default
tags:
  - Emails and Outbound Documents
  - Setup
lang: en
sequence: 10
ref: outbound_documents_config
---

## Overview
Outbound documents are essentially all documents intended to be sent out once created, whether digitally by email, as printouts by regular mail or in any other way. In standard metasfresh, every document generated in connection with certain transactions can immediately be manually processed (printed, sent, etc.). However, with increasing order volumes, it can become increasingly difficult over time to maintain an overview, especially if some documents are meant to be processed at a later date or in batch form.

To address this challenge, outbound documents can be individually configured in metasfresh for a variety of business cases. This means that documents such as invoices, delivery notes, dunning letters, etc. can be filtered, managed and processed efficiently and transparently at any time and according to their respective purpose, either individually in sequence or collectively, at a central location under "Outbound Documents" in the menu.

## Steps
1. Open "Outbound Documents Config" from the [menu](Menu).
1. [Create a new configuration entry](New_Record_Window).
1. In the field **Table**, enter part of the name of the database table for which you want to configure the outbound documents and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>, e.g., "Dunning type".
1. ***Optional:*** Pick a [**Print Format**](Add_print_format), e.g., *Mahnbrief (swat)*.
    >**Note:** If no print format is specified, the default print format defined for the respective [document type](Define_new_doc_type) is automatically applied.

1. ***Optional:*** Pick a **Document Base Type** if the configuration should only apply to a specific document type from the selected database table, e.g., base type *Sales Order* from the table *Order*.
1. ***Optional:*** Tick the checkbox **Is Direct Enqueue** if the completed documents shall be automatically forwarded to the [print queue](Printing_PDF_Setup_Guide).
1. ***Optional:*** Tick the checkbox **Directly process queue item** if a document placed in the print queue is to be processed (printed) directly as a print job.
1. [metasfresh saves the progress automatically](Saveindicator).
<br><br>

| **Important note:** |
| :--- |
| For the settings to take effect on the application server, it first has to be restarted by a user with administration rights. |

## Next Steps (optional)
- [Set up a mailbox for outbound documents](Outbound_documents_setup_email_server).
    - ***Optional:*** [Set up email server routing for outbound documents](Setup_email_server_routing).
- [Send outbound documents via email](Send_email_from_outbound_docs).
- [Set up outbound documents](Outbound_Documents_Config_Dunning) for [dunning](Dunning_Run).
- [Set up outbound documents](Outbound_documents_config_serial_letters) for the [serial letter feature](Create_serial_letters).
- [Set up printing in metasfresh](Printing_PDF_Setup_Guide).

## Example
<kbd><img src="assets/Outbound_documents_config+dunning.gif" alt="GIF: How to configure outbound documents"></kbd>
