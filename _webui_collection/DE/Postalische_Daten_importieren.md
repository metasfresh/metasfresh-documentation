---
title: Wie importiere ich postalische Daten?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Postalische Daten
lang: de
sequence: 20
ref: import_postal_data
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel für den Import von postalischen Daten](Importformat_Beispiel_postalische_Daten).
 >**Hinweis:** Für den Import von postalischen Daten benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import Postal Data* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen passenden Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den postalischen Daten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die postalischen Daten zu importieren und das Overlay-Fenster zu schließen.

### Postalische Daten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Postal Data". Hier findest Du alle importierten postalischen Daten.
1. Öffne den Eintrag der postalischen Daten, die Du überprüfen und ggf. korrigieren möchtest.
 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Eintrag der postalischen Daten hier schreibgeschützt und Du findest die importierten Daten unter dem Menüpunkt "[Land, Ort und Postleitzahl](Menu)" wieder, wo Du nun Änderungen vornehmen kannst.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Eintrag der postalischen Daten unter "[Import Postal Data](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die postalischen Daten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Postalische Daten manuell importieren
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import Postal Data".
1. [metasfresh speichert automatisch](Speicheranzeige).
1. Die importierten postalischen Daten findest Du nun unter dem Menüpunkt "[Land, Ort und Postleitzahl](Menu)" wieder.
