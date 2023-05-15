---
title: Add customer-specific translations to system element (AD_Element_Trl)
layout: default
tags:  
  - Languages & Translations
lang: en
sequence: 30
ref: ad_element_trl_customization
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/15342#issuecomment-1539502575
-->

## Overview
When a user/client requests to customize an element (field, action, menu item, etc.) with a specific name (translation), there is no need to create a new system element from scratch which would require, among other things, maintaining all necessary dependencies to avoid possible database errors.

Instead you can simply use the existing elements (`AD_Element`), add the customer-specific name and mark it as the customization to be used, i.e. displayed on the front end.

| **Important note:** |
| :--- |
| This custom value can be set individually for each client. Unlike the name of the element (`AD_Element.Name` or `AD_Element_Trl.Name`), the user-defined translation is unaffected by any migration script updates and, if set, always takes precedence over the element's name. |


## Requirements
- [Activate the translation subtab for system elements (AD_Element)](activate_translations_tab).

    <kbd><img src="https://github.com/metasfresh/metasfresh-documentation/assets/50820854/0160dd31-3d9c-43a1-a9c0-379ca00d96c5" alt="Fig.: System element (AD_Elemet) with translation subtab"></kbd>

## Steps
1. Open the system element where you want to add a custom translation.
1. Click on the subtab **Translation**.
1. Tick the checkbox **IsUseCustomization** (*Individuelle Anpassungen verwenden*) at the bottom of the window.

    <kbd><img src="https://github.com/metasfresh/metasfresh-documentation/assets/50820854/06ee3a77-7fef-47e3-bac8-d7d91914f8a7" alt="Fig.:"></kbd>

1. In the field **Name_Customized** (*Name Anpassung*), enter the translation to be used/displayed for this element.

    <kbd><img src="https://github.com/metasfresh/metasfresh-documentation/assets/50820854/779f1308-0f5b-42f8-b3e2-7f386733aae3" alt="Fig.:"></kbd>

1. Click ![](../../images/icons/Save24.png) to save.
