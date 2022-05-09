
const Members = require('../db/models/members');

module.exports = {

    name: 'guildMemberUpdate',
	once: false,
	async execute(oldMember, newMember) {

        return await Members.updateMember(newMember);

	},

};