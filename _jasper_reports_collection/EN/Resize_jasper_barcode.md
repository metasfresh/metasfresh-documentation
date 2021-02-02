---
title: How to resize a Jasper barcode
layout: default
tags:
  - Barcodes
lang: en
sequence: 10
ref: resize_jasper_barcode
---

## Steps
1. Set the desired size for the `reportElement`, i.e. `width` and `height`.
1. In the `reportElement`, set the desired properties (i.e. `property name`) and use "pixel" as value for the size.
1. In the actual barcode element, set the module ratio, e.g., `moduleWidth="1.0"`.

## Code Example

```
<componentElement>
  <reportElement x="455" y="67" width="100" height="30" uuid="32894ab7-c334-4e57-99a1-5362e3830917">
        <property name="com.jaspersoft.studio.unit.height" value="pixel"/>
        <property name="com.jaspersoft.studio.unit.moduleWidth" value="pixel"/>
  </reportElement>
  <jr:Code128 xmlns:jr="http://jasperreports.sourceforge.net/jasperreports/components" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports/components http://jasperreports.sourceforge.net/xsd/components.xsd" moduleWidth="1.0" textPosition="bottom">
        <jr:codeExpression><![CDATA[$F{documentno}]]>
        </jr:codeExpression>
   </jr:Code128>
</componentElement>
```
