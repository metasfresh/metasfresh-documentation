---
title: Welche Felder kann ich importieren ?
layout: default
tags:
  - Datenimport
lang: de
---


Achte darauf, dass manche Felder Pflicht sind - also auf jeden Fall in der Importdatei enthalten sein müssen!


## Import von Geschäftspartnern

Pflicht|Name|Beispiel|Inhalt
---|---|---|----
X|Suchschlüssel | 12345| Partnernummer, eindeutig 
X|Firmenname | metasfresh AG | Partnername 
X|Straße und Nr | Am Nossbacher Weg 2| Adresszeile 1 
X|Ort |Bonn |
X|ISO Ländercode | DE | Zweistelliger Code. Mögliche Werte kannst Du dem Fenster "Länder" entnehmen
|Gruppe| A-Kunden| Lege die Geschäftspartnergruppe vorher in metasfresh an und verwende hier den Namen
|Kontakt | Herbert Müller | Wenn Du keinen Kontakt in den Quelldaten vorliege hast, trage einfach "zentrale" ein, damit weitere Daten wie Telefonnummer in metasfresh gespeichert werden können
| istKunde | "Y" | Ist Dein Partner auch ein Kunde, trage hier "Y" ohne "" ein. Andernfalls bitte "N" eintragen.
| istLieferant |"Y"| Ist Dein Partner auch ein Lieferant, trage hier "Y" ohne "" ein. Andernfalls bitte "N" eintragen.


## Import von Produkten

Pflicht|Name|Beispiel|Inhalt
---|---|---|----
X|Artikelnummer | 12345 | Zahl oder Text
X|Name |Convenience Salat| Text, Maximal 40 Zeichen
X|Produktart | I | I = Artikel
X|Produktkategorie-Schlüssel |Standard | Suchschlüssel der Produktkategorie. **Achtung:** Nicht der Name!
X|Kodierung der Mengeneinheit |PCE | PCE = Stück. Mögliche Werte kannst Du dem Fenster "Maßeinheit" entnehmen
|MwSt-Kategorie||Normaler Steuersatz 19% (Deutschland)
|Version Preisliste||Testpreise Kunden (Deutschland)
|Standardpreis||123.20