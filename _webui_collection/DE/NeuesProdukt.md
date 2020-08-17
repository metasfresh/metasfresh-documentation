---
title: Wie lege ich ein neues Produkt an?
layout: default
tags:
  - Stammdaten
  - Produkt
lang: de
sequence: 10
ref: newproduct
---

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkte".
1. [Lege ein neues Produkt an](Neuer_Datensatz_Fenster_Webui).
1. Benenne das Produkt im Feld **Name**.
 >**Hinweis:** Dieser Name erscheint auf den Belegen (z.B. Auftragsbestätigungen, Bestellbestätigungen, Rechnungen usw.).

1. Wähle eine [**Produktkategorie**](NeueProduktkategorie) aus.
 >**Hinweis:** Die Produktkategorie kann verwendet werden, um die Rabattierung, Kontierung und den Merkmalsatz eines Artikels zu steuern.

1. Wähle eine **Artikelart** aus.
1. Wähle eine **Maßeinheit** für den Artikel aus.
 >**Hinweis:** Dies ist die Maßeinheit für die *Bestandsführung* und ***nicht zu verwechseln*** mit der Verkaufsmengeneinheit, die bei der [Preisvergabe](ProduktPreis) festgelegt wird!

1. ***Optional:*** Stelle unten rechts im Feld **Sektion** die gewünschte [Organisation](Org_Neue_Organisation_anlegen) ein. Gib dazu einen Teil des Organisationsnamens ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.

## Nächste Schritte
- [Hinterlege Einkaufs- und Verkaufspreise für das Produkt](ProduktPreis).
- [Weise dem Produkt eine Packvorschrift zu](CU-TU_Zuordnung).
- [Konfiguriere das Produkt für die Produktion](Produktplandaten).

## Weitere Informationen
- Das Feld **Maßeinheit** bestimmt, in welcher Einheit der Artikel im Bestand geführt wird (Bestandsmengeneinheit).
 >**Hinweis 1:** Sobald der erste Beleg existiert, in dem dieser Artikel verwendet wird, kann die Bestandsmengeneinheit nicht mehr ohne Weiteres geändert werden.<br><br>
 >**Hinweis 2:** Eine abweichende Verkaufsmengeneinheit kann unter der Registerkarte "Preis" losgelöst von der Bestandsmengeneinheit definiert werden. In diesem Fall muss eine [Maßeinheitenumrechnung](Masseinheiten_umrechnen) angelegt werden.

- Das Feld **Artikelart** bestimmt, um welche Art von Artikel es sich handelt.

  | Option | Bedeutung |
  | :--- | :--- |
  | Artikel | Materieller Artikel, z.B. Stückgut, Verpackung usw. (Standard) |
  | Dienstleistung | Immaterieller Artikel, z.B. Serviceleistung |
  | Erfolgskonto | Steuert Kontierung |
  | Ressource | Artikel, der zeitlich nur einmal belegt werden kann, z.B. eine Maschine |

- Das Kontrollkästchen **Lagerhaltig** zeigt an, ob der Artikel (sofern die Artikelart auf der Option "Artikel" steht) im Bestand geführt wird.
- Das Kontrollkästchen **Eingekauft** zeigt an, ob der Artikel im Einkauf zur Verfügung steht.
- Das Kontrollkästchen **Verkauft** zeigt an, ob der Artikel im Verkauf zur Verfügung steht.

## Beispiel
<kbd><img src="assets/neuesprodukt.gif" alt="GIF: Neues Produkt anlegen"></kbd>
