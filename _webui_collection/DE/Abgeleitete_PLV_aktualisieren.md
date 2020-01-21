---
title: Wie aktualisiere ich von Basispreislisten abgeleitete Kundenpreislisten?
layout: default
tags:
  - Preisgestaltung
  - Preise
  - Preisschemata (Produktpreise kopieren)
lang: de
sequence: 20
ref: update_derivative_plv
---

## Überblick
In metasfresh kannst Du verschiedenen kundenspezifischen [Preislisten](Preisliste_anlegen) eine allgemeine Basispreisliste zuweisen. Diese kann dazu verwendet werden, die [Produktpreise](Preis_anlegen) aller mit der Basispreisliste verknüpften bzw. von ihr abgeleiteten (*derivativen*) Kundenpreislisten mit in einem [Preisschema](Preislistenschema_anlegen) definierten Preiskonditionen über nur einen Klick zu aktualisieren, d.h. neue [Preislistenversionen](Preislistenversion_anlegen) zu erstellen.

## Voraussetzungen
1. [Erstelle eine allgemeine Preisliste](Preisliste_anlegen), die als *Basispreisliste* in kundenspezifischen Preislisten eingestellt werden kann.
1. [Erstelle kundenspezifische Preislisten](Preisliste_anlegen) und verknüpfe sie mit der **Basispreisliste**.
1. Die (derivativen) Kundenpreislisten müssen [als "Verkaufspreisliste" markiert](Preisliste_anlegen) und [mit einem Kunden verknüpft](Zuweisung_Preise_Partner) sein.
1. Für diesen [Kunden](Neuer_Geschaeftspartner_Kunde) muss es erlaubt sein, von Basispreislistenversionen abgeleitete Preislistenversionen zu aktualisieren.
 >**Hinweis:** Setze hierzu ein Häkchen bei **PLV von Basis** in der Kundenzeile der Registerkarte "Kunde" des entsprechenden Kundeneintrages unter "[Geschäftspartner](Menu)".<br> ![](assets/PLV_von_BasisPLV.png)

## Schritte

### Basispreislistenversion aktualisieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Preisliste".
1. Öffne den Eintrag der *allgemeinen* Preisliste, welche als Basispreisliste in kundenspezifischen Preislisten verwendet wird.
1. [Lege eine neue (aktuelle) Preislistenversion an](Preislistenversion_anlegen), die als Grundlage für die Neuberechnung der Produktpreise aller ableitbaren Preislisten dient und stelle darin ein [**Preislistenschema**](Preislistenschema_anlegen) ein, in dem die gewünschten Preiskonditionen definiert sind.
 >**Hinweis:** Diese Preislistenversion muss keine Produktpreise enthalten. Lediglich ihr **Gültig ab** Datum ist relevant, welches für die Benennung sowie das **Gültig ab** Datum der neuen kundenspezifischen Preislistenversionen verwendet wird.

### Derivative Preislisten aktualisieren
1. Gehe zur Registerkarte "Preislistenversion" unten auf der Seite und [selektiere](AuswahlBelege) die Zeile der neuen Basispreislistenversion.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Auf derivative Preislisten anwenden". Es öffnet sich ein Overlay-Fenster.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und alle mit der allgemeinen Basispreisliste verknüpften kundenspezifischen Preislisten gemäß des Basispreislistenschemas zu aktualisieren.
