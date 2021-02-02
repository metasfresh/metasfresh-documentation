---
title: How do I customize document sequence numbers?
layout: default
tags:
  - Document Management
  - Document Sequence Numbers
lang: en
sequence: 20
ref: customizing_doc_seq_numbers
---

## Overview
In metasfresh, documents are numbered in sequence. You can adjust this numbering to your personal requirements without disrupting a running sequence and risking losing track. By appending affixes (prefixes and suffixes), for instance, you can give every document type their own numbering schema, which will then be automatically applied to every newly created document, respectively, and will help to distinguish documents quickly and easily from one another.

In order to customize document sequence numbers, please proceed as follows:

## Steps
1. Open "Document Sequence" from the [menu](Menu).
1. [Use the filter](Filtering_function) to find the entry of the document whose numbering you want to customize and open it, e.g., *DocNo. Sales Order*.
1. Enter a **Prefix** and/or a **Suffix**.
 >**Note:** The affixes are added, respectively, before or behind the sequence number without disrupting the sequential numbering itself, e.g.:<br> Document no.: 0123<br> Prefix: `SO` (Sales Order)<br> Suffix: `_MAY` (Month)<br> Customized document no.: `SO`0123`_MAY`

1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps (optional)
- [Set the reference line of a sales order as document number for subsequent documents](Reference_as_doc_seq_number).

## Example
![](assets/Customizing_doc_seq_numbers.gif)
