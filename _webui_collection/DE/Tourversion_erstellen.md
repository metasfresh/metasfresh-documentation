---
title: Wie erstelle ich eine Tourversion?
layout: default
tags:
  - Logistik
  - Tourenplanung
  - Einrichtung
lang: de
sequence: 20
ref: add_tour_version
---

## Überblick
In einer Tourversion lässt sich festlegen, an welchen Tagen und in welchem zeitlichen Abstand bestimmte Geschäftspartner beliefert werden sollen. Hierzu können je nach Bedarf verschiedene Parameter (Wochentage, Wiederholungen, Zeiträume, Bereitstellungszeiten) sowohl miteinander als auch in Verbindung mit den Geschäftspartnern und ihren individuellen Lieferzeiten kombiniert werden. Durch Verknüpfung mit einem Tourenplanungsschema können anschließend prospektive Tourenlisten erzeugt werden, mit denen sich Liefertouren weit im Voraus planen lassen, wodurch Du stets auf aktuellem Stand bist und immer einen Überblick über die ausstehenden Touren, Liefertage und Ansprechpartner behältst.

## Voraussetzungen
- [Lege ein Tourenplanungsschema an](Tourenplanungsschema_anlegen).

## Schritte

### Tourenplanungsschema auswählen und Version anlegen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Tourversion".
1. [Lege eine neue Tourversion an](Neuer_Datensatz_Fenster_Webui).
1. Benenne die Tourversion im Feld **Name**.
1. Wähle im Feld **Tour** ein [Tourenplanungsschema](Tourenplanungsschema_anlegen) aus.
1. Stelle ein **Gültig ab** Datum ein.
 >**Hinweis:** Liegt das Datum in der *Vergangenheit*, gilt die Version *ab sofort*. Liegt es in der *Zukunft*, gilt sie *erst ab diesem Datum*. Ältere Versionen werden von der jeweils neueren automatisch überschrieben.

### Parameter festlegen
Du kannst folgende Parameter je nach Bedarf miteinander kombinieren:

| Parameter | Beschreibung |
| :--- | :--- |
| Feiertage ausfallen | Lieferungen, die nicht auf einen Werktag fallen, werden verworfen. |
| Lieferung verschieben | Lieferungen, die nicht auf einen Werktag fallen, werden auf den nächsten Werktag verschoben. |
| Wochentage | Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag |
| Bereitstellungszeit | Der Zeitpunkt, an dem die Lieferung versandfertig ist. |
| Zeitraum | wöchentlich / monatlich |
| Frequenz | • jede *n*-te Woche<br> • jeden *n*-ten Monat (Monatsintervall)<br> • *n*-ter Tag des Monats |

<br>

| **Wichtiger Hinweis:** |
| :--- |
| Die Angabe von mindestens einem Zeitraum und/oder einer Frequenz ist notwendig, damit Tourenlisten erfolgreich generiert werden können. |

### Geschäftspartner hinzufügen
1. Gehe zur Registerkarte "Tour Version Line" unten auf der Seite und klicke auf ![](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Gib im Feld **Geschäftspartner** einen Teil des Namens oder der Nummer des [Geschäftspartners](Neuer_Geschaeftspartner) ein und klicke auf den passenden Treffer in der [Dropdown-Liste](Keyboard_Shortcuts_Liste).
1. Wähle ebenfalls im Feld **Geschäftspartner** einen Standort aus, sofern dem Geschäftspartner mehr als eine [Adresse](Adresse_erfassen_Tab) zugeordnet wurde.
1. ***Optional:*** Gib einen **Puffer (Std)** ein. Dieser definiert, wie viel Zeit zwischen Versand und tatsächlicher Übergabe der Lieferware liegt.
1. Setze ein Häkchen bei **Abholung**, sofern die Lieferware abgeholt wird.
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Geschäftspartner zur Liste hinzuzufügen.
 >**Hinweis:** Wiederhole die Schritte 1 bis 6, um weitere Geschäftspartner hinzuzufügen.

1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte
- [Erzeuge automatische Tourenlisten](Tourenlisten_automatisch_generieren).
