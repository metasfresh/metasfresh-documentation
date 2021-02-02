---
title: Wie schließe ich einen Provisionsvertrag?
layout: default
tags:
  - Vertragsverwaltung
  - Provisionsverträge
lang: de
sequence: 10
ref: create_commission_contract
---

## Überblick
Durch einen Provisionsvertrag verpflichtet sich der Auftraggeber, einem [Vertriebspartner](Vertriebspartner_anlegen) für den [Verkauf bestimmter Produkte](Auftrag_erfassen) eine Vergütung ([Provision](Provisionspunkte_Preis)) zu zahlen.

## Voraussetzungen
1. [Erfasse einen Vertriebspartner, mit dem ein Provisionsvertrag geschlossen werden soll](Vertriebspartner_anlegen).
1. [Bestimme die Vertragsbedingungen des Provisionsvertrages](Vertragsbedingungen_Provision_definieren).

## Schritte
1. Öffne den Eintrag eines bestehenden Vertriebspartners aus Deinen [Geschäftspartnern](Menu).
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Erzeuge Vertrag". Es öffnet sich ein Overlay-Fenster.
1. Wähle die gewünschten **Vertragsbedingungen** für den Provisionsvertrag aus.
1. Stelle ein **Anfangsdatum** ein.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und den Provisionsvertrag zu erzeugen.
1. [metasfresh speichert automatisch](Speicheranzeige).

| **Hinweis:** |
| :--- |
| Nach seiner Erzeugung findest Du den Provisionsvertrag unter dem Menüpunkt "[Vertrag](Menu)" wieder. Über die [verknüpften Belege](SpringezuBelegen) des Vertriebspartnereintrages kannst Du auch ***direkt*** zum Vertrag springen (unter VERTRAGSVERWALTUNG in der Sidebar). |

## Fehlermeldung

<kbd style="font-size:12pt; font-family:arial; line-height:1.5;"><span style="color:#f67a89"><strong>Error: Der Vertragszeitraum Jan 1,...</strong></span><br>
Server error<br>
Der Vertragszeitraum Jan 1, <script>document.write(new Date().getFullYear())</script> bis Dec 31, <script>document.write(new Date().getFullYear())</script> hat keine Perioden.</kbd><br><br>

Diese Fehlermeldung weist darauf hin, dass für den ausgewählten Vertragszeitraum keine Kalenderperioden exisiteren.<br>
Solltest Du bei **Schritt 5** diese Fehlermeldung erhalten, dann folge dieser [Anleitung zur Erstellung neuer Kalenderperioden](Neue_Kalenderperiode_anlegen) für den ausgewählten Vertragszeitraum.

## Nächste Schritte
1. [Ordne den Vertriebspartner einem oder mehreren Kunden zu](Vertriebspartner_Kunden_zuordnen).
1. [Erfasse einen Auftrag mit provisionsberechtigtem Vertriebspartner](Auftrag_erfassen_Vertriebspartner).
