
So the changes were done by the RequestProcessor.
In general the RequestProcessor  does
* use R_RequestProcessor_Route to find a sales rep for an request that doesn't yet have one
* update R_Request.Status_ID using R_Status.Next_Status_ID
* notify: try sending mails to the request's SalesRep (if IsEmailWhenDue='Y' / IsEMailWhenOverdue='Y')
* escalate: try to send mails to the Supervisor_ID (or again to the sales rep if none is found)
* does sth around M_ChangeRequest which i don't yet understand

All of this can lead to `RElquest.Updated` being set to the resp time the processor ran.

*  you could switch it off via update R_RequestProcessor set IsActive='N'
update R_RequestProcessor set IsActive='N'

