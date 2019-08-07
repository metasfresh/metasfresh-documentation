---
title: Wie erzeuge ich automatische Tourenlisten?
layout: default
tags:
  - Logistik
  - Tourenplanung
lang: de
sequence: 20
ref: create_automatic_tour_lists
---

## Überblick
Tourenlisten basieren auf den Einstellungen der Tourversionen. Je nach Einstellung, z.B. an welchen Wochentagen, mit welcher Häufigkeit (wöchentlich/monatlich) und mit wie viel Pufferzeit zwischen Versand und tatsächlicher Übergabe der Lieferware, werden die Tourenlisten für den im Tourenplanungsschema ausgewählten Zeitraum automatisch erzeugt.

## Voraussetzungen
1. [Lege ein Tourenplanungsschema an](Tourenplanungsschema_anlegen).
1. [Erstelle eine Tourversion für das Tourenplanungsschema](Tourversion_erstellen).

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Tour".
1. [Selektiere](AuswahlBelege) in der [Listenansicht](Ansichten) das [Tourenplanungsschema](Tourenplanungsschema_anlegen), das Du zur Erzeugung einer Tourenliste verwenden möchtest.
1. [Starte die Aktion](AktionStarten) "GenerateDeliveryDays" (*Liefertage generieren*). Es öffnet sich ein Overlay-Fenster.
 >**Hinweis:** Diese Aktion findest Du ebenfalls im Aktionsmenü in der Einzelansicht eines Eintrags.

1. Stelle ein **Datum von** und ein **Datum bis** ein, um den genauen Zeitraum festzulegen, für den die Tourenliste erzeugt werden soll.
1. Klicke auf "Start", um die Tourenliste zu erzeugen und das Overlay-Fenster zu schließen.
1. Öffne den Eintrag des Tourenplanungsschemas und [springe über die verknüpften Belege](SpringezuBelegen) in das Fenster "Liefertage" (unter LOGISTIK in der Sidebar).
1. In diesem Fenster kannst Du die neu erzeugte Tourenliste einsehen und verwalten.
