---
title: How do I create a marketing platform?
layout: default
tags:
  - Marketing
lang: en
sequence: 10
ref: create_mktg_platform
---

## Overview
Via the marketing platform you can connect your metasfresh system to an external email marketing service, such as CleverReach<sup>&#174;</sup>, which is integrated into metasfresh by default. Of course, other integrations of your choice can also be added.

By means of the marketing platform, you can determine which address type shall be used when [adding contacts to a marketing campaign](Add_contacts_to_MKTG_campaign). You may choose between the *business partner's default address* (**Requires Location**) and the *user's email address* (**Requires Mail Address**). Of course, you may also combine the two address types.

If you choose **Requires Location**, the subsequent campaign will be a [*serial letter campaign*](Create_serial_letters) where only those contacts will be included that are stored in metasfresh with a [default address (business partners)](Add_address_tab).

If you choose **Requires Mail Address**, the subsequent campaign will be an *email campaign* where only those contacts will be included that are stored in metasfresh with an [email address (users)](Add_user).

## Steps

### Create a Marketing Platform
1. Open "Marketing Platform" from the [menu](Menu).
1. [Create a new marketing platform](New_Record_Window).
1. Select a **Marketing Platform Gateway ID**, e.g., *CleverReach*.
1. Give the marketing platform a **Name**.
1. Tick either **Requires Mail Address**, **Requires Location** or both checkboxes, depending on your requirements.

### Set up CleverReach<sup><small>&#174;</small></sup>-Integration

| **Note:** |
| :--- |
| To use this integration, you need to have a CleverReach<sup>&#174;</sup> account. For more information on creating an account, please refer to <a href="https://www.cleverreach.com/en/" title="Start now with CleverReach®!" target="\_blank">www.CleverReach.com</a>. |

1. Go to the record tab "CleverReach" at the bottom of the page and click !["Add new"](assets/Add_New_Button.png). An overlay window opens up.
1. Enter the **Customer No** provided to you by CleverReach<sup>&#174;</sup>.
1. Enter the **Registered Email** that you use to log in to your CleverReach<sup>&#174;</sup> account.
1. Enter the **Password** that you use to log in to your CleverReach<sup>&#174;</sup> account.
1. Click "Done" to close the overlay window and add the access data to the list.
1. [metasfresh saves the progress automatically](Saveindicator).

| **Note:** |
| :--- |
| To verify that the connection was set up correctly, you can create a sample marketing campaign via CleverReach<sup>&#174;</sup> and [synchronize the data with metasfresh](Sync_MKTG_campaign_with_platform). If you have any questions regarding CleverReach<sup>&#174;</sup>, the <a href="https://support.cleverreach.de/hc/en-us/articles/360014691599-Integration-metasfresh" title="Integration metasfresh &#124; support.cleverreach.de" target="\_blank">CleverReach<sup>&#174;</sup> Support Team</a> will be happy to help you at any time. |

## Next Steps
- [Create a marketing campaign](Create_MKTG_campaign).

## Example
<kbd><img src="assets/Create_MKTG_platform.gif" alt="GIF: Create a marketing platform"></kbd>
