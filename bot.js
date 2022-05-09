const fs = require('fs');

const {
    Client,
    Collection,
    Intents
} = require('discord.js');

const config = require('./config.json');

// Necessary Bot Permissions ( 1248494873712 )
// - Manage Server - Needed for managing invite data
// - Manage Roles - Auto-role (future features)
// - Manage Channels - Needed for managing invite data & pinning messages
// - Manage Webhooks - Advanced functionality (future features)
// - Read Messages/View Channels - Basic functionality
// - Manage Events - management of events (future features)
// - Moderate Members - Ability to mute/timeout users (bot managers)
// - Send Messages - Basic functionality
// - Manage Messages - Pin messages, edit pinned messages, etc.
// - Embed Links - Basic functionality
// - Attach Files - Basic functionality
// - Read Message History - Basic functionality
// - Mention Everyone - announcements, giveaways, etc. (future features)
// - Use External Emojis - Basic functionality
// - Use External Stickers - Basic functionality
// - Add Reactions - Basic functionality
// - Use Slash Commands - Basic functionality
// - Connect - Basic functionality


// Load Intents
//
// Remove any unneeded intents
const client = new Client(
    {
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_INVITES,
            Intents.FLAGS.GUILD_MEMBERS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
            Intents.FLAGS.GUILD_WEBHOOKS
        ]
    }
);

// Load Commands
//
// ./commands/
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const command = require(`./commands/${file}`);

    client.commands.set(command.data.name, command);

}

// Handle Command Interactions
//
// Process the commands being issued to the bot
client.on(
    'interactionCreate',
    async interaction => {

        if (!interaction.isCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if (!command) return;

        try {

            await command.execute(interaction);

        } catch (error) {

            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });

        };

    }

);

// Load Events
//
// ./events/
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {

    const event = require(`./events/${file}`);

    if (event.once) {

        client.once(event.name, (...args) => event.execute(...args));

    } else {

        client.on(event.name, (...args) => event.execute(...args));

    }

}

client.login(config.discord.token);