---
title: How do I add new calendar periods?
layout: default
tags:
  - Master Data
  - Calendar
lang: en
sequence: 20
ref: add_new_calendar_periods
---

## Steps
1. Open "Calendar and Year" from the [menu](Menu).
1. Open the entry of an existing calendar, e.g., "Buchführungs-Kalender" (*accounting calendar*), or [add a new one](Add_new_calendar).
1. Go to the record tab "Year" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Enter the **Year** for which you want to create a new period, e.g., "<script>document.write(new Date().getFullYear() + 1)</script>".
1. Click "Done" to close the overlay window and add the year to the list.
1. [Select](RecordSelection) the newly created record tab entry and [start the action](StartAction#actions-menu) "Create Periods". An overlay window opens up.
1. Set a **Start Date**, e.g., "01/01/<script>document.write(new Date().getFullYear() + 1)</script>".
1. Define an appropriate **Date Format**, if necessary (e.g., *MMM-yy* for *Jan-<script>document.write((new Date().getFullYear() + 1).toString().substr(-2));</script>*).
 >**Note:** You can learn more about date and time patterns <a href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html" title="Date format examples | Oracle.com" target="\_blank">here</a>.

1. Click "Start" to create the periods and close the overlay window.
1. Use the [context menu](Jumpto_via_context_menu) ![](assets/Calendar periods context menu.png) of the newly created year entry from before to switch into the window "Calendar Periods" where you will see a list of all the months from this period.

## Example
<kbd><img src="assets/Add new calendar periods.gif" alt="GIF: Add new calendar periods"></kbd>
