---
title: How do I set up access to the record permissions management features? (System Administrator)
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
  - User and Roles
  - Data Access Permissions
lang: en
sequence: 20
ref: record_permissions_setup
---

## Overview
In metasfresh, in addition to the general access permissions to windows and functions, you can also flexibly configure the management functions for access to individual datasets ("Grant access" and "Revoke access") within each [user role](NewUserRole).

To enable these access management functions, please proceed as follows:

## Steps
1. [Log in to metasfresh](Login) with the [user role](NewUserRole) "System Administrator".
1. Open "Role" from the [menu](Menu).
1. Open the entry of an existing [user role](Menu) or [add a new one](NewUserRole).
1. Go to the record tab "Role Record Access Config" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Pick the **Type** of record for which it should be possible to manage user permissions, e.g., *Table* or *Business Partner Hierarchy*.
    - **If you select "Type: *Table*":** In the field **Table**, enter part of the name of the database table for which you want to enable access management features and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>, e.g., *Business Partner* or *Product*.
1. Click "Done" to close the overlay window and add the record permission to the list.
    >**Note:** Repeat steps 4 to 6 to add further permission entries.

1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps
- [Grant or revoke data access for users](Manage_user_permission).
