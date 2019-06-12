---
title: Wie behebe ich einen fehlgeschlagenen Versand eines Beleges ohne E-Mail-Adresse?
layout: default
tags:
  - E-Mails und ausgehende Belege
  - Fehlerbehebung
lang: de
sequence: 10
ref: outbound_documents_troubleshooting
---

## Übersicht
Hast Du versehentlich einen Beleg ohne Empfänger per E-Mail versendet, dann kann der Vorgang verständlicherweise nicht abgeschlossen werden. Der Log-Status des Beleges bleibt unverändert und es wird gegebenenfalls ein Arbeitspaket (engl.: *work package*) unter „Asynchrone Verarbeitungswarteschlage“ angelegt, in dem man u.a. die Fehlermeldung einsehen kann.

Wenn Du nun nachträglich eine E-Mail-Adresse ergänzt und den Beleg erneut versuchst zu versenden, kann es unter Umständen sein, dass der Versand trotz allem nicht stattfindet. Das liegt daran, dass bereits ein Arbeitspaket für diesen Vorgang existiert, welches allerdings als „fehlgeschlagen“ gekennzeichnet ist, und kein zweites erstellt wird, um unnötigen Datenmüll zu vermeiden.

Um den Beleg dennoch nach Korrektur der E-Mail-Adresse versenden zu können, muss erst die Fehlermeldung aus dem Arbeitspaket entfernt werden, damit es für einen neuen Versandversuch zur Verfügung steht. Gehe hierzu wie folgt vor:

## Schritte

### Arbeitspaket suchen und Fehlermeldung entfernen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Asynchrone Verarbeitungswarteschlage".
1. [Verwende die Filterfunktion](Filterfunktion) und suche nach dem **WorkPackage Processor** `de.metas.document.archive.async.spi.impl.MailWorkpackageProcessor`, um das fehlgeschlagene Arbeitspaket zu finden.
 >**Hinweis:** Es hat sich bewährt, das Arbeitspaket anhand des genauen Erstellungszeitpunktes zu suchen (siehe Spalte **Erstellt**).

1. Öffne den Eintrag des Arbeitspaketes.
1. Entferne das Häkchen bei **Fehler**.

### E-Mail-Adresse ergänzen und Beleg erneut versenden
1. [Ergänze die fehlende E-Mail-Adresse](Ausgehende_Belege_Empfaenger_aendern).
1. [Versende den Beleg erneut aus "Ausgehende Belege"](Email_senden_ausgehende_Belege).
