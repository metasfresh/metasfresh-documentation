---
title: Wie importiere ich Nachbestelldaten?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Nachbestelldatenimport
lang: de
sequence: 20
ref: import_replenishment_data
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel für den Import von Nachbestelldaten](Importformat_Beispiel_Nachbestellung).
 >**Hinweis:** Für den Nachbestelldatenimport benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import Replenishment* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen geeigneten Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den Nachbestelldaten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die Nachbestelldaten zu importieren und das Overlay-Fenster zu schließen.

### Nachbestelldaten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Replenishment". Hier findest Du alle importierten Nachbestellungseinträge.
1. Öffne den Eintrag der Nachbestellung, deren Daten Du überprüfen und ggf. korrigieren möchtest.
 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Nachbestellungseintrag hier schreibgeschützt und Du findest die importierten Daten im jeweiligen [Lager](Menu)- und [Produkt](Menu)eintrag unter der Registerkarte "Nachbestellung" wieder, wo Du nun Änderungen vornehmen kannst.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Nachbestellungseintrag unter "[Import Replenishment](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die Nachbestelldaten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Nachbestelldaten manuell importieren
1. [Starte die Aktion](AktionStarten) "Import Replenishments". Es öffnet sich ein Overlay-Fenster.
1. Klicke auf "Start", um die Nachbestelldaten zu importieren und das Overlay-Fenster zu schließen.
1. Die importierten Nachbestelldaten findest Du nun im jeweiligen [Lager](Menu)- und [Produkt](Menu)eintrag unter der Registerkarte "Nachbestellung" wieder.
