---
title: Wie lege ich eine E-Mail-Volage an?
layout: default
tags:
  - E-Mails und ausgehende Belege
lang: de
sequence: 40
ref: create_email_template
---

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "EMail-Vorlage".
1. [Lege eine neue E-Mail-Vorlage an](Neuer_Datensatz_Fenster_Webui).
1. Benenne die Vorlage im Feld **Name**.
1. Trage einen **Betreff** ein.
1. Gib im Textfeld **EMailtext** eine Nachricht ein, die für die E-Mail-Mitteilung verwendet werden soll.
1. [metasfresh speichert automatisch](Speicheranzeige).

| **Hinweis:** |
| :--- |
| Mittels sogenannter *Kontextvariablen* können individuelle Belegdaten automatisch von metasfresh eingeholt und anschließend an den jeweiligen Stellen in der E-Mail eingesetzt werden. Kontextvariablen werden mit Symbolen wie z.B. "@" oder "%" angeführt und abgeschlossen. |

## Beispiel

| [PayPal Plus](PayPal_Zahlungsweise_Auftrag) |
| :--- |
| **Betreff:**<br> Bitte bestätigen Sie @Amount@ für Auftrag Nr. @SalesOrderDocumentNo@<br><br> **EMailtext:**<br> Hallo @Name@,<br> vielen Dank für Ihren Auftrag Nr. @SalesOrderDocumentNo@.<br> Bitte bestätigen Sie die Zahlungsreservierung bei PayPal über den folgenden Link: @ApproveURL@. |

### Erläuterungen zum Beispiel

| Kontextvariable | Daten |
| :--- | :--- |
| @Name@ | Name des [Geschäftspartnerkontaktes](GPartner_Nutzer_hinzufuegen) aus dem [Auftrag](Auftrag_erfassen) |
| @SalesOrderDocumentNo@ | Belegnummer des Auftrages |
| @Amount@ | Rechnungsbetrag des Auftrages |
| @ApproveURL@ | Die URL der Webseite zur Zahlungsfreigabe |
