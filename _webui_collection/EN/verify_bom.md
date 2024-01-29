---
title: How do I verify a bill of materials (BOM)?
layout: default
tags:
  - Master Data
  - Bill of Materials (BOM)
lang: en
sequence: 40
ref: verify_bom
---

## Overview
In order to obtain a valid BOM that can be used in manufacturing it has to be verified first.

## Requirements
1. [Create a BOM for the product to be manufactured](Create_BOM).
1. [Create a BOM version](create_bom_version).
1. [Add the BOM components required for production](add_bom_components).

## Steps
1. Open "Bill of Material Version" from the [menu](Menu).
1. Open the entry of an existing BOM version or [add a new one](create_bom_version).
1. [Complete the BOM version](DocumentProcessingComplete), if not yet done.

### Verify Bill of Materials
1. [Start the action](StartAction#actions-menu) "Verify BOM". An overlay window opens up.
1. ***Optional:*** Pick a [**Product Category**](NewProductCategory).
1. Click "Start" to confirm and close the overlay window.
1. [metasfresh saves the progress automatically](Saveindicator).
1. To check the verification status of the BOM, [jump into the field](Jumpto) **Product** of the entry and confirm that the checkbox <kbd><img src="assets/BOM_product_verified.png" alt="Verified='Y'"></kbd> is ticked off.

    | **Note:** |
    | :--- |
    | Changes can only be made to a bill of materials as long as it has not yet been used in production. After each change to a BOM, it must be verified again! |

## Next Steps
- [Create a manufacturing order using a bill of materials](NewManufacturingOrder).

## Example
<kbd><img src="assets/Create_BOM.gif" alt="GIF: Create BOM"></kbd>
