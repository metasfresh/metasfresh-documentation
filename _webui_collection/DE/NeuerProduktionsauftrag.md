---
title: Wie lege ich einen Produktionsauftrag an?
layout: default
tags:
  - Workflow
  - Produktion
lang: de
sequence: 10
ref: newmanufacturingorder
---

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produktionsaufträge".
1. [Lege einen neuen Produktionsauftrag an](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **Produkt** einen Teil des Namens oder der Nummer des [Produktes](NeuesProdukt) ein, das hergestellt werden soll (Fertigungsprodukt), und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Die mit dem Fertigungsprodukt verknüpfte [**Stücklistenversion**](Stuecklistenversion_erstellen) und damit die jeweilige [Stückliste](Stueckliste_erstellen) wird automatisch übernommen.
1. Wähle im Feld **Ressource** die herstellende Produktionsstätte/-linie aus.
1. Stelle im Feld **Workflow** (*Arbeitsablauf*) die durchzuführenden Arbeitsschritte ein.
1. Gib die **Menge** des herzustellenden Produktes ein.
1. Wähle die **Maßeinheit** des herzustellenden Produktes aus.
 >**Hinweis:** Bei Abweichungen der hier ausgewählten Maßeinheit mit der des herzustellenden Produktes (Fertigungsprodukt) muss eine [Maßeinheitenumrechnung](Masseinheiten_umrechnen) definiert werden.

1. Wähle die **Belegart** *Produktionsauftrag* aus.
1. Stelle im Feld **Zugesagter Termin** den Zeitpunkt der Fertigstellung des Produktes ein.
1. Wähle ein **Lager** aus, in dem das Produkt nach Herstellung in Empfang genommen wird.
1. [Stelle den Produktionsauftrag fertig](BelegverarbeitungFertigstellen).
 >**Hinweis:** Nun wird die [Aktion](AktionStarten#aktionsmenue) "Produzieren" im Menü verfügbar und der Produktionsauftrag erhält den **Planstatus** *Geplant* (in der [Listenansicht](Ansichten#listenansicht)).

| **Hinweis:** |
| :--- |
| Sobald alle Pflichtfelder ausgefüllt sind, werden die [Bestandteile](Stuecklistenbestandteile_erfassen) aus der eingestellten Stückliste in den Produktionsauftrag übernommen und unter der Registerkarte "Komponenten" unten auf der Seite aufgeführt, wo sie anschließend editiert sowie weitere Bestandteile einzeln hinzugefügt werden können. |

## Nächste Schritte
- [Stelle das Produkt her](ProduktionFertigstellung).

## Beispiel
<kbd><img src="assets/NeuerProduktionsauftrag.gif" alt="GIF: Produktionsauftrag anlegen"></kbd>
