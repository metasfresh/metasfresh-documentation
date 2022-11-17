---
title: How do I receive returned products in need of repair (warranty cases)?
layout: default
tags:
  - Customer Service
  - Repairs
lang: en
sequence: 10
ref: service_repair_customer_return
---

<!--
Warranty Vs. Guarantee => https://www.easternarchitectural.com/blog/understanding-the-difference-warranty-vs.-guarantee
-->

## Overview
Sometimes customers may report faulty products and send them back for repair in order to receive a mended product back in return (as a gesture of goodwill, if applicable). In metasfresh, such cases can be handled via the service reception and repairs incl. spare parts, other services, etc. can be carried out as part of manufacturing orders (repair orders).

<kbd><img src="assets/Service Acceptance to Offer (repair process).png" alt="Abb.: Service reception to Quotation (repair process)"></kbd>

## Requirements
1. [Produce a product with a serial number](ProductionCompletion).
1. [Create a sales order](SalesOrder_recording) for the manufactured product and [complete it](DocumentProcessingComplete).
1. [Create a shipment for the sales order](Ship_SalesOrder).

## Steps

### Record service reception data
1. Open "Service/Repair Customer Return" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. In the field **Business Partner**, enter a part of the name or number of the [customer](New_business_partner_customer) who returned a product for repair and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Pick a **Warehouse** where the product in need of repair will be received.
1. Pick the **Document Type** [*Service Annahme*](Doc_type_service_repair).

### Record returned products
1. [Start the action](StartAction#actions-menu) "Select HUs to return". An overlay window opens up.
1. ***Optional:*** [Use the filter](Filtering_function) to help you find a specific HU, e.g., by barcode.
1. [Select](RecordSelection) the HU you want to enter as a return.
 >**Note:** Only HUs that are a product of a [manufacturing order](NewManufacturingOrder) and were provided with a serial number for unique identification are listed here.

1. [Start the quick action](StartAction#quick-actions) "Select HU" to add the HU to the list.
 >**Note:** The HUs can only be selected individually. Repeat steps 2 to 4 to add more HUs.

1. Click "Done" to close the overlay window.
1. The recorded HUs are listed under the record tab "Lines" at the bottom of the page.
 >**Note:** Please note that the same HU cannot be selected for return more than once.

1. If you want to undo the selection of an HU, simply open the context menu by right-clicking on the respective line and then click on "Delete" (`Alt` + `Y` / `⌥ alt` + `Y`). Afterwards, the HU can be selected again for the return.
 >**Note:** This only works as long as the entry for the service reception has not yet been completed.

### Add spare parts for repair

| **Info:** |
| :--- |
| The Accessories of a manufacturing product also need an extra [Spare Parts BOM](Create_BOM#spare-parts-bom). This is in addition to the [Bill of Materials (BOM)](Create_BOM) that contains all components for the manufacturing (material or immaterial, e.g. services). |

1. [Start the Action](StartAction#actions-menu) "Add Spare Parts" and an overlay will open.
1. Select the **product** that shall be used as spare part
 > **Info:** The fields **UOM (Unit of Measurement)** and **Quantity** are filled automatically with values from the Spare Parts BOM of the selected product.

1. Change the **UOM** or **Quantity** if needed.
1. Press "Start" in order to close the overlay and add the spare parts to the tab "Lines".

### Complete the Service Acceptance
1. [Complete the document.](DocumentProcessingComplete)
1. A process is automatically created for the service acceptance. This process is now available for the assigned person to be checked and released.

### Next Steps
1. [Jump via the related documents](JumptoviaSidebar) to the window "Request (all)" (in CRM in the sidebar). There you can open the [already filtered](Filtering_function) request.
1. [After a successful check start a repair project](Service_repair_project_start).
