---
title: Create new columns in database
layout: default
tags:  
  - Developers and Customizers
lang: en
sequence: 20
ref: create_new_column_in_database
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/6700#issuecomment-760275788
-->

## Steps
1. [Create a new system element](create_new_system_element).

    <kbd><img src="https://user-images.githubusercontent.com/73820536/104612394-d3947a00-568e-11eb-8af2-dc0fe64503d6.png" alt="Create new system element"></kbd>

1. Translate the system element.
    >**Note:** If the translation tab is not displayed, follow [these steps to activate translations in swing](activate_translations_tab).

    <kbd><img src="https://user-images.githubusercontent.com/73820536/104612520-f6269300-568e-11eb-8408-9809ac42f66d.png" alt="Add system element translation"></kbd>

1. Create table columns based on the `AD_element` created in **step 1**. Use the **AD_Element_ID** input field to find the element.
    >**Note:** The translation of the `AD_element` will be inherited by the column translation of the same language.

    <kbd><img src="https://user-images.githubusercontent.com/73820536/104692254-57db1180-5710-11eb-9578-2df283f50f44.png" alt="AD_Element_ID input field"></kbd>

1. After the column is created, sync it with database using the `IsSyncDatabase` (*Synchronize Column/AD_Column Sync*) button.

    <kbd><img src="../../images/IsSyncDatabase_button.png" alt="Sync with database button (IsSyncDatabase)"></kbd>

    You can also start the sync via ![](../../images/icons/Process24.png).

    <kbd><img src="https://user-images.githubusercontent.com/29163573/104921454-9e8f6c80-5999-11eb-987d-4f7685dd42e1.png" alt="Sync with database button"></kbd>

    <kbd><img src="https://user-images.githubusercontent.com/73820536/104692498-c5873d80-5710-11eb-9e87-55ab9f915760.png" alt="Sync with database button"></kbd>
