---
title: How do I add a new tax rate?
layout: default
tags:
  - Pricing
  - Value-Added Tax (VAT)
lang: en
sequence: 10
ref: vat_add_new_tax_rate
---

## Overview
Tax rates are included in metasfresh by default and can be flexibly configured according to various criteria such as amount, country, start of validity, etc. Under certain circumstances it may be necessary to adjust individual tax rates for a short period of time, e.g., in response to economic changes. Since each tax rate entry has its own validity date, all you have to do is record a new tax rate with the expected start date of validity and the respective data records will automatically replace each other in succession. In this way, future tax rate adjustments can be made well in advance to ensure that the new rates are applied in time and accounting errors are precluded.

## Steps
1. Open "Tax Rate" from the [menu](Menu).
1. [Add a new tax rate](New_Record_Window).
1. Give the tax rate a **Name**, e.g., "Standard Tax Rate 16%" or "Reduced Tax Rate 5%".
1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the tax rate will be effective *immediately*. If it lies in the *future*, the tax rate will only apply *from that date*.

1. Pick an appropriate **Tax Category**.
1. In the field **Rate**, enter the amount of the tax rate in percent, e.g., "16" or "5".
1. Set the **Country** from which services are provided.
1. In the field **To**, set the country in which the services are provided or where the tax rate should apply.
1. Tick the checkbox **Document Level** to calculate taxes per document instead of per line.
1. ***Optional:*** Set the desired [**Organization**](Org_add_new_organization). To do so, enter a part of the organization's name into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. [metasfresh saves the progress automatically](Saveindicator).
