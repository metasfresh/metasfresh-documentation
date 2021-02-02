---
title: How to configure a product for production purposes
layout: default
tags:
  - Master Data
  - Production
lang: en
---

## Preparation
1. [A product called "result" exists which is meant to be produced](../Wie_lege_ich_ein_neues_Produkt_an).
1. [Stückliste anlegen](../Wie_erstelle_ich_eine_Rezeptur_Stückliste).
1. A production resource exists.
1. A workflow has been set up.

## Schritte
1. [Fenster "Produkt Plandaten" öffnen](../Wie_finde_und_öffne_ich_ein_Fenster).
1. Search for the product "result".
1. Change to the tab "Data planning".
1. [Create a new dataset](How_to_add_new_data).
1. **Warehouse** needs to be selected where the product is going to be produced.
1. **Productionresource** needs to be selected which is used in production process.
1. **Is being produced** to be set to _Yes_.
1. **Stücklisten Konfiguration** für das Produkt auswählen (siehe [Stückliste anlegen](../Wie_erstelle_ich_eine_Rezeptur_Stückliste)).
1. **Workflow** is to be selected for production purposes.
1. **Order Policy** _Lot for Lot_ needs to be selected.
1. ***Optional:*** If the production order is to be completed automatically, please tick the checkbox **isDocComplete**.
1. [Save](How_to_add_new_data).
