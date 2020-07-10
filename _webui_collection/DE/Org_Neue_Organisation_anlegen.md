---
title: Wie lege ich eine neue Organisation an?
layout: default
tags:
  - Anfängertipps für metasfresh
  - Einrichtung
  - Organisationen
lang: de
sequence: 10
ref: org_add_new_organization
---

## Überblick
Dank der [Mandantenfähigkeit](Konzept_Mandantenfaehigkeit) von metasfresh ist es möglich, eine unbegrenzte Anzahl von Organisationen auf demselben System zu bedienen, wodurch alle Daten zwar zentral verwaltet werden können, der Datenzugriff jeder Organisation jedoch nur auf die eigene Datenmenge beschränkt ist.

## Schritte

### Neue Organisation anlegen
1. [Gehe ins Menü](Menu) und öffne das Fenster "Organisation".
1. [Lege eine neue Organisation an](Neuer_Datensatz_Fenster_Webui).
1. Benenne die Organisation im Feld **Name**.
1. [metasfresh speichert automatisch](Speicheranzeige).

### Geschäftspartner mit der Organisation verknüpfen
1. Folge dieser [Anleitung zur Erfassung eines neuen Geschäftspartners](Neuer_Geschaeftspartner) unter Berücksichtigung der folgenden Einstellungen:
   - Stelle unten rechts im Feld **Sektion** die zuvor neu erstellte Organisation ein. Gib dazu einen Teil des Organisationsnamens ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
   - Die optionalen Schritte sind nicht erforderlich.<br><br>

   | **Wichtiger Hinweis:** |
   | :--- |
   | Die Adresse bzw. das **Land** des Geschäftspartners ist ***unbedingt erforderlich*** für die Berechnung der Preise und Mehrwertsteuer! |

1. [Starte die Aktion](AktionStarten#aktionsmenue) "Mit Organisation verknüpfen". Es öffnet sich ein Overlay-Fenster.
1. Stelle im Feld **Sektion** die zuvor neu erstellte Organisation ein. Gib dazu einen Teil des Organisationsnamens ein und klicke auf den passenden Treffer in der <a href="Keyboard_Shortcuts_Liste#dropdown" title="Dynamisches Suchfeld (Autocomplete)">Dropdown-Liste</a>.
1. Wähle einen **Standort** aus.
 >**Hinweis:** Dieser Standort wird für die automatische Erstellung des Hauptlagers dieser Organisation benötigt sowie für die korrekte Berechnung der Mehrwertsteuer.

1. Klicke auf "Start", um den Geschäftspartner mit der Organisation zu verknüpfen und das Overlay-Fenster zu schließen.
1. Anschließend findest Du diesen Geschäftspartner unter dem Menüpunkt "[Organisation Stammdaten](Menu)" wieder.

### Lagerzuordnungen
Durch die Verknüpfung der Organisation mit einem Geschäftspartner wird automatisch auch ein Lager erstellt und anschließend in den Organisationsdaten aufgeführt. Diesem Lager kannst Du nun diejenigen Belegarten als **Dokument-Basistyp** zuordnen, bei denen es verwendet werden soll. Gehe hierzu wie folgt vor:

1. [Gehe ins Menü](Menu) und öffne das Fenster "Organisation".
1. Öffne den Eintrag der zuvor neu erstellten Organisation.
1. Gehe zur Registerkarte "Organisationsdaten" unten auf der Seite und [zoome](Zoomen_in_Tabellenfeld) in das Feld in der Spalte **Lager** der Datenzeile.
 >**Hinweis:** [Springe alternativ über die verknüpften Belege](SpringezuBelegen) in das Fenster "Lager" (unter LAGERVERWALTUNG und dann "Lager und Lagerort" in der Sidebar).

1. Gehe zur Registerkarte "Lagerzuordnung" unten auf der Seite und [füge die gewünschten **Dokument-Basistypen** hinzu](Neues_Lager_anlegen#lagerzuordnung).

## Nächste Schritte
Wenn Du eine neue Organisation verwenden und z.B. [Aufträge](Auftrag_erfassen) oder [Bestellungen](Bestellung_erfassen) erfassen möchtest, müssen auch alle dafür benötigten Daten ***unbedingt*** mit dieser Organisation verknüpft sein. Zu diesen Daten zählen:
- gültige Preissysteme
- gültige Preislisten
- gültige Preislistenversionen
- gültige Steuersätze
- Geschäftspartner (Kunden und/oder Lieferanten)
- Produkte

Folge den Anleitungen im Anschluss unter Berücksichtigung des folgenden Hinweises:

| **Wichtiger Hinweis:** |
| :--- |
| Stelle sicher, dass Du in jedem einzelnen Dateneintrag in dem Feld **Sektion** auch ***dieselbe Organisation*** einstellst, für die die Daten sichtbar sein sollen!<br> Um Daten für jede Organisation verfügbar zu machen (z.B. zu Testzwecken), wähle als Organisation `*`. |

1. [Definiere gültige Preise für die neue Organisation](Preise_definieren).
1. [Definiere gültige Steuersätze für die neue Organisation](MwSt_Neuen_Steuersatz_erfassen).
1. [Lege neue Geschäftspartner](Neuer_Geschaeftspartner) ([Kunden](Neuer_Geschaeftspartner_Kunde) oder [Lieferanten](Neuer_Geschaeftspartner_Lieferant)) für die Organisation an.
1. [Lege neue Produkte für die Organisation an](NeuesProdukt).


Um sicherzustellen, dass alle Änderungen übernommen werden, wird empfohlen, dass Sie nach dem Erstellen und Konfigurieren einer neuen Organisation die folgenden Schritte durchführen:


  <table>
    <thead>
      <tr>
        <th style="text-align: left"><strong>Wichtiger Hinweis:</strong></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align: left">Um sicherzustellen, dass alle Änderungen übernommen werden, empfiehlt es sich nach Erstellung und Konfiguration einer neuen Organisation, die folgenden Schritte durchzuführen:<br><ol style="margin-top: 5px; margin-bottom: 3px;"><li><a href="../../installation_collection/DE/Wie_resette_ich_den_server_cache">Server-Cache zurücksetzen</a>.</li><li>Front-End-Cache leeren (<code class="language-plaintext highlighter-rouge">Strg</code>/<code class="language-plaintext highlighter-rouge">⌘ cmd</code> + <code class="language-plaintext highlighter-rouge">⇧ Umschalt</code> + <code class="language-plaintext highlighter-rouge">R</code>).</li></ol></td>
      </tr>
    </tbody>
  </table>

## Nächste Schritte (optional)
- [Stelle die Zeitzone der Organisation ein](Org_Zeitzone_einstellen).
