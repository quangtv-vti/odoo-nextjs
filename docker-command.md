

**Checking odoo service**:

``` bash
docker exec -it odoo17-web /bin/bash -c "ps aux | grep odoo"
```

**Create an Odoo module**:
``` bash
docker exec -it odoo17-web /bin/bash -c "/usr/bin/python3 /usr/bin/odoo scaffold  module_name /mnt/extra-addons"
```
