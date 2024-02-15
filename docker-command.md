

**Checking odoo service**:

``` bash
docker exec -it odoo17-web /bin/bash -c "ps aux | grep odoo"
```

**Create an Odoo module**:
``` bash
docker exec -it odoo17-web /bin/bash -c "/usr/bin/python3 /usr/bin/odoo scaffold  module_name /mnt/extra-addons"
```

**Create an Odoo module**:
``` bash
docker exec -it odoo17-web /bin/bash -c "/usr/bin/python3 /usr/bin/odoo --db_host postgres --db_port 5432 --db_user odoo --db_password odoo17@2024 --http-port=9999 -d db_name -u nvt_users --stop-after-init"
```
