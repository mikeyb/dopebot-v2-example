const { SlashCommandBuilder } = require('@discordjs/builders');
const { default: request } = require('graphql-request');

const { dWApi } = require('../../constants');
const { svgRenderer } = require('../helpers/svgRender');
const { DopeEmbeds } = require('../helpers/Embeds');
const { getDope } = require('../helpers/Hustler');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dope')
        .setDescription('Get DOPE NFT information')
        .addIntegerOption(option =>
            option
                .setName('dopeId')
                .setDescription('ID of the DOPE NFT.')
                .setRequired(true)
        ),
    async execute(interaction) {

        const dopeId = interaction.options.getInteger('dopeId');

        if (dopeId >= 0 && dopeId < 8000) {

            const dopeResult = await request(dWApi, getDope, { "where": { "id": dopeId } });

            if (!dopeResult?.dopes?.edges[0]?.node) {

                Promise.reject();

                return await interaction.reply({ content: 'There was an error processing the request.  Try again in a few minutes.', ephemeral: true })

            };

            const dopeRoot = dopeResult.dopes.edges[0].node;

            const dope = {
                id: dopeId,
                score: dopeRoot.score,
                rank: dopeRoot.rank,
                opened: dopeRoot.opened,
                claimed: dopeRoot.claimed
            };

            const HustlerEmbed = HustlerEmbeds.Hustler(hustler);

            return await interaction.reply({ embeds: [HustlerEmbed], ephemeral: false });


        } else {

            return await interaction.reply({ content: 'Invalid Hustler ID.  Values `0 - ' + (hustlerCount - 1) + '` are valid.' , ephemeral: true })

        }


    }

};