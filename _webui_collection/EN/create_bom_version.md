---
title: How do I create a bill of materials version (BOM version)?
layout: default
tags:
  - Master Data
  - Bill of Materials (BOM)
lang: en
sequence: 20
ref: create_bom_version
---

## Requirements
- [Create a BOM for the product to be manufactured](Create_BOM).

## Steps
1. Open "Bill of Material Version" from the [menu](Menu).
1. [Create a new BOM version entry](New_Record_Window).
1. In the field **BOM & Formula**, enter a part of the name or number of the [bill of materials](Create_BOM) for which you want to create a BOM version and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. The **Product** (manufacturing product) is automatically copied from the BOM.
1. The **Name** of the BOM version is automatically copied from the BOM and can be edited here.
1. Pick a **UOM** (unit of measure) for the manufactured product.
 >**Note:** Bills of materials always only refer to **single quantities** (individual pieces) of the manufacturing product. If the unit of measurement selected here differs from that of the manufacturing product, a [UOM conversion](Convert_UOMs) must be defined.

1. Make sure the **Search Key** of the BOM version is ***identical*** to the product number.
1. In the field **BOM Use**, pick *Manufacturing*.
 >**Note:** For commercial BOMs for finished products that are not manufactured but whose components should still be listed individually in the order, pick *Phantom*.

1. Pick the **Document Type** *Bill of Material Version*.
1. ***Optional:*** In the field **No.**, enter a custom document number.
1. Set a **Valid from** date.
 >**Note:** If this date lies in the *past*, the BOM version will be effective *immediately*. If it lies in the *future*, it will only apply *from that date*.

1. ***Optional:*** Pick a **Serial No. Sequence**. To do so, enter a part of the [document sequence](Define_new_doc_sequence) name and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
 >**Note:** The [product category](NewProductCategory) must be linked to an **Attribute Set** where the attribute *serial number* is defined.

1. [metasfresh saves the progress automatically](Saveindicator). As soon as the BOM version has been saved, the checkbox <kbd><img src="assets/checkbox-bom-defined.png" alt="Bill of Materials defined/available/provided='Y'"></kbd> in the entry of the linked manufacturing product is activated (read-only). Before using the BOM, [it must first be verified](verify_bom).

#### <a name="spare-parts-bom">Special Case: Spare Parts BOM</a> (for [repair service returns](Service_repair_customer_return))
- Pick the **BOM Type** *Spare Parts*.

    | **Tip:** |
    | :--- |
    | [Clone the entry of a manufacturing BOM](clone_record_window) and then remove all unneeded components from the record tab "Components of the BOM & Formula". Just make sure that the **Search Keys** are different when cloning. |

## Next Steps
1. [Add the BOM components required for production](add_bom_components).
1. [Complete the bill of materials and verify it](verify_bom).

## Example
<kbd><img src="assets/Create_BOM.gif" alt="GIF: Create BOM"></kbd>
