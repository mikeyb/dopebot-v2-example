const { SlashCommandBuilder } = require('@discordjs/builders');
const { WenEmbeds } = require('./helpers/Embeds');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('wen')
        .setDescription('Wen?')
        .addStringOption(option =>
            option
                .setName('wenwhat')
                .setDescription('What?')
                .addChoice('moon', 'Secret Moon Date 👀')
                .addChoice('game', 'Wen game ❓❓')
                .setRequired(true)
        ),
    async execute(interaction) {

        const what = interaction.options.getString('wenWhat');

        if (what === 'moon') {

            return await interaction.reply({ embeds: [WenEmbeds.Moon()], ephemeral: true });

        }

        if (what === 'game') {

            return await interaction.reply({ embeds: [WenEmbeds.Game()], ephemeral: true });

        };

        return;

    },
};