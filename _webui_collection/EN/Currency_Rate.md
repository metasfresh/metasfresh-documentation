---
title: How do I configure currency exchange rates?
layout: default
tags:
  - Master Data
  - Currency
lang: en
sequence: 20
ref: currency_rate
---

## Overview
If you want to work with currencies other than your default currency, you have to configure an exchange rate for the conversion.

**Example:** You used the [initial setup wizard](InitialSetupWizard) to set your metasfresh system to USD, but you also want to work with EUR.

## Steps
1. Open "Currency Rate" from the [menu](Menu).
1. [Add a new currency rate](New_Record_Window).
1. Select a base currency (**Currency**) and a counter currency (**Currency To**), e.g. USD to EUR.
 >**Note:** Each exchange rate must be configured separately, e.g. USD to EUR, EUR to USD, etc.

1. Enter *either* the factor to **Multiply Rate** by *or* the divisor to **Divide Rate** by.
 >**Note:** The other operand will be automatically calculated, respectively.

1. Select *Spot* as the **Currency Type**.
1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the currency rate is effective *immediately*. If it lies in the *future*, the currency rate will only be effective *from that date*.

1. [metasfresh saves the progress automatically](Saveindicator).
 >**Note:** Repeat steps 2 to 6 to set up further currency conversions, e.g. EUR to USD.

## Error Message
If the currency conversion is not configured correctly, an error message will appear when creating a goods receipt or an invoice that looks like this:

`... Unable to convert from currency $ ... to currency € ...`

## Example
![](assets/Currency_Rate_walkthrough.gif)
