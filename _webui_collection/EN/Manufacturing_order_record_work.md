---
title: How do I record my work efforts for manufacturing order?
layout: default
tags:
  - Customer Service
  - Repairs
lang: en
sequence: 30
ref: manufacturing_order_record_work
---

## Requirements (for Service/Repair Order)
1. [Receive returned faulty products through the
Service/Repair Customer Return and create a process](Service_repair_customer_return).
1. [Start a repair project and create a Service/Repair Order](Service_repair_project_start).

## Steps
1. [Go to the menu](Menu) and open the window "Manufacturing Order".
1. [Use the filtering function](Filtering_function), to help you find the desired manufacturing order, e.g. by filtering after the **Target Document Type** *Service/Repair Order* and the **Planning Status** *Planning*.
1. Open the record of the manufacturing order in question.

### Issue/Receipt (for Service/Repair Order)
1. [Start the action](StartAction) "Issue/Receipt". This will open an overlay-window, the "PP Order Issue/Receipt" window.
1. <a href="ProductionCompletion" title="Record the consumption of materials">Record the consumption of manufacturing materials in the repair</a>.

### <a name="service-expenses">Record service expenses (for Service/Repair Orders)</a>
The service expenses can be recorded with a [service product](Add_service_product), which is then used in the quotation or order creation process to calculate all expenses from the respective repair order in a [compensation group](Create_manual_compensation_groups), so that an [Order line group discounts](Order_line_group_discount) can be applied to it if needed. Such a service product can be a flat-rate repair charge or drop costs completely in the case of warranty claims.

1. In the field **Repair Service Performed**, enter a part of the name or the number of the service product and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Record a **Summary** of the service expenses.
 >**Info:** The text entered here will subsequently also appear on the cost estimate (quotation) or order beneath the service product as information for the customer.

| **Notice:** |
| :--- |
| The Repair Service Performed and the Summary can be recorded and edited directly in the entry of the [Service/Repair project](Service_repair_project_start) under the register "Project Repair Task". |

### Record Work
1. [Start the action](StartAction#actionsmenu_WebUI) "Record Work". This will open an overlay-window.
1. Choose in the **Manufacturing Order Activity** the activity, for which you want to record the effort.
1. Enter in the field **Duration** the duration of the activity in the corresponding **Duration Unit**.
1. Click on "Start", to save the work effort and to close the overlay-window.
1. Go to the register " Manufacturing Order
Workflow" at the bottom of the page. Here you can view all recorded work efforts.

### Close manufacturing order
When all tasks have been completed and expenses have been recorded, the manufacturing order can be closed.

1. Open the [document processing menu](StartAction#Menu_DocumentProcessingActions) (`Alt` + `I` / `⌥ alt` + `I`) and click on *Close*.
1. As long as [the manufacturing order is linked with a repair project](Service_repair_project_start), the expenses data is now transferred to the project entry for billing and the respective project tasks receives the status *Closed*.

### Reopen manufacturing order (optional)
1. [Start the action](StartAction) "Reopen", to revert the status of the manufacturing order back to *Completed*.
1. Now you can edit the data, e.g. work effort.

## Next Steps
1. [Generate a cost estimation for the repair services provided](Quotation_estimate_repair_services).
