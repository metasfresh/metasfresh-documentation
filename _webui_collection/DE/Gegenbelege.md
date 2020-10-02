---
title: Gegenbelege – Übersicht
layout: default
tags:
  - Gegenbelege  
lang: de
sequence: 10
ref: counter_documents
---

## Überblick
metasfresh ermöglicht Dir nicht nur die Verwaltung mehrerer juristischer Personen in einem System mittels [Organisationen](Org_Neue_Organisation_anlegen), sondern auch die automatische Erzeugung der jeweiligen Gegenbelege, wenn diese Organisationen miteinander Geschäfte abwickeln.

Gibt eine Organisation A bei einer Organisation B beispielsweise eine [Bestellung](Bestellung_erfassen) auf, so wird bei der Organisation B ([Lieferant](Neuer_Geschaeftspartner_Lieferant)) automatisch ein [Auftrag](Auftrag_erfassen) der Organisation A ([Kunde](Neuer_Geschaeftspartner_Kunde)) angelegt und vice versa.

<kbd><img src="assets/de_Gegenbelege.png" alt="Abb.: Gegenbelege"></kbd>

Damit nicht beide Organisation identische Produkte und Packmittel führen müssen, können die jeweils zueinander passenden Stammdaten miteinander verknüpft werden.

<kbd><img src="assets/de_Gegenbelege_Stammdaten.png" alt="Abb.: Gegenbelege Stammdaten"></kbd>

## Weitere Seiten zum Thema Gegenbelege

{% include tag_linklist.html lang=page.lang pages=site.webui_collection tag="Gegenbelege" suppress_secondary_pages=""%}

## Beispielablauf
1. Ein Benutzer der Org. A stellt einen Auftrag an Org. B fertig.
2. Automatisch wird in Org. B eine Bestellung erzeugt mit Org. A als Lieferant sowie den jeweils zugehörigen Produkten und Packvorschriften.
3. Die Bestellung bei der Org. B bleibt vorerst noch offen zwecks Sichtprüfung.

## Kontrolle
1. Einmal pro Tag versendet metasfresh eine Liste der erstellten Gegenbelege.
1. Sollte einmal ein Gegenbeleg nicht erstellt werden können, weil z.B. verknüpfte Stammdaten fehlen, erhältst Du eine entsprechende Fehlermeldung.
1. Gegenbelege, die nicht erstellt werden konnten, werden unter "[Fehlender/Unvollständiger Gegenbeleg](Menu)" aufgelistet. Um dieses Fenster zu sehen, musst Du Dich mit der [Benutzerrolle](NeueBenutzerrolle) "Admin" [bei metasfresh anmelden](Anmeldung).
