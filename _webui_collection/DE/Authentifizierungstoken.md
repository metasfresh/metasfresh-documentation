---
title: Wie erhalte ich ein Authentifizierungstoken?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Einrichtung
  - Nutzer und Rollen
lang: de
sequence: 70
ref: authentication_token
---

## Überblick
Mit einem Authentifizierungstoken kannst Du Dich u.a. gegenüber der [REST API von metasfresh](../../rest_api_collection/DE/Allgemeine_Infos_REST_API) authentifizieren, was Dich für die Verwendung des Webservice autorisiert.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Nutzer".
1. [Verwende die Filterfunktion](Filterfunktion), um den Eintrag des [Nutzers](Nutzer_anlegen) zu finden, dessen Authentifizierungstoken Du einsehen möchtest und öffne ihn.
1. Gehe zur Registerkarte "Authentifizierung Tokens" unten auf der Seite.

### Authentifizierungstoken anlegen
Wird unter der Registerkarte "Authentifizierung Tokens" kein Token angezeigt, dann lege ein neues an. Gehe hierzu wie folgt vor:

1. Klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. ***Optional:*** Erfasse eine kurze **Beschreibung**.
1. Wähle eine **Rolle** aus, um die Berechtigungen für das Token festzulegen.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und das Token zur Liste hinzuzufügen.
 >**Hinweis:** Nun kannst Du mit diesem Token auf die API zugreifen.

| **Hinweis:** |
| :--- |
| Um das Authentifizierungstoken in die Zwischenablage zu kopieren, klicke doppelt auf das Feld in der Spalte **Authentication Token** der Tokenzeile (das Token verfärbt sich gräulich) und drücke `Strg`/`⌘ cmd` + `C`. Oder öffne die "[Erweiterte Erfassung](AdvancedEditTab_Öffnen)" der Tokenzeile, markiere dort das Token mit der Maus und verwende denselben Tastaturbefehl. |
