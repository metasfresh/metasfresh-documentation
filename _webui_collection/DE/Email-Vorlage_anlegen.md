---
title: Wie lege ich eine E-Mail-Vorlage an?
layout: default
tags:
  - E-Mails und ausgehende Belege
lang: de
sequence: 40
ref: create_email_template
---

## Überblick
In metasfresh kannst Du sowohl allgemeine Textbausteine als auch spezifischere Vorlagen für E-Mails anlegen. Zum Erstellen allgemeiner Textbausteine, [folge dieser Anleitung](Textbaustein_erstellen). Um spezifische E-Mail-Vorlagen z.B. für [Ausschreibungen](Ausschreibungsthema_anlegen) anzulegen, gehe wie folgt vor:

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "EMail-Vorlage" (`window/204/`).
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne die E-Mail-Vorlage im Feld **Name**.
1. Trage einen **Betreff** ein.
1. Gib in das Textfeld **E-Mail-Text** eine Nachricht ein, die für die E-Mail-Mitteilung verwendet werden soll.
1. Setze ein Häkchen bei **HTML**, sofern der Text HTML-Tags enthält.
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
