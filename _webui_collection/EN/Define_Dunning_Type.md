---
title: How do I define a Dunning Type?
layout: default
tags:
  - Workflow
  - Dunning
lang: en
sequence: 30
ref: define_dunning_type
---

## Overview
The Dunning Type determines the point when a [dunning run](Dunning_Run) starts and how many levels it goes through.

## Steps
1. Open "Dunning Type" from the [menu](Menu).
1. [Create a new Dunning Type entry](New_Record_Window).
1. Give the Dunning Type a **Name**.
1. Select a **Dunning Trigger**, e.g. *Default Payment Term*.

### Add Dunning Levels
**Important:** For a Dunning Type to be effective, it needs at least **one level**!

1. Go to the tab "Level" at the bottom of the page and click ![](assets/Add_New_Button.png). A new window opens up.
1. Give the level a **Name**.
1. Enter a **Print Text** which will later appear on the dunning letter.
1. Enter the number of **Days after due date** until an invoice becomes relevant for dunning.
1. Enter the number of **Days between dunning**.
1. Click "Done" to close the window and add the dunning level to the list.
1. Repeat steps 1 to 6 in order to add further dunning levels.

### Next Steps
- [Link](link_dunning_type_to_partner) the Dunning Type to a single [customer](New_business_partner_customer) or a [business partner group](New_Business_Partner_Group).

## Example
![](assets/Define_dunning_type.gif)
