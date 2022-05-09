const Members = require('../db/models/members');

module.exports = {

    name: 'interactionCreate',
	once: false,
	async execute(interaction) {

        if (!interaction.isCommand()) return;

        // Try to fetch member
		const memberResult = await Members.findByMemberId(interaction.member.id);

        if (!memberResult) {

            const member = await interaction.client.member.guild.members.fetch(interaction.member.id);

            if (member) await Members.create(member);

        };

    },

};