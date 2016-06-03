---
title: Wie definiere ich Preise ?
---


## Übersicht
Um einen Partnerspezifischen Preis für einen Artikel zu definieren benötigst Du mindestens:

1. Ein Preissystem
1. Eine Preisliste
1. Eine Preislistenversion 
1. Einen Preisdatensatz
1. Das Preissystem muss dem Partner zugeordnet sein

![Preise](../images/de_drawing_preissystem_hierachie.png)

## Schritte

1. **Preissystem anlegen**
	1. [Fenster "Preise" öffnen](Howto_DE_Wie_finde_und_öffne_ich_ein_Fenster.md) 
	1. [Neuen Datensatz anlegen](Howto_DE_Wie_lege_ich_einen_neuen_datensatz_an.md)
	1. Feld **Name** ausfüllen
	1. [Speichern](Howto_DE_Wie_lege_ich_einen_neuen_datensatz_an.md)
1. **Preisliste anlegen**
	1. Register "Preisliste" öffnen 
	1. [Neuen Datensatz anlegen](Howto_DE_Wie_lege_ich_einen_neuen_datensatz_an.md) 
	1. Feld **Name** ausfüllen 
	1. Feld **Land**: Das Land muss mit dem Land Liefer- und Rechnungsadresse des Partners übereinstimmen.
	1. Feld **Preise inkl. Steuern**: Steuert ob die Preise inklusive Mehrwertsteuer (Brutto) oder exklusive (netto) zu verstehen sind. metasfresh rechnet dem entsprechend die Steuer entweder aus dem Preis oder auf den Preis.
	1. Feld **Verkaufspreisliste**: Steuert ob diese Preisliste für den Verkauf verwendet werden soll.
	1. [Speichern](Howto_DE_Wie_lege_ich_einen_neuen_datensatz_an.md) 
1. **Preissystem anlegen**
	1. Register "Preislistenversion" öffnen 
	1. [Neuen Datensatz anlegen](Howto_DE_Wie_lege_ich_einen_neuen_datensatz_an.md)
	1. Feld **Name** ausfüllen
	1. Feld **gültig ab** bestimmt ab wann diese Version gültig ist. Das Datum kann in der Vergangenheit liegen falls die Version sofort gelten soll oder auch in der Zukunft falls die Preise erst ab einem bestimmten Datum verwendet werden sollen. metasfresh holt sich anhand des zugesagten Datum in Auftrag oder Bestellung die Preise von der jeweiligen Preislistenversion mit dem passenden gültig ab Datum.
	1. [Speichern](Howto_DE_Wie_lege_ich_einen_neuen_datensatz_an.md)
1. **Preis anlegen**
	1. Register "Produkt-Preis" öffnen 
	1. [Neuen Datensatz anlegen](Howto_DE_Wie_lege_ich_einen_neuen_datensatz_an.md)
	1. Feld **Produkt** ausfüllen
	1. Feld **Steuerkategorie** enthält die jeweilige Mehrwertsteuerkategorie wie z.B. Normal, Reduziert, Steuerfrei enthalten.
	1. Feld **Auszeichnunspreis** dient nur zur Anzeige des Listenpreises auf Belegen
	1. Feld **Standardpreis** ist der Preis der effektiv gilt.
	1. Feld **Limitpreis** darf durch eine manuelle Preisänderung nicht unterschritten werden.
	1. Feld **Maßeinheit** ist die Preiseinheit und nicht zu verwechseln mit der Maßeinheit des Artikels für die Bestandsführung.
	1. [Speichern](Howto_DE_Wie_lege_ich_einen_neuen_datensatz_an.md)
1. **Preissystem dem Partner zuordnen**
	1. [Fenster "Geschäftspartner" öffnen](Howto_DE_Wie_finde_und_öffne_ich_ein_Fenster.md) 
	* **Fall Kunde**
		1. Register "Kunde" öffnen
		1. Feld **Preissystem**
			1. rechte Maustaste auf das Feld klicken und "aktualisieren" klicken
			1. das zuvor erstellte Preissystem auswählen
	* **Fall Lieferant**
		1. Register "Lieferant" öffnen
		1. Feld **Preissystem**
			1. rechte Maustaste auf das Feld klicken und "aktualisieren" klicken
			1. das zuvor erstellte Preissystem auswählen
		
## Häufige Fragen
**Frage:** Warum taucht das von mir erstellte Preissystem nicht im Fenster Geschäftsparnter auf?

**Antwort**: Taucht das Preissystem nicht auf bitte das Feld **Verkaufspreisliste** in der Preisliste überprüfen.
Außerdem überprüfe ob Du das Feld mit **rechte Maustaste => aktualisieren** neu geladen hast.
