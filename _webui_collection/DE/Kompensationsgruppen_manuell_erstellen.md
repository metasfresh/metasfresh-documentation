---
title: Wie erstelle ich manuelle Kompensationsgruppen?
layout: default
tags:
  - Verkauf
  - Kompensationsgruppen
lang: de
sequence: 10
ref: create_manual_compensation_groups
---

## Überblick
Eine manuell erstellte Kompensationsgruppe fasst mehrere Auftragszeilen zusammen, damit diese im Rahmen der [Gruppenrabattierung](Auftragszeilengruppenrabatt) gemeinsam rabattiert oder aufgeschlagen werden können.

Bei der [Erstellung von Stücklisten aufgrund eines Angebots](Stueckliste_bei_Auftragsgenerierung) dienen manuelle Kompensationsgruppen dazu, Angebotsgruppen zu erstellen, auf deren Grundlage später die Stückliste und das Verkaufsprodukt erstellt werden.

Um manuelle Kompensationsgruppen zu erstellen, gehe wie folgt vor:

## Schritte
1. Folge dieser [Anleitung zur Erfassung eines Auftrages](Auftrag_erfassen) bis zum **Schritt 4 der Auftragszeileneingabe**.
1. [Selektiere](AuswahlBelege) die Auftragszeilen, die Du zu einer Kompensationsgruppe zusammenfassen möchtest.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Zeilen gruppieren". Es öffnet sich ein Overlay-Fenster.
1. Wähle ein **Produkt** aus, z.B. *Rabatt*.
 >**Hinweis:** Du kannst auch jedes andere Gruppierungsprodukt auswählen, das im Produktfeld vorgeschlagen wird, sofern es ***nicht lagerhaltig*** und mit ***derselben Preisliste*** verknüpft ist wie der Auftrag.<br>
 [Folge dieser Anleitung](Gruppierungsprodukt_anlegen) zur Konfiguration solcher *Gruppierungsprodukte*.

1. Wähle eine **Gruppe** aus oder vergib einen eigenen **Gruppennamen**.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und die Kompensationsgruppe zu erstellen. Es wird eine neue Auftragszeile mit der **Gruppenart** *Rabatt* zur Liste hinzugefügt.
 >**Hinweis:** Wiederhole die Schritte 2 bis 6, um weitere Kompensationsgruppen zu erstellen.

### Kompensationsgruppe löschen
Möchtest Du eine Kompensationsgruppe rückgängig machen, lösche einfach die jeweilige Rabattzeile, indem Du mit einem Rechtsklick auf die betreffende Zeile das Kontextmenü öffnest und auf "Löschen" klickst (`Alt` + `Y` / `⌥ alt` + `Y`).

## Nächste Schritte
- [Gib einen Rabatt oder Zuschlag auf die manuell erstellte Kompensationsgruppe](Auftragszeilengruppenrabatt).
- [Einsatz von manuellen Kompensationsgruppen bei der Stücklistenerstellung bei Umwandlung eines Angebots in einen Auftrag](Stueckliste_bei_Auftragsgenerierung).

## Beispiel
![](assets/Auftragszeilengruppenrabatt.gif)
