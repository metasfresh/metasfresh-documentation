---
title: How do I create custom filters?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Usage
  - Filtering
lang: en
sequence: 20
ref: create_custom_filters
---

## Overview
This guide shows you how to create a custom [filter](Filtering_function) in a window of your choice. Generally speaking, you can use general SQL operators, such as the `LIKE` operator, but you will also need to use the field separator (`<^>`) or the segment separator (`<~>`) to write your query.

<p style="margin-left: 40px; padding-left: 15px; border-left: 1px solid #dedede;">
<strong>Example:</strong><br>
If you want to create a user query that will filter for all invoice candidates with the invoice rule "After delivery (D)", the pure SQL code using the <code>LIKE</code> operator would be: <code>InvoiceRule LIKE 'D'</code>.<br><br>
But if you write it like that, it will not work because the system will not know how to parse that SQL.
So the correct way would be: <code><^>InvoiceRule<^> LIKE <^>D<^></code>.
</p>

<i class="ion-alert filter-alert"></i>Note the spaces before and after the `LIKE` operator. **They are essential!**

<i class="ion-alert filter-alert"></i>Also, note the `<^>` symbol. This is the field separator. It marks the search field, the operator and the value.<br>
When querying several terms, the segment separator is used, which looks like this: `<~>`.

<p style="margin-left: 40px; padding-left: 15px; border-left: 1px solid #dedede;">
<strong>Example:</strong><br>
If you wanted to filter for invoice candidates with the invoice rule "After delivery (D)" as well as for a certain partner, the query would look like this:<br>
<code>AND<^>InvoiceRule<^> LIKE <^>D<^><~>AND<^>Bill_BPartner_ID<^>=<^>2156423<^></code>.
</p><br>

| **Important!** |
| :--- |
| The name of the column must be *identical* to the one in `AD_Column.ColumnName`. |

## Steps
Let's use a practical example. Assume you want to create a filter for the "Attribute Value" window. This filter shall include the following filtering options: *Name*, *Attribute* and *IsActive flag*.

1. Open "User Query" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Give your custom filter a **Name**, e.g., *AttributeValue* (see example below).
1. Set a **User/Contact** if the filter usage should be limited to this user. To do so, enter part of the [user](Add_user) name and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.<br>If no user is specified, the filter can be used by anyone.
1. Set the **Table** for which you want to use the filter. To do so, enter part of the <abbr title="AD_Table_ID">table ID</abbr> and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Set the **Tab** where you want the filter results to display. To do so, enter part of the <abbr title="AD_Tab_ID">tab ID</abbr> and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Enter the filtering **Code** into the text box provided, e.g.:

   ```
   AND<^>M_Attribute_ID<^> = <^><^><~>AND<^>IsActive<^> = <^>Y<^><~>AND<^>Name<^>ILIKE<^><^>
   ```

1. [Reset the web API server cache](../../installation_collection/EN/How_to_reset_web_api_server_cache).
1. Reset the front-end cache. To do so, press `Ctrl`/`⌘ cmd` + `⇧ Shift` + `R`.
1. This will result in:<br>
  <kbd><img src="https://user-images.githubusercontent.com/15378036/70226875-45935380-175a-11ea-9083-090e6b875989.png" alt="Fig.: Custom filter 'AttributeValue'"></kbd>
  <br><br>
  <kbd><img src="https://user-images.githubusercontent.com/15378036/70226881-4cba6180-175a-11ea-951d-27454d572441.png" alt="Fig.: Custom filter 'AttributeValue' open"></kbd>
