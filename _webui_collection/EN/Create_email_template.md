---
title: How do I add a new email template?
layout: default
tags:
  - Emails and Outbound Documents
lang: en
sequence: 40
ref: create_email_template
---

## Overview
In metasfresh you can create both general boilerplates and more specific text templates for emails. For general boilerplates, please [follow these instructions](Create_boilerplate). In order to create specific email templates, e.g., for requests for quotations, please proceed as follows:

## Steps
1. Open "Mail Template" from the [menu](Menu) (`window/204/`).
1. [Create a new entry](New_Record_Window).
1. Give the email template a **Name**.
1. Enter a **Subject**.
1. In the text box **Mail Text**, enter a message to be used for the email notification.
1. Tick the checkbox **HTML**, if the text contains HTML tags.
1. [metasfresh saves the progress automatically](Saveindicator).

| **Note:** |
| :--- |
| By means of so-called *context variables* metasfresh can automatically retrieve individual document data and insert them into the corresponding places in the email. Context variables are **opened and closed** by symbols such as "@" or "%". |

| **<a name="context-variable-email-addresses">Important Note about Email Addresses:</a>** |
| :--- |
| When using email addresses with an "@" symbol in the template, a conflict may occur as the system recognizes this symbol as an opening operator of a context variable and by definition expects a closing operator. To prevent this conflict, simply insert **a second "@" symbol** after the first one to close the variable (see the following example below). Then, when using the template in an email, the email address will appear in the common form of writing including the "@" symbol. |

## Example

| [PayPal Plus](PayPal_payment_rule_salesorder) |
| :--- |
| **Subject:**<br> Please approve @Amount@ for order #@SalesOrderDocumentNo@<br><br> **Mail Text:**<br> Hi @Name@<br> Thank you for your order #@SalesOrderDocumentNo@.<br> Please use the following link to approve the payment reservation on PayPal: @ApproveURL@.<br><br>Do you have questions about this payment reservation? Please contact us by email at: <a href="#context-variable-email-addresses" title="Important Note about Email Addresses">info@@no-mail.com</a>. |

### Explanatory Notes to the Example

| Context Variable | Data |
| :--- | :--- |
| @Name@ | Name of the [business partner contact](Add_user_to_BPartner) from the [sales order](SalesOrder_recording) |
| @SalesOrderDocumentNo@ | Document number of the sales order |
| @Amount@ | Invoice amount from the sales order |
| @ApproveURL@ | The URL of the webpage for payment approval |
