---
title: How to set a font to a Jasper barcode
layout: default
tags:
  - Barcodes
lang: en
sequence: 20
ref: set_font_to_jasper_barcode
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/7802#issuecomment-832600117
-->

## Issue
The text below a barcode is not displayed although in JasperStudio everything is in order. This points to an undefined font style.

## Solution
Create a style for the barcode's font and apply it to the element.

## Steps
1. Define the style, e.g., `<style name="Barcode" forecolor="#000000" fontName="Arial" fontSize="8"/>`.
1. Apply the style to the barcode to set the font, e.g.:

    ```
    <componentElement>
        <reportElement style="Barcode" positionType="FixRelativeToBottom" stretchType="RelativeToTallestObject" x="567" y="11" width="132" height="50" uuid="615ab9ca-c995-4dfb-a897-74b3031e782e">
            <property name="com.jaspersoft.studio.unit.width" value="px"/>
            <property name="com.jaspersoft.studio.unit.height" value="px"/>
            <property name="com.jaspersoft.studio.unit.x" value="px"/>
            <property name="com.jaspersoft.studio.unit.y" value="px"/>
            <property name="com.jaspersoft.studio.unit.barHeight" value="px"/>
            <printWhenExpression><![CDATA[$F{gtin}!=null]]></printWhenExpression>
        </reportElement>
        <jr:barbecue xmlns:jr="http://jasperreports.sourceforge.net/jasperreports/components" xsi:schemaLocation="http://jasperreports.sourceforge.net/jasperreports/components http://jasperreports.sourceforge.net/xsd/components.xsd" type="UCC128" drawText="true" checksumRequired="false" barHeight="34">
            <jr:codeExpression><![CDATA[$F{gtin}]]></jr:codeExpression>
            <jr:applicationIdentifierExpression><![CDATA["01"]]></jr:applicationIdentifierExpression>
        </jr:barbecue>
    </componentElement>
    ```
