---
title: How do I limit email access to specific users (Microsoft Exchange Mailbox)?
layout: default
tags:
  - Emails and Outbound Documents
  - Setup
  - Connect MS Office 365 Exchange Mailbox (legacy SMTP authentication)
lang: en
sequence: 20
ref: limit_access_specific_users_ms_exchange
published: false
---

## Overview
With the configuration above, the Application has the permission to send mail as ANY user in the organization.
To limit access to a specific user, additional configuration is required.




In order to **set up MS Entra to integrate metasfresh ERP using the MS Graph service**, please proceed as follows:

## Steps
1. Log on to the **Microsoft Entra admin center** or sign up first for an account at <a href="https://entra.microsoft.com/" title="Microsoft Entra Login" target="\_blank">https://entra.microsoft.com/</a>.

### Register your Application
1. In your account, go to "<abbr title="Home > App registrations > Register and application">App registrations</abbr>" and click **New registration**. An overlay window opens up.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/01_App_registration.png" alt="Fig.: New app registration"></kbd>

    </details>

1. Enter a **Name** (user-facing display name) for your application.<br>Under **Supported account types** select the option *Accounts in any organizational directory (Any Microsoft Entra ID tenant - Multitenant)* for who can use the app or access the API.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/02_App_registration_name.png" alt="Fig.: App registration options"></kbd>

    </details>

1. Click !['Register'](assets/MS_Entra_and_Graph_resources/Register_button_blue.png) to save the app settings.
1. Go to "Overview" to see the app information such as display name, app (client) ID, directory (tenant) ID, etc.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/03_App_registration_registered_cropped.png" alt="Fig.: Overview registered app details"></kbd>

    </details>

### Add a Client Secret
1. Go to "Certificates & secrets" and click **New client secret**. An overlay window opens up.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/04_App_registration_certificates_and_secrets.png" alt="Fig.: Add new client secret"></kbd>

    </details>

1. Fill in the mandatory fields (e.g. Description, Expires, etc.)

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/05_certificates_and_secrets_add_client_secret_cropped.png" alt="Fig.: Client secret fields"></kbd>

    </details>

    >**Note:** If you want to set a custom expiry date, keep in mind that the secret's maximum expiration time is 2 years.
    <details><summary><small><em>Click to view screenshot</em></small></summary>
    <kbd><img src="assets/MS_Entra_and_Graph_resources/16_Client_Secret_Expiry_Date.png" alt="Fig.: Maximum expiration time of client secret"></kbd>
    </details>

| **Important note: Note down the Secret!** |
| :--- |
| Client secret values cannot be viewed, except for immediately after creation. Be sure to **save the secret when created before leaving the page**.<br><details><summary><small><em>Click to view screenshot</em></small></summary><kbd><img src="assets/MS_Entra_and_Graph_resources/06_certificates_and_secrets_client_secret.png" alt="Fig.: Client secret info"></kbd></details> |

### Add API Permissions
1. Go to "API permissions" and click **Add a permission**. An overlay window "Request API permissions" opens up.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/07_API_permissions.png" alt="Fig.: Add API permissions"></kbd>

    </details>

1. Under "Microsoft APIs" select the option **Microsoft Graph**.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/08_API_permissions_request_permissions_MS_Graph.png" alt="Fig.: Microsoft Graph API"></kbd>

    </details>

1. Select the option **Application permissions** as the type of permission your app requires.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/09_API_permissions_request_permissions_app_permissionss_cropped.png" alt="Fig.: Microsoft Graph API app permissions"></kbd>

    </details>

1. In the search box under "Select permissions", search for `mail.send`, select the homonymous option from the results and click !['Add permissions'](assets/MS_Entra_and_Graph_resources/Add permissions button blue.png).

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/10_API_permissions_request_permissions_mail_send_cropped.png" alt="Fig.: Microsoft Graph API - select mail.send permission"></kbd>

    </details>

#### Grant API Permissions
After adding new API permissions, you need to grant them for your organization.

<details><summary><small><em>Click to view screenshot</em></small></summary>

<kbd><img src="assets/MS_Entra_and_Graph_resources/11_API_permissions_NOT_granted.png" alt="Fig.: Microsoft Graph API - permissions not granted"></kbd>

</details>

1. Click **Grant admin consent for [your organization]**.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/12_API_permissions_grant_permissions.png" alt="Fig.: Microsoft Graph API - Grant admin consent"></kbd>

    </details>

1. Click `YES` in the dialog box to confirm granting admin consent.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/13_API_permissions_grant_permissions_YES.png" alt="Fig.: Microsoft Graph API - Confirm granting admin consent"></kbd>

    </details>

1. Now you successfully granted admin consent for the requested permissions.

    <details><summary><small><em>Click to view screenshot</em></small></summary>

    <kbd><img src="assets/MS_Entra_and_Graph_resources/14_API_permissions_permission_GRANTED.png" alt="Fig.: Microsoft Graph API - Permissions granted successfully"></kbd>

    </details>

### Retrieve the `Client ID` and `Tenant ID`
After successfully completing all steps described above, you will find the information required to connect your metasfresh app with your Microsoft mailbox in the **"Overview" section of the MS Entra menu**.

<details><summary><small><em>Click to view screenshot</em></small></summary>

<kbd><img src="assets/MS_Entra_and_Graph_resources/15_Overview_IDs.png" alt="Fig.: Overview IDs"></kbd>

</details>

<br>

| **Important note** |
| :--- |
| With the configuration above, the application has the permission to **send mail as ANY user** in the organization. To limit access to a specific user, additional configuration is required (***see "Next Steps" below***). |

## Error Messages
These error messages point out that SMTP authentication is not supported.

<kbd style="font-size:12pt; font-family:arial; line-height:1.5;">Server error<br>
Invalid Username/Password: 535 5.7.139 Authentication unsuccessful, SmtpClientAuthentication is disabled for the Mailbox.</kbd><br><br>

<kbd style="font-size:12pt; font-family:arial; line-height:1.5;">Server error<br>
550 5.7.30 Basic authentication is not supported for Client Submission.</kbd><br><br>

## Next Steps (optional)
- Limit email access to specific users (Microsoft Exchange Mailbox).
