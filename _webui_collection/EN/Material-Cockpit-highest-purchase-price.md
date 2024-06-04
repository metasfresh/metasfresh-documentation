---
title: How can I check the highest purchase prices for a specific period? (System Administrator)
layout: default
tags:
  - Master Data
  - Warehouse Management
  - Material Cockpit / Trading Desk
lang: en
sequence: 20
ref: material-cockpit-highest-purchase-price
---

<!--
see also: https://github.com/metasfresh/mf15/issues/2942
-->

## Overview
Via the [material cockpit](Material-Cockpit), metasfresh offers the possibility to determine, among other data, the highest purchase price for a defined period in the past, based on the current day. In order to use this feature, you need **administrator permissions** to activate the system configurations required to calculate and display the requested data accordingly. These system configurations are the following:
- `de.metas.ui.web.material.cockpit.rowfactory.HighPriceProvider.isActive`
    - By enabling this configuration, a column called "Highest PP" (PP=Purchase Price) is added to the material cockpit [list view](ViewModes).
- `de.metas.ui.web.material.cockpit.field.HighestPurchasePrice_AtDate.LastDays`
    - Via this configuration, you can set the timespan, i.e. days in the past to be used for determining the last highest purchase price based on the current day.
- `de.metas.ui.web.material.cockpit.field.HighestPurchasePrice_AtDate.CurrencyCode`
    - Via this configuration, you can define the currency that the highest price shall be displayed in, also considering the conversion rate in case of different currencies.

In order to be performant, the **data is cached** and updated automatically in increments each night, meaning that only products and dates are updated. The cached data contains the highest price of each product on each day in the defined currency.
You can also [manually update the cache or rebuild it](#update-rebuild-cache) entirely, e.g., after changing the currency rate.

## Steps

### Enable System Configurations
1. [Log in to metasfresh](Login) with the [user role](NewUserRole) "System Administrator".
1. Open "System Configuration" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the system configuration by **Name** (see overview above).
1. Open the system configuration entry.
    >**Note:** Make sure the entry you want to enable (see next step) is [activated](Activate_record).

1. In the field **Search Key**,
    - to **enable** a system configuration enter `Y` and hit `↵ Enter` to apply. To disable it, enter `N`.
    - to set the **number of days** for determining the last highest purchase price enter a number (e.g. `7`) and hit `↵ Enter` to apply.

1. [metasfresh saves the progress automatically](Saveindicator).

### <a name="update-rebuild-cache">Manually Update or Rebuild Cache</a>

| **Important note:** |
| :--- |
| If the currency rates of purchase prices are changed, the entire **cache must be rebuilt** in order for the material cockpit to display the correct purchase prices. |

1. Open "Material Cockpit" from the [menu](Menu).
1. [Start the action](StartAction#actions-menu) "Update purchase order highest price cache". An overlay window opens up.
1. You have two options:<br>
    **a)** Tick the checkbox **Rebuild** if you want to ***delete the existing cache and recreate it*** based on the most current data (e.g., in case of changed currency rates).<br>
    **b)** If you only want to ***update products and dates*** based on the existing currency data, **deactivate the checkbox**.
    >**Note:** The cache is automatically updated each night without rebuilding (option b) for daily accurate data.

1. Click "Start" to update/rebuild the cache.
