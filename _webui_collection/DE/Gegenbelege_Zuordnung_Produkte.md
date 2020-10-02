---
title: Wie ordne ich zwei Produkte einander zu zwecks Gegenbelegerstellung?
layout: default
tags:
  - Gegenbelege  
lang: de
sequence: 20
ref: counter_documents_product_allocation
---

## Voraussetzungen
1. [Richte eine neue Organisation ein](Org_Neue_Organisation_anlegen).
1. [Lege Produkte für diese Organisation an](NeuesProdukt), die anschließend mit den Produkten einer anderen Organisation verknüpft werden können.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Produkte".
1. Öffne den Eintrag eines bestehenden Produktes bzw. [lege ein neues an](NeuesProdukt), für das eine Zuordnung erstellt werden soll.
1. [Starte die Aktion](AktionStarten#aktionsmenue) "Produkt Zuordnung für Gegenbelege erstellen". Es öffnet sich ein Overlay-Fenster.
1. Wähle im Feld **AD_Org_Target_ID** die Zielorganisation aus, dessen Produkte zwecks Zuordnung für Gegenbelege zur Auswahl gestellt werden sollen.
 >**Hinweis:** Es werden nur diejenigen Organisationen angezeigt, bei denen für das ausgewählte Produkt noch keine Zuordnung besteht.

1. Wähle im Feld **M_Product_Target_ID** das Zielprodukt aus, mit dem das ausgewählte Produkt verknüpft werden soll.
 >**Hinweis:** Es werden nur diejenigen Produkte angezeigt, die noch keine Verknüpfung haben.

1. Klicke auf "Start", um die Produkte einander für Gegenbelege zuzuordnen und das Overlay-Fenster zu schließen.

| **Hinweis:** |
| :--- |
| Alle bestehenden Zuordnungen zu Produkten anderer Organisationen werden unter der Registerkarte "Zugeordnetes Produkt" unten auf der Seite eines Produkteintrages aufgelistet. |

## Weitere Seiten zum Thema Gegenbelege

{% include tag_linklist.html lang=page.lang pages=site.webui_collection tag="Gegenbelege" suppress_secondary_pages=""%}
