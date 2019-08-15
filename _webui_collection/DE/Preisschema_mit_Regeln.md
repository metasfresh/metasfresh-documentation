---
title: Wie lege ich ein Preisschema an?
layout: default
tags:
  - Preisgestaltung
  - Preise
  - Preisschemata (Preislisten kopieren)
lang: de
sequence: 20
ref: price_list_schema_rules
---

## Übersicht
Zum [Kopieren von Preislisten](Preise_von_Preislistenversion_kopieren) benötigst Du ein gültiges Preisschema. Darin kannst Du u.a. festlegen, welche Produkte übernommen werden sollen, für welche Produktkategorie und/oder welchen Geschäftspartner das Schema gelten soll und ob die Standardpreise während des Kopiervorgangs um einen Aufschlag erhöht werden sollen.

## Schritte

### Preisschema anlegen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Preis Schema".
1. [Lege ein neues Preisschema an](Neuer_Datensatz_Fenster_Webui).
1. Benenne das Preisschema im Feld **Name**, z.B. "Preislisten kopieren".
1. Stelle ein **Gültig ab** Datum ein.
 >**Hinweis:** Liegt das Datum in der *Vergangenheit*, gilt das Preisschema *ab sofort*. Liegt es in der *Zukunft*, gilt es *erst ab diesem Datum*.

1. Wähle die **Preis Art** *Preisliste* aus.

### Regeln hinzufügen
1. Gehe zur Registerkarte "Schema Position" unten auf der Seite und klicke auf ![](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
 >**Hinweis:** Die folgenden Angaben sind alle **optional** und beliebig miteinander kombinierbar.

1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) ein und klicke auf den passenden Treffer in der [Dropdown-Liste](Keyboard_Shortcuts_Liste).
1. Wähle eine **Produktkategorie** aus.
1. Gib im Feld **Geschäftspartner** einen Teil des Namens oder der Nummer des [Geschäftspartners](Neuer_Geschaeftspartner) ein und klicke auf den passenden Treffer in der [Dropdown-Liste](Keyboard_Shortcuts_Liste).
1. Wähle eine **Steuerkategorie** aus.
1. Trage einen **Aufschlag auf Standardpreis** ein oder belasse ihn bei *0,00*.
1. Wähle eine **Ziel Steuerkategorie** aus.
 >**Hinweis:** Dies wird die Steuerkategorie der neuen Produktpreise sein.

1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und die Regel zur Liste hinzuzufügen.
<br><br>

| Hinweis zu "[Preislisten kopieren](Preise_von_Preislistenversion_kopieren)": |
| :--- |
| Damit eine Preisliste kopiert werden kann, muss das verwendete Preisschema **mindestens eine Schemaposition** enthalten. Allerdings ist es nicht unbedingt nötig, dass darin bestimmte Regeln definiert werden, wie z.B. Produkt, Geschäftspartner oder Aufschlag.<br> Ist dies dennoch der Fall und wird dieses Preisschema dann zum Kopieren von Preislisten eingesetzt, werden die definierten Regeln automatisch auf alle betroffenen Produkte angewendet.|

## Beispiel
![](assets/Preisschema_Regeln.gif)
