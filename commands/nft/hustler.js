const { SlashCommandBuilder } = require('@discordjs/builders');
const { default: request } = require('graphql-request');

const { dWApi } = require('../../constants');
const { svgRenderer } = require('../helpers/svgRender');
const { HustlerEmbeds } = require('../helpers/Embeds');
const { getHustler, getHustlerCount } = require('../helpers/Hustler');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('hustler')
        .setDescription('Get Hustler information')
        .addIntegerOption(option =>
            option
                .setName('hustlerId')
                .setDescription('ID of the hustler.')
                .setRequired(true)
        ),
    async execute(interaction) {

        const hustlerId = interaction.options.getInteger('hustlerId');
        const hustlerCountRequest = await request(dWApi, getHustlerCount);

        if (!hustlerCountRequest?.hustlers?.totalCount) {

            Promise.reject();

            return await interaction.reply({ content: 'There was an error processing the request.  Try again in a few minutes.', ephemeral: true })

        };

        const hustlerCount = hustlerCountRequest.hustlers.totalCount;

        if (hustlerId >= 0 && hustlerId <= hustlerCount - 1) {

            const hustlerResult = await request(dWApi, getHustler, { "where": { "id": hustlerId } });

            if (!hustlerResult?.hustlers?.edges[0]?.node) {

                Promise.reject();

                return await interaction.reply({ content: 'There was an error processing the request.  Try again in a few minutes.', ephemeral: true })

            };

            const hustlerRoot = hustlerResult.hustlers.edges[0].node;

            const hustler = {
                id: hustlerId,
                image: await svgRenderer(hustlerRoot.svg),
                name: hustlerRoot.name,
                title: hustlerRoot.title,
                type: (hustlerId < 500) ? "𝕺𝖗𝖎𝖌𝖎𝖓𝖆𝖑 𝕲𝖆𝖓𝖌𝖘𝖙𝖆" : "𝕳𝖚𝖘𝖙𝖑𝖊𝖗",
                neck: hustlerRoot.neck,
                ring: hustlerRoot.ring,
                drug: hustlerRoot.drug,
                hand: hustlerRoot.hand,
                foot: hustlerRoot.foot,
                waist: hustlerRoot.waist,
                weapon: hustlerRoot.weapon,
                clothes: hustlerRoot.clothes,
                vehicle: hustlerRoot.vehicle,
                accessory: hustlerRoot.accessory
            };

            const HustlerEmbed = HustlerEmbeds.Hustler(hustler);

            return await interaction.reply({ embeds: [HustlerEmbed], ephemeral: false });


        } else {

            return await interaction.reply({ content: 'Invalid Hustler ID.  Values `0 - ' + (hustlerCount - 1) + '` are valid.' , ephemeral: true })

        }


    }

};