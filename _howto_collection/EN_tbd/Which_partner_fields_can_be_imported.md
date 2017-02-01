---
title: Which partner fields can be imported?
layout: default
tags:
lang: en
---

Please note that some fields are mandatory and therefore need to be included inside the import file in any case!

Achte darauf, dass manche Felder Pflicht sind und somit auf jeden Fall in der Importdatei enthalten sein müssen!

## Importing business partners

Mandatory|Name|Example|Content
---|---|---|----
X|Search string | 12345| Partner number, unique 
X|Company name | metasfresh AG | Partner's name
X|Street and House Number | Am Nossbacher Weg 2| Address row 1 
X|City |Bonn |
X|ISO Country Code | DE | Code made up of two characters. Possible values can be found in the window "Countries"
|Group| A-Customers| Define the business partner's group beforehand in metasfresh and use the name of the group here.
|Salutation|1000000|ID of the salutation. 
|First Name|Herbert
|Nachname | Müller | Wenn Du keinen Kontakt in den Quelldaten vorliege hast, trage einfach "zentrale" ein, damit weitere Daten wie Telefonnummer in metasfresh gespeichert werden können
|phone|0228 26688840
|fax|0228 26688840
| istKunde | "Y" | In case the business partner is also a customer please insert "Y" without the quotes. If this is not the case, please use "N" here.
| istLieferant |"Y"| In case the business partner is also a vendor please insert "Y" without the quotes. If this is not the case, please use "N" here.
|Salutation|1000000|Add the salutation beforehand in the window Salutation and use the corresponding ID here. 



