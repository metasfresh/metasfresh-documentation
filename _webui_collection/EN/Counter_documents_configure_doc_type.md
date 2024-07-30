---
title: How do I configure the document types of counter documents?
layout: default
tags:
  - Counter Documents
lang: en
sequence: 40
ref: counter_documents_configure_doc_type
---

## Overview

<kbd><img src="assets/en_counter_documents.png" alt="Fig.: Counter Documents"></kbd>

## Steps
1. Open "Counter Document" from the [menu](Menu).
1. [Create a new configuration entry](New_Record_Window).
1. Set the desired [**Organization**](Org_add_new_organization) for which the configuration shall apply. To do so, enter part of the organization's name into the field and click on the matching result in the <a href="Keyboard_shortcuts_reference#dropdown" title="Dynamic Search Box (Autocompletion)">drop-down list</a>.
 >**Note:** If, e.g., as shown in the figure above, a purchase order placed by Org. A shall automatically trigger the generation of a sales order at Org. B, then set Org. A here.

1. Give the configuration entry a **Name**, e.g., specifying the purpose of the counter document creation, such as "Sales Order upon Purchase Order".
1. Pick the [**Document Type**](Define_new_doc_type) for which a counter document shall be created, e.g., *Purchase Order*.
1. In the field **Counter Document Type**, pick the type of counter document to be created, e.g., *Sales Order*.
1. Pick the **Document Action** to be performed automatically for the counter document upon its creation, e.g., *Prepare*.
1. Go to the [menu](Menu) and look for the process "Verify Document Types". Run the process in order to validate the counter document configuration and exclude errors.
1. [metasfresh saves the progress automatically](Saveindicator).

## More pages about counter documents

{% include tag_linklist.html lang=page.lang pages=site.webui_collection tag="Counter Documents" suppress_secondary_pages=""%}
