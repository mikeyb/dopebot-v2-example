const { DataTypes } = require('sequelize');
const sequelize = require('../index').getConnection();

const InviteCodes = sequelize.define(
    'InviteCodes',
    {
        id:               { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        inviterId:        { type: DataTypes.INTEGER, allowNull: false },
        code:             { type: DataTypes.STRING, allowNull: false },
        url:              { type: DataTypes.STRING, allowNull: false },
        channelId:        { type: DataTypes.STRING, allowNull: false },
        uses:             { type: DataTypes.INTEGER, allowNull: false, default: 0 },
        active:           { type: DataTypes.BOOLEAN, allowNull: false, default: 1 },
        createdAt:        { type: DataTypes.DATE, allowNull: false },
        createdTimestamp: { type: DataTypes.STRING, allowNull: false },
        updatedAt:        { type: DataTypes.DATE }
    }, {
        sequelize,
        tableName: 'InviteCodes',
    }
);

InviteCodes.associate = function (models) {
    InviteCodes.belongsTo(models.Members, { foreignKey: 'inviterId', as: 'member' });
};

InviteCodes.create = async function (invite) {

    const inviteCode = InviteCodes.build({
        inviterId: invite.inviterId,
        code: invite.code,
        url: invite.url,
        channelId: invite.channelId,
        uses: invite.uses,
        active: 1,
        createdAt: invite.createdAt,
        createdTimestamp: invite.createdTimestamp
    });

    return await inviteCode.save();

};

InviteCodes.findByMemberIdCode = async function (memberId, code) {

    return await InviteCodes.findOne({
        where: {
            inviterId: memberId,
            code: code
        }
    });

};

InviteCodes.findByCode = async function (code) {

    return await InviteCodes.findOne({
        where: {
            code: code
        }
    });

};

InviteCodes.updateUses = async function (code, uses) {

    return await InviteCodes.update({
        uses: uses
    },{
        where: { code: code }
    });

};

module.exports = InviteCodes;