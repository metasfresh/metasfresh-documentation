---
title: How do I add a tour version?
layout: default
tags:
  - Logistics
  - Tour Planning
  - Setup
lang: en
sequence: 20
ref: add_tour_version
---

## Overview
A tour version enables you to specify the days on which certain business partners are to receive a delivery and with what frequency. For this purpose, you can combine several parameters (weekdays, repetitions, time intervals, preparation times) with each other as required and also associate them with business partners and their individual delivery times. Afterwards, by linking the tour version to a tour scheduling schema, you can create prospective tour lists that enable you to schedule delivery tours far in advance while staying up to date and keeping track of pending tours, delivery days and contacts at all times.

## Requirements
- [Add a tour scheduling schema](Add_tour_scheduling_schema).

## Steps

### Pick a tour scheduling schema and add a new tour version
1. Open "Tour Version" from the [menu](Menu).
1. [Create a new tour version](New_Record_Window).
1. Give the tour version a **Name**.
1. In the field **Tour**, pick a [tour scheduling schema](Add_tour_scheduling_schema).
1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the tour version will be effective *immediately*. If it lies in the *future*, it will only apply *from that date*. Older versions are automatically overridden by the more recent version.

### Specify parameters
The following parameters can be combined with each other as needed:

| Parameter | Description |
| :--- | :--- |
| Cancel delivery day | Deliveries that do not fall on a working day are canceled. |
| Move delivery day to next/previous day | Deliveries that do not fall on a working day are postponed to the next working day. |
| Weekdays | Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday |
| Preparation Time | The time when the delivery is ready for dispatch. |
| Time interval | weekly / monthly |
| Repetitions | •&nbsp;every *n* weeks<br> •&nbsp;every *n* months<br> •&nbsp;*n*<sup>th</sup> day of the month |

<br>

| **Important note:** |
| :--- |
| It is necessary to specify at least a time interval and/or a repetition so that tour lists can be generated successfully. |

### Add a business partner
1. Go to the record tab "Tour Version Line" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. In the field **Business Partner**, enter a part of the [business partner](New_Business_Partner) name or number and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Also in the field **Business Partner**, pick a location, if the partner has more than one [location](Add_address_tab) associated with their entry.
1. ***Optional:*** Enter a **Buffer (hours)**. It indicates how much time lies between dispatch and actual delivery of the goods.
1. Tick the checkbox **To be fetched**, if the goods are collected.
1. Click "Done" to close the overlay window and add the business partner to the list.
 >**Note:** Repeat steps 1 to 6 to add further business partners.

1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Create automatic tour lists](Create_automatic_tour_lists).

## Example
![](assets/Add_tour_version.gif)
