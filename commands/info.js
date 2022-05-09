const { SlashCommandBuilder } = require('@discordjs/builders');
const { InfoEmbeds } = require('./helpers/Embeds');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('info')
        .setDescription('Info!')
        .addSubcommand(command =>
            command
                .setName('contribute')
                .setDescription('Contribute to DopeWars')
        )
        .addSubcommand(command =>
            command
                .setName('links')
                .setDescription('DopeWars Official Links')
        )
        .addSubcommand(command =>
            command
                .setName('roadmap')
                .setDescription('DopeWars Roadmap')
        )
        .addSubcommand(command =>
            command
                .setName('explain')
                .setDescription('DopeWars explanations')
                .addStringOption(option =>
                    option
                        .setName('explainwhat')
                        .setDescription('I would like to know about..')
                        .addChoice('What are "DOPE NFTs"❓', 'dope')
                        .addChoice('What does "Claimed" mean❓', 'claimed')
                        .addChoice('What does "Opened" mean❓', 'opened')
                        .addChoice('What is a "Hustler"❓', 'hustler')
                        .addChoice('What are "OGs"❓', 'ogs')
                        .addChoice('What is \"Gear\"❓', 'gear')
                        .addChoice('What is "Turf"❓', 'turf')
                        .addChoice('What is "$PAPER"❓', 'paper')
                        .addChoice('What is "StreetCred"❓', 'streetcred')
                        .setRequired(true)
                )
        ),
    async execute(interaction) {

        const subCommand = interaction.options.getSubcommand();

        if (subCommand === 'contribute') {

            return await interaction.reply({ embeds: [InfoEmbeds.Contribute()], ephemeral: true });

        }

        if (subCommand === 'links') {

            return await interaction.reply({ embeds: [InfoEmbeds.Links()], ephemeral: true });

        };

        if (subCommand === 'roadmap') {

            return await interaction.reply({ embeds: [InfoEmbeds.Roadmap()], ephemeral: true });

        };

        if (subCommand === 'explain') {

            const explain = interaction.options.getString('explainwhat');

            switch (explain)  {

                case 'dope':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainDope()], ephemeral: true });
                    break;

                case 'claimed':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainClaimed()], ephemeral: true });
                    break;

                case 'opened':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainOpened()], ephemeral: true });
                    break;

                case 'hustler':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainHustler()], ephemeral: true });
                    break;

                case 'ogs':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainOGs()], ephemeral: true });
                    break;

                case 'gear':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainGear()], ephemeral: true });
                    break;

                case 'turf':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainTurf()], ephemeral: true });
                    break;

                case 'paper':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainPaper()], ephemeral: true });
                    break;

                case 'streetcred':
                    await interaction.reply({ embeds: [InfoEmbeds.ExplainStreetCred()], ephemeral: true });
                    break;

                default:
                    break;

            };

        };

        return;

    },
};