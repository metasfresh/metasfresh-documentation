---
title: Enable / Disable address fields shown in the address modal overlay
layout: default
tags:  
  - System Config
lang: en
sequence:
ref: sysconfig_address_fields_toggle_display
---

## Overview
In the [WebUI of metasfresh](https://docs.metasfresh.org/pages/webui/index_en), [addresses of business partners](../../webui_collection/EN/Add_address_tab) can be recorded in the record tab "Location" at the bottom of each entry in the "[Business Partner](../../webui_collection/EN/Menu)" window.

<kbd><a href="assets/webUI_bpartner_location_tab.png" title="Click to enlarge"><img src="assets/webUI_bpartner_location_tab.png" alt="Fig.: Location tab in the business partner window" style="max-width: 450px"></a></kbd>

This system configuration allows you to control which address fields are shown in the address modal overlay.

<kbd><a href="assets/webUI_bpartner_address_fields_modal_overlay.png" title="Click to enlarge"><img src="assets/webUI_bpartner_address_fields_modal_overlay.png" alt="Fig.: Address fields in the address modal overlay" style="max-width: 450px"></a></kbd>

## Example

### Code reference
The following code reference will help you locate the related system configuration entries:
`de.metas.ui.web.address.AddressDescriptorFactory#SYSCONFIG_PREFIX`

### Configuration via WebUI
1. [Log in to metasfresh](../../webui_collection/EN/Login) with the [user role](../../webui_collection/EN/NewUserRole) "System Administrator".
1. Open "System Configuration" from the [menu](../../webui_collection/EN/Menu).
1. [Use the filter](../../webui_collection/EN/Filtering_function) to find the address configuration entries you want to adjust, e.g., by searching for "address".

<kbd><a href="assets/webUI_window_system_configuration_address_configs.png" title="Click to enlarge"><img src="assets/webUI_window_system_configuration_address_configs.png" alt="Fig.: Address fields in the address modal overlay"></a></kbd>

### Configuration via SQL
Use the following SQL select statement to return the WebUI table shown above:

```SQL
select name,value from ad_Sysconfig where name like 'de.metas.ui.web.address.%'
```

The following code snippet will return the translations of the queried fields:

```SQL
select e.ad_element_id, ad_language,columnname,e.name,e.printname, etrl.name,etrl.printname  from ad_element e
join ad_element_trl etrl on etrl.ad_element_id = e.ad_element_id
where columnname ilike 'address%'
and ad_language='de_DE'
order by ad_language,e.name
```
