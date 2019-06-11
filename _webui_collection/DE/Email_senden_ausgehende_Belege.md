---
title: Wie versende ich eine E-Mail aus "Ausgehende Belege"?
layout: default
tags:
  - E-Mails und ausgehende Belege
lang: de
sequence: 20
ref: send_email_from_outbound_docs
---

## Übersicht
Unter dem Menüpunkt "Ausgehende Belege" findest Du alle Belege samt Folgebelegen wieder, die Du zuvor an den jeweiligen Stellen erstellt hast, wie z.B. [Auftragsbestätigungen](Auftrag_erfassen), [Lieferscheine](Zu_Auftrag_Lieferschein_erstellen), [Rechnungen](Zu_Auftrag_Rechnung_erstellen) usw. Mittels [E-Mail-Server-Routing](Email_Server_Routing_einrichten) wurden all diese Belege gegebenenfalls bereits automatisch mit den E-Mail-Adressen der entsprechenden [Kontakte/Nutzer](GPartner_Nutzer_hinzufuegen) versehen und können nun versendet werden.

Um mehrere versandfertige Belege per E-Mail zu versenden, gehe wie folgt vor:

## Voraussetzungen
1. [Richte ein E-Mail-Postfach für ausgehende Belege ein](Ausgehende_Belege_Mail_Server_einrichten).
1. [Richte ein E-Mail-Server-Routing für ausgehende Belege ein](Email_Server_Routing_einrichten).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Ausgehende Belege".
1. [Selektiere](AuswahlBelege) in der [Listenansicht](Ansichten) die Belege, die Du per E-Mail versenden möchtest.
 >**Hinweis:** Stelle sicher, dass jeder Beleg [mit einer E-Mail-Adresse versehen](Ausgehende_Belege_Empfaenger_aendern) ist (siehe Feld in Spalte **Mailadresse**).

1. [Starte die Aktion](AktionStarten) "PDF als E-Mail an Geschäftspartner senden". Es öffnet sich ein Overlay-Fenster.
 >**Hinweis:** Diese Aktion findest Du ebenfalls im Aktionsmenü in der Einzelansicht eines Eintrags.

1. Klicke auf "Start", um die Belege zu versenden und das Overlay-Fenster zu schließen.
1. Sobald die Belege erfolgreich versendet wurden, werden die jeweiligen Felder in der Spalte **Zuletzt gemailt** mit dem tatsächlichen Versandzeitpunkt aktualisiert. Dies kann ein paar Sekunden dauern.
1. Bei erfolgreichem Versand eines Belegs, findest Du in dem jeweiligen Eintrag unter "Ausgehende Belege" unter der Registerkarte "Verlauf" ebenfalls eine Zeile mit dem **Log Status** *Mitteilung versendet*.

## Nächste Schritte (optional)
- [Ändere den E-Mail-Empfänger von ausgehenden Belegen manuell unter "Ausgehende Belege"](Ausgehende_Belege_Empfaenger_aendern).
