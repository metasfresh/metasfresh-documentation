{% highlight sql %}
/* 
Lists a material receipt and the shipment(s) where the received goods where shipped.
Shipments and receipts are matched if at least one of the recieved HUs was shipped.
Doesn't work if all HUs were split or e.g. issued to a production order. It same to be the *same* HU.
Still, this SQL is simple and helpful in many cases.
*/
SELECT DISTINCT
	io_r.DocumentNo, io_r.IsSOTrx, iol_r.Line, iol_r.MovementQty, io_r.DocStatus,
	io_s.DocumentNo, io_s.IsSOTrx, iol_s.Line, iol_s.MovementQty, io_s.DocStatus
FROM M_Inout io_r
	JOIN M_InOutLine iol_r ON io_r.M_InOut_ID=iol_r.M_InOut_ID
		JOIN M_HU_Assignment hua_r ON hua_r.AD_Table_ID=get_table_id('M_InOutLine') AND hua_r.Record_ID=iol_r.M_InOutLine_ID
			JOIN M_HU hu ON hu.M_HU_ID=hua_r.M_TU_HU_ID
			JOIN M_HU_Assignment hua_s ON hua_s.M_TU_HU_ID=hua_r.M_TU_HU_ID AND hua_s.AD_Table_ID=get_table_id('M_InOutLine') AND hua_r.M_HU_Assignment_ID!=hua_s.M_HU_Assignment_ID
				JOIN M_InOutLine iol_s ON hua_s.Record_ID=iol_s.M_InOutLine_ID
					JOIN M_InOut io_s ON io_s.M_InOut_ID=iol_s.M_InOut_ID
WHERE true
	AND io_r.DocumentNo='<material receipt document no>'
	AND hu.HUStatus='E'; /* HUs that were shipped */
{% endhighlight %}