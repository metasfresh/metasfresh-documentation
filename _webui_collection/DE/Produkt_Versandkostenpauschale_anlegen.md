---
title: Wie richte ich Versandkostenpauschalen ein?
layout: default
tags:
  - Workflow
  - Verkauf
  - Versand- und Frachtkosten
  - Einrichtung
lang: de
sequence: 20
ref: add_product_shipping_costs
---

## Übersicht
In metasfresh werden Versandkostenpauschalen als Zusatzprodukt gehandhabt, das einem Auftrag als weitere Position hinzugefügt wird und so anschließend fakturiert werden kann. Im metasfresh-Standard ist ein Produkteintrag für die Versandkostenpauschale bereits vorhanden. Ein solches Produkt wird aus technischen Gründen benötigt, um die Versandkosten bei der Fakturierung versandkostenpflichtiger Aufträge auf der Rechnung auszuweisen und kann bei entsprechender Konfiguration auch automatisch bei Fertigstellung eines Auftrages hinzugefügt werden.

Damit das Produkt "Versandkostenpauschale" ordnungsgemäß verwendet werden kann, muss es folgendermaßen konfiguriert sein:

## Schritte

### Produkt "Versandkostenpauschale" anlegen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkte".
1. [Verwende die Filterfunktion](Filterfunktion) und suche nach dem Produkt "Versandkostenpauschale" oder [lege ein neues Produkt](NeuesProdukt) entsprechend den folgenden Vorgaben an.
1. Stelle sicher, dass die folgenden Einstellungen gesetzt sind:
  - **Produktkategorie** ist *Gebinde*.
  - **Artikelart** ist *Frachtkosten*.
  - **Wird Eingekauft** ist *deaktiviert*.
  - **Verkauft** ist *aktiviert*.
  - Registerkarte "Preis" enthält *dieselbe Preisliste*, welche auch im Auftrag Verwendung findet. Ein Preis *kann* hier vergeben werden, muss er aber nicht.

### Lieferweg konfigurieren
Im metasfresh-Standard ist die stan­dard­mä­ßig vorhandene Versandkostenpauschale bereits mit dem Lieferweg *Eigentransport* konfiguriert. Lieferwege für manuell erstellte Versandkostenpauschalen können wie folgt erfasst werden:

1. [Gehe ins Menü](Menu) und öffne das Fenster "Versandkostenpauschale".
1. [Lege einen neuen Eintrag an](Neuer_Datensatz_Fenster_Webui).
1. Benenne den Einstellungseintrag im Feld **Name**.
1. Wähle im Feld **Produkt** die Versandkostenpauschale Deiner Wahl aus.
1. Gehe zur Registerkarte "Lieferweg" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Wähle als **Lieferweg** *Eigentransport* aus.
1. Stelle ein **Gültig ab** Datum ein.
 >**Hinweis:** Liegt das Datum in der *Vergangenheit*, gilt die Lieferwegeinstellung *ab sofort*. Liegt es in der *Zukunft*, gilt sie *erst ab diesem Datum*. metasfresh orientiert sich am zugesagten Termin im Auftrag und verwendet dementsprechend die jeweils gültige Lieferwegeinstellung.

1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und den Lieferweg zur Liste hinzuzufügen.

## Nächste Schritte
- [Erfasse einen versandkostenpflichtigen Auftrag](Auftrag_Versandkosten).
