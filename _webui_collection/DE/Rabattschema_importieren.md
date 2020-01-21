---
title: Wie importiere ich Rabattschemata?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Rabattschemadatenimport
lang: de
sequence: 20
ref: import_discount_schema
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel für den Import von Rabattschemata](Importformat_Beispiel_Rabattschema).
 >**Hinweis:** Für den Import von Rabattschemata benötigst Du ein Importformat, in dem die **DB-Tabelle** *I_DiscountSchema* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen passenden Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den Rabattschemadaten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die Rabattschemadaten zu importieren und das Overlay-Fenster zu schließen.

### Rabattschemadaten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Discount Schema". Hier findest Du alle importierten Rabattschema-Einträge.
1. Öffne den Eintrag des Rabattschemas, dessen Daten Du überprüfen und ggf. korrigieren möchtest.
 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Rabattschema-Eintrag hier schreibgeschützt und Du findest die importierten Daten unter dem Menüpunkt "[Rabatte](Menu)" wieder, wo Du nun Änderungen vornehmen kannst.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Rabattschema-Eintrag unter "[Import Discount Schema](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die Rabattschemadaten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Rabattschemadaten manuell importieren
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import Discount Schema". Es öffnet sich ein Overlay-Fenster.
1. Klicke auf "Start", um die Rabattschemadaten zu importieren und das Overlay-Fenster zu schließen.
1. Die importierten Rabattschemadaten findest Du nun unter dem Menüpunkt "Rabatte" wieder.
