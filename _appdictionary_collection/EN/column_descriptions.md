---
title: Column Descriptions
layout: default
tags:  
  - Developers and Customizers
lang: en
sequence:
ref: column_descriptions
---

## Overview
This guide gives you general information about some fields and columns that often come up in connection with application dictionary customizations.

## Prices

* `PriceEntered`
  * per-unit-price in the record's `Price_UOM_ID` or (if not set) thew record's `M_Product`'s stock UOM;
  * possible discount **not** applied.
* `PriceEntered_Override`
  *  editable field where a different `PriceEntered` can be set by the user - in the same UOM as `PriceEntered`
* `PriceActual`
  * per-unit-price in the same UOM as `PriceEntered`
  * possible discount **already** applied.
  * so, the `PriceActual` is `PricEntered` minus `Discount`
* `PriceActual_Override`
  * **not editable**
  * computed in `de.metas.invoicecandidate.api.impl.InvoiceCandBL.setPriceActual_Override(I_C_Invoice_Candidate)`
  * computed from (PriceEntered_Override or PriceEntered) and (Discount_Override or Discount), if at least one of those two `_Override` values are not null
  * rounded to the IC's price list's precision

## Discounts

### Both purchase and sales

* Discount to reduce the *price per unit*
  * `Discount`
    * discount as computed with by the pricing engine or inherited from the related record (e.g. order line)
  * `Discount_Override`
    * editable field where a different discount can be specified by the user

### Purchase only

* Discount to reduce the *invoicable quantity in stock UOM*
  * `QualityDiscountPercent`
    * computed as the percentage the quantities from related inout lines that were flagged to have issues. The respective quantites are in the `M_Product`'s stock-UOM
      * example:
	    * two inout lines: 1st: qty=75 with issues; 2nd qty=25 with no issues;
  	    * => QualityDiscountPercent = 75
  * `QualityDiscountPercent_Override`
    * editable field where a different `QualityDiscountPercent` can be set by the user
    * if set to non-null, it's used to compute a value for `QtyWithIssues_Effective`
    * also set by metasfresh from pricing conditions' quality discounts
  * `QualityDiscountPercent_Eff`

## Quantities

### Both purchase and sales

* `QtyOrdered`
  * ordered quantity, in the `M_Product`'s stock-UOM
* `QtyEntered`
  * ordered quantity, in the record's `C_UOM_ID`
* `QtyDelivered`
  * shipped/received/fulfilled quantity in the `M_Product`'s stock-UOM
* `QtyToInvoice`
  * invoicable quantity in the respective product's (stock-)UOM
  * usually the value is `QtyDelivered` minus `QtyInvoiced` minus (if purchase) `QtyWithIssues_Eff`
* `QtyToInvoice_Override`
  * editable field where a different `QtyToInvoice` can be set by the user - also in the respective product's (stock-)UOM.
  * will be reset to null by metasfresh as soon as the quantity was fully invoiced
* `QtyToInvoice_OverrideFulfilled`
  * keeps track of how much from the currently set `QtyToInvoice_Override` was invoiced so far. When `QtyToInvoice_Override` ==  `QtyToInvoice_OverrideFulfilled`, then both values are reset to null
* `QtyInvoiced`
  * already invoiced qty in the `M_Product`'s stock-UOM
* `QtyDeliveredInUOM`
  * the effective delivered quantity; in the sales case, it's based on either the nominal or catch quantity from the respective inOutLines.
* `QtyToInvoiceInUOM`
  * the effective invoicable quantity in the invoice candidate's UOM

### Purchase only

* `QtyWithIssues`
  * shipped/received quantity in the `M_Product`'s stock-UOM where the respective inout lines are flagged as having issues and shall therefore not be invoiced
  * if `InvoicableQtyBasedOn == Catch`, then this quantity is converted
* `QtyWithIssues_Eff`
  * affective value that is usally subtracted from `QtyDelivered` when computing `QtyInvoice`
  * The value is either taken straight from `QtyWithIssues`, or computed from `QtyDelivered` and `QualityDiscountPercent_Override`
* `QtyToInvoiceBeforeDiscount`
   * based on *all* delivered quantities (with or without issues) - in the respective product's (stock-)UOM

### Sales only

* `InvoicableQtyBasedOn`
  * coming from pricing system or referenced record such as order line
* decides whether the shipments nominal or "real" (catch) quantity shall be invoiced.

## Misc  

* `IsInDispute`
  * set to true by metasfresh if there is at least one related inout line flagged to have issues
* InvoiceLine aggregator : if there are inout lines with quanties that have issues
  * **and** if the respective invoice candidate references the "Fresh Qualitätsabzug Aggregator" (not the default one!) via its `C_Invoice_Candidate_Agg_ID`
    * then upon invoicing, metasfresh will create two invoice lines; one line for the complete moved quantity and another line with a minus sign and the quantity with issues
  * **and** if the respective invoice candidate references the "Dafault" Aggregator via its `C_Invoice_Candidate_Agg_ID`
    * then upon invoicing, metasfresh will create one invoice line that contains the moved quantity minus the quantity with issues
