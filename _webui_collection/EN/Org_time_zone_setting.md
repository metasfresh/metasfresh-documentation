---
title: How do I set the time zone for an organization?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
lang: en
sequence: 30
ref: org_time_zone_setting
---

## Overview
In metasfresh, you can set the time zones of organizations individually. This ensures that internal planning and scheduling within an organization is always consistent and not unintentionally disrupted by international location changes.

## Steps
1. Open "Organisation" from the [menu](Menu).
1. Open the entry of the organization for which you want to set the time zone.
1. Go to the record tab "Organization Info" at the bottom of the page and open the [advanced edit menu](Open_AdvancedEditTab) of the organization line.
1. In the field **Time Zone**, enter a part of the name of the desired time zone and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
 >**Note:** To find certain time zones you can use the names from the <a href="https://www.iana.org/time-zones" title="IANA Time Zone Database" target="_blank">IANA database</a>, such as "Etc/GMT+1" or "Europe/Berlin" (see also the list of time zones on <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones" title="List of tz database time zones" target="_blank">Wikipedia</a>).

1. Click "Done" to apply the changes and close the advanced edit menu.

| **Note:** |
| :--- |
| If no time zone is set for an organization, metasfresh reverts to the time zone of the server location by default to calculate dates and times automatically, such as the date promised or the date of provisioning of a sales order. |
