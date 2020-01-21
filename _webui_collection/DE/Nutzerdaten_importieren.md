---
title: Wie importiere ich Nutzerdaten?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Nutzerdatenimport
lang: de
sequence: 20
ref: import_user_data
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel für den Import von Nutzerdaten](Importformat_Beispiel_Nutzer).
 >**Hinweis:** Für den Nutzersdatenimport benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import User* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen passenden Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den Nutzerdaten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die Nutzerdaten zu importieren und das Overlay-Fenster zu schließen.

### Nutzerdaten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Users". Hier findest Du alle importierten Nutzereinträge.
1. Öffne den Eintrag des Nutzers, dessen Daten Du überprüfen und ggf. korrigieren möchtest.
 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Nutzereintrag hier schreibgeschützt und Du findest die importierten Daten unter dem Menüpunkt "[Nutzer](Menu)" wieder oder aber auch unter der Registerkarte "Nutzer/Kontakt" im Eintrag des verknüpften Geschäftspartners. An beiden Stellen kannst Du nun Änderungen vornehmen.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Nutzereintrag unter "[Import Users](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die Nutzerdaten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Nutzerdaten manuell importieren
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Import Users".
1. [metasfresh speichert automatisch](Speicheranzeige).
1. Die importierten Nutzerdaten findest Du nun unter dem Menüpunkt "[Nutzer](Menu)" wieder oder aber auch unter der Registerkarte "Nutzer/Kontakt" im Eintrag des verknüpften Geschäftspartners.
