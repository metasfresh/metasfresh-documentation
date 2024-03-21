---
title: Wie aktiviere ich den Benutzerlogin als Host-Key für die Druckfunktion?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Einrichtung
  - Nutzer und Rollen
lang: de
sequence: 90
ref: enable_userlogin_as_hostkey_for_printing
---

## Überblick
Bei der [Druckereinrichtung in metasfresh](PDF_Drucker_Einrichtung_Guide) wird standardmäßig die Sitzungs-ID des Benutzers als Host-Schlüssel verwendet, um die Druckerzugriffsrechte einzelner Benutzer zu kontrollieren.

Durch Aktivierung der unten beschriebenen Einstellung verwendet das System anstelle der Sitzungs-ID den **Login-Namen** des Benutzers als Host-Schlüssel, welcher für die Zuordnung zwischen dem Benutzer und den Druckereinstellungen verwendet wird.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Nutzer".
1. Öffne den Eintrag eines bestehenden Nutzers bzw. [lege einen neuen an](Nutzer_anlegen).
1. Öffne die "[Erweiterte Erfassung](Ansichten#erw-erfassung)" aus dem [Aktionsmenü](AktionStarten#aktionsmenue).
 >**Hinweis:** Drücke `Alt` + `E` / `⌥ alt` + `E`.

1. Scrolle nach unten und setze ein Häkchen bei **Login als Druck-HostKey benutzen** (`isloginhostkey`).
    >**Hinweis:** Der Login-Name des Benutzers wird im Feld **Login** des Benutzereintrags festgelegt.

1. Klicke auf "Bestätigen", um die Änderungen zu übernehmen und die "Erweiterte Erfassung" zu schließen.
1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte
- [Richte einen Drucker in metasfresh ein](PDF_Drucker_Einrichtung_Guide).
