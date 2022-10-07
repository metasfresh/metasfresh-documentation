---
title: How to edit Jasper reports
layout: default
tags:
  - Reports
lang: en
sequence: 20
ref: edit_reports
---

## Precondition
1. Make sure your Jasper Studio is this specific Version 6.5.1.
    - Download the source files <a href="https://github.com/metasfresh/metasfresh/tree/master/backend/de.metas.fresh/de.metas.fresh.base/src/main/jasperreports/de/metas" title="Download Jasper source files | metasfresh Github Repository (Public)" target="\_blank">here</a>.
1. [Set up your Jasper Studio environment](Set_up_Jasper_Studio_Environment.html).

## Index
<ol type="I">
 <li><a href="#changing-the-sql" title="Changing the SQL">Changing the SQL</a></li>
 <li><a href="#adding-a-parameter" title="Adding a Parameter">Adding a Parameter</a></li>
 <li><a href="#adding-a-variable" title="Adding a variable">Adding a variable</a></li>
 <li><a href="#content-of-the-report" title="Content of the Report (bands)">Content of the Report (bands)</a></li>
 <li><a href="#properties" title="Properties">Properties</a></li>
 <li><a href="#subreports" title="Subreports">Subreports</a></li>
 <li><a href="#language" title="Language">Language</a></li>
 <li><a href="#source" title="Source">Source</a></li>
 <li><a href="#database_adapter" title="Set up Database Adapter">Set up Database Adapter</a></li>
 <li><a href="#preview" title="Preview">Preview</a></li>
</ol>

## Steps

### <a name="changing-the-sql">I. Changing the SQL</a>
1. Above the report, there is a small icon called "DataSet and Query editor dialog".
1. Click it.
1. Notice the "Language" is SQL. If it is not, set it.
1. Select the database you want to use from the drop-down on the top left (if not already set).
1. You should find the SQL in the middle where you can change it. Usually, we create functions and just call them from here with the report's parameters.
1. Press the "Read Fields" button and wait for the fields to populate the lower part of this window.<br> A fields is indicated as `$F{field_name}`.
 >**Note:** You can also add the fields manually.

1. Press "OK" to save and close.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="adding-a-parameter">II. Adding a Parameter</a>
1. Add the name and the class which you know your SQL is expecting, e.g., for "Date" it will be `java.util.Date`.
1. **Is For Prompting**: If you set this on "Y", you will see the parameter when you run the Jasper in JasperSoft.
1. Special parameters:
  - Name: `ad_language`
  - Class: `java.lang.String`
  - Default Value Expression: `$P{REPORT_LOCALE}.toString()`
  >**Note:** This one will take the language from code, depending on the document's business partner's language or the login language in some cases.

