---
title: How do I define a new document type?
layout: default
tags:
  - Document Management
  - Document Types
lang: en
sequence: 10
ref: define_new_doc_type
---

## Steps

### Create and Configure a New Document Type
1. [Go to menu](menu) and open the "Document Type" window.
1. [Create a new entry](New_Record_Window).
1. Give the document type a **Name**, e.g., "Service Reception".
1. Enter a **Print Text** to appear later on the documents, e.g., "Service Reception".
1. Select an **Entity Type**, e.g., *User maintained*.
    >**Note:** The <a href="https://wiki.idempiere.org/en/Entity_Type_(Window_ID-381)" title="Entity Type | wiki.idempiere.org" target="_blank">entity type</a> determines the ownership of entries in the <a href="https://wiki.idempiere.org/de/Application_Dictionary" title="Application Dictionary | wiki.idempiere.org" target="_blank">Application Dictionary</a>, the central database directory.

1. Select a **General Ledger Category**, e.g., *Material Management*.
1. Select a **Document Base Type**, e.g., *Material Receipt*.
1. Enter the number of **Document Copies** to be printed.
1. Pick a [**Request Type**](Request_type_new), e.g., *Service Reception*.

1. Tick the checkbox **Sales Transaction**, if required.
1. Tick the checkbox **Document is Number Controlled** if the document type is numbered consecutively (serial numbering). A new field **Document Sequence** appears.
1. Pick a previously defined [**Document Sequence**](Define_new_doc_sequence).
1. Pick a [**Print Format**](Add_print_format), e.g., *Customer goods return*.

### Define a Document Subtype
1. Open the [advanced edit menu](ViewModes#adv-edit) from the [actions menu](StartAction#actions-menu).
 >**Note:** Use shortcut `Alt` + `E` / `⌥ alt` + `E`.

1. Scroll down to the **Doc Sub Type** field and pick a document subtype, e.g., *SR - Service Return*.
1. Click "Done" to apply the changes and close the advanced edit menu.

## Next Steps
- [Assign a specific document sequence to a document type](Doc_type_assign_sequence_number).
- [Configure the document types of counter documents](Counter_documents_configure_doc_type).
- [Define a document type for repair service returns](Doc_type_service_repair).
