---
title: Wie weise ich logische und physische Drucker zu?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Einrichtung
  - Drucker & PDF-Routing
lang: de
sequence: 40
ref: allocate_logical_and_physical_printers
---

## Überblick
Eine Druckerzuordnung muss für jeden Benutzer ([Host-Key](Benutzerlogin_als_HostKey_für_Drucken_aktivieren)) mit Druckrechten/Zugriff auf Drucker eingerichtet werden.

## Voraussetzungen
1. [Konfiguriere einen logischen Drucker](Logischer_Drucker_Einrichtung_WebUI).
1. [Konfiguriere einen PDF/physischen Drucker](PDF_Drucker_Konfiguration_WebUI).

## Schritte

### Einstellungen für Druckerzuordnung definieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Drucker Zuordnung".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib im Feld **Client-Zuordnungsschlüssel** (Host-Key) den [Login-Namen des Benutzers ein, sofern aktiviert](Benutzerlogin_als_HostKey_für_Drucken_aktivieren). Anderenfalls gib die Sitzungs-ID ein (diese findest du im Eintrag für den [physischen Drucker](PDF_Drucker_Konfiguration_WebUI)).
1. ***Optional:*** Setze ein Häkchen bei **Geteilt**, wenn diese Zuordnungseinstellungen in anderen Druckerzuordnungseinträgen verwendet werden dürfen, um Druckerhierarchien zu erstellen.

### Logische und physische Drucker einander zuordnen
1. Gehe zur Registerkarte "Drucker-Zuordnung" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle einen [**Logischen Drucker**](Logischer_Drucker_Einrichtung_WebUI) aus.
1. Wähle einen [**Hardware-Drucker**](PDF_Drucker_Konfiguration_WebUI) aus.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Eintrag für die Druckerzuordnung zur Liste hinzuzufügen.
    >**Hinweis:** Du kannst auf diese Weise beliebig viele Drucker zuordnen.

## Nächste Schritte
1. [Ordne logische und physische Druckerschächte zu, falls vorhanden](Zuordnung_logische_und_physische_Druckerschaechte).
1. [Teste die Druckerkonfigurationen mit einem Testdruck](PDF_Drucker_Einrichtung_Guide#testdruck).
