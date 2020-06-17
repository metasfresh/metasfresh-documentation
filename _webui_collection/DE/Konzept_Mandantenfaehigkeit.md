---
title: Konzept der Mandantenfähigkeit (Multitenancy)
layout: default
tags:
  - Anfängertipps für metasfresh
  - Grundlagen und Konzepte
lang: de
sequence: 10
ref: multitenancy_concept
---

## Überblick
metasfresh unterstützt eine unbegrenzte Anzahl von Mandanten. Die Daten dieser Mandanten werden logisch voneinander getrennt gehalten und sind daher immer nur für den jeweiligen Mandanten sichtbar.

| Mandant | Umfang |
| :---: | :--- |
| * | Beinhaltet alle Systemobjekte wie Fenster, Register, Felder, Berichte, Prozesse, Einstellungen. |
| metasfresh AG | Ist für die Benutzung vorkonfiguriert und enthält einige Beispieldaten. |
| Weitere Mandanten | Grundsätzlich kannst Du so viele Mandanten hinzufügen, wie Du möchtest.<br>**Hinweis:** Das Hinzufügen neuer Mandanten erfordert etwas Konfigurationsaufwand. Wir empfehlen daher den Standardmandanten "metasfresh AG" weiterzuverwenden. |

<br>

<kbd><img src="assets/Mandantenfaehigkeit_Multitenancy_1200x675px.png" alt="Abb.: Mandantenfähigkeit (Multitenancy) in metasfresh ERP"></kbd>
