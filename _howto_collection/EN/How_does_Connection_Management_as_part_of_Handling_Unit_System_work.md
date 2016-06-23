---
title: How does the Connection Management as part of the Handling Unit System work?
layout: default
---
## Übersicht

metasfresh enables you to keep track of a product not only as in stocked amounts but it is also possible to map in which form the article is.

As an example a product can be represented as e.g. 10 pieces in a box where as there are 20 boxes on one pallette.

To map a product (customer unit = CU) with its packaging (Transport Unit = TU) and its aids used in loading is called **Handling Unit System**.
Therefore a CU in a TU in an LU is a **Handling Unit**.

![Handling Unit](../images/en_drawing_Handling_Unit_System.png)

## Beispiele
HU|type|example
---|---|---
CU|Product|Individual pieces (e.g. salad), bulk material (e.g. sand) or Free-flowing goods (e.g. milk)
TU|Packaging|Non-reusable crates, reusable crates (e.g. Eurobox, IFCO), put-up hinge, box with individual drinks, etc.
LU|Loading aids|Palette, container, Paloxes, etc.

HU|Configuration|Explaination
---|---|---
CU|[How to Add a new product?](How_to_Add_a_new_Product)|Shows how to create a CU and add several packaging instructions (CU-TU relation).
TU|How to add packaging instructions
LU|How to relate an LU to a packing instruction
