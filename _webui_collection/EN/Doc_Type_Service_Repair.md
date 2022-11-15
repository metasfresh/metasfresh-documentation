---
title: How is the document type defined for the service reception?
layout: default
tags:
- Customer service
- Repair
- Setup
  lang: EN
  sequence: 10
  ref: Belegart_Service_Annahme
---

## Steps
1. [Go to menu](menu) and open the "Document type" window.
2. [Create a new entry](new_record_window).
3. Name the document type in the **Name** field, e.g. "Service Acceptance".
4. Enter a **print text** which will appear later on the documents, e.g. "Service acceptance".
5. Select the **entity type** *User maintained*.
6. Select the **main book category** *Material Management*.
7. Select the **Document base type** *Goods received*.
8. Enter `0` for the number of **copies** to be printed.
9. In the **Request Type** field, select the [Task Type](request_type_new) *Service Acceptance*.
10. set a check mark at **sale transaction**.
11. Set a check mark at **Document is Number Controlled** (*Document is serial number controlled*). A new field **Number sequences for documents** appears.
12. In the **Voucher number sequences** field, select a [Document numbering](define_new_doc_sequence) that you have defined previously, e.g. *MM Returns*.
13. Select the [**print_format**](add_print_format) *customer goods return*.
14. Open the "[Advanced capture](viewmodes#erw-capture)" from the [Action menu](startaction#actionmenu).
>**Note:** Press `Alt` + `E` / `⌥ alt` + `E`.

1. Scroll down to the **Doc Sub Type** field and select the document subtype *SR - Service Return*.
2. Click on "Confirm" to apply the changes and close the "Advanced capture".
