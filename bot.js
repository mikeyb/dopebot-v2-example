const fs = require('fs');

const {
    Client,
    Collection,
    Intents
} = require('discord.js');

const config   = require('./config.json');

const DB = { Logs, Guilds, Members } = require('./db/models')

// Load Intents
//
// Remove any unneeded intents
const client = new Client(
    {
        intents: [
            Intents.FLAGS.GUILDS,
            Intents.FLAGS.GUILD_BANS,
            Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
            Intents.FLAGS.GUILD_INTEGRATIONS,
            Intents.FLAGS.GUILD_INVITES,
            Intents.FLAGS.GUILD_PRESENCES,
            Intents.FLAGS.GUILD_MEMBERS,
            Intents.FLAGS.GUILD_MESSAGES,
            Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
            Intents.FLAGS.GUILD_MESSAGE_TYPING,
            Intents.FLAGS.GUILD_SCHEDULED_EVENTS,
            Intents.FLAGS.GUILD_VOICE_STATES,
            Intents.FLAGS.GUILD_WEBHOOKS,
            Intents.FLAGS.DIRECT_MESSAGES,
            Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
            Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        ]
    }
);

// Attach DB to client
client.DB = DB;

// Load Commands
//
// ./commands/
client.commands    = new Collection();

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

        DB.Logs.create({ 'command': command.data.name, 'guild_id': interaction.guild.id, 'user_id': interaction.user.id })

        try {

            await command.execute(interaction);

        } catch (error) {

            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });

        }

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