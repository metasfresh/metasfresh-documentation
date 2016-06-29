---
title: Wie ordne ich die Kunden und Lieferantendaten aus dem Altsystem am besten zu?
layout: default
tags:
  - Konzepte

---

Das Datenmodell von metasfresh ist spezifisch und realitätsnah wodurch bei einer Migration von Daten aus einem Altsystem ein paar Dinge berücksichtigt werden sollten.
Im Folgenden ein paar Empfehlungen und Tips was zu beachten ist:

## Partnerdubletten 
Ein Partner kann in metasfresh zugleich Kunde, Lieferant, abweichender Lieferempfänger sein

Tip: Gehe Deine Bestandsdaten durch und schaue ob Du Partner zusammenfassen kannst
			
## Unterscheidung Partner und Adresse
Die Belegadresse setzt sich in metasfresh aus dem Partnernamen UND der jeweiligen Liefer- oder Rechnungsadresse zusammen

Tip: Überprüfe Deine Bestandsdaten auf Adressen die Firmennamen enthalten weil diese dann in metasfresh als eigener Partner angelegt werden können.
			
## Partnernummer
Du kannst die Nummernvergabe in metasfresh flexibel einstellen.

Tip: Überlege Dir welche Nummern Deine importierten Partner in metasfresh haben sollen.
		
# Nummern	
Excel konvertiert Zahlen wie z.B. "0228123456" automatisch in eine Nummer wodurch die 0 fehlt. Beispiel. "228123456"

Tip: Um das zu verhindern gehe einfach hin und formatiere die Spalte im Textformat.
	
# Kontakt
metasfresh speichert die Daten rund um einen Kontakt eines Partners in der Detaillierung Titel, Anrede, Vorname, Nachname

Tip: Wenn Dein Altsystem die Kontaktdaten als "Herr Dr. Herbert Müller" ausgibt, trenne die Werte mittels Leerzeichen in Anrede="Herr", titel="Dr.", Vorname="Herbert", Nachname ="Müller"



