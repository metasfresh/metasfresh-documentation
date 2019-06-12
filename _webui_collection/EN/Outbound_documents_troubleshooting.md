---
title: How do I troubleshoot a failed transmission of a document without an email address?
layout: default
tags:
  - Emails and Outbound Documents
  - Troubleshooting
lang: en
sequence: 10
ref: outbound_documents_troubleshooting
---

## Overview
If you accidentally emailed a document without an assigned recipient, it is understandable that the process cannot be completed. The log status of the document remains unchanged and, as the case may be, a work package is created under "Workpackage Queue" in the menu where you can review error messages and more.

After adding an email address and trying to resend the document, it may happen that the transmission still does not take place. This is due to an existing work package for this (albeit "failed") process which is not created a second time in order to prevent generating unnecessary data garbage.

To resend the document anyway after correcting the email address, you first have to clear the work package from the error so it becomes available for a new transmission attempt. To do so, please proceed as follows:

## Steps

### Find the work package and clear the error message
1. Open "Workpackage Queue" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the **WorkPackage Processor** `de.metas.document.archive.async.spi.impl.MailWorkpackageProcessor` to find the failed work package.
 >**Note:** It has proven helpful to look for the work package by reference to its exact creation time (see column **Created**).

1. Open the work package's entry.
1. Uncheck the box **Fehler** (= error).

### Add email address and resend document
1. [Add the missing email address](Outbound_docs_change_recipient_email).
1. [Resend the document from "Outbound Documents"](Send_email_from_outbound_docs).
