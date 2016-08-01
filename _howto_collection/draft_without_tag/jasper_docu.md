**Editing a report:**

I. Changing the SQL

1. Above the report, there is a small icon called DataSet and Query editor dialog

2. select it

3. notice the "Language" is sql - if not, set it

4. first select the database you want to use, from the dropdown, on left side up (if not already set)

5. in the middle should be the sql, which you can change. Usually we create functions and just call them from here with the report's parameters

6. press the "Read Fields" button and wait for the fields to populate the lower part of this window. Notice you could also add the fields manually
	* a field is written like $F{field_name}
	
7. press ok to save and close

II. Adding a Parameter

1. add a name and the class which you know that your sql is expecting. E.g. for Date it will be java.util.Date

2. Is For Prompting - if you set this on Y, you will see the parameter when you run the jasper, in JasperSoft

3. special parameter: Name: ad_language, Class: java.lang.String, Default Value Expression: $P{REPORT_LOCALE}.toString()
	* This one will take the language from code, depending the document's business partner's language or the login language in some cases
	
4. parameters are written like $P{param_name}
	
III. Adding a variable

1. We usually use variables to calculate data directly in the report, for e.g. a sum

2. add a name and a value class name (e.g. java.math.BigDecimal if you want a sum)

3. Calculation: can be none, sum, average etc

4. Expression: if you selected a calculation then you add the field/param/variable that you want to be calculated (e.g. summed up). If no calculation then you can add any expression you need

5. Reset type: if you want your variable to be calculate at the end of the report, you select Report. Usually is either report or group. For e.g. you want to select group if you want to have the sum per business partner, if they are more than 1 and you grouped your data by bpartner

6. variables are written like $V{var_name}	

IV. content of the report (bands)

1. Title - this band appears only on the first page of the report

2. Page header - if you want your title to appear on each page, you can use this instead of the title band

3. Column header

4. Group header - this band doesn't appear as default. You have to add it by right click on report above the bands. And select Create Group. Groups are used to group your data depending on the field you choose. You can add as many as you need. Just be careful about the order. You might want to move them higher or lower 

5. Details - you can have one or more details band. Here you add the detailed data gathered from your sql

6. Group footer - usually used to sum-up amounts

7. Column footer

8. Page footer - usually used to show the page number and date

9. Summary - mostly used if you want to add an additional page to your report, to put some separate data, like a recapitulation 

10. Background - mostly used for document watermarks. Like if a document is not completed you want to let the one reading it know

V. Properties

1. usually we add the data in the report with Text Fields (see Palette - Basic elements in the upper-right)

2. select a field from report and take a look in right, lower part, on Properties tab

3. there are 6 tabs: Appearance, Borders, Text Field, Inheritance, Hyperlink and Advanced

4. Advance contains all data from the others so you can do changes directly there

5. you can change the font and size, styles and so on

6. Expression is what the field will show. It can be a field name (e.g. $F{field_name}) or variable (e.g. $V{var_name}), or parameter(e.g. $P{param_name}), or resource (e.g. $R{res_name}). But it can also contain an expression like $P{x}!=null ? $F{x} : $F{y}. This means if the parameter x is set show field x, else field y.

7. print when expression - probably the most used - usually starts with "new Boolean(...)" and is used ic case you want to hide a field. If you want to hide the whole line if all the fields are null, then you also have to select "Remove Line When Blank" and "Blank When NULL" 

8. Pattern - if you have a sum, probably you want your number to look in a special way (e.g. for numbers like 1'000.00 you can use #,##0.00)

9. evaluation time - by default is Now, but there might be cases you want to evaluate the data per group 

10. stuff like size and location, you can change them directly from Design 

11. you can also set properties for the report and for bands. For example you can use print when expression for a band if you don't want to appear in some case

VI. Subreports

1. on the main report you can add multiple subreports

2. they can also have properties like print when expression

3. on the subreport "Expression" you have to put the link to your jasper subreport between "path/mysubreport.jasper" 

4. on "Edit Parameters" you have to add those parameters/fields/variables/resources you already have in your main report, that you want to be in the subreport, passing the value to it

5. subreports are very useful to reuse existing reports, parts of data that have to be the same in multiple documents

VII. Language 

1. you can have your report in multiple languages and you translate them in .properties files 

2. the properties files are called like report.properties (general translation), report_de.properties (german translation) or report_de_CH.properties (german from Switzerland translation)

3. the fields you want to be translated are resources type and their expression looks like this: $R{res} where res is inside the .properties file (e.g. res=Translated Res)

4. the properties files mush be saved with the ANSI encoding

5. to add the properties file to your report, you have to go to your report's properties and on Resource Bundle to set the path to your properties file like this e.g. path/report 

VIII. Source 

1. if you want to see the xml code to your jasper report you can go to "Source" tab, right under your report

2. we usually use this Source view when we want to have bold fields in pdf file as well

3. to make this possible you have to write pdfFontName="Helvetica-Bold" after isBold="true"

IX. Preview

1. preview is the last tab under your report

2. it is used to preview the document you've just created

3. you can see there all your parameters (if you added some), fill them in

4. before you press on run, you have to add your database, language Java

5. if you want to set the language you want to see your report you have to select icon "Report Parameter" and to add the language on "Report locale" dropdown

6. after you ran your report, if you want to go back to the parameters you have to press the arrow icon "show parameters"