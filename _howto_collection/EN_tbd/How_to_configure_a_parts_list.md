---
title: How to configure a parts lists with percentual parts (recipe)?
layout: default
tags:
  - Master Data
  - Production
lang: en
---

## Preparation
1. A product called "result" which is meant to be produced exists.
1. There are two products called "part1" and "part2" from which the product called "result" is meant to be produced.

## Steps
1. Open the window "parts lists configuration".
1. [Add new data](How_to_add_new_data).
1. Produkt auswählen.
1. Datum für **Gültig ab** wählen, das in der Vergangenheit liegt.
1. [Save](How_to_add_new_data).
1. Register `Stücklistenbestandteile` wechseln.
1. [Add new data](How_to_add_new_data).
1. Enter "part1" in **Product** "teil1".
1. Mark the checkbox in **Is amount in %**.
1. Enter 40& in the field **Amount %**.
1. [Save](../Wie_lege_ich_einen_neuen_datensatz_an).
1. [Add new data](How_to_define_new_data).
1. Enter "part2" in **Product**.
1. Mark the checkbox in **Is amount in %**.
1. Enter 60 % in the field **Amount %**.
1. Open the process "Verify parts lists" in the menu.
1. Select the product group of the parts lists product.
1. Click OK.
