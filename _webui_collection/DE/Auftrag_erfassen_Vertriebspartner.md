---
title: Wie erfasse ich einen provisionsabhängigen Auftrag?
layout: default
tags:
  - Workflow
  - Verkauf
  - Vertriebspartner
lang: de
sequence: 30
ref: salesorder_recording_sales_partner
---

## Voraussetzungen
1. [Erfasse einen Vertriebspartner](Vertriebspartner_anlegen) und [erzeuge einen Provisionsvertrag für ihn](Provisionsvertrag_erzeugen).
1. [Ordne den Vertriebspartner einem oder mehreren Kunden zu](Vertriebspartner_Kunden_zuordnen).
1. [Weise den Provisionspunkten einen Preis zu](Provisionspunkte_Preis).

## Schritte
Folge dieser [Anleitung zur Erfassung eines Auftrages](Auftrag_erfassen) unter Berücksichtigung der folgenden Einstellungen:
- Gib den **Vertriebspartnercode** an.
- Gib in das Feld **Zugeordneter Vertriebspartner** einen Teil des Namens oder der Nummer des provisionsberechtigten Vertriebspartners ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
 >**Hinweis:** Wird eines der beiden Felder korrekt ausgefüllt, so wird das jeweils andere automatisch ergänzt.

### Provisionsvorgang einsehen
Nach Fertigstellung des Auftrages wird ein Eintrag unter dem Menüpunkt "[Provisionsvorgang](Menu)" angelegt, zu dem Du auch ***direkt*** über die [verknüpften Belege](SpringezuBelegen) des Auftrages springen kannst (unter VERTRIEB in der Sidebar). Darin erhältst Du eine Übersicht des Provisionsvorganges samt Abrechnungsstatus und Höhe der Basispunktzahl. Von hier aus gelangst Du über die Sidebar ebenfalls schnell weiter zum **Buchauszug zur Provision**.

### Buchauszug zur Provision (und Abrechnung)
Über die [verknüpften Belege](SpringezuBelegen) des Provisionsvorganges kannst Du ***direkt*** zum Buchauszug der Provision springen (Menüpunkt "[Provision Buchauszug](Menu)" unter VERTRIEB in der Sidebar). Darin erhältst Du eine Übersicht der ermittelten Punktzahl und unter der Registerkarte "Log" unten auf der Seite findest Du alle Details zum Abrechnungsstatus der Provision. Von hier aus gelangst Du über die Sidebar ebenfalls schnell weiter zur **Rechnungsdisposition**, von wo aus Du die [Eingangsrechnung (Kreditorenrechnung) zur Provision erstellen](Provisionsabrechnung_erstellen) kannst.

| **Hinweis:** |
| :--- |
| Die Provisionsabrechnung kann erst nach Auslieferung des Auftrages erstellt werden, sofern in den [Vertragsbedingungen für Provisionsverträge](Vertragsbedingungen_Provision_definieren) als Zeitpunkt für die Rechnungsstellung *nach Lieferung* eingestellt wurde. |

## Nächste Schritte
1. [Erstelle einen Lieferschein](Zu_Auftrag_Lieferschein_erstellen) zu dem Auftrag mit Vertriebspartner.
1. [Erstelle die Provisionsabrechnung](Provisionsabrechnung_erstellen).
1. [Erstelle eine Rechnung](Zu_Auftrag_Rechnung_erstellen) zu dem Auftrag mit Vertriebspartner.
 >**Hinweis:** Die Anzeige zu den fakturierten (Basis)punktzahlen unter "[Provisionsvorgang](Menu)" bzw. "[Provision Buchauszug](Menu)" wird erst nach Rechnungsstellung aktualisiert. Unabhängig davon kann eine Provisionsabrechnung jedoch schon vorher geschehen.
