---
title: Wie lege ich neue Kalenderperioden an?
layout: default
tags:
  - Stammdaten
  - Kalender
lang: de
sequence: 20
ref: add_new_calendar_periods
---

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Kalender und Jahr".
1. Öffne den Eintrag eines bestehenden Kalenders, z.B. "Buchführungs-Kalender", bzw. [lege einen neuen an](Neuen_Kalender_anlegen).
1. Gehe zur Registerkarte "Jahr" unten auf der Seite und klicke auf !["Neu hinzufügen"](assets/Neu_hinzufuegen_Button.png). Es öffnet sich ein Overlay-Fenster.
1. Trage das **Jahr** ein, für das Du eine neue Periode anlegen möchtest, z.B. "<script>document.write(new Date().getFullYear() + 1)</script>".
1. Klicke auf "Bestätigen", um das Overlay-Fenster zu schließen und das Jahr zur Liste hinzuzufügen.
1. [Selektiere](AuswahlBelege) den neu erstellten Registerkarteneintrag und [starte die Aktion](AktionStarten) "Perioden anlegen". Es öffnet sich ein Overlay-Fenster.
1. Stelle ein **Anfangsdatum** ein, z.B. "01.01.<script>document.write(new Date().getFullYear() + 1)</script>".
1. Lege ein geeignetes **Datumsformat** fest, sofern notwendig (z.B. *MMM-yy* für *Jan-20*) <script>document.write(new Date().getFullYear() + 1).slice(-2)</script> or <script>document.write(new Date().getFullYear() + 1).toString().substr(-2)</script>.
 >**Hinweis:** Weitere Informationen über Datumsformate findest Du <a href="https://docs.oracle.com/javase/7/docs/api/java/text/SimpleDateFormat.html" title="Formatbeispiele für Daten | Oracle.com" target="blank">hier</a>.

1. Klicke auf "Start", um die Perioden anzulegen und das Overlay-Fenster zu schließen.
1. [Springe über das Kontextmenü](Springezu_Kontextmenue) ![](assets/Kalenderperiode Kontextmenue.png) des zuvor neu erstellten Jahreseintrages in das Fenster "Periode". Hier siehst Du nun eine Auflistung der einzelnen Monate aus der Periode.

## Beispiel
![](assets/Kalenderperioden_hinzufuegen.gif)
