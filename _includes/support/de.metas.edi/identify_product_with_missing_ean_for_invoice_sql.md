{% highlight sql %}
SELECT i.POReference, i.Documentno, v.*
FROM edi_cctop_invoic_500_v v
    JOIN C_Invoice i ON i.C_Invoice_ID=v.C_Invoice_ID
WHERE true
    AND i.POReference IN ('your','POReference','values')
    AND (v.UPC IS NULL OR v.VendorProductNo IS NULL)
{% endhighlight %}
