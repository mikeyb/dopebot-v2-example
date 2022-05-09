const Members = require('../db/models/members');
const Invites = require('../db/models/invites');

module.exports = {

    name: 'guildMemberRemove',
	once: false,
	async execute(member) {

        const memberResult = await Members.findByMemberId(member.id);

        const invite = await Invites.findInviteeInvite(memberResult.id);

        if (invite) await Invites.deactivateInvite(invite.id);

	},

};