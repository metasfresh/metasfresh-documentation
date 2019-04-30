---
title: How do I set an order reference line as document number for subsequent documents?
layout: default
tags:
  - Document Management
  - Document Sequence Numbers
lang: en
sequence: 30
ref: reference_as_doc_seq_number
---

## Overview
When entering a [sales order](SalesOrder_recording) in metasfresh, it may occur that you want to use the order reference as document number for the [delivery note](Ship_SalesOrder) and/or [invoice](Invoice_SalesOrder), so that the [customer](New_business_partner_customer) can easily allocate these documents to his own, while at the same time keeping your own internal sequential numbering intact.

In order to carry over the order reference automatically onto the delivery note or the invoice document, please proceed as follows:

## Steps
1. Open "Document Sequence" from the [menu](Menu).
1. [Use the filter](Filtering_function) to find the entry of the document whose sequence number shall be replaced by the order reference and open it, e.g., *MM Shipment* (= delivery note) or *AR Invoice*.
1. In the field **Abw. Sequenznummer-Implementierung** (alternate sequence number implementation), pick *POReferenceAsSequenceNoProvider*.
 >**Note:** The order reference will take the sequence number's place on the delivery note and invoice, respectively. The internal sequential numbering will stay intact and continue running.

1. ***Optional:*** [Append affixes to the document sequence (reference)](Customizing_doc_seq_numbers).
1. [metasfresh saves the progress automatically](Saveindicator).

## Example
![](assets/Reference_as_doc_seq_number.gif)
