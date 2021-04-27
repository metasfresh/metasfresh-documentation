---
title: Wie richte ich den Komponentengenerator ein?
layout: default
tags:
  - Stammdaten
  - Stückliste
  - Komponentengenerator (Einrichtung)
lang: de
sequence: 10
ref: component_generator_setup
---

## Überblick
Mithilfe des Komponentengenerators können in metasfresh auf Grundlage von [Produktionsaufträgen](NeuerProduktionsauftrag) gefertigte Produkte mit individuellen Merkmalen, wie z.B. eigenen Seriennummern, versehen werden.

## Voraussetzungen
Die zu generierenden Komponenten (Merkmale) müssen zuerst als Dienstleistungsprodukte in metasfresh angelegt werden. Folge dazu dieser [Anleitung zum Anlegen neuer Produkte](NeuesProdukt) unter Berücksichtigung der folgenden Einstellungen:

1. Wähle die **Produktart** *Dienstleistung* aus.
1. Deaktiviere die Kontrollkästchen für **Wird provisioniert**, **Wird Eingekauft** und **Verkauft**.
  >**Hinweis:** Bei dieser Art von Produkten handelt es sich somit um immaterielle Artikel, die nicht im Bestand geführt werden.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Komponentengenerator".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des Dienstleistungsproduktes ein, das die zu generierende Komponente beschreibt, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle eine **Java Klasse** aus, z.B. *Passwort Generator*, *MAC Address Generator* oder *Serial No Generator*.

### Konfiguration der Java-Klassen

| **Hinweis:** |
| :--- |
| Unter Umständen musst Du als Systemadministrator angemeldet sein, um gewisse Einstellungen zu ändern. |

#### Passwort Generator: Parameter definieren
1. Gehe zur Registerkarte "Parameters" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle einen Parameter aus und definiere seine Eigenschaften im Feld **Suchschlüssel**.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Parameter zur Liste hinzuzufügen.

#### MAC Address Generator
1. [Richte eine benutzerdefinierte Belegnummerierung ein](Belegnummern_definieren).
1. Wähle im Feld **Reihenfolge** diese Belegnummerierung aus.

#### Serial No Generator
1. [Richte eine benutzerdefinierte Belegnummerierung ein](Belegnummern_definieren).
1. Wähle im Feld **Reihenfolge** diese Belegnummerierung aus.

## Nächste Schritte
- [Verwende das Dienstleistungsprodukt (die zu generierende Komponente) in einer Stückliste, um es für Produktionsaufträge verfügbar zu machen](Stueckliste_erstellen).