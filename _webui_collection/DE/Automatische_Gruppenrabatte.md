---
title: Wie vergebe ich Rabatte auf automatisch erstellte Kompensationsgruppen?
layout: default
tags:
  - Preisgestaltung
  - Rabatte
  - Kompensationsgruppen
lang: de
sequence: 20
ref: automatic_group_discounts
---

## Übersicht
[Kompensationsgruppen](Rabattformen_in_metasfresh) sind Auftragszeilen, die zu Gruppen zusammengefasst werden, auf die gemeinsame Rabatte oder Aufschläge sowohl einzeln als auch sukzessiv gegeben werden können, wobei der vorherige Rabatt oder Aufschlag bei jeder Berechnung miteinbezogen wird. Außerdem können in einem Auftrag auch mehrere Rabatte/Aufschläge auf verschiedene Kompensationsgruppen gegeben werden.

## Vorbereitung
[Richte die automatische Kompensationsgruppierung](Automatische_Kompensationsgruppen_konfig) für die betreffenden Produktkategorien ein.

## Schritte
1. Folge der Anleitung zur [Erfassung eines Auftrags](Auftrag_erfassen) bis zum **Schritt 4 der Auftragszeileneingabe**.
1. [Selektiere die Auftragszeilen](AuswahlBelege), die Du zu einer Gruppe zusammenfassen möchtest.
1. [Starte die Aktion](AktionStarten) "Multigroup lines". Die Kompensationsgruppen werden automatisch erstellt und als zusätzliche Rabattzeilen mit der **Gruppenart** *Rabatt* ausgewiesen.
1. Bewege die horizontale Bildlaufleiste der Auftragszeilentabelle nach rechts, bis Du die Spalte **Gruppen Preisminderung** erreichst.
1. Klicke doppelt auf das Feld **Gruppen Preisminderung** der Rabattzeile und gib dort einen Prozentbetrag ein.
1. Bestätige mit `↵ Enter`.
1. Folge den restlichen Schritten zur [Auftragserfassung](Auftrag_erfassen), um den Auftrag abzuschließen.

## Sukzessive Rabattierung
Möchtest Du auf einen Gruppenrabatt noch weitere Rabatte vergeben, die sich an der jeweils zuvor rabattierten Summe orientieren, gehe einfach wie folgt vor:

1. Selektiere eine Auftragszeile aus der betreffenden Kompensationsgruppe.
1. [Starte die Aktion](AktionStarten) "Neuer Gruppenrabatt". Es öffnet sich ein neues Fenster.
1. Wähle ein **Produkt** aus, z.B. [*Rabatt*](Produkt_für_Gruppenrabatt).
 >**Hinweis:** Du kannst auch jedes andere Produkt auswählen, das im Produktfeld vorgeschlagen wird.

1. Klicke auf "Start", um das Fenster zu schließen und eine weitere Gruppenrabattzeile zur Liste hinzuzufügen.
1. Klicke doppelt auf das Feld **Gruppen Preisminderung** dieser Rabattzeile und gib dort einen Prozentbetrag ein.
1. Bestätige mit `↵ Enter`.

## Kompensationsgruppe löschen
Möchtest Du eine Kompensationsgruppe löschen und den Rabatt rückgängig machen, lösche einfach die jeweilige Rabattzeile.

### Beispiel
![](assets/Automatische_Gruppenrabatte.gif)
