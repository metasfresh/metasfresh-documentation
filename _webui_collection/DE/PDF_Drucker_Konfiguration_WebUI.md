---
title: Wie konfiguriere ich einen PDF-Drucker?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Einrichtung
  - Drucker & PDF-Routing
lang: de
sequence: 30
ref: PDF_printer_configuration_WebUI
---

## Überblick
In metasfresh kann ein PDF-Drucker als virtuelle Repräsentation eines physischen Druckers verstanden werden, der ein tatsächlicher (Hardware-)Drucker, eine Datei oder ein Folgeprozess zur Weiterverarbeitung sein kann.

PDF-Drucker können so konfiguriert werden, dass sie die physischen Eigenschaften der Hardware-Drucker abbilden, an die die generierten PDF-Dateien zum tatsächlichen Druck weitergeleitet werden. Das bedeutet, dass auf den Servern Ausgabeverzeichnisse für jeden einzelnen Drucker und seine jeweiligen Schächte (Unterverzeichnisse) angelegt werden, in denen die digitalen Ausdrucke dann gespeichert werden, um anschließend von den zugewiesenen Hardware-Druckern endgültig verarbeitet (gedruckt) zu werden.

## Schritte

### PDF-Drucker konfigurieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Drucker".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne den Drucker im Feld **Name**.
    >**Hinweis:** Dieser Name wird zur Benennung des **Hauptausgabeverzeichnisses** des Druckers auf dem Server verwendet, in dem die erzeugten PDF-Dateien gespeichert werden.

1. Der **Host-Key** wird automatisch mit der aktuellen Sitzungs-ID des Benutzers ausgefüllt. Alternativ kann er durch den Anmeldenamen (**Login**) des Benutzers ersetzt werden, sofern die [entsprechende Option im Benutzereintrag aktiviert ist](Benutzerlogin_als_HostKey_für_Drucken_aktivieren).
1. Wähle die **Ausgabe Art** *PDF auf dem Server speichern* aus.

### Hardware-Druckerschächte hinzufügen (optional)
1. Gehe zur Registerkarte "Schacht" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Benenne den Schacht im Feld **Name**.
    >**Hinweis:** Dieser Name wird zur Benennung des **Unterverzeichnisses** des Hauptdruckerverzeichnisses verwendet, das in den vorangegangenen Schritten definiert wurde.

1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Hardware-Schacht zur Liste hinzuzufügen.
 >**Hinweis:** Du kannst auf diese Weise beliebig viele Schächte hinzufügen.

## Nächste Schritte
1. [Ordne logische und physische Drucker zu](Zuordnung_logische_und_physische_Drucker).
1. [Ordne logische und physische Druckerschächte zu, falls vorhanden](Zuordnung_logische_und_physische_Druckerschaechte).
1. [Teste die Druckerkonfigurationen mit einem Testdruck](PDF_Drucker_Einrichtung_Guide#testdruck).
