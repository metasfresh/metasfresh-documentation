---
title: How do I perform a dunning run? (Create Dunning Documents)
layout: default
tags:
  - Dunning
lang: en
sequence: 10
ref: dunning_run
---

## Requirements
1. [Set up dunning](Setup_Dunning).
1. Have an [invoice](Invoice_SalesOrder) which is due.

## Steps

### Update Dunning Candidates
1. Open "Dunning Candidates" from the [menu](Menu).
1. [Start the action](StartAction) "Create/Update Dunning Candidates". An overlay window opens up.
1. Click "Start" to update the candidates and close the overlay window.
1. Hit `F5` to refresh the dunning candidates window and see the updated candidates.

### Create Dunning Documents
1. [Select the dunning candidate](RecordSelection) you want to dun.
 >**Note:** You can also process dunning letters for several candidates at once.

1. [Start the action](StartAction) "Process Dunning Candidates". An overlay window opens up.
 >**Note:** You can also start this action directly from the respective dunning candidate's entry.

1. Click "Start" to create the dunning letters and close the overlay window.

### Print Dunning Documents
1. Open the entry of a dunning candidate whose dunning documents you want to print out.
1. Use the entry's [related documents to jump](JumptoviaSidebar) directly into the "Dunning" window (under FINANCE) and then open the dunning document in question which has already been [found by the filter](Filtering_function).
 >**Note:** You will find all created dunning documents under "[Dunning](Menu)" in the menu.

1. [Open the PDF print preview](PrintPreview).
<br><br>

| **Note:** |
| :- |
| You will also find the PDFs of the created dunning documents under "[Outbound Documents](Menu)" in the menu. Go there and open the respective dunning document (*[use the filter](Filtering_function) to quickly find it*). Under the record tab "Log" at the bottom of the page, select the line "PDF export" and [start the action](StartAction) "Open PDF". |

### Send Dunning Letter via E-Mail
1. Open "Outbound Documents" from the [menu](Menu).
1. [Use the filter](Filtering_function) to find the dunning letter you want to send via e-mail.
1. Check that the **E-Mail Recipient** and the **E-Mail** are entered correctly in the respective fields.
1. [Start the action](StartAction) "Auswahl als Email an Geschäftspartner senden" (*Send selection via e-mail to business partner*). An overlay window opens up.
1. Click "Start" to e-mail the dunning letters and close the overlay window.
<br><br>

| **Note:** |
| :- |
| Under "[Outbound Documents](Menu)" in the menu, you may also e-mail several dunning letters to various dunning candidates at once. To do so, from the [list view](ViewModes), [select](RecordSelection) the respective entries and continue with **steps 4 and 5** as described above. If you want to resend dunning letters, simply uncheck the box **Nur bisher nicht gemailte** (*Only e-mail previously unsent docs*) in the overlay window before clicking "Start". |

## Next Steps (optional)
- [Attach invoice documents to the dunning letter](Dunning_letter_with_attached_invoice).

## Example
![](assets/Dunning_Run.gif)
