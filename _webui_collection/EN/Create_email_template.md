---
title: How do I add a new email template?
layout: default
tags:
  - Emails and Outbound Documents
lang: en
sequence: 40
ref: create_email_template
---

## Steps
1. Follow these [instructions for creating a boilerplate](Create_boilerplate) and in the text box **Text Snippet**, enter a message to be used for the email notification.
1. [metasfresh saves the progress automatically](Saveindicator).

| **Note:** |
| :--- |
| By means of so-called *context variables* metasfresh can automatically retrieve individual document data and insert them into the corresponding places in the e-mail. Context variables are prefixed and suffixed by symbols such as "@" or "%". |

## Example

| [PayPal Plus](PayPal_payment_rule_salesorder) |
| :--- |
| **Subject:**<br> Please approve @Amount@ for order #@SalesOrderDocumentNo@<br><br> **Mail Text:**<br> Hi @Name@<br> Thank you for your order #@SalesOrderDocumentNo@.<br> Please use the following link to approve the payment reservation on PayPal: @ApproveURL@. |

### Explanatory Notes to the Example

| Context Variable | Data |
| :--- | :--- |
| @Name@ | Name of the [business partner contact](Add_user_to_BPartner) from the [sales order](SalesOrder_recording) |
| @SalesOrderDocumentNo@ | Document number of the sales order |
| @Amount@ | Invoice amount from the sales order |
| @ApproveURL@ | The URL of the webpage for payment approval |
