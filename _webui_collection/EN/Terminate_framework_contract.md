---
title: How do I terminate a framework contract?
layout: default
tags:
  - Contract Management
  - Framework Contracts
lang: en
sequence: 20
ref: terminate_framework_contract
---

## Requirements
1. [Create a framework contract](Generate_framework_contract).
1. Make sure the [framework contract conditions](Define_contractual_terms_framework_contract) include a [contract period](Define_contract_period) with the following specifications:
    - As **Calendar** pick *Buchführungs-Kalender*.
    - As **Term Duration** and **Term Unit** enter "1 Year".
    - As **Term of Notice** and **Term of Notice Unit** enter "1 Month".
    - As **Subscription Interval** and **Subscription Unit** enter "1 Year".
    - Set the fields **Extension Type** and **Next Contract Terms** to *none*.
    - Specify the **Transition Conditions** as described towards the end of these <a href="Define_contract_period#transition-conditions" title="Specify the transition conditions of a contract period">instructions for defining a contract period</a>.

## Steps
1. Open "Contract Period" from the [menu](Menu).
1. [Start the action](StartAction#actions-menu) "Contract Change". An overlay window opens up.
1. Choose a **Date** when you want the contract change to take effect.
1. Pick the **Action** *Terminate* (*Kündigen*).
1. ***Optional:*** Pick a **Reason of Termination**.
1. Click "Start" to execute the termination and close the overlay window.
    >**Note:** The [contractual terms](Define_contractual_terms) specify the date by which a contract can be terminated. If an error occurs, the termination may most likely not be permitted upon the date chosen.

1. [metasfresh saves the progress automatically](Saveindicator).
