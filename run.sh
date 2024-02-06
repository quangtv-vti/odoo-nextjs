#!/bin/bash
DESTINATION=$1
PORT=$2
CHAT=$3
# clone Odoo directory
git clone --depth=1 https://github.com/quangtv-vti/odoo-nextjs $DESTINATION
rm -rf $DESTINATION/.git
# set permission
# mkdir -p $DESTINATION/postgresql
# sudo chmod -R 777 $DESTINATION
sudo chmod -R 777 $DESTINATION/odoo-data

# config
if grep -qF "fs.inotify.max_user_watches" /etc/sysctl.conf; then echo $(grep -F "fs.inotify.max_user_watches" /etc/sysctl.conf); else echo "fs.inotify.max_user_watches = 524288" | sudo tee -a /etc/sysctl.conf; fi
sudo sysctl -p
# update docker compose port
sed -i 's/10016/'$PORT'/g' $DESTINATION/docker-compose.yml
sed -i 's/20016/'$CHAT'/g' $DESTINATION/docker-compose.yml

# run Odoo
docker compose -f $DESTINATION/docker-compose.dev.yml up -d

echo 'Started Odoo @ http://localhost:'$PORT' | Master Password: odoo17@2024 | Live chat port: '$CHAT
