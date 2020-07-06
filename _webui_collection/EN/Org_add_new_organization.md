---
title: How do I add new organizations?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
  - Organizations
lang: en
sequence: 10
ref: org_add_new_organization
---

## Overview
Thanks to metasfresh's [multitenancy architecture](Multitenancy_concept), it is possible to serve an unlimited number of organizations on a single system, thereby enabling data to be managed centrally while limiting each organization's data access to their own amount of data.

## Steps

### Create a new organization
1. Open "Organisation" from the [menu](Menu).
1. [Create a new organization](New_Record_Window).
1. Give the organization a **Name**.
1. [metasfresh saves the progress automatically](Saveindicator).

### Link a business partner to the organization
Follow these [instructions for adding a new business partner](New_Business_Partner), taking into account the following settings:
   - Set the newly created **Organisation** at the bottom right. To do so, enter a part of the organization's name into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
   - The optional steps are not required.<br><br>

   | **Important note:** |
   | :--- |
   | The location, i.e. **Country** of the business partner is ***absolutely necessary*** for the calculation of prices and VAT! |

1. [Start the action](StartAction#actions-menu) "Link Organization". An overlay window opens up.
1. Set the newly created **Organisation**. To do so, enter a part of the organization's name into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
1. Pick a **Location**.
 >**Note:** This location is needed for the automatic creation of this organization's main warehouse as well as for the correct VAT calculation.

1. Click "Start" to link the business partner to the organization and close the overlay window.
1. Afterwards you can find this business partner under "[Businesspartner Dist-Orgs](Menu)" in the menu.

### Warehouse Assignment
By linking the organization to a business partner, a warehouse is automatically created and included in the organization's info. You can now assign this warehouse the **Document Base Types** for which it shall be used. To do so, please proceed as follows:

1. Open "Organisation" from the [menu](Menu).
1. Open the entry of the previously created new organization.
1. Go to the record tab "Organization Info" at the bottom of the page and [zoom into](Zoom_into_table_field) the field in the column **Warehouse** of the data line.
 >**Note:** Alternatively, use the entry's [related documents to jump](JumptoviaSidebar) into the "Warehouse" window (under WAREHOUSE MANAGEMENT  and then "Warehouse & Locators" in the sidebar).

1. Go to the record tab "Lagerzuordnung" (*Warehouse Assignment*) at the bottom of the page and [add the desired **Document Base Types**](Add_new_warehouse#lagerzuordnung).

## Next Steps
If you want to use a new organization and, for example, enter sales or purchase orders, all required data ***must*** be linked to this organization as well. Data include:
- valid pricing systems
- valid price lists
- valid price list versions
- valid tax rates
- business partners (customers and/or vendors)
- products

Follow the instructions below, taking note of the following:

| **Important note:** |
| :--- |
| Please make sure to set the ***same organization*** allowed to view the data in every single data entry!<br> In order to make data available to every organization (e.g., for testing purposes), set **Organisation** to `*`. |

1. [Define valid prices for the new organization](Define_prices).
1. [Define valid tax rates for the new organization](VAT_add_new_tax_rate).
1. [Add new business partners](New_Business_Partner) ([customers](New_business_partner_customer) or [vendors](New_business_partner_vendor)) for the organization.
1. [Add new products for the organization](NewProduct).


  <table>
    <thead>
      <tr>
        <th style="text-align: left"><strong>Important note:</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left">To ensure that all changes are applied, it is recommended that you take the following steps after creating and configuring a new organization:<br><ol style="margin-top: 5px; margin-bottom: 3px;"><li><a href="../../installation_collection/EN/How_to_reset_server_cache">Reset the server cache</a>.</li><li>Empty the front-end cache (<code class="language-plaintext highlighter-rouge">Ctrl</code>/<code class="language-plaintext highlighter-rouge">⌘ cmd</code> + <code class="language-plaintext highlighter-rouge">⇧ Shift</code> + <code class="language-plaintext highlighter-rouge">R</code>).</li></ol></td>
      </tr>
    </tbody>
  </table>

## Next Steps (optional)
- [Set the time zone for the organization](Org_time_zone_setting).
