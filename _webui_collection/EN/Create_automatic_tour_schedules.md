---
title: How do I create automatic tour schedules?
layout: default
tags:
  - Logistics
  - Tour Planning
lang: en
sequence: 20
ref: create_automatic_tour_schedules
---

## Overview
Tour schedules are created based on the settings of the tour versions. Depending on these settings, i.e. on which days, with what frequency (weekly/monthly) and with how much buffer time between dispatch and actual delivery, the tour schedules are created automatically for the time period selected in the tour scheduling schema.

## Requirements
1. [Add a tour scheduling schema](Add_tour_scheduling_schema).
1. [Add a tour version for that schema](Add_tour_version).

## Steps
1. Open "Tour" from the [menu](Menu).
1. From the [list view](ViewModes), [select](RecordSelection) the [tour scheduling schema](Add_tour_scheduling_schema) you want to use for creating a tour schedule.
1. [Start the action](StartAction) "Generate Delivery Days". An overlay window opens up.
 >**Note:** You will also find this action in the actions menu in the detailed view of an entry.

1. Set a **Date from** and a **Date To** in order to specify the period for which the schedules shall be created.
1. Click "Start" to create the schedules and close the overlay window.
1. Open the entry of the tour scheduling schema and use the [related documents to jump](JumptoviaSidebar) into the window "Delivery Days" (under LOGISTICS in the sidebar).
1. In this window you can view the newly created tour schedule and keep it updated.
