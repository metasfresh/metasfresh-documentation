---
title: Wie erfasse ich eine Margenvereinbarung zwischen Vertriebspartner und Kunde?
layout: default
tags:
  - Vertragsverwaltung
  - Provisionsverträge
lang: de
sequence: 20
ref: commission_margin_agreement
---

<!--
See also: https://github.com/metasfresh/me03/issues/3309#issuecomment-580173464
-->

## Überblick
Eine Margenvereinbarung zwischen [provisionsberechtigtem Vertriebspartner](Vertriebspartner_anlegen) und [Kunden](Neuer_Geschaeftspartner_Kunde) ermöglicht es dem Vertriebspartner, einen Teil seiner [Provision](Provisionspunkte_Preis) dem Kunden in Form eines Nachlasses auf den Nettopreis eines [Produktes](NeuesProdukt) zu gewähren.

## Voraussetzungen
1. [Erfasse einen Vertriebspartner, mit dem ein Provisionsvertrag geschlossen werden soll](Vertriebspartner_anlegen).
1. [Bestimme die Vertragsbedingungen des Provisionsvertrages](Vertragsbedingungen_Provision_definieren).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Margeneinstellungen Kunde".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Zugeordneter Vertriebspartner** einen Teil des Namens oder der Nummer des [Vertriebspartners](Vertriebspartner_anlegen) ein, dessen Provision zur Berechnung des Preisnachlasses herangezogen werden soll, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Gib in das Feld **Kunde** einen Teil des Namens oder der Nummer des [Kunden](Neuer_Geschaeftspartner_Kunde) ein, dem der Preisnachlass zugutekommen soll, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
 >**Hinweis 1:** Bleibt das Feld leer, so gilt die Margenvereinbarung für ***alle Kunden***.<br><br>
 >**Hinweis 2:** Bei Vorhandensein sowohl allgemeiner Vereinbarungen als auch solcher mit bestimmten Kunden hat stets diejenige mit den konkreteren Daten Vorrang.

1. Trage in das Feld **Marge %** den Prozentsatz ein, der von der Provision des Vertriebspartners abgezogen und anschließend als Nachlass auf den Nettopreis des Produktes gewährt werden soll.
1. Stelle ein **Gültig ab** Datum ein.
 >**Hinweis:** Liegt das Datum in der *Vergangenheit*, gilt die Vereinbarung *ab sofort*. Liegt es in der *Zukunft*, gilt sie *erst ab diesem Datum*.

1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte
- [Erfasse einen Auftrag mit provisionsberechtigtem Vertriebspartner](Auftrag_erfassen_Vertriebspartner).
