rsync -avz --progress --info=progress2 ./build/* root@206.189.90.42:/root/svg-into-png
rsync -avz --progress --info=progress2 package.json root@206.189.90.42:/root/svg-into-png
rsync -avz --progress --info=progress2 bun.lock root@206.189.90.42:/root/svg-into-png
rsync -avz --progress --info=progress2 ecosystem.config.cjs root@206.189.90.42:/root/svg-into-png

# In server
# cd /root/app
# bun install --production
# vi .env
# bun run start