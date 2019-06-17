---
title: How do I set up a mailbox for outbound documents?
layout: default
tags:
  - Emails and Outbound Documents
  - Setup
lang: en
sequence: 20
ref: outbound_documents_setup_email_server
---

## Overview
In metasfresh, you can set up a separate mail box for sending outbound documents. By means of [email server routing](Setup_email_server_routing), you can also specify the [contact/user](Add_user_to_BPartner) whose email address shall be added automatically to a specific document upon its creation in order to make sending emails from "Outbound Documents" even easier and more efficient.

## Steps
1. Open "Outbound Email Server (SMTP)" from the [menu](Menu).
1. [Create a new email server entry](New_Record_Window).
1. In the field **Email server**, enter either the server's hostname or IP address for SMTP and IMAP.
1. Enter an **Email address**.
1. In the field **SMTP login**, enter the username for SMTP login.
1. In the field **SMTP login**, enter the password for SMTP login.
1. [metasfresh saves the progress automatically](Saveindicator).

## Next Steps (optional)
- [Set up email server routing for outbound documents](Setup_email_server_routing).
