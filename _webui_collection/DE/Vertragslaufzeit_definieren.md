---
title: Wie lege ich die zeitlichen Rahmenbedingungen eines Vertrages fest?
layout: default
tags:
  - Workflow
  - Vertragsverwaltung
lang: de
sequence: 100
ref: define_contract_period
---

## Übersicht
Zu den zeitlichen Rahmenbedingungen eines Vertrages zählen in metasfresh u.a. Vertragslaufzeit, Ablauffrist, Anschlussverträge usw. All diese Bedingungen können im Fenster "Vertragslaufzeit" eingestellt werden.

## Schritte

### Laufzeitbedingungen festlegen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Vertragslaufzeit".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Benenne die Vertragslaufzeit im Feld **Name**.
1. Wähle einen **Abrechnungs-/Lieferkalender** aus, z.B. *Buchführungs-Kalender*.
1. Lege eine **Vertragslaufzeit** und **Vertragseinheit** fest, z.B. "1 Jahr".
1. Lege eine **Ablauffrist** und **Ablaufeinheit** fest, z.B. "1 Monat".
1. Lege ein **Abointervall** und eine **Aboeinheit** fest, z.B. "2 Wochen".
 >**Hinweis:** Dies ist die Häufigkeit, in der ein Auftrag während der Laufzeit ausgeliefert wird.

1. ***Optional:*** Setze ein Häkchen bei **Vertrag autom. verlängern**, damit er nach Laufzeitende wieder neu beginnt.
 >**Hinweis:** In diesem Fall erscheint das Kästchen **Neue Vertragslaufzeit autom. fertigstellen**. Setze auch hier ein Häkchen.

1. ***Optional:*** Im Feld **Nächste Vertragsbedingungen** kannst Du den Anschlussvertrag auswählen, in den der abgelaufene Vertrag übergehen soll.

### Wechselkonditionen festlegen
Die Wechselkonditionen bestimmen, zu welchem Zeitpunkt vor Vertragsende bzw. Vertragswechsel der Vertragspartner einen Statuswechsel vollziehen darf, wie z.B. den Vertrag kündigen.

1. Gehe zur Registerkarte "Wechselkonditionen" unten auf der Seite und klicke auf ![](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein neues Fenster.
1. Lege eine **Gültigkeitsfrist** und eine **Einheit der Frist** fest, z.B. "1 Monat".
1. Wähle die **Aktion** *Statuswechsel* aus.
1. Wähle den **Vertrags-Status** *Gekündigt* aus.
1. Klicke auf "Bestätigen", um das Fenster zu schließen und die Wechselkonditionen zur Registerkarte hinzuzufügen.

### Nächste Schritte
- [Stelle das Dokument fertig](BelegverarbeitungFertigstellen).

## Beispiel
![](assets/Vertragslaufzeit_definieren.gif)
