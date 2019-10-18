---
title: Wie behebe ich einen fehlgeschlagenen E-Mail-Versand eines ausgehenden Beleges?
layout: default
tags:
  - E-Mails und ausgehende Belege
  - Fehlerbehebung
lang: de
sequence: 10
ref: outbound_documents_troubleshooting
---

## Überblick
In metasfresh wird für jeden gestarteten Prozess ein Arbeitspaket (engl.: *work package*) unter "Asynchrone Verarbeitungswarteschlage" angelegt, in dem Informationen wie Verarbeitungsstatus, Protokollstatus oder Fehlermeldungen eingesehen werden können. Auch fehlgeschlagene Prozesse verfügen somit über Arbeitspakete und können in der asynchronen Verarbeitungswarteschlage behoben werden.

Schlägt die Übermittlung eines per E-Mail versendeten Beleges fehl, z.B. weil die Zugangsdaten des E-Mail-Kontos nicht stimmen oder der E-Mail-Server nicht erreichbar ist, dann kann das Arbeitspaket nicht verarbeitet werden und es wird mit einer Fehlermeldung versehen.

Wenn Du nun nach Beseitigung der Fehlerursachen den Beleg erneut versuchst zu versenden, kann es unter Umständen sein, dass der Versand trotz allem nicht stattfindet. Das liegt daran, dass bereits ein Arbeitspaket für diesen Vorgang existiert, welches allerdings als "fehlgeschlagen" gekennzeichnet ist und kein zweites Mal erstellt wird, um zu verhindern, dass der Beleg doppelt an den Empfänger übermittelt wird.

Um den Beleg dennoch versenden zu können, muss zuerst die Fehlermeldung aus dem Arbeitspaket entfernt werden, damit es für einen neuen Versandversuch zur Verfügung steht. Gehe hierzu wie folgt vor:

## Schritte

### Arbeitspaket suchen und Fehlermeldung entfernen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Asynchrone Verarbeitungswarteschlage".
1. [Verwende die Filterfunktion](Filterfunktion) und suche nach dem **WorkPackage Processor** `de.metas.document.archive.async.spi.impl.MailWorkpackageProcessor`, um das fehlgeschlagene Arbeitspaket zu finden.
 >**Hinweis:** Es hat sich bewährt, das Arbeitspaket anhand des genauen Erstellungszeitpunktes zu suchen (siehe Spalte **Erstellt**).

1. Öffne den Eintrag des Arbeitspaketes.
1. Entferne das Häkchen bei **Fehler**.

## Nächste Schritte (optional)
1. [Überprüfe die Zugangsdaten des E-Mail-Servers auf Richtigkeit](Ausgehende_Belege_Mail_Server_einrichten).
1. [Ergänze fehlende E-Mail-Adressen in den ausgehenden Belegen](Ausgehende_Belege_Empfaenger_aendern).
1. [Versende den Beleg erneut aus "Ausgehende Belege"](Email_senden_ausgehende_Belege).
