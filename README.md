# DopeBot V2

# Requirements
## Database
Supports modern database servers including mysql & sqlite out of the box.

## NodeJS/Yarn/NPM
Developed using v16.13.x
```
# If you need to run migrations
npm install -g sequelize-cli
```

## Discord Bot token
https://discord.com/developers/applications/

# Installation
```
git clone git@github.com:dopedao/dopebot-v2.git
cd dopebot-v2
yarn install
cp config.json.example config.json
cp config-db.json.example config-db.json
```
## Database Migration
```
sequelize db:migrate \
  --migrations-path ./db/migrations \
  --models-path ./db/models \
  --seeders-path ./db/seeders \
  --config ./config-db.json
```

# Running
## Auto Sharded Bot
```
node index.js
```
## Non-Sharded Bot
```
node bot.js
```

# Developing
## Commands & Events
Commands & Events are broken out into their respective directories and autoloaded at bot start.

`./events/` contains events emitted by DiscordJS
`./commands/` contains slash commands
