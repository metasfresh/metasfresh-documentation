---
title: Wie erstelle ich bei Auftragserstellung automatisch eine Stückliste aufgrund eines Angebots?
layout: default
tags:
  - Stammdaten
  - Stückliste
lang: de
sequence: 30
ref: create_bom_upon_so_generation
---

## Übersicht
Hast Du unterschiedliche Produkte, die für die Herstellung eines neuartigen Verkaufsproduktes vorgesehen sind, in einem Angebot zu einer Kompensationsgruppe zusammengefasst und erstellst anschließend daraus einen Auftrag, dann verwandelt metasfresh die Produktgruppierung automatisch in eine verifizierte Stückliste, woraufhin das daraus resultierende neue Produkt sofort und ohne zusätzlichen Mehraufwand für zukünftige Aufträge zur Verfügung steht.

## Voraussetzungen
- [Richte die automatische Stücklistenerstellung bei Auftragserstellung ein](Stueckliste_bei_Auftragserstellung_Einrichtung).

## Schritte

### Angebot erstellen
1. [Erstelle ein Angebot](Angebot_erstellen) mit den gewünschten Produkten. Beachte dabei folgende Vorgehensweise:
1. Füge bei der Auftragszeileneingabe zuerst das Gruppierungsprodukt hinzu (Menge = 1).
 >**Hinweis:** Das Gruppierungsprodukt muss aus technischen Gründen unbedingt als erstes hinzugefügt werden, damit metasfresh weiß, dass es sich bei den folgenden Produkten um eine Angebotsgruppe handelt.

1. Füge daraufhin nacheinander die einzelnen Produkte (Produktionsbestandteile) in der gewünschten Menge hinzu.
1. [Selektiere die Auftragszeilen](AuswahlBelege), die Du zu einer Angebotsgruppe zusammenfassen möchtest.
1. [Starte die Aktion](AktionStarten) "Multigroup lines". Alle selektierten Auftragszeilen werden automatisch mithilfe eines Kombinierungsproduktes, welches als zusätzliche Zeile hinzugefügt wird, zu einer Angebotsgruppe vereint.
 >**Hinweis:** Das Kombinierungsprodukt wird auf den Folgebelegen nicht aufgeführt.

1. [Stelle das Angebot fertig](BelegverarbeitungFertigstellen).

### Angebot in Auftrag umwandeln
1. [Starte die Aktion](AktionStarten) "Auftrag aus Angebot (construction)". Es öffnet sich ein Overlay-Fenster.
1. Wähle die **Belegart** *Standardauftrag* aus.
1. Klicke auf "Start", um das Overlay-Fenster zu schließen und den Auftrag zu erstellen.

### Neues Produkt und Stückliste überprüfen
1. Gehe zur Registerkarte "Auftragsposition" unten auf der Seite des fertiggestellten Auftrages und [zoome](Zoomen_in_Tabellenfeld) in das Feld in der Spalte **Produkt** der Auftragszeile. Es öffnet sich das Fenster des neuen Produktes in einem neuen Tab.
1. [Springe über die verknüpften Belege](SpringezuBelegen) des neuen Produktes zur "Stücklistenkonfiguration" (unter PRODUKTVERWALTUNG in der Sidebar) und öffne dort die dazugehörige, bereits [herausgefilterte](Filterfunktion) Stückliste.

## Beispiel
![](assets/Stueckliste_bei_Auftragserstellung.gif)
