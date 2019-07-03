---
title: Wie importiere ich Geschäftspartnerdaten?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Geschäftspartnerdatenimport
lang: de
sequence: 20
ref: import_bpartner_data
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel für den Import von Geschäftspartnerdaten](Importformat_Beispiel_GPartner).
 >**Hinweis:** Für den Geschäftspartnerdatenimport benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import - Geschäftspartner* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen geeigneten Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den Geschäftspartnerdaten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die Geschäftspartnerdaten zu importieren und das Overlay-Fenster zu schließen.

### Geschäftspartnerdaten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Geschäftspartner". Hier findest Du alle importierten Geschäftspartnereinträge.
1. Öffne den Eintrag des Geschäftspartners, dessen Daten Du überprüfen und ggf. korrigieren möchtest.
 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Geschäftspartnereintrag hier schreibgeschützt und Du findest die importierten Daten unter dem Menüpunkt "[Geschäftspartner](Menu)" wieder, wo Du nun Änderungen vornehmen kannst.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Geschäftspartnereintrag unter "[Import Geschäftspartner](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die Geschäftspartnerdaten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Geschäftspartnerdaten manuell importieren
1. [Starte die Aktion](AktionStarten) "Geschäftspartner importieren". Es öffnet sich ein Overlay-Fenster.
1. Klicke auf "Start", um die Geschäftspartnerdaten zu importieren und das Overlay-Fenster zu schließen.
1. Die importierten Geschäftspartnerdaten findest Du nun unter dem Menüpunkt "[Geschäftspartner](Menu)" wieder.

## Beispiel
![](assets/GPartnerdaten_importieren.gif)
