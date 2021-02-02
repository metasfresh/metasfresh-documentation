---
title: Wie nutze ich eine Auftragsreferenz als Belegnummer für Folgebelege?
layout: default
tags:
  - Dokumentenverwaltung
  - Belegnummerierungen
lang: de
sequence: 30
ref: reference_as_doc_seq_number
---

## Überblick
Wenn Du in metasfresh einen [Kundenauftrag erfasst](Auftrag_erfassen), kann es vorkommen, dass Du die Auftragsreferenz als Belegnummer für [Lieferschein](Zu_Auftrag_Lieferschein_erstellen) und/oder [Rechnung](Zu_Auftrag_Rechnung_erstellen) verwenden möchtest, damit der [Kunde](Neuer_Geschaeftspartner_Kunde) diese Belege problemlos seinen eigenen Unterlagen zuordnen kann. Gleichzeitig soll Deine eigene interne Belegnummerierung dadurch jedoch nicht durcheinander gebracht werden.

Um die Referenz aus dem Auftrag automatisch auf den Lieferschein- bzw. Rechnungsbeleg zu übertragen, gehe wie folgt vor:

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Belegnummern".
1. [Verwende die Filterfunktion](Filterfunktion), um den Eintrag des Beleges zu finden, der als Nummerierung die Auftragsreferenz erhalten soll und öffne ihn, z.B. *MM Shipment* (= Lieferschein) oder *AR Invoice* (= Rechnung).
1. Wähle im Feld **Abw. Sequenznummer-Implementierung** *POReferenceAsSequenceNoProvider* aus.
 >**Hinweis:** Die Auftragsreferenz wird anstelle der Belegnummer in den Lieferschein bzw. die Rechnung übertragen. Die intern fortlaufende Nummerierung bleibt erhalten und wird fortgesetzt.

1. ***Optional:*** [Füge der Belegnummer (Referenz) Affixe hinzu](Belegnummern_anpassen).
1. [metasfresh speichert automatisch](Speicheranzeige).

## Beispiel
![](assets/Referenz_als_Belegnummer.gif)
