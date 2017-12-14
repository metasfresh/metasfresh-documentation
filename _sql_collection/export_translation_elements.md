---
title: Export Element Translation (AD_Element)
layout: default
tag: 
  - translation

lang: en
---

## SELECT Examples for en_US

### Shows elements used for translating address / location fields 
```

SELECT
    e.ad_element_id,
    e.columnname,
    e.name as element_name,
    etrl.name as element_trl_name
  FROM ad_element e
    JOIN ad_element_trl etrl ON etrl.ad_element_id = e.ad_element_id AND ad_language = 'en_US'
  WHERE e.columnname IN ('Address1', 'Address2', 'Address3', 'Address4','City', 'C_Country_ID')
	  
```

