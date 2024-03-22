---
title: How is the document type defined for repair service returns?
layout: default
tags:
  - Customer Service
  - Repairs
  - Setup
lang: en
sequence: 10
ref: doc_type_service_repair
---

## Steps
Follow these [instructions for creating a new document type](Define_new_doc_type), taking into account the following settings:
1. Give the document type an appropriate **Name** and **Print Text**, e.g., "Service Reception".
1. Pick the **Entity Type** *User maintained*.
1. Pick the **General Ledger Category** *Material Management*.
1. Pick the **Document Base Type** *Material Receipt*.
1. Enter `0` for the number of **Document Copies**.
1. Pick the [**Request Type**](Request_type_new) *Service Reception*.
1. Tick the checkbox **Sales Transaction**.
1. Tick the checkbox **Document is Number Controlled**.
1. Pick a previously defined [**Document Sequence**](Define_new_doc_sequence), e.g., *MM Returns*.
1. Pick the [**Print Format**](Add_print_format) *Customer goods return*.
1. Pick the **Document Subtype** *SR - Service Return* (advanced edit menu).
