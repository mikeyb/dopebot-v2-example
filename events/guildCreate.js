const Members = require('../db/models/members');
const InviteCodes = require('../db/models/inviteCodes');

module.exports = {

	name: 'guildCreate',
	once: false,
	async execute(guild) {

        // Fetch a fresh list of server members
        const serverMembers = await guild.members.fetch();

        // Iterate through serverMembers
        for (const Member of serverMembers) {

            // Try to find a Members record
            const memberResult = await Members.findByMemberId(Member[0]);

            // Fetch the member data from Discord
            const guildMemberFetch = await guild.members.fetch(Member[0]);

            // If no Member record exists
            if (!memberResult && guildMemberFetch) await Members.create(guildMemberFetch);

            // If Member record exists
            if (memberResult && guildMemberFetch) await Members.updateMember(guildMemberFetch);

        };

        // Get list of invites codes from guild
        const guildInvites = await guild.invites.fetch();

        // Iterate through guildInvites
        for (let invite of guildInvites) {

            // Fetch invite from Discord
            invite = await guild.invites.fetch(invite[0]);

            let memberResult = await Members.findByMemberId(invite.inviterId);

            // Try to find an InviteCodes record
            let inviteCodeResult = await InviteCodes.findByMemberIdCode(memberResult.id, invite.code);

            if (!inviteCodeResult) await InviteCodes.create(memberResult.id, invite);

            if (inviteCodeResult) await InviteCodes.updateUses(invite.code, invite.uses);

        };

	},

};