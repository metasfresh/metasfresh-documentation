---
title: Wie importiere ich Kontenrahmendaten?
layout: default
tags:
  - Datenverwaltung
  - Datenimport
  - Kontenrahmendatenimport
lang: de
sequence: 20
ref: import_charts_of_accounts
---

## Voraussetzungen
Stelle sicher, dass alle Voraussetzungen für den [Datenimport in metasfresh](Datenimport_nach_metasfresh) erfüllt sind. [Hier findest Du ein Formatbeispiel für den Import von Kontenrahmendaten](Importformat_Beispiel_Kontenrahmen).
 >**Hinweis:** Für den Kontenrahmendatenimport benötigst Du ein Importformat, in dem die **DB-Tabelle** *Import - Kontendefinition* eingestellt ist.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Daten Import".
1. Öffne einen passenden Datenimporteintrag oder [lege einen neuen an](Datenimporteintrag_anlegen).

### Importdatei hochladen und importieren
1. [Lade Deine Importdatei mit den Kontenrahmendaten hoch](Dateihandling).
1. [Starte die Aktion](AktionStarten) "Import attachment". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **Anhang** die hochgeladene [Importdatei](Importdatei_nuetzliche_Hinweise) aus.
1. Klicke auf "Start", um die Kontenrahmendaten zu importieren und das Overlay-Fenster zu schließen.

### Kontenrahmendaten überprüfen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Import Kontenrahmen". Hier findest Du alle importierten Konten.
1. Öffne den Eintrag des Kontos, dessen Daten Du überprüfen und ggf. korrigieren möchtest.
 - Konnten beim Import alle Daten fehlerfrei übertragen werden, dann ist der Konteneintrag hier schreibgeschützt und Du findest die importierten Daten unter dem Menüpunkt "[Konten](Menu)" in dem jeweiligen Kontenrahmeneintrag wieder, wo Du nun Änderungen vornehmen kannst.
 - Sollten einige Daten beim Import nicht oder fehlerhaft übertragen worden sein, kannst Du diese Fehler im jeweiligen Konteneintrag unter "[Import Kontenrahmen](Menu)" korrigieren. Hast Du alle Fehler behoben, kannst Du die Konten nun manuell importieren. Gehe hierzu wie folgt vor:

#### Kontenrahmendaten manuell importieren
1. [Starte die Aktion](AktionStarten) "Konten importieren". Es öffnet sich ein Overlay-Fenster.
1. Klicke auf "Start", um die Konten zu importieren und das Overlay-Fenster zu schließen.
1. Die importierten Konten findest Du nun unter dem Menüpunkt "[Konten](Menu)" in dem jeweiligen Kontenrahmeneintrag wieder.
