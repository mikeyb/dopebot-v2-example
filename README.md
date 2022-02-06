# DiscordJS Bot Template

This template is great for anyone looking to get up and running quickly with a DiscordJS bot.  The command and events are broken out in such a way that make it easy to implement the necessary functionality you desire quickly and easily.

The template works with many database platforms out of the box using Sequelize with included models ready to go for your starter implementation.

# Requirements
## Database
Supports modern database servers including mysql, postgres, sqlite, etc.

## NodeJS/Yarn/NPM
Developed using v16.13.x

## Discord Bot token
https://discord.com/developers/applications/

# Installation
```
git clone git@github.com:mikeyb/discordjs-template.git
cd discordjs-template
yarn install
mv config.json.example config.json
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
  - https://discord.js.org/#/docs/discord.js/stable/class/Client

`./commands/` contains slash commands
  - https://github.com/mikeyb/discordjs-template/commands/ping.js