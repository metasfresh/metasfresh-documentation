---
title: Wie vergebe ich Gruppenrabatte (Auftragszeilengruppenrabatte)?
layout: default
tags:
  - Preisgestaltung
  - Rabatte
lang: de
sequence: 30
ref: order_line_group_discount
---

## Übersicht
[Auftragszeilengruppenrabatte](Rabattformen_in_metasfresh) können sowohl auf einzelne als auch auf mehrere Auftragszeilen (*Kompensationsgruppen*) angewendet werden. Darüber hinaus erlauben sie ebenfalls eine sukzessive Rabattierung, wobei die vorherige Rabattierung jedes Mal bei der Berechnung in Betracht gezogen wird. Außerdem können in einem Auftrag auch mehrere Rabatte auf verschiedene *Kompensationsgruppen* vergeben werden.

## Schritte
1. Folge der Anleitung zur [Erfassung eines Auftrags](Auftrag_erfassen) bis zum **Schritt 4 der Auftragszeileneingabe**.
1. [Selektiere die Auftragszeilen](AuswahlBelege), die Du zu einer Gruppe zusammenfassen möchtest.
1. [Starte die Aktion](AktionStarten) "Create Group". Es öffnet sich ein neues Fenster.
1. Wähle ein **Produkt** aus (im Beispiel ist es das Produkt *Rabatt*; Du kannst aber jedes Produkt wählen, was im Feld vorgeschlagen wird).
1. Wähle eine **Gruppe** aus.<br>
***Alternativ*** kannst Du auch einen eigenen **Gruppennamen** vergeben.
1. Klicke auf "Bestätigen", um das Fenster zu schließen und die Gruppe zu erstellen. Es wird eine neue Auftragszeile mit der **Gruppenart** *Rabatt* zur Liste hinzugefügt.
1. Bewege die horizontale Bildlaufleiste der Auftragszeilentabelle nach rechts, bis Du die Spalte **Gruppen Preisminderung** findest.
1. Klicke doppelt auf das Feld **Gruppen Preisminderung** der Rabattzeile und gib dort einen Prozentbetrag ein.
1. Bestätige mit `ENTER`.
1. Folge den restlichen Schritten zur [Auftragserfassung](Auftrag_erfassen), um den Auftrag abzuschließen.

## Sukzessive Rabattierung
Möchtest Du auf einen Gruppenrabatt noch weitere Rabatte vergeben, die sich an der jeweils zuvor rabattierten Summe orientieren, gehe einfach wie folgt vor:

1. Selektiere eine Auftragszeile aus der betreffenden Gruppe.
1. [Starte erneut die Aktion](AktionStarten) "Create Group". Es öffnet sich ein neues Fenster.
1. Wähle das **Produkt** *Rabatt* aus und die betreffende **Gruppe**.
 >**Hinweis:** Hast du eine eigene Gruppe erstellt, gib diese unter **Gruppenname** erneut ein.

1. Klicke auf "Bestätigen", um das Fenster zu schließen und die Gruppe zu erstellen. Es wird eine weitere Rabattzeile zur Liste hinzugefügt.
1. Klicke doppelt auf das Feld **Gruppen Preisminderung** dieser Rabattzeile und gib dort einen Prozentbetrag ein.
1. Bestätige mit `ENTER`.

## Kompensationsgruppe löschen
Möchtest Du eine Kompensationsgruppe löschen und den Rabatt rückgängig machen, lösche einfach die jeweilige Rabattzeile.

### Beispiel
![](assets/Auftragszeilengruppenrabatt.gif)
