---
title: end to end subscription cases
required data:
layout: default
tags:
  - e2e
  - Subscription
---


```
subscriptions documentation

1) Multiple Shiment Candidates

* Go to Contract Period (Flatrate Transitions) window;
* Create a new entry;
* Set a name to remember (I named mine "One Per Day Transition");
* Set term duration, term of notice , and their units;
* Important: Set Subscription term and unit (e.g. 1 day);
* Complete the Contract Period.

* Go to Contract Terms (Flatrate Conditions) window;
* Create a new entry;
* Give a name to remmber (I named mine "Term For Multiple Shipment Schedules");
* Set the Type to Abonament;
* Set the Contract Period created before;
* Create a line in the included tab: Select a product category and the Contract Period from before.

* Modify the system configuration C_SubscriptionProgress.Create_ShipmentSchedulesInAdvanceDays to a bigger number (e.g. 7);
* The reason for this is to have the shipment shcedules created before the date.

* Go to Sales Order Window;
* Add a line with a product from the product category set in the term;
* In the line, set Terms and Conditions to the Contract term before;
* Complete the order;
* => There should be a new entry in the Contract (Flatrate Term) window with product, partner etc from the orderline;
* Go to the last included tab (Subscription Progress);
* => There should be one entry for each day included in the period of the contract;
* Go to Shipment Candidate window;
* => There should be shipment schedules for all the subscription progress entries that are dated within the range of today and + 7 days ( or how many were defined in the sys config).

2) Pricing Changing on Extended

* Go to created Contract and check its Pricing System (remember it; it is the pricing system that was used in the Sales Order);
* Its price is the current Price Standard for the product, currency and state in the Contract;
* Go to the Product Price where that price was set (fit for Product, Pricing System, Location) and change the standard price;
* Go to the Contract and open the Actions List;
* Run the process C_Flatrate_Term_Extend;
* => There should be a new Contract, not completed, with the new price;
* Change the start date in the new contract so it won't overlap with the old one;
* Complete the Contract;
* Check created Invoice Candidate;
* => It should also have the right price, the one that was last set in the Product Price;
* Check the old contract and its invoice candidates;
* => They shall still have the old price.

3) Pausing Subscriptions

* Notice that the C_SubscriptionProgress entries that have shipment schedule entries counterparts have status = Shipment Open;
* Go to the initial Contract, click on the process C_SubscriptionProgress_InsertPause;
* Select a date range that covers a part of the days for which you have shipment schedules ( e.g. tomorrow, the day after nd the day after);
* Run the process;
* Go to the shipment schedules for those days;
* => They should be closed (Processed = true);
* Check the C_SubscriptionProgress entries again;
* => There should be 2 new entries: one for the pause start date and one with the pause end date. These 2 mark the range of C_SubscriptionProgress that are on pause;
* => They should have Contract Status "Shippment-Pause";
* => They should have Status = "Shipment Closed";
* Rerun the process now from the day after tomorrow until next week;
* => The C_SubscriptionProgress for tomorrow shall no longer be in pause ( when the pauses overlap with old pauses, those ols poses are deleted and the new ones override them);
* Rerun the process for some future dates that are not yet covered by shipment schedules;
* => There should be 2 new C_SubscriptionProgress entries for the start date and end date of that future pause;
* => The Statuses for those entries shall still be "Planned", because shipment schedules were not created yet.


4) Changing Receipients for Subscriptions

* Open the process C_SubscriptionProgress_ChangeRecipient
* Select a time range
* Select a partner, another than the partner the current Contract is for
* Select an address
* Run the process
* The C_SubscriptionProgress entries for the dates where the recipient was changed shall have that partner and address set ( both in database and displayed in webui)
* TODO
```