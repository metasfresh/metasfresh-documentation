---
title: How do I troubleshoot a failed email transmission of an outbound document?
layout: default
tags:
  - Emails and Outbound Documents
  - Troubleshooting
lang: en
sequence: 10
ref: outbound_documents_troubleshooting
---

## Overview
For every process that is launched in metasfresh, a work package is created under "Workpackage Queue" in the menu where you can review information such as processing status, log status or error messages. This means that failed processes have work packages too and can be resolved in the work package queue.

In case the email transmission of a document fails, e.g., due to incorrect email account access data or an inaccessible email server, the work package cannot be fully processed and an error message is logged.

After removing the cause of the error and trying to resend the document, it may happen that the transmission still does not take place. This is due to an existing work package for this (albeit failed) process which is not created a second time in order to prevent the document from being sent to the recipient twice.

To resend the document anyway, you first have to remove the error from the work package to make it available for a new transmission attempt. To do so, please proceed as follows:

## Steps

### Find the work package and clear the error message
1. Open "Workpackage Queue" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the **WorkPackage Processor** `de.metas.document.archive.async.spi.impl.MailWorkpackageProcessor` to find the failed work package.
 >**Note:** It has proven helpful to look for the work package by reference to its exact creation time (see column **Created**).

1. Open the work package's entry.
1. Clear the checkbox **Fehler** (= error).

## Next Steps (optional)
1. [Verify the access data of the email server](Outbound_documents_setup_email_server).
1. [Add missing email addresses to outbound documents](Outbound_docs_change_recipient_email).
1. [Resend the document from "Outbound Documents"](Send_email_from_outbound_docs).
