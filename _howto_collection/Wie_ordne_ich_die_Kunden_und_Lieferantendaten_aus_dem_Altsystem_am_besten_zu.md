---
title: Wie ordne ich die Kunden und Lieferantendaten aus dem Altsystem am besten zu?
layout: default
tags:
  - Datenimport

---

Das Datenmodell von metasfresh ist spezifisch und realitätsnah wodurch bei einer Migration von Daten aus einem Altsystem ein paar Dinge berücksichtigt werden sollten.
Im Folgenden ein paar Empfehlungen und Tips was zu beachten ist:

## Partnerdubletten 
Ein Partner kann in metasfresh zugleich Kunde, Lieferant, abweichender Lieferempfänger sein.
Zudem kann ein Partner beliebige Adressen und Kontakte (Ansprechpartner) haben.

Tip: Gehe Deine Bestandsdaten durch und schaue ob Du Partner zusammenfassen kannst

### Beispiel Debitor/Kreditor wird zu Partner

**Altdaten**

Typ|Nummer|Name
---|---|---
Debitor|D123|metasfresh AG
Kreditor|K321|metasfresh AG

**metasfresh**

Nummer|Name|ist Kunde|ist Lieferant
---|---|---
001|metasfresh|Ja|Ja


### Beispiel Mehrere Partner werden zu einem mit mehreren Adressen

**Altdaten**

Nummer|Name|Adresse
---|---|---
101|metasfresh AG| Adresse A
202|metasfresh AG (Lieferung) | Adresse B
303|metasfresh AG (Rechnung) | Adresse C

**metasfresh**

Nummer|Name|Adresse|Adressart
---|---|---
404|metasfresh AG| Adresse A | Liefer- und Rechnungsstandard
404|metasfresh AG| Adresse B | Lieferadresse
404|metasfresh AG| Adresse C | Rechnungsadresse


			
## Unterscheidung Partner und Adresse
Die Belegadresse setzt sich in metasfresh aus dem Partnernamen UND der jeweiligen Liefer- oder Rechnungsadresse zusammen

Tip: Überprüfe Deine Bestandsdaten auf Adressen die Firmennamen enthalten weil diese dann in metasfresh als eigener Partner angelegt werden können.

			
## Partnernummer
Du kannst die Nummernvergabe in metasfresh flexibel einstellen.

Tip: Überlege Dir welche Nummern Deine importierten Partner in metasfresh haben sollen.

Beispiele: 12345,G123,P1234
		
# Formatierung von Nummern
Excel konvertiert Zahlen wie z.B. "0228123456" automatisch in eine Nummer wodurch die 0 fehlt. Beispiel. "228123456"

Tip: Um das zu verhindern gehe einfach hin und formatiere die Spalte im Textformat.
	
# Kontaktdaten
metasfresh speichert die Daten rund um einen Kontakt eines Partners in der Detaillierung Titel, Anrede, Vorname, Nachname

Tip: Wenn Dein Altsystem den Kontaktnamen als ein Feld speichert, trenne die Werte nach Leerzeichen:

Altdaten|Anrede|Titel|Vorname|Nachname
---|---|---|---
"Herr Dr. Herbert Müller"|Herr|Dr.|Herbert|Müller

## Müssen alle Daten mit?
Eine Migration ist auch immer die Chance alte und ungenutzte Daten loszuwerden.

Tip: Schaue ob Du eventuell nur einen Teil der Partnerdaten mitnehmen möchtest. Eine nachträgliche Migration weiterer Daten ist kein Problem.