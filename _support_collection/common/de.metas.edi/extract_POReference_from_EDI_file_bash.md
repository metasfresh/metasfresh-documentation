```sh
#!/bin/bash
FILES=./desadv*

for f in $FILES
do 
 sed '2!d' $f | cut -c 210-221 >> ./list_desadv.txt
done
```
