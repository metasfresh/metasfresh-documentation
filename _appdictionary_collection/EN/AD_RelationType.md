---
title: Relation Types (AD_RelationType)
layout: default
tags:  
  - AD_Elements
lang: en
sequence:
ref: ad_relationtype
---

<!--
See original issue comment: https://github.com/metasfresh/me03/issues/7282#issuecomment-789740191
-->

## Overview
Relation types are located in the menu under:

```
Menu/Application-Dictionary/Relation Type (AD_RelationType)
```

<kbd><a href="https://user-images.githubusercontent.com/73820536/109811826-f6292500-7c33-11eb-86dc-47b418b06d13.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109811826-f6292500-7c33-11eb-86dc-47b418b06d13.png" alt="Relation Type menu entry"></a></kbd>

Clicking on the menu item will open a list of all available relation types. Relation types can be divided into two groups based on the checkbox `IsTableRecordIdTarget` which **can be checked or not checked**.

<kbd><a href="https://user-images.githubusercontent.com/73820536/109977519-91d69600-7d05-11eb-8d15-1d92653ca1d7.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109977519-91d69600-7d05-11eb-8d15-1d92653ca1d7.png" alt="List of all relation types"></a></kbd>

Example of how relations appear on WebUI:

<kbd><a href="https://user-images.githubusercontent.com/73820536/109977375-6d7ab980-7d05-11eb-85d2-33b0f17dafd5.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109977375-6d7ab980-7d05-11eb-85d2-33b0f17dafd5.png" alt="WebUI relations"></a></kbd>

## Steps

### a) `IsTableRecordIdTarget` is checked

#### 1. Define a reference type
In this case you need to define only one relation, the target relation.

<kbd><a href="https://user-images.githubusercontent.com/73820536/109979390-871d0080-7d07-11eb-9fea-2f4d8b88f7ee.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109979390-871d0080-7d07-11eb-9fea-2f4d8b88f7ee.png" alt="Reference type, target relation"></a></kbd>

#### 2. Define a reference for the relation type
1. Give the reference a **Name**.
1. In the field **ValidationType**, pick *T_Tabellenvalidierung*.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/109980771-ec252600-7d08-11eb-9359-8b25c5eb4735.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109980771-ec252600-7d08-11eb-9359-8b25c5eb4735.png" alt="Reference name and validation type 'T_Tabellenvalidierung'"></a></kbd>

1. Open the tab **Tabellenvalidierung** (*table validation*).
1. In the field **AD_Table_ID**, set the table where to look for the relation.
1. In the field **AD_Key**, always set the unique key of the table.
1. In the field **AD_Window_ID**, set the target window.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/109981480-a0bf4780-7d09-11eb-8d9b-76982f12f8d8.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109981480-a0bf4780-7d09-11eb-8d9b-76982f12f8d8.png" alt="Table validation tab"></a></kbd>

    As a result, on the WebUI, the application will look for the reference in the source window and show it in the sidebar:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/110098410-d6ffd400-7da8-11eb-98be-134e3f548b25.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110098410-d6ffd400-7da8-11eb-98be-134e3f548b25.png" alt="Source window with reference"></a></kbd>

    ...and when clicking on the reference this will take you to the respective target window:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/109981712-d82df400-7d09-11eb-8949-0899802751e5.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/109981712-d82df400-7d09-11eb-8949-0899802751e5.png" alt="Target window based on reference"></a></kbd>

    In the example above the source page (e.g., `C_Invoice`) is looking for any entry in the target table which has the
    - `table_id = (select ad_table_id from ad_table where tablename = 'C_Invoice')`
    <br>and
    - `record_id = @currentRecord@`

    The query executed behind the scene is:

    ```SQL
    select *
    from Fact_Acct_Transactions_View
    where ad_table_id = (select ad_table_id from ad_table where tablename = 'C_Invoice')
    AND record_id = 1002044;
    ```

---

### b) `IsTableRecordIdTarget` is NOT checked
This relation type is needed when we want to display relations between entities which are not directly related.

<kbd><a href="https://user-images.githubusercontent.com/73820536/110102779-dd447f00-7dad-11eb-9a68-4c6baf843d5b.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110102779-dd447f00-7dad-11eb-9a68-4c6baf843d5b.png" alt="Relation type, 'IsTableRecordIdTarget' NOT checked"></a></kbd>

#### 1. Define a reference type
1. Give the reference type a **Name**.
    >**Note:** We recommend using the pattern `source_table -> target_table`.

