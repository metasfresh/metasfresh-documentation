---
title: Which credit status types does metasfresh provide?
layout: default
tags:
  - Master Data
  - Business Partner
  - Credit Limit
lang: en
sequence: 10
ref: credit_status_types
---

## Overview
In metasfresh, you can limit the total amount from all unpaid invoices of a partner to a maximum. This is called the [*credit limit*](Set_credit_limit).

If a partner has reached their credit limit, any new orders placed by them cannot be processed for as long as their debts remain unpaid. How much of the partner's credit has been used is shown in the field **Credit Limit Usage** in the respective partner entry.

There are several different types of credit statuses, the meanings of which are described below:

| Status Name | Meaning |
| :--- | :--- |
| No Credit Check | Credit is not checked. |
| Credit Watch | Note to the user that they will soon be reaching their credit limit. |
| Credit Hold | No orders, shipments, payments, etc. are possible!<br> **Note:** The "hold"-status can be removed by increasing the credit limit. |
| Credit OK | Sales possible without restrictions. |
| Credit Stop | No orders, shipments, payments, etc. are possible!<br> **Note:** The "stop"-status ***cannot*** be removed by increasing the credit limit. |

## Set credit statuses and limits
- [How do I manage the credit status of a business partner?](Set_credit_status_BP)
- [How do I manage the credit status of a business partner group?](Set_credit_status_BPgroup)
- [How do I set a credit limit for a business partner?](Set_credit_limit)
