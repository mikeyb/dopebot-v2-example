const InviteCodes = require('../db/models/inviteCodes');

module.exports = {

    name: 'inviteDelete',
	once: false,
	async execute(invite) {

        const inviteCode = await InviteCodes.findByCode(invite.code);

        if (inviteCode) {

            inviteCode.active = false;
            await inviteCode.save();
        }

	},

};