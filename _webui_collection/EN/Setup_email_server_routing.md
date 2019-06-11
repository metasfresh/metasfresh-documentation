---
title: Wie richte ich ein E-Mail-Server-Routing für ausgehende Belege ein?
layout: default
tags:
  - Emails and Outbound Documents
  - Setup
lang: en
sequence: 30
ref: setup_email_server_routing
---

## Steps
1. Open "Outbound Email Server (SMTP)" from the [menu](Menu).
1. [Create a new entry](New_Record_Window).
1. Pick a [**Mail Box**](Outbound_documents_setup_email_server) to use for sending emails from metasfresh.
1. In the field **Column User To**, either pick *Ansprechpartner* (= Contact) or *Rechnungskontakt* (= Bill-to contact) depending on whose email should be used.
 >**Note:** Make sure the [email address of the respective contact](Add_user_to_BPartner) is provided in the entry of the associated business partner.

1. Pick a **Document Base Type** for which the previously defined contact shall be notified upon its creation, e.g., *Sales Order*, *AR Invoice*, *Material Delivery*, etc.
1. ***Optional:*** Pick a specific **Process**.
1. ***Optional:*** Pick a **Doc Sub Type**.
1. [metasfresh saves the progress automatically](Saveindicator).
