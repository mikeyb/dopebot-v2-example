const InviteCodes = require('../db/models/inviteCodes');

module.exports = {

    name: 'inviteCreate',
	once: false,
	async execute(invite) {

        await InviteCodes.create(invite);

	},

};