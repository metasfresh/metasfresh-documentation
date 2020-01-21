---
title: Wie importiere ich benutzerdefinierte Dateneingaben?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Benutzerdefinierte Dateneingaben
lang: de
sequence: 20
ref: import_custom_data_entries
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel für den Import von benutzerdefinierten Dateneingaben](Importformat_Beispiel_Dateneingabe).
 >**Hinweis:** Für den Import von benutzerdefinierten Dateneingaben benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import Data Entry Record* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen passenden Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den benutzerdefinierten Dateneingaben hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die benutzerdefinierten Dateneingaben zu importieren und das Overlay-Fenster zu schließen.

### Benutzerdefinierte Dateneingaben überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import - Erweiterte Dateneingabe". Hier findest Du alle importierten benutzerdefinierten Dateneingaben.
1. Öffne den Eintrag der benutzerdefinierten Dateneingabe, dessen Inhalt Du überprüfen und ggf. korrigieren möchtest.
 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Eintrag der benutzerdefinierten Dateneingabe hier schreibgeschützt und Du findest die importierten Daten in dem jeweils angegebenen Eingabefenster im [Menü](Menu) wieder, wo Du nun Änderungen vornehmen kannst.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Eintrag der benutzerdefinierten Dateneingabe unter "[Import - Erweiterte Dateneingabe](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die benutzerdefinierten Dateneingaben nun manuell importieren. Gehe hierzu wie folgt vor:

#### Benutzerdefinierte Dateneingaben manuell importieren
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import - Erweiterte Dateneingabe". Es öffnet sich ein Overlay-Fenster.
1. Klicke auf "Start", um die benutzerdefinierten Dateneingaben zu importieren und das Overlay-Fenster zu schließen.
1. Die importierten benutzerdefinierten Dateneingaben findest Du nun in dem jeweils angegebenen Eingabefenster im [Menü](Menu) wieder.
