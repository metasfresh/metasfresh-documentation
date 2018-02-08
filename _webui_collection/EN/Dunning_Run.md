---
title: How do I perform a Dunning Run?
layout: default
tags:
  - Workflow
  - Dunning
lang: en
sequence: 50
ref: dunning_run
---

## Preparation
1. [Set up Dunning](Setup_Dunning).
1. Have an [invoice](Invoice_SalesOrder) which is due.

## Steps
1. Open "Dunning Candidates" from the [menu](Menu).
1. [Start the action](StartAction) "Create/Update Dunning Candidates". A new window opens up.
1. Click "Start" to update the candidates and close the window.
1. Hit `F5` to refresh the Dunning Candidates window and see the updated candidates.
1. [Select the dunning candidates](RecordSelection) you want to dun.
 >**Note:** You can process several candidates at once.

1. [Start the action](StartAction) "Process Dunning Candidates". A new window opens up.
 >**Note:** You can also start this action directly from the dunning candidate's window.

1. Click "Start" to process the candidates and close the window.


**Note 1:** You will find the created dunning documents under "[Dunning](Menu)" in the menu. You can also jump **directly** to the respective dunning letter from the dunning candidate's window via the [related documents](JumptoviaSidebar).

**Note 2:** To view the dunning letter, simply open the dunning document and [start the action](StartAction) "Mahnbrief (Jasper)".

**Note 3:** You will find the PDFs of the created dunning documents under "[Outbound Documents](Menu)" in the menu.

## Example
![](assets/Dunning_Run.gif)
