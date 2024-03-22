---
title: Wie richte ich ausgehende Belege ein?
layout: default
tags:
  - E-Mails und ausgehende Belege
  - Einrichtung
lang: de
sequence: 10
ref: outbound_documents_config
---

## Überblick
Ausgehende Belege sind grundsätzlich alle Dokumente, die nach ihrer Erstellung versandt werden sollen, ob digital per E-Mail, ausgedruckt per Post oder auf sonstige Weise. In metasfresh kann man standardmäßig jeden im Zusammenhang mit bestimmten Transaktionen erzeugten Beleg sofort manuell weiterverarbeiten (ausdrucken, versenden usw.). Bei steigendem Auftragsvolumen kann es aber mit der Zeit zunehmend schwieriger werden, den Überblick zu behalten, besonders wenn manche Belege erst zu einem späteren Zeitpunkt oder gesammelt verarbeitet werden sollen.

Um diese Herausforderung zu meistern, können ausgehende Belege in metasfresh individuell für eine Vielzahl von Geschäftsfällen konfiguriert werden. So können Belege wie Rechnungen, Lieferscheine, Mahnbriefe usw. an einer zentralen Stelle unter dem Menüpunkt "Ausgehende Belege" gefiltert, verwaltet und ihrem jeweiligen Verwendungszweck entsprechend effizient und jederzeit nachvollziehbar entweder einzeln der Reihe nach oder kollektiv weiterverarbeitet werden.

## Schritte
1. [Gehe ins Menü](Menu) und öffne das Fenster "Ausgehende Belege Konfig".
1. [Erstelle einen neuen Konfigurationseintrag](Neuer_Datensatz_Fenster_Webui).
1. Gib in das Feld **DB-Tabelle** einen Teil des Namens der Datenbanktabelle ein, für die Du die ausgehenden Belege konfigurieren möchtest, und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>, z.B. "Mahnart".
1. ***Optional:*** Wähle ein [**Druck-Format**](Druckformat_anlegen) aus, z.B. *Mahnbrief (swat)*.
    >**Hinweis:** Wird kein Druckformat angegeben, wird automatisch das für die jeweilige Belegart standardmäßig definierte Druckformat verwendet.

1. ***Optional:*** Wähle einen **Dokument Basis Typ** aus, falls die Konfiguration nur für eine bestimmte Belegart aus der gewählten Datenbanktabelle gelten soll, z.B. Basistyp *Auftrag* aus der Tabelle *Auftrag/Bestellung*.
1. ***Optional:*** Setze ein Häkchen bei **In Druck-Warteschlange**, wenn die fertiggestellten Belege automatisch an die Druckwarteschlange weitergleitet werden sollen.
1. ***Optional:*** Setze ein Häkchen bei **Warteschlangen-Eintrag sofort verarbeiten**, wenn ein in die Druckwarteschlange eingereihter Beleg direkt als Druckauftrag weiterverarbeitet (gedruckt) werden soll.
1. [metasfresh speichert automatisch](Speicheranzeige).
<br><br>

| **Wichtiger Hinweis:** |
| :--- |
| Damit die Einstellungen auf dem Anwendungsserver aktiv werden, muss dieser erst von einem Benutzer mit Administrationsrechten neugestartet werden. |

## Nächste Schritte (optional)
- [Richte einen Drucker in metasfresh ein](PDF_Drucker_Einrichtung_Guide).
- [Richte die ausgehenden Belege für](Ausgehende_Belege_Konfig_Mahnung) [das Mahnverfahren ein](Mahnlauf).
- [Richte die ausgehenden Belege für](Ausgehende_Belege_Konfig_Serienbriefe) [die Serienbrief-Funktion ein](Serienbriefe_erstellen).

## Beispiel
<kbd><img src="assets/Ausgehende_Belege_Konfig+Mahnung.gif" alt="GIF: Ausgehende Belege einrichten"></kbd>
