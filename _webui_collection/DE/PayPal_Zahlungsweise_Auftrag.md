---
title: Wie verwende ich PayPal als Zahlungsweise für Aufträge?
layout: default
tags:
  - Workflow
  - Verkauf
  - PayPal Plus
lang: de
sequence: 10
ref: paypal_payment_rule_salesorder
---

## Voraussetzungen
1. [Richte PayPal für metasfresh ein](PayPal_Plus_Einrichtung).
1. [Verknüpfe einen Geschäftspartnereintrag mit einem Kontakt, der über eine E-Mail-Adresse verfügt](GPartner_Nutzer_hinzufuegen).

## Schritte

### Auftrag erfassen
1. [Erfasse einen Auftrag](Auftrag_erfassen) unter Berücksichtigung der folgenden Einstellungen:
  - Wähle im Feld **Rechnung an** einen Kontakt aus, der über die Zahlungsaufforderung benachrichtigt werden soll. Der Kontakt muss über eine E-Mail-Adresse verfügen sowie als [*Rechnungskontakt*](GPartner_Nutzer_hinzufuegen) gekennzeichnet sein.
  - Wähle als **Zahlungsweise** *PayPal* aus.
2. Bei [Fertigstellung des Auftrages](BelegverarbeitungFertigstellen) erhält dieser vorerst den Belegstatus "*Waiting for payment*" und es wird eine E-Mail mit den Details zur Zahlungsfreigabe an den Geschäftspartnerkontakt versendet.
3. Es werden Einträge in den folgenden [Fenstern im Menü](Menu) erstellt:
  - *Payment Reservation:* Informationen zum Auftrag, Geschäftspartnerkontakt und Bearbeitungsstatus.
  - *PayPal Order:* Informationen zur Zahlungsreservierung, URL zur Zahlungsfreigabe und Bearbeitungsstatus.
  - *PayPal Log:* Protokolleinträge aller Aktionen in Verbindung mit PayPal-Zahlungen.

### Nach Zahlungsfreigabe durch den Kunden

#### Zahlungsstatus aktualisieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "PayPal Order".
1. [Selektiere](AuswahlBelege) in der [Listenansicht](Ansichten) den Eintrag der PayPal-Zahlung, deren Status Du aktualisieren möchtest.
1. [Starte die Aktion](AktionStarten) "Update from PayPal server".
 >**Hinweis:** Diese Aktion kannst Du auch direkt aus dem jeweiligen Zahlungseintrag starten.

1. Der Zahlungseintrag erhält den **Status** *Approved*, ebenso wie der jeweilige Eintrag unter "Payment Reservation", sofern der Kunde die Zahlung freigegeben hat.

#### PayPal-Auftrag autorisieren
1. [Gehe ins Menü](Menu) und öffne das Fenster "Payment Reservation".
1. [Selektiere](AuswahlBelege) in der [Listenansicht](Ansichten) den Eintrag des PayPal-Auftrages, den Du autorisieren möchtest.
1. [Starte die Aktion](AktionStarten) "Authorize PayPal Order".
 >**Hinweis:** Diese Aktion kannst Du auch direkt aus dem Eintrag des jeweiligen PayPal-Auftrages starten.

1. Der Eintrag erhält den **Status** *Completed*, ebenso wie der jeweilige Auftrag, der nun fertiggestellt ist.
1. In dem Zahlungseintrag unter "[PayPal Order](Menu)" wurde nun ebenfalls die **PayPal Authorization ID** aktualisiert.

## Nächste Schritte
1. [Erstelle einen Lieferschein](Zu_Auftrag_Lieferschein_erstellen) zu dem Auftrag.
1. [Erstelle eine Rechnung](Zu_Auftrag_Rechnung_erstellen) zu dem Auftrag.
