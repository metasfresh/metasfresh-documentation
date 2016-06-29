---
title: Wie ordne ich die Kunden und Lieferantendaten aus dem Altsystem am besten zu?
layout: default
tags:
  - Datenimport

---

Das Datenmodell von metasfresh ist spezifisch und realitätsnah wodurch bei einer Migration von Daten aus einem Altsystem ein paar Dinge berücksichtigt werden sollten.
Im Folgenden ein paar Empfehlungen und Tips was zu beachten ist:

## Partnerdubletten 
Ein Partner kann in metasfresh zugleich Kunde, Lieferant, abweichender Lieferempfänger sein

Tip: Gehe Deine Bestandsdaten durch und schaue ob Du Partner zusammenfassen kannst

Beispiel Altdaten

Typ|Nummer|Name
---|---|---
Debitor|D123|metasfresh AG
Kreditor|K321|metasfresh AG

Beispiel metasfresh

Nummer|Name|ist Kunde|ist Lieferant
---|---|---
001|metasfresh|Ja|Ja


			
## Unterscheidung Partner und Adresse
Die Belegadresse setzt sich in metasfresh aus dem Partnernamen UND der jeweiligen Liefer- oder Rechnungsadresse zusammen

Tip: Überprüfe Deine Bestandsdaten auf Adressen die Firmennamen enthalten weil diese dann in metasfresh als eigener Partner angelegt werden können.

			
## Partnernummer
Du kannst die Nummernvergabe in metasfresh flexibel einstellen.

Tip: Überlege Dir welche Nummern Deine importierten Partner in metasfresh haben sollen.

Beispiele: 12345,G123,P1234
		
# Nummern	
Excel konvertiert Zahlen wie z.B. "0228123456" automatisch in eine Nummer wodurch die 0 fehlt. Beispiel. "228123456"

Tip: Um das zu verhindern gehe einfach hin und formatiere die Spalte im Textformat.
	
# Kontakt
metasfresh speichert die Daten rund um einen Kontakt eines Partners in der Detaillierung Titel, Anrede, Vorname, Nachname

Tip: Wenn Dein Altsystem den Kontaktnamen als ein Feld speichert, trenne die Werte nach Leerzeichen:

Altdaten|Anrede|Titel|Vorname|Nachname
---|---|---|---
"Herr Dr. Herbert Müller"|Herr|Dr.|Herbert|Müller

