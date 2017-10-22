---
title: How do I define the time frame conditions of a Contract?
layout: default
tags:
  - Workflow
  - Contract Management
lang: en
sequence: 50
ref: define_contract_period
---

## Overview
In metasfresh, time frame conditions of a Contract include the Term Duration, Term of Notice, Contract Renewals etc. All these conditions can be defined in the window "Contract Period".

## Steps

### Define the conditions for the Contract Period
1. Open "Contract Period" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Give the Contract Period a **Name**.
1. Select a **Calendar**.
1. Define a **Term Duration** and a **Term Unit**, e.g. "1 Year".
1. Define a **Term of Notice** and a **Term of Notice Unit**, e.g. "1 Month".
1. Define a **Subscription Interval** and a **Subscription Unit**, e.g. "2 Weeks".
 >Note: This is the frequency of the shipments of a Sales Order during the Contract Period.

1. ***Optional***: Check the box **Auto renew Contract** to make the Contract run in a loop.
 >Note: In this case, the box **Complete next terms automatically** appears. Check this box, too.

1. ***Optional***: In the field **Next Contract Terms** you can select the follow-up contract for the expired one.

### Define the Transition Conditions
The Transition Conditions determine at what moment before the end or change of a contract the Contractual Party may perform a Status Change, such as the termination of the Contract.

1. Go to the tab "Transition Conditions" at the bottom of the page and click "Add new". A new window opens up.
1. Define a **Deadline** and a **Deadline Unit**, e.g. "1 Month".
1. Select the **Action** *Status Change*.
1. Select the **Contract Status** *Terminated*.
1. Click "Done" to close the window and add the Transition Conditions to the tab.

### Complete the Document
- [Complete the document](DocumentProcessingComplete).

## Example
![](assets/Define_contract_period.gif)