1. Tick the checkbox `isDirected` to ensure that the direction of the relation is from source to target.
    >**Note:** If you also want the reverse relation (target to source) you will need to define a separate relation type for it.

1. Set the **AD_Reference_Source_ID**.
    >**Note:** Should be defined before continuing to **step 2**.

1. Set the **AD_Reference_Target_ID**.
    >**Note:** Should be defined before continuing to **step 3**.

1. In the field **Entity Type**, pick *Dictionary*.
1. All other fields can be ignored.

#### 2. Define a source reference
1. Create a new reference.
1. Give the reference a **Name**.
    >**Note:** We recommend including the source/target words in the name to make the purpose of the reference clear.

1. In the field **ValidationType**, pick *T_Tabellenvalidierung*.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/110103134-41674300-7dae-11eb-8ebf-b7edfb6d4324.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110103134-41674300-7dae-11eb-8ebf-b7edfb6d4324.png" alt="New source reference with validation type"></a></kbd>

1. Open the tab **Tabellenvalidierung** (*table validation*).
1. In the field **AD_Table_ID**, pick a table, e.g., `C_Order`.
1. In the field **AD_Key**, pick the column on which the reference is based, e.g., `C_Order_ID`.
1. In the field **WhereClause**, enter a condition for the source table, e.g., `IsSOTrx = 'N'` (i.e. should be a purchase order).
1. In the field **AD_Window_ID**, pick the source window, e.g., *Bestellung*.
    >**Note:** This is not mandatory, but recommended.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/110103953-3b259680-7daf-11eb-8e10-597c9c2cb37a.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110103953-3b259680-7daf-11eb-8e10-597c9c2cb37a.png" alt="Table validation source reference"></a></kbd>

#### 3. Define a target reference
1. Create a new reference.
1. Give the reference a **Name**.
    >**Note:** We recommend including the source/target words in the name to make the purpose of the reference clear.

1. In the field **ValidationType**, pick *T_Tabellenvalidierung*.

    <kbd><a href="https://user-images.githubusercontent.com/73820536/110104690-272e6480-7db0-11eb-8f75-f714538e2599.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110104690-272e6480-7db0-11eb-8f75-f714538e2599.png" alt="New target reference with validation type"></a></kbd>

1. Open the tab **Tabellenvalidierung** (*table validation*).
1. In the field **AD_Table_ID**, pick a table, e.g., `M_Forecast`.
1. In the field **AD_Key**, set the unique key of the table, e.g., `M_Forecast_ID`.
1. In the field **Entity Type**, pick *Dictionary* if nothing else is specified.
1. In the field **AD_Window_ID**, pick the target window, e.g., *Prognose*.
    >**Note:** This is not mandatory, but recommended.

1. In the field **WhereClause**, define a logic to display elements from the `AD_Table_ID` (target) based on the `AD_Key` from the source reference (see example above `C_Order_ID`).

    <kbd><a href="https://user-images.githubusercontent.com/73820536/110106561-80979300-7db2-11eb-8ceb-bfa3c1bcdce4.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110106561-80979300-7db2-11eb-8ceb-bfa3c1bcdce4.png" alt="Table validation target reference"></a></kbd>

<br>

##### Explanation of the `WhereClause` of the target reference
1. Looking for items in the `M_Forecast` table. If they exist they shall be set as `AD_Table_ID` in the target reference.
1. JOINing all the necessary tables until we get the relation to the source table `C_Order`.
1. Adding MAIN conditions:
    - `f.M_Forecast_ID = M_Forecast.M_Forecast_ID` => `Target_Table_Name.Target_Key`
    - `o.C_Order_ID = @C_Order_ID / -1@` => `Source_KEY`

<kbd><a href="https://user-images.githubusercontent.com/73820536/110123053-19390d80-7dc9-11eb-891a-7a40c3210cde.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110123053-19390d80-7dc9-11eb-891a-7a40c3210cde.png" alt="'WhereClause' from target reference explained"></a></kbd>

<br>

How it appears on WebUI:

- Source Window:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/110107803-0c5def00-7db4-11eb-88f1-92c5aa80cb2f.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110107803-0c5def00-7db4-11eb-88f1-92c5aa80cb2f.png" alt="Source window on WebUI"></a></kbd>

- Target Window:

    <kbd><a href="https://user-images.githubusercontent.com/73820536/110107913-30b9cb80-7db4-11eb-945e-6117e35159f2.png" title="Click to enlarge" target="\_blank"><img src="https://user-images.githubusercontent.com/73820536/110107913-30b9cb80-7db4-11eb-945e-6117e35159f2.png" alt="Target window on WebUI"></a></kbd>
