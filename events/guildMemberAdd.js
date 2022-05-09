const Members = require('../db/models/members');
const InviteCodes = require('../db/models/inviteCodes');
const Invites = require('../db/models/invites');
const Settings = require('../db/models/settings');

module.exports = {

	name: 'guildMemberAdd',
	once: false,
	async execute(member) {

        let memberResult = await Members.findByMemberId(member.id);

        if (!memberResult) memberResult = await Members.create(member);

        if (memberResult) memberResult = await Members.updateMember(member);

        // Get current guild invites
        invites = await member.guild.invites.fetch({ cache: false });

        for (invite of invites) {

            // Get this specific invite
            invite = await member.guild.invites.fetch({ code: invite[0], force: true });

            // Get Member of inviter
            let inviterMemberResult = await Members.findByMemberId(invite.inviterId);

            // Try to fetch an InviteCode
            let inviteCodeResult = await InviteCodes.findByCode(invite.code);

            // If no InviteCode matched
            if (!inviteCodeResult) {

                // Create InviteCode
                inviteCodeResult = await InviteCodes.create(inviterMemberResult.id, invite);

            };

            // If the InviteCode in db has less uses than what guild has
            //   this is our invite that was used
            if (inviteCodeResult.uses < invite.uses) {

                // See if there is a matching invite for this member already
                const inviteResult = await Invites.findExistingInvite(inviterMemberResult.id, memberResult.id, invite.code);

                // If there is no match for this invite
                if (!inviteResult) {

                    // Get the timestamp that the discord user was created
                    const userCreatedAt = parseInt(member.user.createdTimestamp) / 1000;

                    // Get now timestamp
                    nowTimestamp = Math.floor((new Date()).getTime() / 1000);

                    // Get GuildConfig for memberFakeAge setting
                    settings = await Settings.getSettings();

                    fake = ((nowTimestamp - userCreatedAt) > (settings.inviteValidAge * 24 * 60)) ? false : true;

                    // Add new invite
                    await Invites.create(inviterMemberResult.id, memberResult.id, invite.code, fake, memberResult.joinedAt, memberResult.joinedTimestamp);

                } else {

                    // Reactivate member who previously left
                    await Invites.reactivateInvite(inviteResult.id, member.joinedAt, member.joinedTimestamp)

                };

                // Update invite_codes entry
                await InviteCodes.updateUses(inviteCodeResult.code, invite.uses);

            };

        };

	},

};