---
---
# Wie lege ich ein neues Produkt an ?

1. [Fenster "Produkt" öffnen](Wie_finde_und_öffne_ich_ein_Fenster.md)
1. [Neuen Datensatz anlegen](Wie_lege_ich_einen_neuen_datensatz_an.md)
1. Feld **Name** ausfüllen

	*Hinweis:* Die **Artikelnummer** wird automatisch anhand der konfigurierbaren Nummernfolge beim Speichern gefüllt.

1. Feld **Artikelkategorie** auswählen

	*Hinweis:* Die **Artikelkategorie** kann verwendet werden um die Rabattierung oder Kontierung eines Artikels zu steuern.

1. Feld **Maßeinheit** bestimmt in welcher Einheit der Artikel bestandsgeführt wird

	*Hinweis (!):*  Sobald der erste Beleg existiert in dem der Artikel verwendet wird kann die Maßeinheit nicht mehr geändert werden.

	*Hinweis:* Von der Maßeinheit losgelöst kann eine Preiseinheit definiert werden in der ein Artikel bepreist und abgerechnet wird.

1. Feld Artikelart bestimmt um welche Art Artikel es sich handelt.

	Option | Effekt
	------------ | -------------	
	Artikel | materieller Artikel. z.B. Stückgut, Verpackung, etc. (Normalfall)
	Dienstleistung | immaterieller Artikel. z.B. Serviceleistung
	Erfolgskonto | Steuert Kontierung
	Ressource | Artikel der zeitlich nur einmal belegt werden kann. z.B. Maschine, Mitarbeiter, etc.

	*Hinweis (!):* Sobald der erste Beleg existiert in dem der Artikel verwendet wird kann die Maßeinheit nicht mehr geändert werden.

1. Feld **Lagerhaltig** bestimmt ob der Artikel (insofern Artikelart auf Option "Artikel" steht) bestandsgeführt wird
1. Feld **eingekauft** bestimmt ob der Artikel im Einkauf zu Verfügung steht
1. Feld **verkauft** bestimmt ob der Artikel im Einkauf zu Verfügung steht
1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an.md)
1. Register "CU-TU Zuordnung" öffnen
	* **Artikel ohne Gebinde**
		1. [Neuen Datensatz anlegen](Wie_lege_ich_einen_neuen_datensatz_an.md)
		1. **Packvorschrift** "VirtualPI" auswählen
		1. **unbestimmte Kapazität** anhaken
		1. **gültig ab** Datum eintragen ab wann die Packvorschrift aktiviert sein soll. Üblicher Wert wäre ein Datum kleiner als heute.
		1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an.md)
	* **Artikel im Gebinde** - Artikel soll mittels Packvorschrift als Gebinde verwaltet werden
		1. [Neuen Datensatz anlegen](Wie_lege_ich_einen_neuen_datensatz_an.md)
		1. Passende **Packvorschrift** auswählen
		1. **Menge** eingeben wie oft der Artikel (CU) in die Packung (TU) passt
		1. **gültig ab** Datum eintragen ab wann die Packvorschrift aktiviert sein soll. Üblicher Wert wäre ein Datum kleiner als heute.
		1. Optional **Geschäftspartner** angeben damit diese Packvorschrift nur für diesen einen Partner gilt.
		1. [Speichern](Wie_lege_ich_einen_neuen_datensatz_an.md)

*Hinweis:* Es können für einen Artikel auch verschiedene Packvorschriften erstellt werden!

## Wie geht es weiter?
1. [Wie definiere ich Preise?](Wie_definiere_ich_Preise.md)
1. Wie konfiguriere ich einen Artikel für den Einkauf?
1. Wie definiere ich die Steuerkategorie für einen Artikel?
1. Wie stelle ich eine Übersetzung für einen Artikel ein?
1. Wie definiere ich Umrechnungen zwischen Maßeinheiten?
1. [Wie konfiguriere ich ein Produkt für die Produktion?](Wie_konfiguriere_ich_ein_Produkt_für_die_Produktion.md)
