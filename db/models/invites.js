const { DataTypes } = require('sequelize');const sequelize = require('../index').getConnection();

const Invites = sequelize.define(
    'Invites',
    {
        id:              { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        inviterId:       { type: DataTypes.INTEGER },
        inviteeId:       { type: DataTypes.STRING },
        active:          { type: DataTypes.BOOLEAN },
        fake:            { type: DataTypes.BOOLEAN },
        code:            { type: DataTypes.STRING },
        joinedAt:        { type: DataTypes.DATE },
        joinedTimestamp: { type: DataTypes.STRING },
        createdAt:       { type: DataTypes.DATE },
        updatedAt:       { type: DataTypes.DATE }
    }, {
        sequelize,
        tableName: 'Invites',
    }
);

Invites.associate = function (models) {
    Invites.belongsTo(models.Members, { foreignKey: 'inviterId', as: 'member' });
};

Invites.create = async function (inviterId, inviteeId, code, fake, joinedAt, joinedTimestamp) {

    const invite = Invites.build({
        inviterId: inviterId,
        inviteeId: inviteeId,
        active: 1,
        fake: fake,
        code: code,
        joinedAt: joinedAt,
        joinedTimestamp: joinedTimestamp
    });

    return await invite.save();

};

Invites.getLatestInvites = async function (limit = 100, includes = []) {

    return await Invites.findAll({
        order: [['createdAt', 'DESC']],
        limit: limit,
        include: includes
    });

};

Invites.getMemberInvites = async function (memberId) {

    return await Invites.findAll({
        where: {
            inviterId: memberId,
        }
    });

};

Invites.countMemberRealInvites = async function (memberId) {

    return await Invites.count({
        where: {
            inviterId: memberId,
            active: true,
            fake: false
        }
    });

};

Invites.countMemberFakeInvites = async function (memberId) {

    return await Invites.count({
        where: {
            inviterId: memberId,
            active: true,
            fake: true
        }
    });

};

Invites.countMemberInactiveInvites = async function (memberId) {

    return await Invites.count({
        where: {
            inviterId: memberId,
            active: false
        }
    });

};

Invites.findUniqueInviteInviters = async function (includes = []) {

    return await Invites.findAll({
        attributes: ['inviterId'],
        group: ['inviterId'],
        include: includes
    });

};

Invites.findExistingInvite = async function (inviterId, inviteeId, code) {

    return await Invites.findOne({
        where: {
            inviterId: inviterId,
            inviteeId: inviteeId,
            code: code
        }
    });

};

Invites.findInviteeInvite = async function (inviteeId) {

    return await Invites.findOne({
        where: {
            active: true,
            inviteeId: inviteeId
        }
    });

}

Invites.deactivateInvite = async function (inviteId) {

    return await Invites.update({
        active: false
    },{
        where: { id: inviteId }
    });

};

Invites.reactivateInvite = async function (inviteId, joinedAt, joinedTimestamp) {

    return await Invites.update({
        active: true,
        joinedAt: joinedAt,
        joinedTimestamp: joinedTimestamp
    },{
        where: { id: inviteId }
    });

};

module.exports = Invites;