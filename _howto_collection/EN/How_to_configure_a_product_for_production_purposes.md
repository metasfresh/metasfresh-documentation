---
title: How to configure a product for production purposes
layout: default
tags:
  - master data
  - production
lang: en
---
## Preparation
1. [A product called "result" exists which is meant to be produced](Wie_lege_ich_ein_neues_Produkt_an)
1. [Stückliste anlegen](Wie_erstelle_ich_eine_Rezeptur_Stückliste)
1. A production resource exists
1. A workflow has been set up

## Schritte
1. [Fenster "Produkt Plandaten" öffnen](Wie_finde_und_öffne_ich_ein_Fenster)
1. Search for the product "result"
1. Change to the tab "Data planning" 
1. [Create a new dataset](How_to_add_new_data)
1. __Warehouse__ needs to be selected in which the product is going to be produced.
1. __Productionresource__ needs to be selected which is used in production process.
1. __Is being produced__ to be set to _Yes_
1. __Stücklisten Konfiguration__ für das Produkt auswählen (siehe [Stückliste anlegen](Wie_erstelle_ich_eine_Rezeptur_Stückliste))
1. __Workflow__ is to be selected for production purposes.
1. __Order Policy__ _Lot for Lot_ needs to be selected
1. Optional: if the production order in to be completed automaticall please mark __isDocComplete__ 
1. [Save](How_to_add_new_data)
