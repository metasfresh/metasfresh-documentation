---
title: Wie lege ich ein Dienstleistungsprodukt an?
layout: default
tags:
  - Stammdaten
  - Produkt
lang: de
sequence: 60
ref: add_service_product
---

## Überblick
In metasfresh dient ein Dienstleistungsprodukt zur Erfassung immaterieller Serviceleistungen, die nicht im physischen Bestand geführt werden, wie z.B. Arbeitsaufwand (Lohnkosten), Reparaturpauschalen, Aufwendungen usw., und kann im Rahmen von <a href="Produktionsauftrag_Aufwand_erfassen#dienstleistungsaufwand" title="Arbeitsaufwände für Reparaturaufträge erfassen">Produktions-/Reparaturaufträgen</a> zum Verkauf angeboten werden. In einem solchen Fall verhält es sich ähnlich dem [Gruppierungsprodukt](Gruppierungsprodukt_anlegen), insofern als es bei der Angebots- bzw. Auftragserstellung dazu dient, alle Aufwände aus dem jeweiligen Reparaturauftrag zu einer [Kompensationsgruppe](Kompensationsgruppen_manuell_erstellen) zusammenzufassen, um dann bei Bedarf [Auftragszeilengruppenrabatte](Auftragszeilengruppenrabatt) darauf vergeben zu können.

Darüber hinaus kann das Dienstleistungsprodukt aber auch beim [Komponentengenerator](Komponentengenerator_Einrichtung) zur Anwendung kommen, wo es als Service-Komponente zur Generierung individueller [Merkmale](Merkmal_Produkt_neu_anlegen) dient, wie z.B. eigener Seriennummern oder werkseitiger Passwörter.

In Bezug auf seine Erfassung wird ein Dienstleistungsprodukt grundsätzlich wie jedes andere [Standardprodukt](NeuesProdukt) auch angelegt.

## Schritte
Folge dieser [Anleitung zur Erfassung eines Produktes](NeuesProdukt) unter Berücksichtigung der folgenden anwendungsspezifischen Konfiguration:
1. Trage in das Feld **Name** einen sinnvollen Namen ein, z.B. "Reparaturpauschale" oder "Seriennummer".
1. Wähle eine geeignete [**Produktkategorie**](NeueProduktkategorie) aus, z.B. *Dienstleistungsprodukt* oder *Artikelkomponente*.
1. Wähle die **Produktart** *Dienstleistung* aus.
 >**Hinweis:** Das Kontrollkästchen **lagerhaltig** wird automatisch ausgeblendet, da es sich bei dieser Art von Produkten um immaterielle Artikel handelt, die nicht im Bestand geführt werden.

1. Wähle eine geeignete **Maßeinheit** aus, z.B. *Stück* oder Arbeitszeiteinheiten wie *Stunde,* *Tag* usw.
1. Deaktiviere die Kontrollkästchen für **Wird provisioniert** und **Wird eingekauft**.

### Für entgeltliche Serviceleistungen (Reparaturaufträge)
- [Füge das Produkt einer Preisliste hinzu](ProduktPreis).

### Für Service-Artikel (Komponentengenerator)
- Entferne zusätzlich das Häkchen bei **Verkauft**.

## Nächste Schritte (optional)
- <a href="Produktionsauftrag_Aufwand_erfassen#dienstleistungsaufwand" title="Arbeitsaufwände für Reparaturaufträge erfassen">Verwende das Dienstleistungsprodukt zur Aufwandserfassung von Serviceleistungen bei Reparaturaufträgen</a>.
- [Verwende das Dienstleistungsprodukt als Service-Artikel für den Komponentengenerator](Komponentengenerator_Einrichtung).
