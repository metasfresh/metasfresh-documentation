---
title: How do I define a dunning type?
layout: default
tags:
  - Accounting
  - Dunning
  - Setup
lang: en
sequence: 30
ref: define_dunning_type
---

## Overview
The dunning type determines the moment when a [dunning run](Dunning_Run) starts and how many levels it goes through.

## Steps
1. Open "Dunning Type" from the [menu](Menu).
1. [Add a new dunning type](New_Record_Window).
1. Give the dunning type a **Name**.

### Add Dunning Levels

| **Important note!** |
| :--- |
| For a dunning type to take effect, it requires **at least one level**! |

1. Go to the record tab "Level" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Give the level a **Name**.
1. Enter a **Print Text** which will appear in the subject line of the dunning letter.
1. Enter the number of **Days after due date** of an invoice until the dunning procedure is initiated.
1. Enter the number of **Days between dunning**.
1. In the text box **Note Header**, enter a text that shall appear at the beginning of the dunning letter.
1. In the text box **Note**, enter a text that shall appear at the end of the dunning letter.
1. Click "Done" to close the overlay window and add the dunning level to the list.
 >**Note:** Repeat steps 1 to 8 in order to add further dunning levels.

## Next Steps
- [Link](link_dunning_type_to_partner) the dunning type to a single [customer](New_business_partner_customer) or a [business partner group](New_Business_Partner_Group).

## Example
![](assets/Define_dunning_type.gif)
