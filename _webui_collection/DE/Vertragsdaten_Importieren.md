---
title: Wie importiere ich Vertragsdaten
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Vertragsdatenimport
lang: de
sequence: 20
ref: import_contract_details
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den  [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest du ein Formatbeispiel für den Import von Vertragsdaten](Importformat_Beispiel_Vertragsdaten).
>**Hinweis:** Für den Import von Vertragsdaten benötigst Du ein Importformat, in dem die **DB-Tabelle** *Contract Import* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen passenden Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den Vertragsdaten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die Vertragsdaten zu importieren und das Overlay-Fenster zu schließen.

### Vertragsdaten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Abos". Hier findest du alle importierten Vertragsdaten.
1. Öffne den Eintrag der Vertragsdaten, die du überprüfen und ggf. korrigieren möchtest.

 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Eintrag der Vertragsdaten hier schreibgeschützt und du findest die importierten Daten unter dem Menüpunkt "[Vertrag Aboverlauf](Menu)" wieder, wo du nun Änderungen vornehmen kannst.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst du diese Fehler im jeweiligen Eintrag der Vertragsdaten unter "[Import Abos](Menu)" korrigieren. Hast du alle Fehler behoben, kannst du die Vertragsdatenaten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Vertragsdaten manuell importieren
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import Subscription Data".
1. [metasfresh speichert automatisch](Speicheranzeige).
1. Die importierten Vertragsdaten findest Du nun unter dem Menüpunkt "[Vertrag Aboverlauf](Menu)" wieder.
