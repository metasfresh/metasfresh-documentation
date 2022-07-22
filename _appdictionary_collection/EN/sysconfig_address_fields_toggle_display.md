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

The following SQL select statement will return the german translations of the queried address fields:

```SQL
select e.ad_element_id, ad_language,columnname,e.name,e.printname, etrl.name,etrl.printname  from ad_element e
join ad_element_trl etrl on etrl.ad_element_id = e.ad_element_id
where columnname ilike 'address%'
and ad_language='de_DE'
order by ad_language,e.name
```

## Adding a new address field

- To add a new address field in this example `address5` is our new address field, first you need to insert a new field into the `ad_element` table using this SQL query:

```SQL
INSERT INTO public.ad_element (ad_element_id, ad_client_id, ad_org_id, isactive, created, createdby, updated, updatedby, columnname,
                               entitytype, name, printname, description, help, po_name, po_printname, po_description, po_help,
                               widgetsize, commitwarning, webui_namebrowse, webui_namenewbreadcrumb, webui_namenew)
VALUES (nextval('ad_element_seq'), 0, 0, 'Y', now(), 99, now(), 99, 'Address5', 'D', 'Adresse5',
        'Adresse5', 'Adresszeile 5 für diesen Standort', '"Adresszeile 5" bietet weitere Adressangaben für diesen Standort. Z.B. Gebäudenummer, Stockwerk, Raumnummer o.ä.',
        null, null, null, null, null, null, null, null, null);

```

- Next you would need to insert a new configuration into `ad_sysconfig` using this SQL query:

```SQL
INSERT INTO public.ad_sysconfig (ad_sysconfig_id, ad_client_id, ad_org_id, created, updated, createdby, updatedby, isactive, name,
                                 value, description, entitytype, configurationlevel)
VALUES (nextval('ad_sysconfig_seq'), 0, 0,now(), now(), 99, 99, 'Y',
        'de.metas.ui.web.address.AddressDescriptorFactory.Address5.IsDisplay', 'Y',
        'Decides if the Address5 field shall be shown in the address dialog', 'D', 'C');
```

- Afterwards relocate to `de.metas.ui.web.address.AddressDescriptorFactory#createAddressEntityDescriptor` and add this to the function.

```java
addressDescriptor.addField(buildFieldDescriptor(IAddressModel.COLUMNNAME_Address5)
										   .setValueClass(String.class)
										   .setWidgetType(DocumentFieldWidgetType.Text)
										   .setDisplayLogic(getSysConfigDisplayValue(IAddressModel.COLUMNNAME_Address5))
										   .setDataBinding(new AddressFieldBinding(IAddressModel.COLUMNNAME_Address5, false, I_C_Location::getAddress5, AddressFieldBinding::writeValue_Address4)));

```

- Than go to `de.metas.ui.web.address.IAddressModel#IAddressModel` and insert this code

```java
//@formatter:off
	String COLUMNNAME_Address5 = "Address5";
	String getAddress5();
	void setAddress5(String address);
	//@formatter:on
```

- After that you can run `Generate Model` to create the models for the `I_C_Location` and `X_C_Location`

- when every step is completed, the results should look like this:

<kbd><a href="assets/local_address5.png" title="address5 field local WebUI"><img src="assets/local_address5.png" alt="Fig.: Address 5 Field in the local webUI" style="max-width: 450px"></a></kbd>
