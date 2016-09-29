---
title: IT FRESH-616
required data:

layout: default
tags:
  - Reports
---
## Activating the trace log file doesn't always work

**Trace Log File functionality**

1. Login with any role

2. Go to menu bar from the top of the window

3. Enter Extras, Einstellungen

4. Go to the field group "Protokoll-Informaiton"

5. Set the Protokollierungs-Level to WARN 

6. Check the flag "Protokoll-Datei"

7. Remember the path of the file it describes

8. Do something in the application that leads to an error. For instance, create a new entry and try to save it without setting a mandatory value

9. Go to the log file, reload it if needed

    => OK: The error message appears in the file

10. Go back to EInstellungen, uncheck the flag Protokoll-Datei

11. Try to make another action that leads to an error (as above) 

12. Go check the log file

    => OK: The error message is not displayed in the log file
    
**Trace Log File functionality - stress test**

1. Repeat the steps above for several instances of the client that are used at the same time

    => OK: There is a new file for each new instance
    => OK: The log files are filled with error messages if the flag is checked, and not filled if the flag is not checked