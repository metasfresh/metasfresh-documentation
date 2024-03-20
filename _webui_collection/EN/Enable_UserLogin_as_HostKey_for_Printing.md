---
title: How do I enable the user login as host key for printing?
layout: default
tags:
  - A Beginner's Guide to metasfresh
  - Setup
  - User and Roles
lang: en
sequence: 90
ref: enable_userlogin_as_hostkey_for_printing
---

## Overview
When [setting up printing in metasfresh](Printing_PDF_Setup_Guide), the user session ID is used by default as host key to manage printer access rights for individual users.

By enabling the setting as described below the system will apply the **user login name** instead of the session ID as host key which is used to do the matching between the user and the printer settings.

## Steps
1. Open "User" from the [menu](Menu).
1. Open the entry of an existing user or [add a new one](Add_user).
1. Open the [advanced edit menu](ViewModes#adv-edit) from the [actions menu](StartAction#actions-menu).
 >**Note:** Use shortcut `Alt` + `E` / `⌥ alt` + `E`.

1. Scroll down to the bottom and tick the checkbox **Use Login As Printing HostKey** (`isloginhostkey`).
 >**Note:** The user login name is defined in the field **Login** of the user entry.

1. Click "Done" to apply the changes and close the advanced edit menu.
1. [metasfresh saves the progress automatically](Saveindicator).
