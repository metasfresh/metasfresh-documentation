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

Sometimes customers may report faulty products and send them back for repair in order to receive a mended product back in return (as a gesture of goodwill, if applicable). In metasfresh, such cases can be handled via the service reception and repairs incl. spare parts, other services, etc. can be carried out as part of manufacturing orders.

<kbd><img src="assets/Service Acceptance to Offer (repair process).png" alt="Abb.: Service Acceptance to Offer (repair process)"></kbd>

## Requirements
1. [Produce a Product with a serial number.](ProductionCompletion)
1. For the produced product [enter a sales order](SalesOrder_recording) and [complete it.](DocumentProcessingComplete)
1. [Create a shipment for the sales order.](Ship_SalesOrder)

## Steps

### Enter data in the service acceptance
1. Open the window "Service/Repair Customer Return" [from the menu](Menu)
1. [Create a new entry.](New_Record_Window)
1. In the field **Business Partner** enter a part of the name or number from the [business partner](New_Business_Partner) who returned a product for repair. Then select the appropriate business partner from the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box Content (Autocomplete)">dropdown list</a>.
1. Choose a **warehouse** to take care of the returned product.
1. Choose the **document type** [Service Annahme](Doc_type_service_repair).

### Enter returned products
1. [Start the Action](StartAction#actions-menu) "Select HUs to return" and an overlay will open.
1. ***Optional:*** [Use the filter](Filtering_function) in order to find the desired HU, e.g. by barcode
1. [Select](RecordSelection) the HU that should be returned.
>**Info:** Only HUs from a [manufacturing order](NewManufacturingOrder) and with a serial number will be available to select.

1. Use the [quick action](StartAction#quick-actions) "Select HU" to add it to the list
>**Info:** It is only possible to select one HU at a time, repeat the steps 2 to 4 for multiple HUs

1. Exit the overlay with the button "Done".
1. The added HUs will be listed in the tab "Lines".
>**Info:** Please notice that a HU can't be used multiple times in the same return.

1. In order to remove an HU from the selection just right-click on the selected line and select "Delete" (`Alt` + `Y` / `⌥ alt` + `Y`). Afterwards the HU is available to be selected again.
>**Info:** This does only work until the service acceptance is completed.

### Adding Spare Parts for a repair
| **Info:** |
|:--- |
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
