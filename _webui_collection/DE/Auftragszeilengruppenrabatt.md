---
title: Wie vergebe ich Rabatte auf manuell erstellte Kompensationsgruppen (Auftragszeilengruppenrabatte)?
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

## Übersicht
[Auftragszeilengruppenrabatte](Rabattformen_in_metasfresh) können sowohl auf einzelne als auch auf mehrere Auftragszeilen (*Kompensationsgruppen*) vergeben werden. Darüber hinaus erlauben sie ebenfalls eine sukzessive Rabattierung, wobei die vorherige Rabattierung jedes Mal bei der Berechnung miteinbezogen wird. Außerdem können in einem Auftrag auch mehrere Rabatte auf verschiedene *Kompensationsgruppen* vergeben werden.

## Schritte
1. Folge der Anleitung zur [Erfassung eines Auftrags](Auftrag_erfassen) bis zum **Schritt 4 der Auftragszeileneingabe**.
1. [Selektiere die Auftragszeilen](AuswahlBelege), die Du zu einer Gruppe zusammenfassen möchtest.
1. [Starte die Aktion](AktionStarten) "Zeilen gruppieren". Es öffnet sich ein neues Fenster.
1. Wähle ein **Produkt** aus, z.B. *Rabatt*.
 >**Hinweis:** Du kannst auch jedes andere Produkt auswählen, das im Produktfeld vorgeschlagen wird, solange es ***nicht lagerhaltig*** und mit ***derselben Preisliste*** verknüpft ist wie der Auftrag. <br> [Folge dieser Anleitung](Produkt_für_Gruppenrabatt) zur Konfiguration solcher "Rabattprodukte".

1. Wähle eine **Gruppe** aus.<br>
***Alternativ*** kannst Du auch einen eigenen **Gruppennamen** vergeben.
1. Klicke auf "Start", um das Fenster zu schließen und die Gruppe zu erstellen. Es wird eine neue Auftragszeile mit der **Gruppenart** *Rabatt* zur Liste hinzugefügt.
1. Bewege die horizontale Bildlaufleiste der Auftragszeilentabelle nach rechts, bis Du die Spalte **Gruppen Preisminderung** erreichst.
1. Klicke doppelt auf das Feld **Gruppen Preisminderung** der Rabattzeile und gib dort einen Prozentbetrag ein.
1. Bestätige mit `↵ Enter`.
1. Folge den restlichen Schritten zur [Auftragserfassung](Auftrag_erfassen), um den Auftrag abzuschließen.

## Sukzessive Rabattierung
Möchtest Du auf einen Gruppenrabatt noch weitere Rabatte vergeben, die sich an der jeweils zuvor rabattierten Summe orientieren, gehe einfach wie folgt vor:

1. Selektiere eine Auftragszeile aus der betreffenden Kompensationsgruppe.
1. [Starte die Aktion](AktionStarten) "Neuer Gruppenrabatt". Es öffnet sich ein neues Fenster.
1. Wähle ein **Produkt** aus, z.B. *Rabatt*.
 >**Hinweis:** Du kannst auch jedes andere Produkt auswählen, das im Produktfeld vorgeschlagen wird, sofern es ***nicht lagerhaltig*** und mit ***derselben Preisliste*** verknüpft ist wie der Auftrag. <br> [Folge dieser Anleitung](Produkt_für_Gruppenrabatt) zur Konfiguration solcher Produkte.

1. Klicke auf "Start", um das Fenster zu schließen und eine weitere Gruppenrabattzeile zur Liste hinzuzufügen.
1. Klicke doppelt auf das Feld **Gruppen Preisminderung** dieser Rabattzeile und gib dort einen Prozentbetrag ein.
1. Bestätige mit `↵ Enter`.

## Kompensationsgruppe löschen
Möchtest Du eine Kompensationsgruppe löschen und den Rabatt rückgängig machen, lösche einfach die jeweilige Rabattzeile.

## Beispiel
![](assets/Auftragszeilengruppenrabatt.gif)
