---
title: Wie aktualisiere ich die Georeferenzdaten?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Benutzung
  - Umkreissuche
  - Einrichtung
lang: de
sequence: 20
ref: update_geocoding
---

## Überblick
Nach [Einrichtung der Geokodierung](Geokodierungsdienst_einrichten) kann es vorkommen, dass einige Geschäftspartnerstandorte bei der Umkreissuche nicht berücksichtigt werden. Davon betroffen können Geschäftspartnereinträge sein, die vor der Einrichtung erfasst wurden oder per SQL-Skripte oder REST API importiert wurden.

Um sicherzustellen, dass alle Geschäftspartnerstandorte bei der Umkreissuche berücksichtigt werden, empfiehlt es sich daher, die Georeferenzdaten nach der Einrichtung sowie nach einer Datenmigration zu aktualisieren. Gehe hierzu wie folgt vor:

## Schritte
1. [Melde Dich bei metasfresh an](Anmeldung).
1. Gehe zur Adressleiste Deines Browsers und gib dort die Fenster-ID `/window/121` hinter der Basis-URL ein:

   <p style="margin-left:25%; width:50%; border:1px; border-style:solid; border-color:#dddddd; padding:0.5em; text-align:center;">https://{% raw %}<code>{{ Basis-URL }}</code>{% endraw %}<strong>/window/121</strong></p>

1. Bestätige mit `↵ Enter`. Es öffnet sich das versteckte Fenster "Ort".
1. [Starte die Aktion](AktionStarten) "Geocoding update". Nun wurden die geografischen Koordinaten aller Geschäftspartnerstandorte neu berechnet.
1. [metasfresh speichert automatisch](Speicheranzeige).

## Nächste Schritte
- [Verwende die Umkreissuche, um die Ergebnisse beim Filtern von Einträgen auf einen bestimmten geografischen Bereich einzuschränken](Umkreissuche_Geocoding).
