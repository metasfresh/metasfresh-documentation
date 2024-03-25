---
title: How do I set up one single email address for all outbound documents for testing purposes? (System Administrator)
layout: default
tags:
  - Emails and Outbound Documents
  - Setup
lang: en
sequence: 40
ref: testing_send_emails_to_single_address
---

## Requirements
1. [Configure outbound documents](Outbound_Documents_Config).
1. [Set up a mailbox for outbound documents](Outbound_documents_setup_email_server).

## Steps
1. [Log in to metasfresh](Login) with the [user role](NewUserRole) "System Administrator".
1. Open "System Configuration" from the [menu](Menu).
1. [Use the filter](Filtering_function) and search for the system configuration with the **Name** `org.adempiere.user.api.IUserBL.DebugMailTo`.
1. Open the system configuration entry.
1. In the field **Search Key**, enter the email address where all documents shall be sent.
 >**Note:** If the field remains empty the emails will be sent to the respective users directly. In this case, the testing email feature is deactivated.

1. [metasfresh saves the progress automatically](Saveindicator). The changes apply immediately.

## Next Steps
- [Set up email server routing for outbound documents](Setup_email_server_routing).
- [Send outbound documents via email](Send_email_from_outbound_docs).
- **For Admins:** [Troubleshoot a failed email transmission of an outbound document](Outbound_documents_troubleshooting).
