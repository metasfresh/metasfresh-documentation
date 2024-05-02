---
title: How do I receive returned products in need of repair?
layout: default
tags:
  - Customer Service
  - Repairs
lang: en
sequence: 20
ref: service_repair_customer_return
---

<!--
Warranty Vs. Guarantee => https://www.easternarchitectural.com/blog/understanding-the-difference-warranty-vs.-guarantee
-->

## Requirements
These preparatory steps are necessary in order to obtain clearly labeled products (HUs) whose data and transactions are stored in the system in a traceable manner so that the respective returns can be correctly identified, allocated and properly processed as quickly as possible in the event of a warranty claim.

1. [Manufacture a product](ProductionCompletion) with a **serial number** ([manually](ProductionCompletion#serial-number-manually-manufacturing) or via [component generator](...)).
1. [Create a sales order](SalesOrder_recording) for the manufactured product and [complete it](DocumentProcessingComplete).
1. [Create a shipment for that sales order](Ship_SalesOrder).

## Steps

### Record service reception data
1. Open "Service/Repair Customer Return" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. In the field **Business Partner**, enter a part of the name or number of the [customer](New_business_partner_customer) who returned a product for repair and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Pick the **Warehouse** where the product in need of repair was received.
1. Pick a [**Document Type** for repair service returns](Doc_type_service_repair).

### Record returned products
1. [Start the action](StartAction#actions-menu) "Select HUs to return". An overlay window opens up.
1. ***Optional:*** [Use the filter](Filtering_function) to help you find a specific HU, e.g., by barcode.
1. [Select](RecordSelection) the HU you want to enter as a return.
 >**Note:** Only HUs that are a product of a [manufacturing order](NewManufacturingOrder) and were provided with a **serial number** for unique identification are listed here.

1. [Start the quick action](StartAction#quick-actions) "Select HU" to add the HU to the list.
 >**Note:** The HUs can only be added individually. Repeat **steps 2 to 4** to add more HUs.

1. Click "Done" to close the overlay window.
1. The recorded HUs are listed under the record tab "Lines" at the bottom of the page.
 >**Note:** Please note that the same HU cannot be selected for return more than once.

1. If you want to undo the selection of an HU, simply open the context menu by right-clicking on the respective line and then click on "Delete" (`Alt` + `Y` / `⌥ alt` + `Y`). Afterwards, the HU can be selected again for the return.
 >**Note:** This only works as long as the entry for the service reception was **not yet completed**.

<br>

| **Special Note:** |
| :--- |
| Warranty cases to be returned after processing to the person making the claim are not added to the internal stock at goods receipt, but instead are marked as externally-owned stock that is not available for any transactions other than repair processing. |

### Add spare parts for repair

| **Note:** |
| :--- |
| The spare parts of a manufacturing product must be recorded separately in a [spare parts BOM](create_bom_version#spare-parts-bom) ("repair BOM") &mdash; i.e. alongside the [manufacturing BOM](Create_BOM), which contains *all* components required for manufacturing (tangible and intangible, e.g., services). |

1. [Start the action](StartAction#actions-menu) "Add Spare Parts". An overlay window opens up.
1. Pick the **Product** you want to add as a spare part.
    >**Note:** The fields **UoM** and **Quantity** are automatically completed with the values from the spare parts BOM of the returned product.

1. Edit the **UoM** and/or **Quantity** if required.
1. Click "Start" to close the overlay window and add the spare parts to the list under the record tab "Lines" at the bottom of the page.

### Complete the service reception and create a request
1. [Complete the document](DocumentProcessingComplete).
1. A new request is automatically created for this service reception entry, ready to be checked and released by a responsible person.

## Next Steps
1. Use the entry's [related documents to jump](JumptoviaSidebar) into the window "Request (all)" (under CRM in the sidebar) and then open the request which has already been [found by the filter](Filtering_function) to check and release it.
1. [Start a repair project after the request has been released](Service_repair_project_start).
