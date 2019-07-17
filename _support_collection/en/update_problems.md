---
layout: default
title: Troubleshooting issues arising in connection with server updates
tags:
  - Troubleshooting Server Update Issues
lang: en
---

## Issue
When trying to update to a new version, errors on the app server may occur similar to the following:

## Error No. 1
```
app_1             |     CONTEXT:  SQL statement "SELECT update_Menu_Translation_From_AD_Element(p_AD_Element_ID, p_AD_Language)"
app_1             |     PL/pgSQL function update_trl_tables_on_ad_element_trl_update(numeric,character varying) line 113 at PERFORM
app_1             |      update_trl_tables_on_ad_element_trl_update
app_1             |     --------------------------------------------
app_1             |
app_1             |     (1 row)
app_1             |
app_1             |      update_ad_element_on_ad_element_trl_update
app_1             |     --------------------------------------------
app_1             |
app_1             |     (1 row)
app_1             |
app_1             |     UPDATE 1
app_1             |     UPDATE 1
app_1             |     psql:/opt/metasfresh/dist/sql/10-de.metas.adempiere/5516940_sys_gh5070-discount-schema-lines-window.sql:0: ERROR:  insert or update on table "ad_field" violates foreign key constraint "adname_adfield"
app_1             |     DETAIL:  Key (ad_name_id)=(1003093) is not present in table "ad_element".
```

### Workaround for Error No. 1
Add the missing element that was referenced by `ad_name_id` by getting the record from another database:
```sql
INSERT INTO public.ad_element (ad_element_id, ad_client_id, ad_org_id, isactive, created, createdby, updated, updatedby, columnname, entitytype, name, printname, description, help, po_name, po_printname, po_description, po_help, widgetsize, commitwarning, webui_namebrowse, webui_namenewbreadcrumb, webui_namenew) VALUES (1003093, 0, 0, 'Y', '2018-10-15 15:04:04.943585 +02:00', 99, '2018-10-15 15:04:04.943585 +02:00', 99, null, 'D', 'Kommentar/Hilfe', 'Kommentar/Hilfe', 'Comment or Hint', 'The Help field contains a hint, comment or help about the use of this item.', null, null, null, null, null, null, null, null, null);

```

---

## Error No. 2
```
app_1             |     psql:/opt/metasfresh/dist/sql/76-de.metas.vertical.creditscore.creditpass/5518780_sys_gh5016_add_missing_AD_Element_Link_records.sql:1: NOTICE:  2172 records added for missing AD_Fields
app_1             |     CONTEXT:  SQL statement "SELECT AD_Element_Link_Create_Missing_Field()"
app_1             |     PL/pgSQL function ad_element_link_create_missing() line 5 at PERFORM
app_1             |     psql:/opt/metasfresh/dist/sql/76-de.metas.vertical.creditscore.creditpass/5518780_sys_gh5016_add_missing_AD_Element_Link_records.sql:1: ERROR:  duplicate key value violates unique constraint "ad_element_link_uniquetab"
app_1             |     DETAIL:  Key (ad_tab_id)=(540877) already exists.

```

### Workaround for Error No. 2
```sql
select migrationscript_ignore('76-de.metas.vertical.creditscore.creditpass/5518780_sys_gh5016_add_missing_AD_Element_Link_records.sql')
```

---

## Error No. 3
```
   psql:/opt/metasfresh/dist/sql/10-de.metas.adempiere/5518990_sys_gh5121_AddSeparateColumnsForCompanyValueAndNameAndCompanyNameFilter.sql:4: ERROR:  duplicate key value violates unique constraint "ad_column_name"
app_1             |     DETAIL:  Key (ad_table_id, columnname)=(114, Companyname) already exists.
```

### Workaround for Error No. 3
```sql
update ad_column set columnname = 'Companyname_2' where columnname='Companyname' and ad_table_id=114 ;

```

---

## Error No. 4
```
app_1             |     psql:/opt/metasfresh/dist/sql/10-de.metas.adempiere/5521480_sys_gh5192_C_Postal_UniqueIndex.sql:19: ERROR:  could not create unique index "c_postal_unique"
app_1             |     DETAIL:  Key (c_country_id, postal, (COALESCE(city, ''::character varying)), (COALESCE(township, ''::character varying)))=(107, 7556, Ramosch, ) is duplicated.
```

### Workaround for Error No. 4
```sql
select migrationscript_ignore('10-de.metas.adempiere/5521480_sys_gh5192_C_Postal_UniqueIndex.sql');
```