1. Parameters are indicated as `$P{param_name}`.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="adding-a-variable">III. Adding a variable</a>
1. We usually use variables to calculate data directly in the report, e.g., a sum.
1. Add a name and a value class name (e.g., `java.math.BigDecimal` if you want a sum).
1. **Calculation**: Can be *none*, *sum*, *average*, etc.
1. **Expression**: If you selected a calculation method then add the field/parameter/variable that you want to be calculated (e.g., summed up). If no calculation is set then you can add any expression you need.
1. **Reset type**: If you want your variable to be calculated at the end of the report, select *Report*. Usually it is either *Report* or *Group*.<br>
For instance, select *Group* if you want to obtain the sum per business partner, in cases where there are more than one and you grouped your data by business partner.
1. Variables are indicated as `$V{var_name}`.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="content-of-the-report">IV. Content of the Report (bands)</a>
1. **Title**: This band appears only on the first page of the report.
1. **Page header**: If you want your title to appear on each page, you can use this instead of the title band.
1. **Column header**.
1. **Group header**: This band does not appear by default. You have to add it by right-clicking on "Report" above the bands and selecting "Create Group". Groups are used to group your data according to the field you choose. You can add as many as you need. Just mind the order! You might want to move them further up or down.
1. **Details**: You can have one or more details band. Here you add the detailed data gathered from your SQL.
1. **Group footer**: Usually used to sum up amounts.
1. **Column footer**.
1. **Page footer**: Usually used to show the page number and date.
1. **Summary**: Mostly used when you want to add an additional page to your report to put some separate data, like a summary.
1. **Background**: Mostly used for document watermarks. For example, if a document is not completed and you want to make this apparent to the person reading it.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="properties">V. Properties</a>
1. Usually we use text fields to add data in the report (see *Palette* > *Basic elements* on the upper right).
1. Select a field from report and take a look at the "Properties" tab on the lower right.
1. There are 6 tabs: Appearance, Borders, Text Field, Inheritance, Hyperlink and Advanced.
1. "Advanced" contains all data from the others so you can make changes directly there.
1. You can change the font type, font size, styles, etc.
1. The field will show an "Expression". It can be a field name (e.g., `$F{field_name}`), variable (e.g., `$V{var_name}`), parameter (e.g., `$P{param_name}`), or resource (e.g., `$R{res_name}`). But it can also contain an expression like `$P{x}!=null ? $F{x} : $F{y}`. This means if the parameter `x` is set then the field x shall be shown. Otherwise, field y shall be shown.
1. **Print when expression**: Probably the most used. It usually starts with "new Boolean(...)" and is used in case you want to hide a field. If you want to hide an entire line where all the fields are null, then you also have to select "Remove Line When Blank" and "Blank When NULL".
1. **Pattern**: If you have a sum, you probably want your number to appear in a particular way (e.g., for numbers like 1'000.00 you can use `#,##0.00`).
1. **Evaluation time**: The default is *Now*, but there might be cases when you want to evaluate the data per group.
1. Things like size and location, you can change them directly from Design.
1. You can also set properties for the report and for bands. For example, you can use **Print when expression** for a band if you only want it to appear in certain cases.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="subreports">VI. Subreports</a>
1. You can add multiple subreports to the main report.
1. They can also have properties like **print when expression**.
1. In the subreport's "Expression" you have to insert the link to your Jasper subreport between "path/mysubreport.jasper".
1. On "Edit Parameters" you have to add the parameters/fields/variables/resources you already have in your main report and that you want to include in the subreport, passing the value to it.
1. Subreports are very useful for reusing existing reports and parts of data that have to be the same in multiple documents.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="language">VII. Language</a>
1. You can have your report in multiple languages. You translate them in `.properties` files.
1. The properties files have names like `report.properties` (general translations), `report_de.properties` (German translations) or `report_de_CH.properties` (Swiss German translations).
1. The fields you want to be translated are of the type resources and their expression looks like this: `$R{res}` with res being inside the .properties file (e.g., res=Translated Res).
1. The properties files must be saved with the ANSI encoding.
1. To add the properties file to your report, you have to go to your report's properties and on "Resource Bundle" to set the path to your properties file like this: `path/report`.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="source">VIII. Source</a>
1. If you want to view the XML code to your Jasper report, just go to "Source" tab right below your report.
1. We usually use this source view when we want to have bold fields in PDF files as well.
1. To enable this, you have to write `pdfFontName="Helvetica-Bold"` after `isBold="true"`.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="database_adapter">IX. Set up Database Adapter</a>
1. In the **Repository Explorer** tab, right-click on **Data Adapter** and then **Create Data Adapter**.
1. In the window **Create Data Adapter**, choose **Database JDBC Connection** and click **Next**.
1. Set your connection preferences. As an example, for `localhost`:
<kbd><img src="./assets/data_adapter_preferences.png" alt="Data Adapter preferences"></kbd>

1. Afterwards, you can use it in the following steps: **X. Preview**.

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>

### <a name="preview">X. Preview</a>
1. "Preview" is the last tab under your report.
1. It is used to preview the document you just created.
1. There you can see all your parameters (if you added any) and fill them in.
1. Before you click on "run", you have to add your database, language Java.
1. If you want to set the language for your report you have to click icon "Report Parameter" and add the language via "Report locale" drop-down.
1. If you want to go back to the parameters after running the report you have to press the arrow icon "show parameters".

<p style="text-align:right"><font size="2"><em><a href="#top" title="Jump to top of page">Return to index</a></em></font><font size="3"> &#x2BA5;</font></p>
