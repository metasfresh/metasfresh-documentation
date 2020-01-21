---
title: Wie richte ich einen Geokodierungsdienst für die Umkreissuche ein?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Benutzung
  - Umkreissuche
  - Einrichtung
lang: de
sequence: 10
ref: setup_geocoding_service
---

## Überblick
Um die [Umkreissuche in metasfresh](Umkreissuche_Geocoding) verwenden zu können, muss zuerst ein Geokodierungsdienst eingerichtet werden, der die visuell lesbaren [Adressen](Adresse_erfassen_Tab) (bestehend aus Straße, Hausnummer, Ort, PLZ, Land) in geografische Koordinaten umwandelt und auf einer Landkarte darstellt.

Nach Einrichtung der Geokodierung empfiehlt es sich, durch [Aktualisierung der Georeferenzdaten](Geokodierung_aktualisieren) sicherzustellen, dass alle bisher erfassten bzw. importierten Geschäftspartnerstandorte bei der Umkreissuche berücksichtigt werden.

metasfresh verfügt derzeit über Schnittstellen für die folgenden Geokodierungsdienste:
- <a href="#google-maps" title="Google Maps einrichten">Google Maps</a> <sup>(<em>Kartenansicht verfügbar</em>)</sup>
- <a href="#open-street-maps" title="Open Street Maps einrichten">Open Street Maps (OSM)</a> <sup>(<em><strong>keine</strong> Kartenansicht verfügbar</em>)</sup>

| **Hinweis:** |
| :--- |
| Es kann zu jedem Zeitpunkt ***nur ein*** Geokodierungsdienst aktiv sein! |

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Geocoding Konfiguration".
1. [Erstelle einen neuen Eintrag](Neuer_Datensatz_Fenster_Webui).
1. Wähle im Feld **Geocoding Dienst Provider** den gewünschten Geokodierungsdienst aus.

### <a name="google-maps">Google Maps einrichten</a>
1. <a href="https://cloud.google.com/maps-platform/pricing/" title="API-Zugang über die Google Maps Plattform" target="blank">Folge dieser Anleitung von Google</a>, um Dir Zugang zur Anwendungsschnittstelle zu verschaffen und einen persönlichen API-Schlüssel zu generieren.
1. Trage in das Feld **Google Maps - API-Schlüssel** den API-Schlüssel ein, den Du von Google für die Einrichtung erhalten hast. Üblicherweise beginnt dieser mit `AIza...`.

### <a name="open-street-maps">Open Street Maps einrichten</a>
Es müssen keine Änderungen an den Standardeinstellungen vorgenommen werden.

---

| **Wichtiger Hinweis:** |
| :--- |
| Wenn Du über eine große Anzahl von Geschäftspartnereinträgen verfügst und die Umkreissuche besonders häufig verwendest, empfiehlt es sich, die **Cache-Kapazität** von 200 auf etwa 500 zu erhöhen. Dadurch können Deine bisher eingetippten Suchbegriffe besser zwischengespeichert und die Geschwindigkeit bei abwechselnder Suche nach mehreren verschiedenen Orten beibehalten werden. |

## Nächste Schritte
1. [Aktualisiere die Georeferenzdaten, um sicherzustellen, dass alle Geschäftspartnerstandorte bei der Umkreissuche berücksichtigt werden](Geokodierung_aktualisieren).
1. [Verwende die Umkreissuche, um die Ergebnisse beim Filtern von Einträgen auf einen bestimmten geografischen Bereich einzuschränken](Umkreissuche_Geocoding).
