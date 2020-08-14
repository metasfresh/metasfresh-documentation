---
title: Wie erfasse ich einen neuen Steuersatz?
layout: default
tags:
  - Preisgestaltung
  - Mehrwertsteuer (MwSt.)
lang: de
sequence: 10
ref: vat_add_new_tax_rate
---

## Überblick
Steuersätze sind standardmäßig in metasfresh enthalten und können nach unterschiedlichen Kriterien wie Höhe, Land, Gültigkeitsbeginn usw. flexibel konfiguriert werden. Unter bestimmten Umständen kann es vorkommen, dass einzelne Steuersätze kurzzeitig angepasst werden müssen, z.B. als Reaktion auf wirtschaftliche Veränderungen. Da jeder Steuersatzeintrag ein eigenes Gültigkeitsdatum besitzt, muss lediglich ein neuer Steuersatz mit dem geplanten Gültigkeitsbeginn erfasst werden, woraufhin sich die jeweiligen Datensätze automatisch nacheinander ablösen. Auf diese Weise können zukünftige Steuersatzanpassungen bereits weit im Voraus vorgenommen werden, um sicherzustellen, dass die neuen Steuersätze rechtzeitig zur Anwendung kommen und Buchhaltungsfehler ausgeschlossen werden.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Steuersatz".
1. [Lege einen neuen Steuersatz an](Neuer_Datensatz_Fenster_Webui).
1. Benenne den Steuersatz im Feld **Name**, z.B. "Regulärer Steuersatz 16%" oder "Ermäßigter Steuersatz 5%".
1. Stelle ein **Gültig ab** Datum ein.
 >**Hinweis:** Liegt das Datum in der *Vergangenheit*, gilt der Steuersatz *ab sofort*. Liegt es in der *Zukunft*, gilt er *erst ab diesem Datum*.

1. Wähle eine geeignete **Steuerkategorie** aus.
1. Gib in das Feld **Satz** die Höhe des Steuersatzes in Prozent ein, z.B. "16" oder "5".
1. Stelle das **Land** ein, von dem aus Dienstleistungen erbracht werden.
1. Stelle im Feld **An** das Land ein, in dem die Dienstleistungen erbracht werden bzw. für das der Steuersatz gelten soll.
1. Setze ein Häkchen bei **Dokumentbasiert**, damit die Steuer nicht zeilenweise berechnet wird.
1. ***Optional:*** Stelle im Feld **Sektion** die gewünschte [Organisation](Org_Neue_Organisation_anlegen) ein. Gib dazu einen Teil des Organisationsnamens ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. [metasfresh speichert automatisch](Speicheranzeige).
