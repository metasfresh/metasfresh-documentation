---
title: How do I add a new product?
layout: default
tags:
  - Master Data
lang: en
---

1. [Open the window "Product"](How_to_find_and_open_a_window).
1. [Add new data](How_to_add_new_data).
1. Fill out the field **Name**.
 > **Note:** The **Article number** will be saved automatically according to the numbering rules which can be configured individually.

1. Select field **Article category**.
 >**Note:** The **Article category** can be used to control discounts and accounting of a specific article.

1. Fill out the field **Unit of Measure** which defines in which unit this article is being accounted for.
 >**Note 1:** As soon as a first note is created in which the article is being used, the unit of measure cannot be changed anymore.<br><br>
 >**Note 2:** A pricing unit can be defined without referring to the unit of measure in which the article can be priced and accounted for.

1. The field Type of Article defines which kind of article it is.

    | Option | Effect |
    | :--- | :--- |
    | Article | Physical article, e.g., individual pieces, packaging material etc. (the usual case) |
    | Service | Non-physical article, e.g., services |
    | Account | Used for controlling the accounting process |
    | Resource | Article which can only be used once in a certain period of time, e.g., machinery, employee etc. |

    >**Note:** As soon as a first note is created in which the article is being used, the unit of measure cannot be changed anymore.

1. Field **Used in warehouse** defines if the article (in case **Article type** is set to *Article*) is being accounted for.
1. Field **Purchased** defines if the article is available in purchasing.
1. Field **Sold** defines if the article is availably for purchasing.
1. [Save](How_to_add_new_data).
1. Open register "CU-TU Zuordnung".
   - **Artikel ohne Gebinde**
     1. [Neuen Datensatz anlegen](../Wie_lege_ich_einen_neuen_datensatz_an).
     1. **Packvorschrift** "VirtualPI" auswählen.
     1. **Unbestimmte Kapazität** anhaken.
     1. **Gültig ab** Datum eintragen, ab wann die Packvorschrift aktiviert sein soll. Üblicher Wert wäre ein Datum kleiner als heute.
     1. [Speichern](../Wie_lege_ich_einen_neuen_datensatz_an).
   - **Artikel im Gebinde** - Artikel soll mittels Packvorschrift als Gebinde verwaltet werden.
     1. [Add new data](../Wie_lege_ich_einen_neuen_datensatz_an).
     1. Select a suitable **Packaging rule**.
     1. Enter **Amount** to define how many times the article (CU) fits into the packaging (TU).
     1. **Gültig ab** Datum eintragen ab wann die Packvorschrift aktiviert sein soll. The usual value would be a date before today's date.
     1. ***Optional:*** Definition of **Business Partner** so that the packaging rule only applies to this one partner.
     1. [Save](../Wie_lege_ich_einen_neuen_datensatz_an).

   **Note:** It is also possible to set different packaging policies for an individual article.

## Where to go from here?
1. How to define prices?
1. How to configure articles available for purchase?
1. How to configure a tax category for an article?
1. How to add a translation for an article?
1. How to define conversion rules for different units of measure?
1. [How to configure a product for production purposes?](How_to_configure_a_product_for_production_purposes)
