---
title: Wie importiere ich Bankauszugsdaten?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Bankauszugsdatenimport
lang: de
sequence: 20
ref: import_bank_statement_data
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel für den Import von Bankauszugsdaten](Importformat_Beispiel_Bankauszug).
 >**Hinweis:** Für den Bankauszugsdatenimport benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import - Bankauszug* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen passenden Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den Bankauszugsdaten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die Bankauszugsdaten zu importieren und das Overlay-Fenster zu schließen.

### Bankauszugsdaten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import - Bankauszug". Hier findest Du alle importierten Bankauszugspositionen.
1. Öffne den Eintrag der Bankauszugsposition, deren Daten Du überprüfen und ggf. korrigieren möchtest.
1. Benenne die Bankauszugsposition im Feld **Name** um, falls erforderlich.
1. Ändere das **Auszugsdatum**, falls erforderlich.
 >**Hinweis:** Bankauszugspositionen mit demselben Namen und Auszugsdatum werden alle in denselben Bankauszug importiert.

- Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Eintrag der Bankauszugsposition hier schreibgeschützt und Du findest die importierten Daten unter dem Menüpunkt "[Bankauszug](Menu)" wieder, wo Du nun Änderungen vornehmen kannst.
- Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Eintrag der Bankauszugsposition unter "[Import - Bankauszug](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die Bankauszugsdaten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Bankauszugsdaten manuell importieren
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import - Bankauszug". Es öffnet sich ein Overlay-Fenster.
1. Wähle eine **Sektion** aus.
1. Wähle eine **Bankverbindung** aus.
1. Klicke auf "Start", um die Bankauszugsdaten zu importieren und das Overlay-Fenster zu schließen.
1. Die importierten Bankauszugsdaten findest Du nun unter dem Menüpunkt "[Bankauszug](Menu)" wieder.
