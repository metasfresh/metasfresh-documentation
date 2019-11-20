---
title: Wie vergebe ich Rabatte/Zuschläge auf Kompensationsgruppen (Auftragszeilengruppenrabatte)?
layout: default
tags:
  - Preisgestaltung
  - Preiskonditionen
  - Rabatte
  - Kompensationsgruppen
lang: de
sequence: 10
ref: order_line_group_discount
---

## Überblick
[Auftragszeilengruppenrabatte](Rabattformen_in_metasfresh) können sowohl auf einzelne Auftragszeilen als auch auf *Kompensationsgruppen* gegeben werden. Kompensationsgruppen bestehen aus mehreren Auftragszeilen, die zu Gruppen zusammengefasst wurden, auf die gemeinsame Rabatte oder Aufschläge sowohl einmalig als auch sukzessiv gegeben werden können, wobei der vorherige Rabatt oder Aufschlag bei jeder Berechnung miteinbezogen wird. Außerdem können in einem Auftrag auch mehrere Rabatte/Aufschläge auf verschiedene Kompensationsgruppen gegeben werden.

Kompensationsgruppen lassen sich sowohl [manuell](Kompensationsgruppen_manuell_erstellen) als auch [automatisch](Kompensationsgruppen_automatisch_erstellen) erstellen.

## Schritte

### Kompensationsgruppen erstellen
- [Erstelle **manuelle** Kompensationsgruppen](Kompensationsgruppen_manuell_erstellen).
- [Erstelle **automatische** Kompensationsgruppen](Kompensationsgruppen_automatisch_erstellen).

### Gruppenrabatte oder -aufschläge vergeben
1. Bewege die horizontale Bildlaufleiste der Auftragszeilentabelle nach rechts, bis Du die Spalte **Gruppen Preisminderung** erreichst.
1. Klicke doppelt auf das Feld **Gruppen Preisminderung** der Rabattzeile und gib dort einen Prozentbetrag ein.
1. Bestätige mit `↵ Enter`.
1. Folge den restlichen Schritten zur [Auftragserfassung](Auftrag_erfassen), um den Auftrag fertigzustellen.

## Sukzessive Rabattierung
Möchtest Du auf einen Gruppenrabatt noch weitere Rabatte vergeben, die sich an der jeweils zuvor rabattierten Summe orientieren, gehe einfach wie folgt vor:

1. [Selektiere](AuswahlBelege) eine Auftragszeile aus der betreffenden Kompensationsgruppe.
1. [Starte die Aktion](AktionStarten) "Neuer Gruppenrabatt". Es öffnet sich ein Overlay-Fenster.
1. Wähle ein **Produkt** aus, z.B. *Rabatt*.
 >**Hinweis:** Du kannst auch jedes andere Produkt auswählen, das im Produktfeld vorgeschlagen wird, sofern es ***nicht lagerhaltig*** und mit ***derselben Preisliste*** verknüpft ist wie der Auftrag.<br>
 [Folge dieser Anleitung](Gruppierungsprodukt_anlegen) zur Konfiguration solcher *Rabattprodukte*.

1. Klicke auf "Start", um das Overlay-Fenster zu schließen und eine weitere Gruppenrabattzeile zur Liste hinzuzufügen.
1. Klicke doppelt auf das Feld **Gruppen Preisminderung** dieser Rabattzeile und gib dort einen Prozentbetrag ein.
1. Bestätige mit `↵ Enter`.

## Kompensationsgruppe löschen
Möchtest Du eine Kompensationsgruppe löschen und den Rabatt rückgängig machen, lösche einfach die jeweilige Rabattzeile.

## Beispiel
![](assets/Auftragszeilengruppenrabatt.gif)
